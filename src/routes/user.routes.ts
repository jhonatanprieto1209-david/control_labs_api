import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { validateUserPayload } from '../middlewares/validateUsers.middlewares';

const router = Router();

router.get('/list', UserController.getAllUsers);
router.post('/create', validateUserPayload, UserController.createUserRole);
router.get('/:id', UserController.getUserById);
router.patch('/:id', UserController.updateUserRolePasswordStateById);
router.delete('/:id', UserController.deleteUserInventory);



export default router;3