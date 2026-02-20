import { Package, CircleCheck, TriangleAlert, CircleX } from "lucide-react";
import StatsCard from "./stats-card";
import AddProductButton from "./add-product-button";


// All cards with statistics (at the moment placeholder info)
const stats = [
    {
        title: "Total products",
        value: 248,
        icon: Package,
        color: "text-purple-600",
        bg: "bg-purple-100"
    },
    {
        title: "In stock",
        value: 189,
        icon: CircleCheck,
        color: "text-green-600",
        bg: "bg-green-100"
    },
    {
        title: "Low stock",
        value: 34,
        icon: TriangleAlert,
        color: "text-yellow-600",
        bg: "bg-yellow-100"
    },
    {
        title: "Out of stock",
        value: 25,
        icon: CircleX,
        color: "text-red-600",
        bg: "bg-red-100"
    }
];

export default function PageHeader() {
    return (
        <header>
            <section className="flex justify-between p-2 shadow-sm">
                <div>
                    <h1 className="text-xl font-semibold">Product management</h1>
                    <p className="text-sm text-gray-500">Manage your store inventory</p>
                </div>
                <AddProductButton />
            </section>

            {/* Section with all stats cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
                {stats.map((stat) => (
                    <StatsCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                        color={stat.color}
                        bg={stat.bg}
                    />
                ))}
            </section>
        </header>
    );
};