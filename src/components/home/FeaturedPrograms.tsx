import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Laptop, FlaskConical, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedPrograms = () => {
  const programs = [
    {
      icon: Laptop,
      title: "Computer Science",
      description: "Cutting-edge technology programs preparing students for the digital future.",
      duration: "4 Years",
      color: "bg-blue-500"
    },
    {
      icon: FlaskConical,
      title: "Engineering",
      description: "Innovative engineering programs with hands-on laboratory experience.",
      duration: "4 Years",
      color: "bg-green-500"
    },
    {
      icon: Calculator,
      title: "Business Administration",
      description: "Comprehensive business programs with real-world applications.",
      duration: "3 Years",
      color: "bg-purple-500"
    },
    {
      icon: GraduationCap,
      title: "Liberal Arts",
      description: "Broad-based education fostering critical thinking and creativity.",
      duration: "4 Years",
      color: "bg-orange-500"
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular academic programs designed to prepare you for success in your chosen career path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className={`inline-flex p-3 rounded-full ${program.color} text-white mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <program.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Duration: {program.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  {program.description}
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" asChild>
            <Link to="/courses">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;