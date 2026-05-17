"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function signIn() {
    if (!email || !password) {
      alert("أدخل البريد الإلكتروني وكلمة المرور");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.assign("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="bg-white border border-slate-200 rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">تسجيل الدخول</h1>

        <div className="space-y-4">
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
            onClick={signIn}
            className="w-full bg-blue-600 text-white py-3 rounded-2xl font-bold"
          >
            دخول
          </button>

          <Link
            href="/auth/signup"
            className="block text-center text-blue-600 font-bold"
          >
            إنشاء حساب جديد
          </Link>
        </div>
      </div>
    </main>
  );
}
