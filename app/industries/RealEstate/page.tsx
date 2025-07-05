export const metadata = {
  title: "Realestate",
  description: "Realestate page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, MapPin, Key, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const RealEstate = () => {
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
              Real Estate Laser Engraving
              <span className="block text-spark-gold">DC Metro Properties</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Property signs, office displays, and marketing materials laser engraved for Washington DC Metro Area real estate professionals.
            </p>
            <Button variant="spark" size="lg">
              Get Real Estate Quote
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
                Real Estate Marketing & Signage
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stand out in the competitive DC Metro real estate market with custom laser-engraved signs, awards, and marketing materials that showcase your professionalism and attention to detail.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Property Signs</h3>
                    <p className="text-muted-foreground">For Sale, Open House, and property identification signs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Agent Nameplates</h3>
                    <p className="text-muted-foreground">Professional desk signs and office displays</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Award Plaques</h3>
                    <p className="text-muted-foreground">Sales achievement and recognition awards</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Home className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Property Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Custom property marketing and identification signs</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Agent Displays</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional agent nameplates and office signs</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Key className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Open House</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Open house signs and directional markers</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Home className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Office Branding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Brokerage signs and office identification</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Enhance Your Real Estate Brand
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today for custom real estate signage and marketing materials in the DC Metro Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Real Estate Quote
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

export default RealEstate;