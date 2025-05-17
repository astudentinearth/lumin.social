import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronDown } from "lucide-react";
import { LoginForm } from "./login-form";
import { useCurrentUserQuery } from "@/query/user-query";

export function AccountPopover({username, className}: {username: string, className?: string}){
  const userQuery = useCurrentUserQuery();
  return <Popover>
    <PopoverTrigger className={cn("flex justify-center items-center gap-2", className)}>
      {userQuery.data?.user.username ?? "Giriş yap"} <ChevronDown size={20}/>
    </PopoverTrigger>
    <PopoverContent>
      <LoginForm/>
    </PopoverContent>
  </Popover>
}