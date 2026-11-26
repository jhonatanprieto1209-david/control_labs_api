import { Request, Response, NextFunction } from 'express';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const validateLoanPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isRecord(body)) {
    res.status(400).json({
      success: false,
      error: 'El cuerpo debe ser un objeto JSON.'
    });
    return;
  }

  const requiredFields = [
    'aula',
    'numeroPC',
    'nombreGuardaEntrega',
    'instructorRecibe'
  ];
  const missingField = requiredFields.find(
    (field) => body[field] === undefined || body[field] === null
  );

  if (missingField) {
    res.status(400).json({
      success: false,
      error: `Falta el campo requerido: ${missingField}.`
    });
    return;
  }

  if (
    typeof body.aula !== 'string' ||
    body.aula.trim() === '' ||
    typeof body.numeroPC !== 'number' ||
    !Number.isInteger(body.numeroPC) ||
    typeof body.nombreGuardaEntrega !== 'string' ||
    body.nombreGuardaEntrega.trim() === '' ||
    typeof body.instructorRecibe !== 'string' ||
    body.instructorRecibe.trim() === ''
  ) {
    res.status(400).json({
      success: false,
      error: 'Uno o más campos tienen un tipo o valor inválido.'
    });
    return;
  }

  next();
};