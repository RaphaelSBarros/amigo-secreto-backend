import { RequestHandler } from "express";

export const requestInterpector: RequestHandler = (req, res, next) => {
  console.log(`-> ${res.statusCode} ${req.method} ${req.originalUrl} ${JSON.stringify(req.body)}`);
  next();
}