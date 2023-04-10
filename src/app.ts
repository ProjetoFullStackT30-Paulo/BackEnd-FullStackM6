import "express-async-errors";
import express from "express";
import { appRoutes } from "./router";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
  
    next();
  });

app.use(appRoutes);

export default app;
