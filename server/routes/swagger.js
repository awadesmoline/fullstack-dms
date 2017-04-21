import swaggerJSDoc from 'swagger-jsdoc';
import express from 'express';

const router = express.Router();

  // swagger definition
const swaggerDefinition = {
  info: {
    title: 'Document Management System API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  }
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./server/routes/documents.js', './server/routes/users.js', './server/routes/roles.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = () => {
  router.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
    'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
    res.send(swaggerSpec);
  });

  return router;
};