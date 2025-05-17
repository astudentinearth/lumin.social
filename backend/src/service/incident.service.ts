import { incidentRepository } from "@/data/incident-repository";
import { IncidentDTO } from "@/dto/incident-dto";
import { randomUUID } from "crypto";

async function createIncident(incident: IncidentDTO, user_id: string) {
  const id = randomUUID();
  const value = {
    ...incident,
    user_id,
    id,
    created_at: new Date(),
  }
  await incidentRepository.create(value);
  return value;
}
async function getIncidents() {
  return await incidentRepository.getAll();
}

async function getIncidentById(id: string) {
  return await incidentRepository.findById(id);
}

export const IncidentService = {
  createIncident,
  getIncidents,
  getIncidentById,
};