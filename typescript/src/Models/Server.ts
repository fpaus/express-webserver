import express from "express";
import { Express } from "express-serve-static-core";
import cors from "cors";
import ParamsRoute from "../routes/params";

class Server {
  app: Express;
  port: string | undefined;
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares
    this.middlewares();
    //Rutas
    this.routes();
  }

  middlewares() {
    //Cors
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json());

    //Directorio Publico
    this.app.use(express.static("src/public"));
  }

  routes() {
    this.app.use("/api/params", ParamsRoute);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

export default Server;
