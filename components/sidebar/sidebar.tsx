import SidebarHeader from "./sidebar-header";
import SidebarNav from "./sidebar-nav";

export default function Sidebar({ className }: { className: string }) {
  return (
    <aside className={`${className}`}>
      <SidebarHeader />
      <SidebarNav />
    </aside>
  );
}
