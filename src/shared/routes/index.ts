import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});

export { routes };
