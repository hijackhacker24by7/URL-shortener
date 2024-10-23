// Description: It Contain all the functions related to the links.
import {links} from "../model/model.js";
import { nanoid } from "nanoid";

// Create a new link

function hello(req, res) {
    res.status(200).json({message: 'Hello World'});
}

// short url generation
async function generateLink(req, res) {
    const s_id = nanoid(8);
    const body = req.body;
    if(!body.url) {
        res.status(400).json({error: 'URL is required'});
        return;
    }

    await links.create({ s_id: s_id,
        l_id: body.url,
        analysis: []});

    res.status(201).json({id: s_id});    
}

// get the original link
async function getLink(req, res) {
    try {
        const link = await links.findOneAndUpdate(
            { s_id: req.params.id },
            { $push: { analytsis: { Time: Date.now() } } }
        );

        if (!link) {
            res.status(404).json({ error: 'Link not found in getLink' });
            return; 
        }
        res.status(200).redirect(link.l_id);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
}

// get the analysis of the link
async function getAnalysis(req, res) {
    const link = await links.findOne({s_id: req.params.id});
    if(!link) {
        res.status(404).json({error: 'Link not found'});
        return;
    }
    res.status(200).json({analysis: link.analytsis,
    total: link.analytsis.length});
}

export { generateLink, getLink, getAnalysis, hello };