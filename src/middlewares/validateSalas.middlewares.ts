import { Request, Response, NextFunction } from 'express';
import type { ICreateSalaDTO } from '../dtos/salas.dto';

const isCreateSalaDTO = (value: unknown): value is ICreateSalaDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const sala = value as Record<string, unknown>;
  return (
    typeof sala.Aula === 'string' &&
    sala.Aula.trim() !== '' &&
    typeof sala.bloque === 'string' &&
    sala.bloque.trim() !== '' &&
    typeof sala.estudiantes === 'number' &&
    Number.isInteger(sala.estudiantes) &&
    sala.estudiantes > 0
  );
};

export const validateSalaPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateSalaDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos de la sala inválidos.'
    });
    return;
  }

  next();
};
