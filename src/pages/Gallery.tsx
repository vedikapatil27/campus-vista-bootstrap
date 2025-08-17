import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import libraryImg from "@/assets/library.jpg";
import labImg from "@/assets/lab.jpg";
import sportsImg from "@/assets/sports.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Campus", "Facilities", "Events", "Students", "Academics"];

  const galleryImages = [
    {
      src: heroCampus,
      alt: "Vista College Campus",
      category: "Campus",
      title: "Main Campus Building"
    },
    {
      src: libraryImg,
      alt: "College Library",
      category: "Facilities", 
      title: "Modern Library"
    },
    {
      src: labImg,
      alt: "Science Laboratory",
      category: "Facilities",
      title: "Science Laboratory"
    },
    {
      src: sportsImg,
      alt: "Sports Complex",
      category: "Facilities",
      title: "Sports Complex"
    },
    // Additional placeholder images for demonstration
    {
      src: heroCampus,
      alt: "Graduation Ceremony",
      category: "Events",
      title: "Graduation Day 2024"
    },
    {
      src: libraryImg,
      alt: "Students Studying",
      category: "Students",
      title: "Study Session"
    },
    {
      src: labImg,
      alt: "Research Work",
      category: "Academics",
      title: "Research Laboratory"
    },
    {
      src: sportsImg,
      alt: "Sports Event",
      category: "Events",
      title: "Annual Sports Meet"
    },
    {
      src: heroCampus,
      alt: "Campus Garden",
      category: "Campus",
      title: "Beautiful Gardens"
    },
    {
      src: libraryImg,
      alt: "Computer Lab",
      category: "Academics",
      title: "Computer Laboratory"
    },
    {
      src: labImg,
      alt: "Science Fair",
      category: "Events",
      title: "Science Exhibition"
    },
    {
      src: sportsImg,
      alt: "Student Activities",
      category: "Students",
      title: "Student Life"
    }
  ];

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Explore life at Vista College through our photo gallery showcasing campus facilities, 
              student activities, events, and memorable moments from our academic community.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className="transition-all duration-200"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
                  onClick={() => openLightbox(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-sm">{image.title}</h3>
                      <p className="text-xs text-white/80">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Capture the Moments</h2>
              <p className="text-muted-foreground">Documenting life and achievements at Vista College</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Photos Captured</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Events Documented</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Activities Showcased</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years of Memories</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Moments</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have photos from Vista College events or campus life? Share them with us and 
              become part of our visual story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Submit Photos</Button>
              <Button size="lg" variant="outline">Download Photos</Button>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;