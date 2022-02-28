import 'reflect-metadata';
import './shared/container';
import express from 'express';
import configs from './configs/configs';
import routes from './routes';

const app = express();

// Active json requesitions on app

app.use(express.json());

// Set a default route api
app.use('/api', routes);

// Start server

app.listen(configs.port, () =>
  console.log(`Server is running in port: ${configs.port}`)
);
