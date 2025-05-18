import { useUserByIdQuery } from "@/query/user-query";
import type { IncidentComment, PostComment } from "@common/dto/content";
import { Card } from "./ui/card";

export function CommentCard({
  comment,
}: {
  comment: PostComment | IncidentComment;
}) {
  const user = useUserByIdQuery(comment.user_id ?? "");
  return (
    <Card className="flex flex-col w-full p-4 gap-1.5 hover:brightness-120 transition-[filter]">
      <span className="text-muted-foreground text-sm">{`${user.data?.user.username} | ${new Date(
        comment.created_at ?? 0,
      ).toLocaleString()}`}</span>
      <span className="">{comment.content}</span>
    </Card>
  );
}
