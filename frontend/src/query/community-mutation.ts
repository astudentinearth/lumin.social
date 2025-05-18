import { CommunitiesService } from "@/service/communities.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCommunityMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCommunity: { name: string; description: string }) => {
      return CommunitiesService.createCommunity(newCommunity);
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["communities"] });
    },
  });
}