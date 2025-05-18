import { cn } from "@/lib/utils";
import { useCurrentUserQuery } from "@/query/user-query";
import { ChevronDown, LogOut } from "lucide-react";
import { LoginForm } from "./login-form";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useLogoutMutation } from "@/query/logout-mutation";

export function AccountPopover({className}: {className?: string}){
  const userQuery = useCurrentUserQuery();
  const logout = useLogoutMutation();
  const handleLogout = () => {
    logout.mutate();
  }
  return <Popover>
    <PopoverTrigger className={cn("flex justify-center items-center gap-2", className)}>
      {userQuery.data?.user.username ?? "Giriş yap"} <ChevronDown size={20}/>
    </PopoverTrigger>
    <PopoverContent>
      {userQuery.data ? <div className="flex flex-col gap-2">
        <span>{`${userQuery.data.user.username} olarak giriş yapıldı.`}</span>
        <Button disabled={logout.isPending} onClick={handleLogout} variant={"secondary"} className="gap-2">
          <LogOut size={20}/>
          {"Çıkış yap"}
        </Button>
      </div> : <LoginForm/>}
    </PopoverContent>
  </Popover>
}