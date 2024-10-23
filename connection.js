// connection to the database "mongodb"

import mongoose from 'mongoose';

function connect(url) {
    mongoose.connect(url)
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((err) => {
            console.log('Error connecting to the database');
            console.log(err);
        });
}

export default connect;