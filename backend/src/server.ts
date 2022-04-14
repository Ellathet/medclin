import 'reflect-metadata';
import './shared/container';
import express from 'express';
import morgan from 'morgan';
import configs from './configs/configs';
import routes from './routes';
import '@utils/logger';
import genericErrorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api', routes);
app.use(genericErrorHandler());

try {
  app.listen(configs.port, () =>
    console.log(`Server is running in port: ${configs.port}`)
  );
} catch (error) {
  console.error(error);
}
