const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    info: {
        // API informations (required)
        title: 'Renosh Server API', // Title (required)
        version: '1.0.0', // Version (required) of Team's Docs, not module's
        description: 'This documentation is for Renosh API Information', // Description (optional)
        contact: {
        name: 'Hanium',
        email: ['ilegwmam@gmail.com', 'tena.kim10@gmail.com', 'citrusj0123@gmail.com', 'sleepingsm813@gmail.com', 
                'su0park96@gmail.com', 'eunk@microsoft.com', 'wisdeom@github.com']
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
    apis: ['./*.js'], // ./docs/*.js
};
  
// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJsDoc(options);
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});


module.exports = {
    swaggerDefinition,
    options,
    swaggerSpec
}