import express, { Request, Response } from 'express';
import cors from 'cors';
import { requestLogger } from './middlewares/logger.middleware';
import { globalErrorHandler } from './middlewares/errorHandler.middleware';
import loanRoutes from './routes/loan.routes';
import salasRoutes from './routes/salas.routes';
import userRoutes from './routes/user.routes';
import hardwareRoutes from './routes/hardware.routes';

const app = express();


app.use(cors()); 
app.use(express.json()); 
app.use(requestLogger); 
app.use('/api/v1/loans', loanRoutes); 
app.use('/api/v1/salas', salasRoutes); 
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/hardware', hardwareRoutes);

app.get('/api/v1/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'ControlLabs API operando correctamente',
    timestamp: new Date().toISOString()
  });
});


app.get('/__test/error', (_req, _res, next) => {
  next(new Error('Error de prueba'));
});



app.use((_req, res) => { 
  res.status(404).json({ success: false, error: 'Ruta no encontrada.' }); 
}); 

app.use(globalErrorHandler);

export default app;