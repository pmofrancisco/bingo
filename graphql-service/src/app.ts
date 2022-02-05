import cookieSession from 'cookie-session';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { currentUser } from '@trading-jutsu/common';
import schema from './schema';

const app = express();

app.use(cookieSession({
  signed: false,
  secure: false,
  //secure: process.env.NODE_ENV !== 'test',
}));

app.use(currentUser);

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}));

export { app };
