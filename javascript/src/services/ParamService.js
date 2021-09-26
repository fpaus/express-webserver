const dao = require('../database/dao');
const Param = require('../Models/Param').Param;

const create = async (param) => {
  const paramRepository = dao.getRepository(Param);

  paramRepository.create(param);
  const createdParam = await paramRepository.save(param);
  return createdParam;
};

const findAll = async () => {
  const paramRepository = dao.getRepository(Param);
  return paramRepository.find();
};

const findOne = async (codigo) => {
  const paramRepository = dao.getRepository(Param);
  const param = await paramRepository.findOne({ codigo: codigo });
  if (!param) {
    throw Error('Param not found');
  }
  return param;
};

const update = async (codigo, updatedParam) => {};

const remove = async (codigo) => {};

module.exports = { create, findAll, findOne, update, remove };
