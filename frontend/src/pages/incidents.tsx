import IncidentCard from "@/components/incident-card";
import { useIncidentsQuery } from "@/query/incidents-query";

export function IncidentsPage() {
  const incidentsQuery = useIncidentsQuery();
  return (
    <div className="w-full flex justify-center overflow-y-auto h-full pr-3">
      <div className="w-full max-w-[600px] gap-3 flex flex-col">
        {incidentsQuery.data?.map((i) => (
          <IncidentCard incident={i} key={i.id}></IncidentCard>
        ))}
      </div>
    </div>
  );
}
