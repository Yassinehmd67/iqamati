import { Listing } from "@/types/listing";

export const mockListings: Listing[] = [
  {
    id: 1,
    title: "شقة مشمسة قرب الترام",
    price: "720,000 د.م",
    city: "الرباط",
    district: "أكدال",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    type: "بيع",
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
    tags: ["🕌 مسجد", "🏫 مدرسة", "🚋 ترام"],
  },

  {
    id: 2,
    title: "شقة للكراء مفروشة",
    price: "4,500 د.م",
    city: "الدار البيضاء",
    district: "المعاريف",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    type: "كراء",
    bedrooms: 2,
    bathrooms: 1,
    area: 80,
    tags: ["💊 صيدلية", "🛒 سوق", "🚗 كراج"],
  },

  {
    id: 3,
    title: "فيلا عصرية بمسبح",
    price: "3,200,000 د.م",
    city: "طنجة",
    district: "مالاباطا",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    type: "بيع",
    bedrooms: 5,
    bathrooms: 4,
    area: 350,
    tags: ["🌊 البحر", "🏊 مسبح", "🚘 موقف سيارات"],
  },
];