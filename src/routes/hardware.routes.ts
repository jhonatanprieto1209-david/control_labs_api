import { Router } from 'express';
import { hardwareController } from '../controllers/hardware.controller';

const router = Router();

router.get('/', hardwareController.getAllUsers);
router.post('/', hardwareController.createUserRole);
router.patch('/:id', hardwareController.updateUserRolePasswordStateById);



export default router;