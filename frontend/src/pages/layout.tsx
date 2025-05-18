import { CommunityList } from "@/components/community-list";
import { SubmitButtons } from "@/components/create";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { cn } from "@/lib/utils";
import { Outlet, useLocation } from "react-router-dom";

export function RootLayout() {
  const location = useLocation();

  return (
    <div className="w-full h-full absolute top-0 left-0 m-0 max-w-full bg-background overflow-hidden">
      <div className={cn("w-full transition-colors h-full overflow-y-auto overflow-x-hidden flex flex-col gap-3",
        location.pathname.startsWith("/l") && "bg-green-300/8",
        location.pathname.startsWith("/communities") && "bg-green-300/8",
        location.pathname.startsWith("/incident") && "bg-red-300/8",
      )} >
        <Header />
        <div className="flex gap-3 pl-3">
          <div className="flex gap-3 flex-col">
            <SubmitButtons />
            <Navigation />
            <CommunityList />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
