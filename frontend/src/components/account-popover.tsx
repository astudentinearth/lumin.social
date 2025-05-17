import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronDown } from "lucide-react";

export function AccountPopover({username, className}: {username: string, className?: string}){
  return <Popover>
    <PopoverTrigger className={cn("flex justify-center items-center gap-2", className)}>
      {username} <ChevronDown size={20}/>
    </PopoverTrigger>
    <PopoverContent>Todo</PopoverContent>
  </Popover>
}