import { Router } from "express";
import { AmbienteController } from "../controllers/ambiente.controller.js";
import {
  validateAmbientePayload,
  validateAmbienteUpdatePayload
} from "../middlewares/validateAmbiente.middleware.js";

const router = Router();

router.get("/consulta", AmbienteController.getAll);
router.get("/", AmbienteController.getAll);
router.post("/registro", validateAmbientePayload, AmbienteController.create);
router.post("/create", validateAmbientePayload, AmbienteController.create);
router.get("/detalle/:id", AmbienteController.getById);
router.patch("/actualiza/:id", validateAmbienteUpdatePayload, AmbienteController.update);
router.patch("/estado/:id", validateAmbienteUpdatePayload, AmbienteController.setStatus);
router.patch("/:id", validateAmbienteUpdatePayload, AmbienteController.update);

export default router;
