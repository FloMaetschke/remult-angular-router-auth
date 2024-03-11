import express from 'express';
import session from 'cookie-session';

import { auth } from './auth';

const app = express();
app.use(
  session({
    secret: process.env['SESSION_SECRET'] || 'my secret',
  })
);
app.use(auth);

app.listen(9002, () => console.log('Server started'));
