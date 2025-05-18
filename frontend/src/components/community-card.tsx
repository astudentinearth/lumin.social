import type { Community } from "@common/dto/content";
import { Card } from "./ui/card";
import { useUserByIdQuery } from "@/query/user-query";
import { useNavigate } from "react-router-dom";

export function CommunityCard({community}: {community: Community}){
  const creator = useUserByIdQuery(community.creator_id ?? "");
  const nav = useNavigate();
  const click = ()=>{
    nav(`/l/${encodeURIComponent(community.id)}`)
  }
  return (
    <Card onClick={click} className="flex flex-col w-full p-6 gap-1.5 bg-card/70 hover:brightness-120 transition-[filter,border] cursor-pointer hover:border-green-500/30">
      <h1 className="text-3xl font-bold">{community.name}</h1>
      <span>{`${creator.data?.user.username} tarafından ${new Date(community.created_at).toLocaleDateString()} tarihinde oluşturuldu.`}</span>
      <p className="text-muted-foreground">{community.description}</p>
    </Card>
  )
}