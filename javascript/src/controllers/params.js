const { StatusCodes } = require('http-status-codes');

const service = require('../services/ParamService');

const getAll = (req, res) => {
  const query = req.query;

  service.findAll().then((params) => {
    res.json(params).status(StatusCodes.OK);
  });
};

const getOne = (req, res) => {
  const { codigo } = req.params;

  service.findOne(codigo).then((param) => {
    res.json(param).status(StatusCodes.OK);
  });
};

const create = (req, res) => {
  const body = req.body;

  service.create(body).then((param) => {
    res.json(param).status(StatusCodes.CREATED);
  });
};

const update = (req, res) => {
  const { codigo } = req.params;
  const body = req.body;

  res
    .json({
      msj: 'Put',
      codigo,
      ...body,
    })
    .status(StatusCodes.OK);
};

const remove = (req, res) => {
  const { codigo } = req.params;
  res.json({ codigo }).status(StatusCodes.OK);
};

module.exports = { getAll, getOne, create, update, remove };
