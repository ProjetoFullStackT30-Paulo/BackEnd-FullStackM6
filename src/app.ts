import "express-async-errors";
import express from "express";
import { appRoutes } from "./router";

const app = express();
app.use(express.json());
app.use(appRoutes);

export default app;
