import { AccountPopover } from "./account-popover";

export function Header() {
  return (
    <div className="bg-secondary/40 border-b h-16 grid grid-cols-3 grid-rows-1 items-center">
      <span className="font-bold text-[32px] pl-5">lumin.social</span>
      <div></div>
      <AccountPopover className="justify-self-end mr-4" />
    </div>
  );
}
