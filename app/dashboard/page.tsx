"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

interface Listing {
  id: string;
  title: string;
  city: string;
  district: string;
  price: number;
}

export default function DashboardPage() {
  const router = useRouter();

  const [email, setEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [price, setPrice] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/auth");
        return;
      }

      setUserId(user.id);
      setEmail(user.email ?? null);
      loadListings(user.id);
    }

    checkUser();
  }, [router]);

  async function loadListings(currentUserId: string) {
    const { data, error } = await supabase
      .from("listings")
      .select("*")
      .eq("user_id", currentUserId)
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
      return;
    }

    setListings(data || []);
  }

  function resetForm() {
    setTitle("");
    setCity("");
    setDistrict("");
    setPrice("");
    setEditingId(null);
  }

  function startEdit(listing: Listing) {
    setEditingId(listing.id);
    setTitle(listing.title);
    setCity(listing.city);
    setDistrict(listing.district);
    setPrice(String(listing.price));
  }

  async function saveListing() {
    if (!userId) {
      router.push("/auth");
      return;
    }

    if (!title || !city || !district || !price) {
      alert("املأ جميع الحقول");
      return;
    }

    if (editingId) {
      const { error } = await supabase
        .from("listings")
        .update({
          title,
          city,
          district,
          price: Number(price),
        })
        .eq("id", editingId);

      if (error) {
        alert(error.message);
        return;
      }

      alert("تم تعديل العرض");
    } else {
      const { error } = await supabase.from("listings").insert({
        user_id: userId,
        title,
        city,
        district,
        price: Number(price),
        status: "active",
      });

      if (error) {
        alert(error.message);
        return;
      }

      alert("تم نشر العرض");
    }

    resetForm();
    loadListings(userId);
  }

  async function deleteListing(id: string) {
    const confirmDelete = confirm("هل تريد حذف هذا العرض؟");

    if (!confirmDelete) return;

    const { error } = await supabase.from("listings").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setListings((current) => current.filter((listing) => listing.id !== id));
  }

  async function logout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">لوحة التحكم</h1>
              <p className="text-slate-500">مرحباً بك: {email}</p>
            </div>

            <button
              onClick={logout}
              className="bg-red-500 text-white px-6 py-3 rounded-2xl font-bold"
            >
              تسجيل الخروج
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {editingId ? "تعديل العرض" : "إضافة عرض جديد"}
          </h2>

          <div className="space-y-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="عنوان العرض"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-slate-200 rounded-2xl px-4 py-4"
            />

            <input
              type="text"
              placeholder="المدينة"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border border-slate-200 rounded-2xl px-4 py-4"
            />

            <input
              type="text"
              placeholder="الحي"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full border border-slate-200 rounded-2xl px-4 py-4"
            />

            <input
              type="number"
              placeholder="السعر"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-slate-200 rounded-2xl px-4 py-4"
            />

            <button
              onClick={saveListing}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg"
            >
              {editingId ? "حفظ التعديل" : "نشر العرض"}
            </button>

            {editingId && (
              <button
                onClick={resetForm}
                className="w-full bg-slate-100 text-slate-700 py-4 rounded-2xl font-bold text-lg"
              >
                إلغاء التعديل
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">عروضي</h2>

          {listings.length === 0 ? (
            <p className="text-center text-slate-400">لا توجد عروض بعد</p>
          ) : (
            <div className="grid gap-4">
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="border border-slate-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <h3 className="font-bold text-xl mb-2">{listing.title}</h3>

                    <p className="text-slate-500">
                      {listing.city} — {listing.district}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="font-bold text-blue-600 text-lg">
                      {listing.price} د.م
                    </div>

                    <button
                      onClick={() => startEdit(listing)}
                      className="text-blue-600 font-bold"
                    >
                      تعديل
                    </button>

                    <button
                      onClick={() => deleteListing(listing.id)}
                      className="text-red-500 font-bold"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
