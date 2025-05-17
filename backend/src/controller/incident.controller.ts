import { incidentSchema } from "@/dto/incident-dto";
import { Responses } from "@/responses";
import { IncidentService } from "@/service/incident.service";
import { AuthRequest, Validated } from "@/types";
import { RequestHandler } from "express";

const createIncident: RequestHandler = async (req: Validated<typeof incidentSchema, AuthRequest>, res) => {
  if (req.session.userId == null) {
    return Responses.Unauthorized(res);
  }
  const incident = await IncidentService.createIncident(req.body, req.session.userId);
  return Responses.Ok(res, incident);
}

const getIncidents: RequestHandler = async (_req, res) => {
  return Responses.Ok(res, await IncidentService.getIncidents());
}

const getIncidentById: RequestHandler = async (req, res) => {
  const id = req.query["id"];
  if (!id || typeof id !== "string") {
    return Responses.BadRequest(res);
  }
  const incident = await IncidentService.getIncidentById(id);
  if (incident == null) {
    return Responses.NotFound(res);
  }
  return Responses.Ok(res, incident);
}

export const IncidentController = {
  createIncident,
  getIncidents,
  getIncidentById,
};