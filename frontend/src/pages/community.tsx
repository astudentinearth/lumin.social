import PostCard from "@/components/post-card";
import { Card, CardTitle } from "@/components/ui/card";
import { useCommunity } from "@/hooks/use-community";
import { useCommunitiesQuery } from "@/query/communities-query";
import { useCommunityPostsQuery } from "@/query/post-query";
import { useUserByIdQuery } from "@/query/user-query";

export function CommunityPage() {
  const id = useCommunity();
  const communities = useCommunitiesQuery().data;
  const current = communities?.find((c) => c.id === id);
  const creator = useUserByIdQuery(current?.creator_id ?? "");
  const posts = useCommunityPostsQuery(id ?? "").data;
  return (
    <div className="w-full flex justify-center overflow-y-auto h-full pr-3">
      <div className="w-full max-w-[600px] gap-3 flex flex-col">
        <Card className="flex p-5 flex-col gap-2">
          <CardTitle className="text-3xl">{current?.name}</CardTitle>

          {current && (
            <span className="text-sm text-foreground/70">{`${creator.data?.user.username} tarafından ${new Date(
              current.created_at,
            ).toLocaleDateString()} tarihinde oluşturuldu.`}</span>
          )}
          <span className="text-muted-foreground text-sm">
            {current?.description}
          </span>
        </Card>
        {posts?.map((p) => (
          <PostCard post={p} key={p.id}></PostCard>
        ))}
      </div>
    </div>
  );
}
