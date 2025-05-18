import { PostService } from "@/service/post.service";
import type { NewPostDTO } from "@common/dto/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newPost: NewPostDTO) => {
      return PostService.createPost(newPost);
    },
    onSuccess: (data) => {
      queryClient.refetchQueries({ queryKey: ["posts"] });
      queryClient.refetchQueries({ queryKey: ["communityPosts", data.community_id] });
    },
  });
};
