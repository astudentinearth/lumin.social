import { CommentCard } from "@/components/comment-card";
import IncidentCard from "@/components/incident-card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useIncident } from "@/hooks/use-incident";
import { useCreateIncidentCommentMutation } from "@/query/comment-mutation";
import { useIncidentCommentsQuery } from "@/query/comments-query";
import { useIncidentsQuery } from "@/query/incidents-query";
import { useState } from "react";

export function IncidentPage() {
  const id = useIncident();
  const post = useIncidentsQuery().data?.find((e) => e.id === id);
  const comments = useIncidentCommentsQuery(id ?? "");
  const commentMutation = useCreateIncidentCommentMutation();
  const [value, setValue] = useState("");
  const submit = async ()=> {
    await commentMutation.mutateAsync({incident_id: id ?? "", content: value});
    setValue("");
  }
  return (
    <div className="w-full flex justify-center overflow-y-auto h-full max-h-full p-3 ">
      <div className="w-full max-w-[600px] gap-3 flex flex-col">
        {post && <IncidentCard incident={post} />}
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
