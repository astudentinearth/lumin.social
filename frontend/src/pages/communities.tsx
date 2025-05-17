import { CommunityCard } from "@/components/community-card";
import { useCommunitiesQuery } from "@/query/communities-query";

export function CommunitiesPage() {
  const communities = useCommunitiesQuery();
  return (
    <div className="w-full flex justify-center overflow-y-auto h-full pr-3">
      <div className="w-full max-w-[600px] gap-3 flex flex-col">
        {communities.data?.map((i) => (
          <CommunityCard community={i} key={i.id}></CommunityCard>
        ))}
      </div>
    </div>
  );
}
