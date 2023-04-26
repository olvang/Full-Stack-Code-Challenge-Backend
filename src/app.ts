import express, { Application } from 'express';
import morgan from 'morgan';
import nodeRoutes from './routes/nodes.routes';
import cors from 'cors';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// Routes
app.use('/nodes', nodeRoutes);

export default app;
