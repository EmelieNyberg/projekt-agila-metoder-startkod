import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import type { NavItem } from "@/lib/types";

export default function SidebarNavItem({
  item,
  current,
}: {
  item: NavItem;
  current?: boolean;
}) {
  return (
    <Link
      href={item.link}
      className={`flex place-items-center gap-4 rounded-md p-2.5 ${current ? "bg-purple-900/80" : "bg-transparent"} hover:bg-purple-900/85 hover:text-neutral-100`}
    >
      <DynamicIcon name={item.icon} size={18} />
      <span>{item.label}</span>
    </Link>
  );
}
