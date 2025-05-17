import type { DetailedPost } from "@common/dto/content";
import { Card } from "./ui/card";

export default function PostCard({ post }: { post: DetailedPost }) {
  return <Card className="flex flex-col w-full p-4 gap-1.5 hover:brightness-120 transition-[filter] cursor-pointer">
    <span className="text-muted-foreground text-xs">
      {[post.community_name, post.username, new Date(post.created_at).toLocaleString()].filter(x => !!x).join(" | ")}
    </span>
    <div className="flex">
      <div></div>
      <div className="flex flex-col">
        <span className="font-bold">{post.title}</span>
        <span className="text-muted-foreground text-xs">{post.description}</span>
      </div>
    </div>
  </Card>;
}
