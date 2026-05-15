"use client";

export default function ListingFilters() {
  return (
    <aside className="bg-white border border-slate-200 rounded-3xl p-6 h-fit">
      <h2 className="text-2xl font-bold mb-6">الفلاتر</h2>

      <div className="space-y-5">
        {/* City */}
        <div>
          <label className="block mb-2 font-medium text-slate-700">
            المدينة
          </label>

          <input
            type="text"
            placeholder="مثال: الرباط"
            className="w-full border border-slate-200 rounded-2xl px-4 py-3"
          />
        </div>

        {/* District */}
        <div>
          <label className="block mb-2 font-medium text-slate-700">الحي</label>

          <input
            type="text"
            placeholder="أكدال، المعاريف..."
            className="w-full border border-slate-200 rounded-2xl px-4 py-3"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block mb-2 font-medium text-slate-700">
            نوع العقار
          </label>

          <select className="w-full border border-slate-200 rounded-2xl px-4 py-3">
            <option>الكل</option>
            <option>شقة</option>
            <option>فيلا</option>
            <option>محل</option>
            <option>مكتب</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block mb-2 font-medium text-slate-700">
            السعر الأقصى
          </label>

          <input
            type="number"
            placeholder="500000"
            className="w-full border border-slate-200 rounded-2xl px-4 py-3"
          />
        </div>

        {/* Moroccan Features */}
        <div>
          <label className="block mb-3 font-medium text-slate-700">
            خصائص مغربية
          </label>

          <div className="space-y-3">
            <label className="flex items-center gap-3 text-slate-600">
              <input type="checkbox" />
              قرب المسجد
            </label>

            <label className="flex items-center gap-3 text-slate-600">
              <input type="checkbox" />
              قرب الحمام
            </label>

            <label className="flex items-center gap-3 text-slate-600">
              <input type="checkbox" />
              قرب الترام
            </label>

            <label className="flex items-center gap-3 text-slate-600">
              <input type="checkbox" />
              موقف سيارات
            </label>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold">
          تطبيق الفلاتر
        </button>
      </div>
    </aside>
  );
}
