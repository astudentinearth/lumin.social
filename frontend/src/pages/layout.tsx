import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return <div className="w-full h-full absolute top-0 left-0 m-0 overflow-y-auto overflow-x-hidden max-w-full bg-background flex flex-col gap-3">
    <Header/>
    <div className="flex">
      <Navigation/>
      <Outlet/>
    </div>
  </div>
}