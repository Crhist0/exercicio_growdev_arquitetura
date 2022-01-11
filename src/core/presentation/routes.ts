import express from "express";
import { ProjectRouter } from "../../features/project/presentation/routes/project-routes";
import { UserRouter } from "../../features/user/presentation/routes/user-routes";

export const makeRoutes = (app: express.Application) => {
    app.use("/user", UserRouter.getRoutes());
    app.use("/project", ProjectRouter.getRoutes());
};
