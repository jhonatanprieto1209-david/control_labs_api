import { Request, Response } from 'express';

export class salasController {
  public static getAllUsers = (req: Request, res: Response): void => {
    // TODO: llamar al servicio y responder con la lista de usuarios.
    res.status(501).json({
      success: false,
      message: 'La consulta de todos los espacios fisicos todavia no está implementada.'
    });
  };


    public static createUserRole = (req: Request, res: Response): void => {
      // TODO: llamar al servicio con req.body y responder 201 con el préstamo creado.
        res.status(501).json({
        success: false,
        message: 'El registro de ambiente con su capacidad y ubicacion todavía no está implementado.'
    });
  };



   public static updateUserRolePasswordStateById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id y los datos actualizados a la operación de actualización y responder con el resultado.
    res.status(501).json({
      success: false,
      message: `La actualización de atributos especificos ${id} todavía no está implementada.`
    });
  }







;
}