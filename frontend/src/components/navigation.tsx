import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Button } from "./ui/button";
import { BookText, Flag, Home, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NavigationItem({
  icon,
  title,
  active,
  route,
}: {
  icon: ReactNode;
  title: string;
  active: boolean;
  route: string;
}) {
  const navigate = useNavigate();
  return (
    <Button
      variant={"ghost"}
      className={cn(
        "grid grid-rows-1 grid-cols-[20px_auto] gap-3 rounded-lg hover:bg-secondary/40 justify-start",
        active && "bg-secondary",
      )}
      onClick={()=>navigate(route)}
    >
      {icon}
      {title}
    </Button>
  );
}

export function Navigation({ className }: { className?: string }) {
  return <div className={cn("border p-1 rounded-xl flex flex-col gap-1 w-75 bg-secondary/40", className)}>
    <NavigationItem icon={<Home size={20}/>} title="Akış" active={false} route="/"/>
    <NavigationItem icon={<Flag size={20}/>} title="Bildirim panosu" active={false} route="/incidents"/>
    <NavigationItem icon={<Users size={20}/>} title="Topluluklar" active={false} route="/communities"/>
    <NavigationItem icon={<BookText size={20}/>} title="Wiki" active={false} route="/wiki"/>
  </div>;
}
