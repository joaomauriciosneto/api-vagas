import { Router, Express } from "express";
import { recrutadorRoutes } from "../../app/features/recrutador/routes/recrutador.routes";

export const createRoutes = (app: Express) => {
    app.get("/", (req, res) => {
        return res.status(200).send({
            ok: true,
            message: "Tudo ok!",
        });
    });

    app.use("/recrutador", recrutadorRoutes());
};
