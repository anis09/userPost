import express from "express";
import http from "http";
import postRoute from "./src/routes/postRoute";
import { config } from "./src/config/config";

export const router = express();
export const StartServer = () => {
  router.use(express.urlencoded({ extended: true }));
  router.use(express.json());

  
  router.use("/posts", postRoute);

  router.use((req, res, next) => {
    const error = new Error("route not found");
    console.error(error);
    return res.status(404).json({ message: error.message });
  });

  http
    .createServer(router)
    .listen(config.server.port, () =>
      console.log(`Server is running on port ${config.server.port}.`)
    );
};
