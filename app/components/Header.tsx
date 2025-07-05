import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Zap, Phone, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/c25e1bad-92a2-4983-be7d-f4bd2cf71025.png" 
              alt="Sparks & Marks Laser Engraving" 
              className="h-20 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/events-occasions" className="text-foreground hover:text-primary transition-colors">Events</Link>
            <Link to="/areas-we-serve" className="text-foreground hover:text-primary transition-colors">Areas</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground font-medium">Call Now: (240) 324-7110</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <a href="https://portal.sparksandmarks.com" target="_blank" rel="noopener noreferrer">Portal</a>
              </Button>
              <Button variant="spark" size="sm" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link 
                    to="/" 
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/services" 
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/portfolio" 
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </Link>
                  <Link 
                    to="/blog" 
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/events-occasions" 
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Events
                  </Link>
                  <Link 
                    to="/areas-we-serve" 
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Areas
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-foreground hover:text-primary transition-colors text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm mb-4">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-foreground font-medium">Call Now: (240) 324-7110</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="https://portal.sparksandmarks.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Portal</a>
                      </Button>
                      <Button variant="spark" size="sm" className="w-full" asChild>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
                      </Button>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;