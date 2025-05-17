import { CommunitiesService } from "@/service/communities.service";
import { useQuery } from "@tanstack/react-query";

export const useCommunitiesQuery = () => {
  return useQuery({
    queryKey: ["communities"],
    queryFn: CommunitiesService.getCommunities,
  });
};
