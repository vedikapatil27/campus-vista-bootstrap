import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="text-2xl font-bold">DYPSN College</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Empowering minds, shaping futures. DYPSN College has been a beacon of academic excellence 
              for over five decades, fostering innovation and nurturing the leaders of tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                About Us
              </Link>
              <Link to="/courses" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Courses
              </Link>
              <Link to="/faculty" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Faculty
              </Link>
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-secondary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Education Street, Academic City, AC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@dypsnacollege.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 DYPSN College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;