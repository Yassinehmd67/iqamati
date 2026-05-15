import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSearch from "@/components/home/HeroSearch";
import CategoryButtons from "@/components/home/CategoryButtons";
import FeaturedListings from "@/components/home/FeaturedListings";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSearch />

      <CategoryButtons />

      <FeaturedListings />

      <Footer />
    </main>
  );
}
