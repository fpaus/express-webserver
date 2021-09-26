import Server  from "./Models/Server";

require('dotenv').config();

const server = new Server();

server.listen();