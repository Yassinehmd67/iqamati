import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ListingCard from "@/components/listings/ListingCard";

import { mockListings } from "@/data/mock-listings";

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-2">نتائج البحث</h1>

            <p className="text-slate-500">أفضل العروض المطابقة لطلبك</p>
          </div>

          <select className="bg-white border border-slate-200 rounded-2xl px-4 py-3">
            <option>الأحدث</option>
            <option>الأرخص</option>
            <option>الأعلى مساحة</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <aside className="bg-white border border-slate-200 rounded-3xl p-6 h-fit">
            <h2 className="font-bold text-xl mb-6">الفلاتر</h2>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="المدينة"
                className="w-full border border-slate-200 rounded-2xl px-4 py-3"
              />

              <input
                type="text"
                placeholder="الحي"
                className="w-full border border-slate-200 rounded-2xl px-4 py-3"
              />

              <select className="w-full border border-slate-200 rounded-2xl px-4 py-3">
                <option>نوع العقار</option>
                <option>شقة</option>
                <option>فيلا</option>
                <option>محل</option>
              </select>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-3 font-bold">
                تطبيق البحث
              </button>
            </div>
          </aside>

          {/* Listings */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>

            {/* Smart Request */}
            <div className="bg-blue-600 text-white rounded-[2rem] p-10 text-center mt-10">
              <h2 className="text-3xl font-bold mb-4">لم تجد ما تبحث عنه؟</h2>

              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                دع IQAMATI تبحث لك وتقوم بإشعارك فور العثور على عرض مطابق عبر
                WhatsApp.
              </p>

              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
                إنشاء طلب ذكي 🤖
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
