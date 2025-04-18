import { Router } from "express";
import usersRouter from "./users.router.js";
import viewsRouter from "./views.router.js";

const router = Router();

router.use("/", viewsRouter);
router.use("/users", usersRouter);

export default router;
