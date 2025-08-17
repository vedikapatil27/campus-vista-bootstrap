import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User } from "lucide-react";

const Faculty = () => {
  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      department: "Administration",
      qualification: "Ph.D. in Educational Leadership",
      experience: "25+ years",
      specialization: "Educational Administration, Strategic Planning",
      email: "s.johnson@vistacollege.edu",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Prof. Michael Chen",
      position: "Head of Computer Science",
      department: "Computer Science",
      qualification: "Ph.D. in Computer Science",
      experience: "15 years",
      specialization: "Artificial Intelligence, Machine Learning",
      email: "m.chen@vistacollege.edu",
      phone: "+1 (555) 123-4568"
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Professor of Engineering",
      department: "Engineering",
      qualification: "Ph.D. in Mechanical Engineering",
      experience: "12 years",
      specialization: "Robotics, Automation Systems",
      email: "e.rodriguez@vistacollege.edu",
      phone: "+1 (555) 123-4569"
    },
    {
      name: "Prof. David Thompson",
      position: "Dean of Business",
      department: "Business Administration",
      qualification: "MBA, Ph.D. in Business",
      experience: "20 years",
      specialization: "Strategic Management, Entrepreneurship",
      email: "d.thompson@vistacollege.edu",
      phone: "+1 (555) 123-4570"
    },
    {
      name: "Dr. Lisa Wang",
      position: "Professor of Arts",
      department: "Fine Arts",
      qualification: "MFA, Ph.D. in Art History",
      experience: "10 years",
      specialization: "Digital Arts, Contemporary Art",
      email: "l.wang@vistacollege.edu",
      phone: "+1 (555) 123-4571"
    },
    {
      name: "Dr. James Wilson",
      position: "Head of Health Sciences",
      department: "Health Sciences",
      qualification: "MD, Ph.D. in Public Health",
      experience: "18 years",
      specialization: "Community Health, Healthcare Management",
      email: "j.wilson@vistacollege.edu",
      phone: "+1 (555) 123-4572"
    },
    {
      name: "Prof. Maria Garcia",
      position: "Professor of Languages",
      department: "International Studies",
      qualification: "Ph.D. in Linguistics",
      experience: "14 years",
      specialization: "Multilingual Education, Cultural Studies",
      email: "m.garcia@vistacollege.edu",
      phone: "+1 (555) 123-4573"
    },
    {
      name: "Dr. Robert Brown",
      position: "Professor of Law",
      department: "Law & Social Sciences",
      qualification: "JD, Ph.D. in Legal Studies",
      experience: "22 years",
      specialization: "Constitutional Law, Human Rights",
      email: "r.brown@vistacollege.edu",
      phone: "+1 (555) 123-4574"
    }
  ];

  const departments = [
    "All Departments",
    "Administration", 
    "Computer Science", 
    "Engineering", 
    "Business Administration",
    "Fine Arts",
    "Health Sciences",
    "International Studies",
    "Law & Social Sciences"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Meet our distinguished faculty members who bring years of experience, expertise, 
              and passion for teaching to create an exceptional learning environment.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((dept, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="transition-all duration-200"
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.map((member, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    {/* Avatar Placeholder */}
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <User className="h-12 w-12 text-primary-foreground" />
                    </div>
                    
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.position}
                    </CardDescription>
                    <Badge variant="outline" className="w-fit mx-auto mt-2">
                      {member.department}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Qualifications */}
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">Qualification</h4>
                      <p className="text-sm text-muted-foreground">{member.qualification}</p>
                    </div>

                    {/* Experience */}
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">Experience</h4>
                      <p className="text-sm text-muted-foreground">{member.experience}</p>
                    </div>

                    {/* Specialization */}
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-1">Specialization</h4>
                      <p className="text-sm text-muted-foreground">{member.specialization}</p>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-4 border-t space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Contact Faculty
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Faculty Excellence</h2>
              <p className="text-muted-foreground">Committed to academic excellence and student success</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">300+</div>
                <div className="text-muted-foreground">Faculty Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Hold Advanced Degrees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15:1</div>
                <div className="text-muted-foreground">Student-Faculty Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Years Avg. Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Academic Community</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience personalized learning and mentorship from our world-class faculty members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Meet Our Faculty</Button>
              <Button size="lg" variant="outline">Schedule a Meeting</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;