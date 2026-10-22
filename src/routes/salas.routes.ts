import { Router } from 'express';
import { salasController } from '../controllers/salas.controller';

const router = Router();

router.get('/list', salasController.getAllUsers);
router.post('/create', salasController.createUserRole);
router.patch('/:id', salasController.updateUserRolePasswordStateById);



export default router;