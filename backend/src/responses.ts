import { Response } from "express";

function Unauthorized(res: Response, body?: unknown) {
  res.status(401).send(body ?? {message: "Unauthorized"});
}

function Ok(res: Response, body?: unknown) {
  res.status(200).send(body);
}

function NotFound(res: Response, body?: unknown) {
  res.status(404).send(body ?? {message: "Not found"});
}

function BadRequest(res: Response, body?: unknown) {
  res.status(400).send(body ?? {message: "Bad request"});
}

export const Responses = {
  Unauthorized,
  Ok,
  NotFound,
  BadRequest
}