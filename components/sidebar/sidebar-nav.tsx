import type { NavItem } from "@/lib/types";
import SidebarNavItem from "./sidebar-nav-item";

export default function SidebarNav() {
  const navItems: NavItem[] = [
    { label: "Products", link: "/", icon: "package-2" },
    { label: "Analytics", link: "/admin/analytics", icon: "chart-line" },
    { label: "Orders", link: "/admin/orders", icon: "shopping-cart" },
    { label: "Customers", link: "/admin/customers", icon: "users" },
    { label: "Settings", link: "/admin/settings", icon: "settings" },
  ];

  return (
    <nav aria-label="Main navigation">
      <ul className="px-6 py-3 space-y-1.5">
        {navItems.map((item: NavItem) => (
          <li key={item.link.toString()}>
            <SidebarNavItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
