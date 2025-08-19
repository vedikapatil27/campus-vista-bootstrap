import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, User } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DYPSN College</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              For over 50 years, DYPSN College has been committed to providing exceptional education 
              and fostering academic excellence in a supportive community environment.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary text-primary-foreground mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide transformative educational experiences that empower students to become 
                    innovative leaders, critical thinkers, and responsible global citizens who contribute 
                    meaningfully to society and their communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-secondary text-secondary-foreground mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Eye className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be recognized as a premier institution of higher learning that sets the standard 
                    for academic excellence, innovation, and community engagement while preparing 
                    students for the challenges of tomorrow.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary text-primary-foreground mb-4 mx-auto">
                  <User className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl">Principal's Message</CardTitle>
                <CardDescription className="text-lg">Dr. Sarah Johnson, Principal</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                  "At DYPSN College, we believe that education is not just about acquiring knowledge, 
                  but about developing the skills, values, and mindset necessary to thrive in an 
                  ever-changing world. Our dedicated faculty and staff are committed to nurturing 
                  each student's potential and helping them achieve their dreams."
                </blockquote>
                <p className="text-muted-foreground">
                  Welcome to Vista College, where your journey to excellence begins. Together, 
                  we will shape the leaders of tomorrow and create a brighter future for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* College Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">DYPSN College by Numbers</h2>
              <p className="text-muted-foreground">Our achievements speak for themselves</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">300+</div>
                <div className="text-muted-foreground">Faculty Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25,000+</div>
                <div className="text-muted-foreground">Alumni Worldwide</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;