import ListingCard from "@/components/listings/ListingCard";

import { Listing } from "@/types/listing";

type Props = {
  listings: Listing[];
};

export default function ListingGrid({ listings }: Props) {
  if (listings.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">لا توجد نتائج</h2>

        <p className="text-slate-500">حاول تعديل الفلاتر أو إنشاء طلب ذكي.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
