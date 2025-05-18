import type { DetailedPost } from "@common/dto/content";
import { Card } from "./ui/card";
import { usePostUpvotesQuery } from "@/query/post-query";
import { ChevronUp } from "lucide-react";
import { usePostUpvoteMutation } from "@/query/upvote-mutation";

export default function PostCard({ post }: { post: DetailedPost }) {
  const upvotesQuery = usePostUpvotesQuery(post.id);
  const upvoteMutation = usePostUpvoteMutation();
  const upvote = ()=> {
    if(!upvoteMutation.isPending) {
      upvoteMutation.mutate(post.id);
    }
  }
  return <Card className="flex flex-col w-full pt-4 pb-2 gap-1.5 hover:brightness-120 transition-[filter] cursor-pointer">
    <span className="text-muted-foreground text-xs pl-4 block">
      {[post.community_name, post.username, new Date(post.created_at).toLocaleString()].filter(x => !!x).join(" | ")}
    </span>
    <div className="flex">
      <div onClick={upvote} className="flex flex-col ml-2 hover:bg-secondary/40 rounded-md px-2 py-1 justify-start items-center">{upvotesQuery.data && <>
        <ChevronUp size={20}/>
        <span className="font-bold text-center">{upvotesQuery.data.count}</span>
      </>}</div>
      <div className="flex flex-col ml-2">
        <span className="font-bold">{post.title}</span>
        <span className="text-muted-foreground text-xs">{post.description ? post.description?.length > 256 ?`${post.description?.substring(256)}...` : post.description : ""}</span>
      </div>
    </div>
  </Card>;
}
