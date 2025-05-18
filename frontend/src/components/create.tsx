import { cn } from "@/lib/utils";
import { PostDialog } from "./post-dialog";
import { IncidentDialog } from "./incident-dialog";
import { CommunityDialog } from "./community-dialog";

export function SubmitButtons({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border p-1 rounded-xl flex flex-col gap-1 w-75 bg-secondary/40",
        className,
      )}
    >
      <PostDialog/>
      <IncidentDialog/>
      <CommunityDialog/>
    </div>
  );
}