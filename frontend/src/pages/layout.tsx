import { Header } from "@/components/header";
import { type ReactNode } from "react";

export function RootLayout({children}: {children?: ReactNode}) {
  return <div className="w-full h-full absolute top-0 left-0 m-0 overflow-y-auto overflow-x-hidden max-w-full bg-background flex flex-col">
    <Header/>
    {children}
  </div>
}