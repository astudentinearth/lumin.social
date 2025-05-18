import { CommentService } from "@/service/comment.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { PostComment, IncidentComment } from "@common/dto/content";

export const useCreatePostCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<PostComment, unknown, { post_id: string; content: string }>({
    mutationFn: CommentService.createPostComment,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["postComments", variables.post_id] });
    },
  });
};

export const useCreateIncidentCommentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<IncidentComment, unknown, { incident_id: string; content: string }>({
    mutationFn: CommentService.createIncidentComment,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["incidentComments", variables.incident_id] });
    },
  });
};
