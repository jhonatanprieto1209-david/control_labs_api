import { Router } from "express";
import { EquipoController } from "../controllers/equipo.controller.js";
import {
  validateEquipoPayload,
  validateEquipoUpdatePayload
} from "../middlewares/validateEquipo.middleware.js";

const router = Router();

router.get("/consulta", EquipoController.getAll);
router.get("/", EquipoController.getAll);
router.post("/registro", validateEquipoPayload, EquipoController.create);
router.post("/", validateEquipoPayload, EquipoController.create);
router.get("/detalle/:id", EquipoController.getById);
router.patch("/actualiza/:id", validateEquipoUpdatePayload, EquipoController.update);
router.patch("/traslada/:id", validateEquipoUpdatePayload, EquipoController.move);
router.patch("/:id", validateEquipoUpdatePayload, EquipoController.update);

export default router;
