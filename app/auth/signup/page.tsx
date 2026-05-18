"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white border border-slate-200 rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">إنشاء حساب</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="الاسم الكامل"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-slate-200 rounded-2xl px-4 py-3"
          />

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-slate-200 rounded-2xl px-4 py-3"
          />

          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-slate-200 rounded-2xl px-4 py-3"
          />

          <button
            onClick={signUp}
            className="w-full bg-blue-600 text-white py-3 rounded-2xl font-bold"
          >
            إنشاء الحساب
          </button>

          <Link
            href="/auth"
            className="block text-center text-blue-600 font-bold"
          >
            لدي حساب بالفعل
          </Link>
        </div>
      </div>
    </main>
  );
}
