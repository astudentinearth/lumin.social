import { CommentCard } from "@/components/comment-card";
import PostCard from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { usePost } from "@/hooks/use-post";
import { useCreatePostCommentMutation } from "@/query/comment-mutation";
import { usePostCommentsQuery } from "@/query/comments-query";
import { usePostsQuery } from "@/query/post-query";
import { useState } from "react";

export function PostPage() {
  const id = usePost();
  const post = usePostsQuery().data?.find((e) => e.id === id);
  const comments = usePostCommentsQuery(id ?? "");
  const commentMutation = useCreatePostCommentMutation();
  const [value, setValue] = useState("");
  const submit = async ()=> {
    await commentMutation.mutateAsync({post_id: id ?? "", content: value});
    setValue("");
  }
  return (
    <div className="w-full flex justify-center overflow-y-auto h-full max-h-full p-3 ">
      <div className="w-full max-w-[600px] gap-3 flex flex-col">
        {post && <PostCard post={post} />}
        <div className="flex flex-col gap-1">
          <Textarea placeholder="Yorumunu yaz..." value={value} onChange={e=>setValue(e.target.value)}/>
          <Button disabled={commentMutation.isPending} onClick={submit} variant={"secondary"}>Yorum yap</Button>
        </div>
        {comments.data?.map((e) => (
          <CommentCard comment={e} key={e.id}></CommentCard>
        ))}
      </div>
    </div>
  );
}
