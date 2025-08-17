import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FlaskConical, Dumbbell, Bed, Wifi, Users } from "lucide-react";
import libraryImg from "@/assets/library.jpg";
import labImg from "@/assets/lab.jpg";
import sportsImg from "@/assets/sports.jpg";

const Facilities = () => {
  const facilities = [
    {
      title: "Modern Library",
      description: "State-of-the-art library with over 100,000 books, digital resources, and quiet study spaces.",
      image: libraryImg,
      icon: BookOpen,
      features: ["100,000+ Books", "Digital Database", "Study Rooms", "24/7 Access", "Research Support"],
      capacity: "1,000 Students"
    },
    {
      title: "Science Laboratories",
      description: "Fully equipped laboratories for chemistry, physics, biology, and computer science experiments.",
      image: labImg,
      icon: FlaskConical,
      features: ["Modern Equipment", "Safety Protocols", "Research Facilities", "Expert Supervision", "Latest Technology"],
      capacity: "50 Students per Lab"
    },
    {
      title: "Sports Complex",
      description: "Comprehensive sports facilities including gymnasium, courts, and fitness center.",
      image: sportsImg,
      icon: Dumbbell,
      features: ["Indoor Gymnasium", "Tennis Courts", "Swimming Pool", "Fitness Center", "Outdoor Fields"],
      capacity: "500 Athletes"
    },
    {
      title: "Student Hostels",
      description: "Comfortable and secure accommodation facilities for both male and female students.",
      image: null,
      icon: Bed,
      features: ["Single & Shared Rooms", "24/7 Security", "Mess Facilities", "Wi-Fi Access", "Recreation Areas"],
      capacity: "2,000 Students"
    },
    {
      title: "IT Infrastructure",
      description: "Campus-wide high-speed internet, computer labs, and digital learning resources.",
      image: null,
      icon: Wifi,
      features: ["High-Speed Internet", "Computer Labs", "Digital Classrooms", "Online Learning", "Tech Support"],
      capacity: "5,000 Devices"
    },
    {
      title: "Student Center",
      description: "Hub for student activities, clubs, events, and social gatherings.",
      image: null,
      icon: Users,
      features: ["Event Halls", "Club Rooms", "Cafeteria", "Recreation Lounge", "Meeting Spaces"],
      capacity: "1,500 Students"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Campus Facilities</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Explore our world-class facilities designed to support your academic journey and 
              enhance your college experience with modern amenities and resources.
            </p>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {facilities.map((facility, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                      {facility.image ? (
                        <div 
                          className="h-64 md:h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                          style={{ backgroundImage: `url(${facility.image})` }}
                        />
                      ) : (
                        <div className="h-64 md:h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                          <facility.icon className="h-16 w-16 text-primary-foreground" />
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <facility.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {facility.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {facility.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0">
                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-sm mb-3 text-foreground">Key Features:</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {facility.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Capacity */}
                        <div className="mb-6">
                          <span className="text-sm font-medium text-foreground">Capacity: </span>
                          <span className="text-sm text-muted-foreground">{facility.capacity}</span>
                        </div>

                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facility Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Facility Highlights</h2>
              <p className="text-muted-foreground">Modern infrastructure supporting academic excellence</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Modern Classrooms</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Research Labs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Wi-Fi Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Campus Security</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience Our Campus</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take a tour of our state-of-the-art facilities and see how they support 
              your academic and personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Schedule Campus Tour</Button>
              <Button size="lg" variant="outline">Download Campus Map</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;