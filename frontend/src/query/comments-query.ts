import { CommentService } from "@/service/comment.service";
import type { IncidentComment, PostComment } from "@common/dto/content";
import { useQuery } from "@tanstack/react-query";

export const usePostCommentsQuery = (post_id: string) => {
  return useQuery<PostComment[]>({
    queryKey: ["postComments", post_id],
    queryFn: () => CommentService.getPostComments(post_id),
    enabled: !!post_id,
  });
};

export const useIncidentCommentsQuery = (incident_id: string) => {
  return useQuery<IncidentComment[]>({
    queryKey: ["incidentComments", incident_id],
    queryFn: () => CommentService.getIncidentComments(incident_id),
    enabled: !!incident_id,
  });
};
