const categories = [
  {
    title: "شراء عقار",
    icon: "🏠",
  },
  {
    title: "كراء سكن",
    icon: "🔑",
  },
  {
    title: "مشاريع جديدة",
    icon: "🏗️",
  },
  {
    title: "خدمات ومهنيين",
    icon: "🛠️",
  },
];

export default function CategoryButtons() {
  return (
    <section className="container mx-auto px-4 -mt-10 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <button
            key={category.title}
            className="bg-white hover:bg-blue-50 border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition text-center"
          >
            <div className="text-4xl mb-4">{category.icon}</div>

            <h3 className="font-bold text-slate-800">{category.title}</h3>
          </button>
        ))}
      </div>
    </section>
  );
}
