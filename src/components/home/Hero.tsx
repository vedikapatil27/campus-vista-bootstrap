import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroCampus from "@/assets/hero-campus.jpg";

const Hero = () => {
  const stats = [
    { icon: Users, label: "Students", value: "5,000+" },
    { icon: BookOpen, label: "Courses", value: "100+" },
    { icon: Award, label: "Awards", value: "50+" },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(30, 58, 138, 0.6) 100%), url(${heroCampus})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-secondary">DYPSN College</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Shaping minds, building futures. Experience world-class education 
            in a vibrant campus community where innovation meets tradition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" variant="hero">
              <Link to="/courses" className="flex items-center">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <stat.icon className="h-8 w-8 text-secondary" />
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;