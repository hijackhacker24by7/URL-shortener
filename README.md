# URL Shortener

This is a simple URL shortener application built with Node.js, Express, and MongoDB.

## Description

This project allows users to generate short URLs for given long URLs. It also tracks the number of times a short URL is accessed and provides an analysis of the access times.

## Project Structure
{
    .gitignore 
    package.json
    index.js
    connection.js 
    controller/ control.js  
    model/ model.js 
    routes/ fron.js
}


## Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:hijackhacker24by7/Url_shortner.git
    cd URL-shortener
    ```

2. Install the dependencies:
    ```sh
    npm init
    npm install express@4.21.1
    npm install mongoose
    npm install nanoid@5.0.7
    npm install dotenv@16.4.5

    ```

3. Create a `.env` file in the root directory and add your MongoDB URL and port number:
    ```env
    PORT=3000
    URL= mongodb link goeshere /database name 
    ```

4. Start the application:
    ```sh
    npm start
    ```

## Usage

### Endpoints

- `GET /` - Returns "Hello World"
- `POST /url/` - Generates a short URL for the given long URL
- `GET /:id` - Redirects to the original long URL
- `GET /a/:id` - Returns the analysis of the short URL

### Example

To generate a short URL, send a POST request to `/url/` with the following JSON body:
```json
{
  "url": "https://example.com"
}
```
### The response will contain the short URL ID
```json
{
  "id": "shortId"
}
```
## To access the original URL, navigate to 
http://localhost:3000/shortId.

## To get the analysis of the short URL, navigate to 
http://localhost:3000/a/shortId.

## License
###  This project is licensed under the ISC License.

# Note:
Make sure to replace `<repository-url>` with the actual URL of your repository.