import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUserRole);
router.get('/:id', UserController.getUserById);
router.patch('/:id', UserController.updateUserRolePasswordStateById);
router.delete('/:id', UserController.deleteUserInventory);



export default router;