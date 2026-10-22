import { Router } from 'express';
import loanRoutes from './loan.routes';
import userRoutes from './user.routes';
import salasRoutes from './salas.routes';
import hardwareRoutes from './hardware.routes';

const router = Router();
router.use('/loans', loanRoutes);
router.use('/users', userRoutes);
router.use('/salas', salasRoutes);
router.use('/hardware', hardwareRoutes);

export default router;