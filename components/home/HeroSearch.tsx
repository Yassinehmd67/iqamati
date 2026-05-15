"use client";

export default function HeroSearch() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-600 py-24 px-4 text-white text-center">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          ماذا تحتاج اليوم؟
        </h1>

        <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          إقامتي تبحث لك بدل أن تضيع وقتك في البحث التقليدي.
        </p>

        {/* Smart Search */}
        <div className="bg-white rounded-[2rem] p-3 shadow-2xl flex flex-col md:flex-row gap-3 items-center">
          <div className="flex-1 flex items-center gap-3 px-4 w-full">
            <span className="text-2xl">🔍</span>

            <input
              type="text"
              placeholder="أبحث عن شقة مفروشة بالرباط قرب الترام..."
              className="w-full py-4 text-slate-700 outline-none text-lg bg-transparent"
            />
          </div>

          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-4 rounded-[1.5rem] font-bold">
            بحث ذكي
          </button>
        </div>
      </div>
    </section>
  );
}
