import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function SearchBox({className}: {className: string}){
  return <div className={cn("flex group bg-input text-muted-foreground items-center p-2 h-10 rounded-lg", className)}>
    <Search size={20}/>
    <Input className="focus-visible:ring-0 focus-visible:outline-none focus-visible:border-none" placeholder="Sosyal'de ara"/>
  </div>
}