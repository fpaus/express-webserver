const Server = require('./Server/Server');

require('dotenv').config();

const server = new Server();

server.listen();
