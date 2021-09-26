const express = require("express");
const cors = require("cors");
const ParamsRoute = require("../routes/params");

class Server {
  app;
  port;
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

module.exports = Server;
