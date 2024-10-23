// Purpose: Model for the database.
import mongoose from 'mongoose';


//schema for the database
const Link = new mongoose.Schema({
    s_id: {
        type: String,
        required: true
    },
    l_id: {
        type: String,
        required: true
    },
    analytsis: [{Time: Number}]
},{
    timestamps: true 
});

// model for the database
const links = mongoose.model('links', Link);

export { links };
