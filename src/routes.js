import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SenderController from './app/controllers/SenderController';
import MailerController from './app/controllers/MailerController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);
routes.get('/users', UserController.index);

routes.post('/senders', SenderController.store);
routes.put('/senders/:id', SenderController.update);
routes.delete('/senders/:id', SenderController.delete);
routes.get('/senders', SenderController.index);

routes.post('/mail', MailerController.store);
routes.get('/mail', MailerController.index);
routes.delete('/mail/:id', MailerController.delete);

export default routes;
