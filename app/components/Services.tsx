import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import productsImage from "@/assets/laser-products.jpg";
import { Layers, Scissors, Sparkles, Package, ArrowRight, Grape } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sparks & Marks Laser Engraving Washington DC Metro Area
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located in the Washington DC Metro Area, we specialize in precision laser engraving and cutting services on wood, metal, glass, and all materials for businesses throughout Maryland, DC, Virginia, and Northern VA.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={productsImage} 
              alt="Laser engraved products showcase"
              className="rounded-lg shadow-elegant w-full"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Materials We Laser Engrave</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-spark rounded-lg">
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-foreground">Wood laser engraving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-spark rounded-lg">
                    <Scissors className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-foreground">Metal laser cutting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-spark rounded-lg">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-foreground">Glass laser etching</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-spark rounded-lg">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-foreground">Acrylic laser cutting</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Service Areas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Washington DC Metro Area</li>
                <li>• Maryland (MD) statewide</li>
                <li>• Northern Virginia (VA)</li>
                <li>• Washington DC businesses</li>
                <li>• DMV area coverage</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Business Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom business signs</li>
                <li>• Industrial laser marking</li>
                <li>• Promotional laser items</li>
                <li>• Awards and plaques</li>
                <li>• Equipment identification</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="group hover:shadow-spark transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 bg-gradient-spark rounded-lg w-fit mb-2">
                <Package className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Custom Business Signs</CardTitle>
              <CardDescription>
                Professional laser engraved signage on wood, metal, glass for DC Metro Area businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" className="group-hover:border-primary" asChild>
                <Link to="/services/custom-business-signs">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-spark transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 bg-gradient-laser rounded-lg w-fit mb-2">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Awards & Recognition</CardTitle>
              <CardDescription>
                Laser engraved achievement awards and recognition items for corporate programs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" className="group-hover:border-primary" asChild>
                <Link to="/services/awards-recognition">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-spark transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 bg-gradient-spark rounded-lg w-fit mb-2">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Promotional Items</CardTitle>
              <CardDescription>
                Branded merchandise production and marketing materials laser cut on all materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" className="group-hover:border-primary" asChild>
                <Link to="/services/packaging-merchandising">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-spark transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="p-3 bg-gradient-laser rounded-lg w-fit mb-2">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Personalized Gifts</CardTitle>
              <CardDescription>
                Custom laser engraved gifts on wood, metal, glass for special occasions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm" className="group-hover:border-primary" asChild>
                <Link to="/services/personalization-gifts">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Featured Partnership */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Vinery & Microbrewery</h3>
            <p className="text-lg text-muted-foreground">
              Visit our sister company for handcrafted wines and artisanal beers
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="p-4 bg-gradient-to-br from-purple-600 to-amber-600 rounded-lg w-fit mx-auto mb-4">
                  <Grape className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Barrel & Vine Designs</CardTitle>
                <CardDescription className="text-base">
                  Discover our premium wines and craft beers, featuring custom laser-engraved bottles and taps
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  variant="spark" 
                  size="lg" 
                  className="w-full group-hover:scale-105 transition-transform"
                  asChild
                >
                  <a 
                    href="https://www.barrelvinedesigns.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Our Vinery & Brewery
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;