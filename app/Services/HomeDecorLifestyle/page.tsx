export const metadata = {
  title: "Homedecorlifestyle",
  description: "Homedecorlifestyle page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, Lightbulb, Frame, Palette, Sofa } from "lucide-react";
import { Link } from "react-router-dom";

const HomeDecorLifestyle = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6">
              <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Home Decor & Lifestyle Laser Engraving
              <span className="block text-spark-gold">Transform Your Living Space</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Enhance your home with custom laser engraved wall art, family signs, LED displays, and decorative items throughout the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Wall Art</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Laser cut and engraved wall art pieces for modern home decoration</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Family Name Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Personalized family signs and custom quote displays for your home</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>LED Acrylic Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Modern edge-lit LED acrylic signs for contemporary home lighting</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Sofa className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Home Organizers & Trays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Custom coasters, serving trays, and organizational solutions</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Frame className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Customized Mirrors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Laser engraved mirrors with custom designs and patterns</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeDecorLifestyle;