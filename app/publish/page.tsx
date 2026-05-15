"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PublishPage() {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">نشر عرض جديد</h1>

            <p className="text-slate-500 text-lg">
              انشر عرضك خلال أقل من دقيقة
            </p>
          </div>

          {/* Wizard */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
            {/* Step 1 */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-center mb-10">
                  ماذا تريد أن تنشر؟
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <button
                    onClick={() => setStep(2)}
                    className="border border-slate-200 hover:border-blue-500 hover:bg-blue-50 rounded-3xl p-8 transition"
                  >
                    <div className="text-5xl mb-4">🏠</div>

                    <h3 className="font-bold text-xl">عقار</h3>
                  </button>

                  <button
                    onClick={() => setStep(2)}
                    className="border border-slate-200 hover:border-blue-500 hover:bg-blue-50 rounded-3xl p-8 transition"
                  >
                    <div className="text-5xl mb-4">🏗️</div>

                    <h3 className="font-bold text-xl">مشروع</h3>
                  </button>

                  <button
                    onClick={() => setStep(2)}
                    className="border border-slate-200 hover:border-blue-500 hover:bg-blue-50 rounded-3xl p-8 transition"
                  >
                    <div className="text-5xl mb-4">🛠️</div>

                    <h3 className="font-bold text-xl">خدمة</h3>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-center mb-10">
                  معلومات العرض
                </h2>

                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="عنوان العرض"
                    className="w-full border border-slate-200 rounded-2xl px-5 py-4"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="المدينة"
                      className="w-full border border-slate-200 rounded-2xl px-5 py-4"
                    />

                    <input
                      type="text"
                      placeholder="الحي"
                      className="w-full border border-slate-200 rounded-2xl px-5 py-4"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      placeholder="السعر"
                      className="w-full border border-slate-200 rounded-2xl px-5 py-4"
                    />

                    <input
                      type="number"
                      placeholder="المساحة"
                      className="w-full border border-slate-200 rounded-2xl px-5 py-4"
                    />
                  </div>

                  <textarea
                    placeholder="وصف العرض"
                    rows={5}
                    className="w-full border border-slate-200 rounded-2xl px-5 py-4"
                  />

                  {/* Upload */}
                  <div className="border-2 border-dashed border-slate-300 rounded-3xl p-10 text-center text-slate-500">
                    📸 إضافة الصور لاحقاً
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 border border-slate-300 py-4 rounded-2xl font-bold"
                    >
                      رجوع
                    </button>

                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold">
                      نشر العرض 🚀
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
