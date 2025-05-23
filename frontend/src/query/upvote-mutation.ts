import { PostService } from "@/service/post.service"
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostUpvoteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post_id: string) => {
      return PostService.upvote(post_id);
    },
    onSettled: (_data, post_id) => {
      queryClient.invalidateQueries({queryKey: ["postUpvotes", post_id]})
    },
  });
}