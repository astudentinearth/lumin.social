import { useCommunity } from "@/hooks/use-community";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useCommunitiesQuery } from "@/query/communities-query";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { SquarePen } from "lucide-react";
import { usePostMutation } from "@/query/post-mutation";

export function PostDialog() {
  const communityId = useCommunity();
  const community = useCommunitiesQuery().data?.find(
    (c) => c.id === communityId,
  );
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const mutation = usePostMutation();
  const handleSubmit = () => {
    mutation.mutate({
      title,
      description: content,
      community_id: communityId,
    });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={"ghost"}
          className="w-full hover:bg-secondary/80 justify-start items-center gap-4"
        >
          <SquarePen size={20} />
          Bir şeyler paylaş
        </Button>
      </DialogTrigger>
      <DialogContent className="border-primary/50 drop-shadow-xl drop-shadow-primary/20">
        <DialogTitle>Yeni gönderi oluştur</DialogTitle>
        <DialogDescription>
          {community ? (
            <span>
              <strong>{community.name}</strong> topluluğuna gönderilecek.
            </span>
          ) : (
            "Herhangi bir topluluğa gönderilmeyecek."
          )}
        </DialogDescription>
        <div className="flex flex-col gap-2">
          <Label>{"Göderi başlığı"}</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Label>{"Göderi içeriği"}</Label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <DialogClose
            onClick={handleSubmit}
            className="bg-secondary hover:bg-primary transition-colors text-primary-foreground p-2 rounded-lg px-4"
          >
            Gönder
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
