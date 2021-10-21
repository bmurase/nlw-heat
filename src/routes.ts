import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLastThreeMessagesController } from './controllers/GetLastThreeMessagesController';
import { ShowUserProfileController } from './controllers/ShowUserProfileController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post(
  '/messages', 
  ensureAuthenticated, 
  new CreateMessageController().handle
);

router.get('/messages', new GetLastThreeMessagesController().handle);
router.get('/user', ensureAuthenticated, new ShowUserProfileController().handle);

export { router };