export type Listing = {
  id: number;

  title: string;

  price: string;

  city: string;

  district: string;

  image: string;

  type: "بيع" | "كراء" | "مشروع" | "خدمة";

  bedrooms?: number;

  bathrooms?: number;

  area?: number;

  tags?: string[];
};