import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getAll = (req: Request, res: Response) => {
  const query = req.query;

  res
    .json({
      msj: "Get",
      ...query,
    })
    .status(StatusCodes.OK);
};

export const getOne = (req: Request, res: Response) => {
  const { id } = req.params;

  res
    .json({
      msj: "Get",
      id,
    })
    .status(StatusCodes.OK);
};

export const create = (req: Request, res: Response) => {
  const body = req.body;

  res
    .json({
      msj: "Post",
      body: body,
    })
    .status(StatusCodes.CREATED);
};

export const update = (req: Request, res: Response) => {
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

export const remove = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ id }).status(StatusCodes.OK);
};
