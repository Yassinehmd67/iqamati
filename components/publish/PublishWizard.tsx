"use client";

import { useState } from "react";

export default function PublishWizard() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm">
      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">
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
          <h2 className="text-3xl font-bold text-center mb-10">
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
              rows={5}
              placeholder="وصف العرض"
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
  );
}
