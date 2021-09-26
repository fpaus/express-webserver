const { StatusCodes } = require("http-status-codes");

const getAll = (req, res) => {
  const query = req.query;

  res
    .json({
      msj: "Get",
      ...query,
    })
    .status(StatusCodes.OK);
};

const getOne = (req, res) => {
  const { id } = req.params;

  res
    .json({
      msj: "Get",
      id,
    })
    .status(StatusCodes.OK);
};

const create = (req, res) => {
  const body = req.body;

  res
    .json({
      msj: "Post",
      body: body,
    })
    .status(StatusCodes.CREATED);
};

const update = (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res
    .json({
      msj: "Put",
      id,
      ...body,
    })
    .status(StatusCodes.OK);
};

const remove = (req, res) => {
  const { id } = req.params;
  res.json({ id }).status(StatusCodes.OK);
};

module.exports = {getAll, getOne, create, update, remove}