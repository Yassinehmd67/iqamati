import Link from "next/link";

import { Listing } from "@/types/listing";

type Props = {
  listing: Listing;
};

export default function ListingCard({ listing }: Props) {
  return (
    <Link
      href={`/listing/${listing.id}`}
      className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-2xl transition group"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute top-4 right-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">
            📍 {listing.city} — {listing.district}
          </span>

          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            {listing.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-800">{listing.title}</h3>

          <p className="text-blue-600 font-bold text-lg">{listing.price}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {listing.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Details */}
        <div className="flex items-center gap-4 text-sm text-slate-500 border-t pt-4">
          <span>🛏️ {listing.bedrooms}</span>

          <span>🛁 {listing.bathrooms}</span>

          <span>📐 {listing.area} م²</span>
        </div>
      </div>
    </Link>
  );
}
