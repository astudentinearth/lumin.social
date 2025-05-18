import { useParams } from "react-router-dom";

export const useIncident = () => {
  const params = useParams();
  const incidentId = params.incidentId;
  return incidentId;
}
