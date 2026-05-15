import ListingCard from "@/components/listings/ListingCard";
import { mockListings } from "@/data/mock-listings";

export default function FeaturedListings() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            عروض مختارة
          </h2>

          <p className="text-slate-500">أحدث العروض في المدن المغربية</p>
        </div>

        <button className="text-blue-600 font-bold hover:underline">
          مشاهدة الكل
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
