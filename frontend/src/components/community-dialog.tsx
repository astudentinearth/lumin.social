import { HeartPlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useCommunityMutation } from "@/query/community-mutation";

export function CommunityDialog() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const mutation = useCommunityMutation();
  const handleSubmit = () => {
    mutation.mutate({
      name: title,
      description: content,
    });
    setTitle("");
    setContent("");
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={"ghost"}
          className="w-full hover:bg-secondary/80 justify-start items-center gap-4"
        >
          <HeartPlus size={20} />
          Destek topluluğu oluştur
        </Button>
      </DialogTrigger>
      <DialogContent className="border-green-400/50 drop-shadow-xl drop-shadow-green-400/20">
        <DialogTitle>Destek topluluğu oluştur</DialogTitle>
        <DialogDescription>
          {
            "Yalnız değilsin, eğer aradığın topluluğu bulamadıysan, kendi topluluğunu oluşturabilirsin."
          }
        </DialogDescription>
        <div className="flex flex-col gap-2">
          <Label>{"Topluluğuna bir isim ver:"}</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Label>{"Yeni gelenlere topluluğunu tanıt:"}</Label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <DialogClose
            onClick={handleSubmit}
            className="bg-secondary hover:bg-primary transition-colors text-primary-foreground p-2 rounded-lg px-4"
          >
            {"Hadi başlayalım!"}
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
