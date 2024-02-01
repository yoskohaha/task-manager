import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import bodyParser from 'body-parser';
import routes from './routes';  // Import routes from routes.ts
import * as swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger'; // Import the swaggerSpec


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', routes);  // Use the routes from the routes.ts file

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

createConnection().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});

