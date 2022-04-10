import 'reflect-metadata';
import './shared/container';
import express from 'express';
import morgan from 'morgan';
import configs from './configs/configs';
import routes from './routes';
import '@utils/logger';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api', routes);

try {
  app.listen(configs.port, () =>
    console.log(`Server is running in port: ${configs.port}`)
  );
} catch (err) {
  console.error(err);
  process.exit();
}
