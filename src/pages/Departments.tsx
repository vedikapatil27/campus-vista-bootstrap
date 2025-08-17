import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Laptop, 
  FlaskConical, 
  Calculator, 
  Palette, 
  Stethoscope, 
  Scale,
  Globe,
  BookOpen 
} from "lucide-react";

const Departments = () => {
  const departments = [
    {
      icon: Laptop,
      name: "Computer Science & IT",
      description: "Cutting-edge programs in software development, cybersecurity, artificial intelligence, and data science.",
      courses: ["Software Engineering", "Data Science", "Cybersecurity", "AI & Machine Learning"],
      color: "bg-blue-500"
    },
    {
      icon: FlaskConical,
      name: "Engineering",
      description: "Comprehensive engineering programs with state-of-the-art laboratories and industry partnerships.",
      courses: ["Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Chemical Engineering"],
      color: "bg-green-500"
    },
    {
      icon: Calculator,
      name: "Business & Management",
      description: "Preparing future business leaders with practical skills and strategic thinking capabilities.",
      courses: ["Business Administration", "Marketing", "Finance", "Human Resources"],
      color: "bg-purple-500"
    },
    {
      icon: Stethoscope,
      name: "Health Sciences",
      description: "Training healthcare professionals with hands-on clinical experience and modern facilities.",
      courses: ["Nursing", "Medical Technology", "Physical Therapy", "Public Health"],
      color: "bg-red-500"
    },
    {
      icon: Palette,
      name: "Arts & Design",
      description: "Fostering creativity and artistic expression through innovative programs and modern studios.",
      courses: ["Fine Arts", "Graphic Design", "Interior Design", "Digital Media"],
      color: "bg-pink-500"
    },
    {
      icon: Scale,
      name: "Law & Social Sciences",
      description: "Developing critical thinking and analytical skills for future legal and social professionals.",
      courses: ["Law", "Political Science", "Psychology", "Sociology"],
      color: "bg-indigo-500"
    },
    {
      icon: Globe,
      name: "International Studies",
      description: "Preparing global citizens with comprehensive understanding of international affairs and cultures.",
      courses: ["International Relations", "Languages", "Cultural Studies", "Global Economics"],
      color: "bg-teal-500"
    },
    {
      icon: BookOpen,
      name: "Liberal Arts & Humanities",
      description: "Broad-based education fostering critical thinking, communication, and cultural awareness.",
      courses: ["English Literature", "History", "Philosophy", "Creative Writing"],
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Departments</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Explore our diverse range of academic departments, each offering world-class education 
              and preparing students for successful careers in their chosen fields.
            </p>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className={`inline-flex p-4 rounded-full ${dept.color} text-white mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                      <dept.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                      {dept.description}
                    </CardDescription>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-2 text-foreground">Popular Courses:</h4>
                      <div className="flex flex-wrap gap-1">
                        {dept.courses.map((course, courseIndex) => (
                          <span 
                            key={courseIndex}
                            className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Explore Department
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose from our comprehensive range of academic programs and take the first step 
              towards your successful future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Apply Now</Button>
              <Button size="lg" variant="outline">Schedule Campus Tour</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Departments;