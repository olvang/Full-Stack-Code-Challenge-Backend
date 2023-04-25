import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
