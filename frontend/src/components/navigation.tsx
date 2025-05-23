import { cn } from "@/lib/utils";
import { BookText, Flag, Home, Users } from "lucide-react";
import { type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function NavigationItem({
  icon,
  title,
  route,
}: {
  icon: ReactNode;
  title: string;
  route: string;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname == route;
  return (
    <Button
      variant={"ghost"}
      className={cn(
        "grid grid-rows-1 grid-cols-[20px_auto] gap-3 rounded-lg hover:bg-secondary/40 justify-start",
        active && "bg-secondary/80",
      )}
      onClick={() => navigate(route)}
    >
      {icon}
      {title}
    </Button>
  );
}

export function Navigation({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border p-1 rounded-xl flex flex-col gap-1 w-75 bg-secondary/40",
        className,
      )}
    >
      <NavigationItem
        icon={<Home size={20} />}
        title="Akış"
        route="/"
      />
      <NavigationItem
        icon={<Flag size={20} />}
        title="Bildirim panosu"
        route="/incidents"
      />
      <NavigationItem
        icon={<Users size={20} />}
        title="Destek toplulukları"
        route="/communities"
      />
      <NavigationItem
        icon={<BookText size={20} />}
        title="El kitabı"
        route="/wiki"
      />
    </div>
  );
}
