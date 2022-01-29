import express from 'express';
import configs from './configs/configs';

const app = express();

app.listen(configs.port, () =>
  console.log(`Server is running in port: ${configs.port}`)
);
