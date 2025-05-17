
import { Fetch } from "@/lib/fetch";
import type { IncidentDTO } from "@common/dto/incident-dto";
import type { NewIncidentDTO } from "@common/dto/request";

// Retrieve all incidents
export async function getIncidents(): Promise<IncidentDTO[]> {
  const res = await Fetch.GET("/incident/get-incidents");
  if (!res.ok) throw new Error("Failed to fetch incidents");
  return res.json();
}

// Retrieve incident by ID
export async function getIncidentById(id: string): Promise<IncidentDTO | null> {
  const res = await Fetch.GET(`/incident/get-incident-by-id?id=${encodeURIComponent(id)}`);
  if (!res.ok) throw new Error("Failed to fetch incident");
  return res.json();
}

// Create a new incident
export async function createIncident(data: NewIncidentDTO): Promise<IncidentDTO> {
  const res = await Fetch.POST("/incident/create-incident", data);
  if (!res.ok) throw new Error("Failed to create incident");
  return res.json();
}

export const IncidentService = {
  getIncidents,
  getIncidentById,
  createIncident,
};