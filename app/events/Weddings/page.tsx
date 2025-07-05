export const metadata = {
  title: "Weddings",
  description: "Weddings page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Users, Camera, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Weddings = () => {
  const weddingServices = [
    {
      icon: Heart,
      title: "Ceremony Signage",
      description: "Welcome signs, seating charts, and altar decorations",
      items: ["Welcome to our wedding signs", "Seating chart displays", "Altar backdrop signs", "Aisle markers", "Unity candle stands"]
    },
    {
      icon: Users,
      title: "Reception Items",
      description: "Table numbers, place cards, and dining displays",
      items: ["Table numbers", "Place cards", "Menu displays", "Bar signs", "Dance floor signs"]
    },
    {
      icon: Camera,
      title: "Photo Opportunities",
      description: "Guest book alternatives and photo booth props",
      items: ["Photo booth props", "Guest book trees", "Signature frames", "Memory boxes", "Photo display stands"]
    },
    {
      icon: Gift,
      title: "Wedding Favors",
      description: "Personalized keepsakes for your guests",
      items: ["Engraved coasters", "Custom keychains", "Mini photo frames", "Bookmark favors", "Bottle openers"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6">
              <Link href="/events-occasions" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wedding Laser Engraving
              <span className="block text-spark-gold">DC Metro Weddings</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Create unforgettable wedding moments with custom laser engraved signage, favors, and keepsakes throughout the Washington DC Metro Area.
            </p>
            <Button variant="spark" size="lg">
              Plan Wedding Items
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Wedding Engraving Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From ceremony to reception, we create beautiful laser engraved items that make your special day perfect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {weddingServices.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="p-3 bg-gradient-spark rounded-lg w-fit mb-3">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Heart className="h-4 w-4 text-primary" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Wedding Items
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most requested laser engraved wedding items by DC Metro couples.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Welcome Signs</h3>
                <p className="text-muted-foreground">Beautiful wooden welcome signs with your names and wedding date</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Table Numbers</h3>
                <p className="text-muted-foreground">Elegant table numbers in wood, acrylic, or metal finishes</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardContent className="p-6">
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Guest Book Alternative</h3>
                <p className="text-muted-foreground">Unique signing trees and memory boxes for guest messages</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Make Your Wedding Day Perfect
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to discuss your wedding laser engraving needs and create memories that last forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Wedding Quote
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

export default Weddings;