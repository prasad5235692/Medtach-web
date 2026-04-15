
export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-purple-100/50 transition-transform duration-500 group-hover:scale-125"
      />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-colors duration-300 group-hover:bg-purple-700 group-hover:text-white">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3 className="text-base font-bold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">{description}</p>
    </div>
  );
}
