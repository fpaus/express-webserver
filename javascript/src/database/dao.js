const typeorm = require('typeorm');

class DatabaseLayer {
  constructor() {
    typeorm
      .createConnection({
        type: 'sqlite',
        database: `./db.sqlite`,
        synchronize: true,
        logging: true,
        entities: [require('../Entities/ParamsSchema')],
      })
      .then((connection) => {
        this.connection = connection;
      });
  }

  getConnection() {
    return this.connection;
  }

  getRepository(Entity) {
    return this.connection.getRepository(Entity);
  }
}

// const createConnection = async () => {
//   const connection = await typeorm.createConnection({
//     type: 'sqlite',
//     database: `./db.sqlite`,
//     synchronize: true,
//     logging: true,
//     entities: [],
//   });

//   return connection;
// };

const layer = new DatabaseLayer();

module.exports = layer;
