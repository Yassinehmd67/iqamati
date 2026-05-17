"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

type Listing = {
  id: string;
  title: string;
  city: string;
  district: string;
  price: number | null;
  status: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);

  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function init() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/auth");
        return;
      }

      setUserId(user.id);
      setEmail(user.email ?? null);

      fetchListings(user.id);
    }

    init();
  }, [router]);

  async function fetchListings(currentUserId: string) {
    const { data, error } = await supabase
      .from("listings")
      .select("id,title,city,district,price,status")
      .eq("user_id", currentUserId)
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
      return;
    }

    setListings(data ?? []);
  }

  async function createListing() {
    if (!userId) return;

    if (!title || !city || !district) {
      alert("أدخل عنوان العرض، المدينة، والحي");
      return;
    }

    const { error } = await supabase.from("listings").insert({
      user_id: userId,
      title,
      city,
      district,
      price: price ? Number(price) : null,
      category: "property",
      type: "بيع",
      status: "active",
    });

    if (error) {
      alert(error.message);
      return;
    }

    setTitle("");
    setCity("");
    setDistrict("");
    setPrice("");

    fetchListings(userId);
  }

  async function logout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8">
          <h1 className="text-3xl font-bold mb-4">لوحة التحكم</h1>

          <p className="text-slate-500 mb-8">مرحباً بك: {email}</p>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-6 py-3 rounded-2xl font-bold"
          >
            تسجيل الخروج
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-8">
          <h2 className="text-2xl font-bold mb-6">إضافة عرض جديد</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="عنوان العرض"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-slate-200 rounded-2xl px-4 py-3"
            />

            <input
              placeholder="المدينة"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-slate-200 rounded-2xl px-4 py-3"
            />

            <input
              placeholder="الحي"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="border border-slate-200 rounded-2xl px-4 py-3"
            />

            <input
              type="number"
              placeholder="السعر"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border border-slate-200 rounded-2xl px-4 py-3"
            />
          </div>

          <button
            onClick={createListing}
            className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold"
          >
            نشر العرض
          </button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-8">
          <h2 className="text-2xl font-bold mb-6">عروضي</h2>

          {listings.length === 0 ? (
            <p className="text-slate-500">لا توجد عروض بعد.</p>
          ) : (
            <div className="space-y-4">
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="border border-slate-200 rounded-2xl p-4 flex justify-between"
                >
                  <div>
                    <h3 className="font-bold">{listing.title}</h3>
                    <p className="text-slate-500">
                      {listing.city} — {listing.district}
                    </p>
                  </div>

                  <div className="font-bold text-blue-600">
                    {listing.price ? `${listing.price} د.م` : "بدون سعر"}
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
