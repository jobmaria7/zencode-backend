
const express = require('express');
const cors = require('cors');
const candidateRoutes = require('./routes/candidate.routes');
const path = require('path');

const app = express();

// Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Zencode Candidates API',
      version: '1.0.0',
      description: 'API para gerenciamento de candidatos — Teste ZENCODE',
    },
    servers: [
      {
        url: process.env.BASE_URL || `http://localhost:${process.env.PORT || 8000}/api/v1`,
      },
    ],
  },
  apis: [path.join(__dirname, '/routes/candidate.routes.js')],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/v1', candidateRoutes);

module.exports = app;