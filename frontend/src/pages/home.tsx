import PostCard from "@/components/post-card";
import { usePostsQuery } from "@/query/post-query";

export function HomePage() {
  const postsQuery = usePostsQuery();
  return (
    <div className="w-full flex justify-center overflow-y-auto h-full pr-3">
      <div className="w-full max-w-[600px] gap-3 flex flex-col">
        {postsQuery.data?.map((p) => (
          <PostCard post={p} key={p.id}></PostCard>
        ))}
      </div>
    </div>
  );
}
