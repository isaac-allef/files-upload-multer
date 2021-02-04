import { Router } from 'express';
import uploadsRouter from './uploads.routes';

const routes = Router();

routes.use('/uploads', uploadsRouter);

export default routes;