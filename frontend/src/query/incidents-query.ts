import { IncidentService } from "@/service/incident.service";
import { useQuery } from "@tanstack/react-query";

export const useIncidentsQuery = () => {
  return useQuery({
    queryKey: ["incidents"],
    queryFn: IncidentService.getIncidents,
  });
};