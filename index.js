import express from 'express';
import connect from './connection.js';
import send from './routes/fron.js';
// import dotenv to use the environment variables
import dotenv from 'dotenv';
dotenv.config();

// get the port and the url from the environment variables
const port = process.env.PORT || 3000;
const url = process.env.URL;

// create an express application
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect to the database
connect(url); 

// routes for the application
app.use('/', send);// this is the route "Home page -hello world"
app.use('/url/', send);// this is the route for Generate link
app.use('/:id', send);// this is the route to get the link
app.use('/a/:id', send); // this is the route to get the analysis


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 


