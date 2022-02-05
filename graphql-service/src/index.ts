import { app } from './app';

const start = async () => {
  if (!process.env.AUTH_ROOT_URL) {
    throw new Error('AUTH_ROOT_URL must be defined');
  }
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000');
  });
};

start();