import { PostService } from "@/service/post.service";
import { useQuery } from "@tanstack/react-query";

export const usePostsQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: PostService.getPosts,
  });
};

export const useCommunityPostsQuery = (community_id: string) => {
  return useQuery({
    queryKey: ["communityPosts", community_id],
    queryFn: () => PostService.getCommunityPosts(community_id),
    enabled: !!community_id,
  });
}