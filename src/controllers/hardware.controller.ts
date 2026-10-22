import { Request, Response } from 'express';

export class hardwareController {

public static createUserRole = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body y responder 201 con el préstamo creado.
    res.status(501).json({
      success: false,
      message: 'El registro de el nuevo equipo vinculado al laborarorio todavía no está implementado.'
    });
  };


  public static getAllUsers = (req: Request, res: Response): void => {
    // TODO: llamar al servicio y responder con la lista de usuarios.
    res.status(501).json({
      success: false,
      message: 'La consulta de todos los quipos existentes por ambiente todavia no está implementada.'
    });
  };



   public static updateUserRolePasswordStateById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id y los datos actualizados a la operación de actualización y responder con el resultado.
    res.status(501).json({
      success: false,
      message: `La actualización de el estado tecnico de el equipo ${id} todavía no está implementada.`
    });
  }
}





