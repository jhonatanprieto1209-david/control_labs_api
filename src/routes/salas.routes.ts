import { Router } from 'express';
import { salasController } from '../controllers/salas.controller';
import { validateSalaPayload } from '../middlewares/validateSalas.middlewares';

const router = Router();

router.get('/', salasController.getAllUsers);
router.post('/create', validateSalaPayload, salasController.createUserRole);
router.patch('/:id', salasController.updateUserRolePasswordStateById);

export default router;