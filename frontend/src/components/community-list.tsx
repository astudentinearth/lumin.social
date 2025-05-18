import {type CommunityDTO} from "@common/dto/community-dto";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";
import { useCommunitiesQuery } from "@/query/communities-query";

function CommunityItem({community}: {community: CommunityDTO}) {
  const navigate = useNavigate();
    return (
    <Button
      variant={"ghost"}
      className={cn(
        "grid grid-rows-1 grid-cols-[20px_auto] gap-3 rounded-lg hover:bg-secondary/40 justify-start"
      )}
      onClick={() => navigate(`/l/${community.id}`)}
    >
      <Users size={20}/>
      {community.name}
    </Button>)
}

export function CommunityList({className}: {className?: string}){
  const communities = useCommunitiesQuery().data;
  return (
    <div
      className={cn(
        "border p-1 rounded-xl flex flex-col gap-1 w-75 bg-secondary/40 max-w-full overflow-y-auto",
        className
      )}
    >
      {communities ? communities.map(community => <CommunityItem key={community.id} community={community}/>) : "Topluluklar yükleniyor..."}
    </div>
  );
}