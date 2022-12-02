import { Router } from "express";
import { checkLoginMiddleware } from "../../login/middleware/check-login.middleware";
import { checkLoginRecrutadorMiddleware } from "../../recrutador/middleware/check-login-recrutador";
import { VagaController } from "../controllers/vaga.controller";

export const vagaRoutes = () => {
    const router = Router();

    router.post(
        "/",
        [checkLoginMiddleware, checkLoginRecrutadorMiddleware],
        new VagaController().create
    );

    return router;
};
