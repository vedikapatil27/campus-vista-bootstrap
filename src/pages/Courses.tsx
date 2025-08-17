import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Bachelor of Computer Science",
      description: "Comprehensive program covering software development, algorithms, and emerging technologies.",
      duration: "4 Years",
      capacity: "120 Students",
      rating: "4.8",
      category: "Technology",
      level: "Undergraduate",
      highlights: ["Industry Internships", "Research Projects", "Tech Certifications"]
    },
    {
      title: "Master of Business Administration",
      description: "Advanced business program focusing on leadership, strategy, and global business practices.",
      duration: "2 Years",
      capacity: "60 Students", 
      rating: "4.9",
      category: "Business",
      level: "Graduate",
      highlights: ["Case Studies", "Industry Mentorship", "Global Exchange"]
    },
    {
      title: "Bachelor of Engineering",
      description: "Multi-disciplinary engineering program with specializations in various engineering fields.",
      duration: "4 Years",
      capacity: "200 Students",
      rating: "4.7",
      category: "Engineering",
      level: "Undergraduate",
      highlights: ["Laboratory Work", "Industry Projects", "Professional Training"]
    },
    {
      title: "Bachelor of Fine Arts",
      description: "Creative program developing artistic skills and cultural understanding through practical projects.",
      duration: "3 Years",
      capacity: "80 Students",
      rating: "4.6",
      category: "Arts",
      level: "Undergraduate",
      highlights: ["Studio Work", "Gallery Exhibitions", "Artist Residencies"]
    },
    {
      title: "Bachelor of Nursing",
      description: "Comprehensive healthcare program combining theoretical knowledge with clinical practice.",
      duration: "4 Years",
      capacity: "100 Students",
      rating: "4.8",
      category: "Health",
      level: "Undergraduate",
      highlights: ["Clinical Rotations", "Simulation Labs", "Community Health"]
    },
    {
      title: "Master of Data Science",
      description: "Advanced program in data analysis, machine learning, and big data technologies.",
      duration: "2 Years",
      capacity: "40 Students",
      rating: "4.9",
      category: "Technology",
      level: "Graduate",
      highlights: ["Real Projects", "Industry Tools", "Research Thesis"]
    }
  ];

  const categories = ["All", "Technology", "Business", "Engineering", "Arts", "Health"];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Discover our comprehensive range of undergraduate and graduate programs designed 
              to prepare you for success in your chosen career path.
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
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{course.category}</Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Course Info */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.capacity}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        {course.rating}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-2">Program Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.highlights.map((highlight, highlightIndex) => (
                          <span 
                            key={highlightIndex}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Apply Now
                      </Button>
                      <Button size="sm" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have chosen Vista College to pursue their academic 
              and career goals. Start your application today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start Application</Button>
              <Button size="lg" variant="outline">Download Brochure</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;