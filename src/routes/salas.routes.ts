import { Router } from 'express';
import { salasController } from '../controllers/salas.controller';

const router = Router();

router.get('/', salasController.getAllUsers);
router.post('/', salasController.createUserRole);
router.patch('/:id', salasController.updateUserRolePasswordStateById);



export default router;