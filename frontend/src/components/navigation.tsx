import { cn } from "@/lib/utils";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "./ui/button";
import { BookText, Flag, Home, Users } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

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
        active && "bg-secondary",
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
        title="Topluluklar"
        route="/communities"
      />
      <NavigationItem
        icon={<BookText size={20} />}
        title="Wiki"
        route="/wiki"
      />
    </div>
  );
}
