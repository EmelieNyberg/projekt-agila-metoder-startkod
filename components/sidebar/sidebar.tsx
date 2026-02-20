import SidebarHeader from "./sidebar-header";
import SidebarNav from "./sidebar-nav";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 w-70">
      <SidebarHeader />
      <SidebarNav />
    </aside>
  );
}
