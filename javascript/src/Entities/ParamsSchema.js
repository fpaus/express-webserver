const EntitySchema = require('typeorm').EntitySchema;
const Param = require('../Models/Param').Param;

module.exports = new EntitySchema({
  name: 'param',
  target: Param,
  columns: {
    codigo: {
      primary: true,
      type: 'varchar',
    },
    valor: {
      type: 'varchar',
    },
    descripcion: {
      type: 'varchar',
    },
  },
});
