import { Zap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-spark rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sparks & Marks</h3>
                <p className="text-sm text-background/70">Laser Engraving</p>
              </div>
            </div>
            <p className="text-background/80 mb-4">
              Professional laser engraving and cutting services on wood, metal, glass serving Washington DC Metro Area, Maryland, Virginia, and Northern VA businesses.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-spark-orange" />
                <span>(240) 324-7110</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-spark-orange" />
                <span>info@sparksandmarks.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-spark-orange" />
                <span>Washington DC Metro Area</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/services" className="hover:text-background transition-colors">All Services</a></li>
              <li><a href="/services/custom-business-signs" className="hover:text-background transition-colors">Custom Business Signs</a></li>
              <li><a href="/services/awards-recognition" className="hover:text-background transition-colors">Awards & Recognition</a></li>
              <li><a href="/events-occasions" className="hover:text-background transition-colors">Events & Occasions</a></li>
              <li><a href="/portfolio" className="hover:text-background transition-colors">Portfolio</a></li>
              <li><a href="/blog" className="hover:text-background transition-colors">Blog & Tips</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/industries/medical-engraving" className="hover:text-background transition-colors">Medical Device Engraving</a></li>
              <li><a href="/industries/professional-office-signs" className="hover:text-background transition-colors">Professional Office Signs</a></li>
              <li><a href="/industries/restaurant-engraving" className="hover:text-background transition-colors">Restaurant Signage</a></li>
              <li><a href="/industries/real-estate" className="hover:text-background transition-colors">Real Estate</a></li>
              <li><a href="/industries/industrial" className="hover:text-background transition-colors">Industrial Marking</a></li>
              <li><a href="/industries/technology" className="hover:text-background transition-colors">Technology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="/areas-we-serve" className="hover:text-background transition-colors">Areas We Serve</a></li>
              <li><a href="/portfolio" className="hover:text-background transition-colors">Our Work</a></li>
              <li><a href="/blog" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="/events-occasions" className="hover:text-background transition-colors">Events</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-background/60">
              © 2024 Sparks & Marks Laser Engraving. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-sm text-background/60 hover:text-background transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-sm text-background/60 hover:text-background transition-colors">Terms of Service</a>
              <a href="/contact" className="text-sm text-background/60 hover:text-background transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;