import { MessageSquareWarning } from "lucide-react";
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

export function IncidentDialog() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={"ghost"}
          className="w-full hover:bg-secondary/80 justify-start items-center gap-4"
        >
          <MessageSquareWarning size={20} />
          Hak ihlali bildir
        </Button>
      </DialogTrigger>
      <DialogContent className="border-red-300/50 drop-shadow-xl drop-shadow-red-300/20">
        <DialogTitle>Hak ihlali bildir</DialogTitle>
        <DialogDescription>
          <span>{"Yaşadığın durum bildirim panosunda görünecek."}</span>
        </DialogDescription>
        <div className="flex flex-col gap-2">
          <Label>{"Yaşananları kısaca anlat:"}</Label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Label>{"Detaylarını ekle"}</Label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Label>{"Etiket ekleyebilirsiniz (virgül ile ayırın):"}</Label>
          <Input value={tags} onChange={e => setTags(e.target.value)}></Input>
          <DialogClose className="bg-secondary hover:bg-primary transition-colors text-primary-foreground p-2 rounded-lg px-4">
            Gönder
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
