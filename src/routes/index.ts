import { Router } from "express";
import ambienteRoutes from "./ambiente.routes.js";
import equipoRoutes from "./equipo.routes.js";
import userRoutes from "./user.routes.js";
import loanRoutes from "./loan.routes.js";
import incidentRoutes from "./incident.routes.js";
import dashboardRoutes from "./dashboard.routes.js";

const router = Router();

router.use("/ambientes", ambienteRoutes);
router.use("/equipos", equipoRoutes);
router.use("/users", userRoutes);
router.use("/loans", loanRoutes);
router.use("/incidents", incidentRoutes);
router.use("/dashboard", dashboardRoutes);

// Alias de las rutas que ya exponía este proyecto antes de adoptar la API de referencia.
router.use("/salas", ambienteRoutes);
router.use("/hardware", equipoRoutes);
router.use("/user", userRoutes);

export default router;
