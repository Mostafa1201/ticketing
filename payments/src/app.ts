import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { currentUser, errorHandler , NotFoundError} from '@mt_tickets/common';

const app = express();
// to trust proxy for ingress nginx
app.set('trust proxy',true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
);

app.use(currentUser);

app.all('*', async () => {
    throw new NotFoundError()
})

app.use(errorHandler);

export { app };