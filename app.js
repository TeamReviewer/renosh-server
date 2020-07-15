// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  info: {
    // API informations (required)
    title: 'Renosh API', // Title (required)
    version: '1.0.0', // Version (required) of Team's Docs, not module's
    description: 'Renosh API Information', // Description (optional)
    contact: {
      name: 'Hanium'
    },
    servers: ['52.231.64.216:5000', 'localhost:5000']
  },
  host: '52.231.64.216:5000', // Host (optional)
  basePath: '/', // Base path (optional)
}

// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // Path to the API docs
  apis: ['./docs/index.js'], // ./routes/*.js
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
var swaggerSpec = swaggerJsDoc(options)

//json parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const UserRouter = require('./routes/User');
const BookRouter = require('./routes/Book');
const HighRouter = require('./routes/Highlight');
// const {CosmosClient} = require("@azure/cosmos");

// require('dotenv').config()

app.use('/api/users', UserRouter);
app.use('/api/books', BookRouter);
app.use('/api/highlights', HighRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// //connect cosmos DB
// const endpoint = process.env.COSMOSDB_ENDPOINT; // Add your endpoint
// const key = process.env.COSMOSDB_KEY; // Add the masterkey of the endpoint
// const client = new CosmosClient({ endpoint, key });
// const database = client.database('renosh');
// const container = database.container('user');

// const hostname = '127.0.0.1';
// const port = 8000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.listen(5000, function(){
  console.log(`app.js is running on port ${5000}`)
})