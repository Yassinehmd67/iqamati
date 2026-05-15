import { Listing } from "@/types/listing";

type Props = {
  listing: Listing;
};

export default function ListingDetail({ listing }: Props) {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm">
      {/* Image */}
      <div className="h-[450px] overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main */}
        <div className="lg:col-span-2">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-3">{listing.title}</h1>

              <p className="text-slate-500 text-lg">
                📍 {listing.city} — {listing.district}
              </p>
            </div>

            <div className="text-blue-600 text-3xl font-bold">
              {listing.price}
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-slate-100 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">🛏️</div>

              <div className="font-bold">{listing.bedrooms}</div>

              <div className="text-sm text-slate-500">غرف</div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">🛁</div>

              <div className="font-bold">{listing.bathrooms}</div>

              <div className="text-sm text-slate-500">حمامات</div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">📐</div>

              <div className="font-bold">{listing.area}</div>

              <div className="text-sm text-slate-500">متر مربع</div>
            </div>

            <div className="bg-slate-100 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-2">🏷️</div>

              <div className="font-bold">{listing.type}</div>

              <div className="text-sm text-slate-500">نوع العرض</div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {listing.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">الوصف</h2>

            <p className="text-slate-600 leading-8">
              شقة جميلة ومشمسة في موقع ممتاز، قريبة من جميع الخدمات والمرافق،
              مناسبة للعائلات وتتوفر على تشطيب عصري.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside>
          <div className="bg-slate-100 rounded-[2rem] p-6 sticky top-24">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">تواصل الآن</h3>

              <p className="text-slate-500">تواصل مباشرة مع صاحب العرض</p>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold text-lg">
                💬 واتساب
              </button>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg">
                📞 اتصال
              </button>

              <button className="w-full border border-slate-300 hover:bg-white py-4 rounded-2xl font-bold">
                📅 طلب زيارة
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
