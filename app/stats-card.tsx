type StatsCardProps = {
    title: string;
    value: number;
    icon: React.ElementType;
    color: string;
    bg: string;
};

export default function StatsCard({ title, value, icon: Icon, color, bg }: StatsCardProps) {
    return (
        <div className="flex justify-between items-center p-6 bg-white rounded-xl shadow-sm">
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <h2 className="text-2xl font-semibold">{value}</h2>
            </div>

            <div className={`p-3 rounded-lg ${bg}`}>
                <Icon className={color} size={24} />
            </div>
        </div>
    );
};
