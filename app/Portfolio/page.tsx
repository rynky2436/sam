export const metadata = {
  title: "Portfolio",
  description: "Portfolio page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import medicalImage from "@/assets/medical-engraving.jpg";
import professionalImage from "@/assets/professional-signs.jpg";
import restaurantImage from "@/assets/restaurant-engraving.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Medical Device Engraving",
      description: "Precision laser engraving for medical equipment identification and compliance labeling",
      image: medicalImage,
      category: "Medical",
      materials: "Stainless Steel, Aluminum"
    },
    {
      title: "Professional Office Signs",
      description: "Custom nameplates and office signage for professional environments",
      image: professionalImage,
      category: "Professional",
      materials: "Wood, Acrylic, Metal"
    },
    {
      title: "Restaurant Menu Boards",
      description: "Elegant menu displays and table numbers for hospitality businesses",
      image: restaurantImage,
      category: "Hospitality",
      materials: "Wood, Chalkboard, Acrylic"
    },
    {
      title: "Corporate Awards",
      description: "Recognition plaques and achievement awards for business ceremonies",
      image: professionalImage,
      category: "Corporate",
      materials: "Wood, Glass, Metal"
    },
    {
      title: "Industrial Safety Signs",
      description: "Durable safety signage and equipment identification for industrial facilities",
      image: medicalImage,
      category: "Industrial",
      materials: "Metal, Plastic, Aluminum"
    },
    {
      title: "Retail Display Signs",
      description: "Eye-catching promotional displays and product labeling for retail stores",
      image: restaurantImage,
      category: "Retail",
      materials: "Acrylic, Wood, Metal"
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
              <Link href="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Portfolio
              <span className="block text-spark-gold">DC Metro Laser Engraving</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Explore our gallery of custom laser engraving projects across Washington DC Metro Area, Maryland, and Virginia.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See examples of our precision laser engraving work on wood, metal, glass, and acrylic materials for businesses across all industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Materials:</strong> {item.materials}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Materials We Work With
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our advanced laser engraving equipment can handle a wide variety of materials with precision and consistency.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-spark p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Wood</h3>
                <p className="text-muted-foreground text-sm">Cherry, Oak, Maple, Bamboo, MDF</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-laser p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Metal</h3>
                <p className="text-muted-foreground text-sm">Aluminum, Stainless Steel, Brass, Copper</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-spark p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Glass</h3>
                <p className="text-muted-foreground text-sm">Tempered, Annealed, Mirrors, Drinkware</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-laser p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Acrylic</h3>
                <p className="text-muted-foreground text-sm">Clear, Colored, Frosted, Cast, Extruded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your laser engraving needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Custom Quote
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;