import UserCard from "../user/user-card";
import SidebarHeader from "./sidebar-header";
import SidebarNav from "./sidebar-nav";

export default function Sidebar({ className }: { className: string }) {
  return (
    <aside
      className={`${className} grid grid-flow-row grid-rows-[auto_1fr_auto]`}
    >
      <SidebarHeader />
      <SidebarNav />
      <section className="bottom-0 p-6 border-t border-t-neutral-300">
        <UserCard />
      </section>
    </aside>
  );
}
