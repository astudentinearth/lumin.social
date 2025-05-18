import { usePostUpvotesQuery } from "@/query/post-query";
import type { IncidentDTO } from "@common/dto/incident-dto";
import { ChevronUp } from "lucide-react";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";

export default function IncidentCard({ incident }: { incident: IncidentDTO }) {
  const upvotesQuery = usePostUpvotesQuery(incident.id);
  const nav = useNavigate();
  const goToIncident = () => {
    nav(`/incident/${incident.id}`);
  }
  return <Card onClick={goToIncident} className="flex flex-col bg-card/80 w-full p-4 gap-1.5 hover:brightness-120 transition-[filter,border] hover:border-red-400/20 cursor-pointer">
    <span className="text-muted-foreground text-xs">
      {[incident.username, new Date(incident.created_at).toLocaleString()].filter(x => !!x).join(" | ")}
    </span>
    <div className="flex">
      <div className="flex flex-col pr-3 items-center justify-start">{upvotesQuery.data && <>
        <ChevronUp size={20}/>
        <span className="font-bold text-center">{upvotesQuery.data.count}</span>
      </>}</div>
      <div className="flex flex-col gap-2">
        <span className="font-bold">{incident.title}</span>
        <div className="flex gap-2">
          {incident.tags.map(tag => <div key={tag} className="flex w-fit px-2 text-xs border justify-center items-center text-center bg-secondary/50 rounded-full">{tag}</div>)}
        </div>
        <span className="text-muted-foreground text-xs">{incident.description ? incident.description?.length > 256 ?`${incident.description?.substring(256)}...` : incident.description : ""}</span>
      </div>
    </div>
  </Card>;
}
