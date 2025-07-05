export const metadata = {
  title: "Restaurantengraving",
  description: "Restaurantengraving page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Utensils, Coffee, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const RestaurantEngraving = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Restaurant Laser Engraving
              <span className="block text-spark-gold">DC Metro Dining</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Menu boards, table numbers, and promotional signage laser cut for Washington DC Metro Area restaurants. Enhance your dining experience with custom engraved elements.
            </p>
            <Button variant="spark" size="lg">
              Get Restaurant Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Custom Restaurant Signage & Décor
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your restaurant's atmosphere with custom laser-engraved elements. Sparks & Marks creates distinctive signage and décor that enhances the dining experience for DC Metro Area restaurants, cafes, and hospitality venues.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Custom Menu Boards</h3>
                    <p className="text-muted-foreground">Elegant wooden and acrylic menu displays with laser-engraved text</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Table Numbers & Tent Cards</h3>
                    <p className="text-muted-foreground">Professional table identification and promotional displays</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Restaurant Signage</h3>
                    <p className="text-muted-foreground">Entrance signs, restroom signs, and wayfinding elements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Promotional Materials</h3>
                    <p className="text-muted-foreground">Special event signs, wine lists, and branded decorative elements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Utensils className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Menu Displays</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Beautiful wooden and acrylic menu boards with changeable elements</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Coffee className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Café Signage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Coffee shop signs, daily specials, and beverage menus</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Table Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Table numbers, reservation signs, and dining room organization</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Utensils className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Bar Displays</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Wine lists, cocktail menus, and bar signage</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Types */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Restaurant Types We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From fine dining to casual cafes, we create custom signage for every type of restaurant in the DC Metro Area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg">
              <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Fine Dining</h3>
              <p className="text-muted-foreground text-sm">Elegant menu boards and sophisticated table elements</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg">
              <Coffee className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Cafés & Bistros</h3>
              <p className="text-muted-foreground text-sm">Coffee shop menus and casual dining signage</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Fast Casual</h3>
              <p className="text-muted-foreground text-sm">Quick service menus and ordering displays</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg">
              <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Bars & Pubs</h3>
              <p className="text-muted-foreground text-sm">Beer lists, cocktail menus, and bar signage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Popular Restaurant Products
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Menu Boards</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Daily specials boards</li>
                <li>• Wine and cocktail menus</li>
                <li>• Digital menu alternatives</li>
                <li>• Changeable letter boards</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Table Elements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Table number stands</li>
                <li>• Reservation signs</li>
                <li>• Tent cards for promotions</li>
                <li>• Condiment station labels</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Wayfinding Signs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Restroom directional signs</li>
                <li>• Entrance and exit signs</li>
                <li>• Dining area indicators</li>
                <li>• Accessibility signage</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Promotional Items</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Happy hour signs</li>
                <li>• Special event displays</li>
                <li>• Seasonal promotions</li>
                <li>• Social media displays</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Branding Elements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Logo displays</li>
                <li>• Welcome signs</li>
                <li>• Mission statement boards</li>
                <li>• Award displays</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Operational Signs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hours of operation</li>
                <li>• WiFi password displays</li>
                <li>• Payment method signs</li>
                <li>• Health department notices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Enhance Your Restaurant's Atmosphere
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today for custom restaurant signage and décor that elevates your DC Metro Area dining establishment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Restaurant Quote
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RestaurantEngraving;