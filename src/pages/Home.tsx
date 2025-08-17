import Hero from "@/components/home/Hero";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedPrograms />
      </main>
      <Footer />
    </div>
  );
};

export default Home;