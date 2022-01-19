import express from 'express';
import { currentUserRouter } from './routes/current-user';

const app = express();

app.use(currentUserRouter);

export { app };
