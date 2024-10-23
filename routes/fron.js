import express from 'express';
const router = express.Router();
import { generateLink,hello,getLink,getAnalysis } from '../controller/control.js';


// routes for the application
router.get('/', hello)

router.post('/url/', generateLink)

router.get('/:id', getLink)

router.get('/a/:id', getAnalysis)

export default router; 