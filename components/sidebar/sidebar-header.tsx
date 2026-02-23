export default function SidebarHeader({ className }: { className?: string }) {
  return (
    <section className={`${className} border-b border-neutral-300 p-6`}>
      <h2>
        <span className="block font-bold text-3xl">Webbutiken</span>
        <span className="text-neutral-500">Admin panel</span>
      </h2>
    </section>
  );
}
