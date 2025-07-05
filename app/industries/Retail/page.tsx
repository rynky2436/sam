export const metadata = {
  title: "Retail",
  description: "Retail page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ShoppingBag, Tag, Store, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Retail = () => {
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
              Retail Store Displays
              <span className="block text-spark-gold">DC Metro Shopping</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Store displays, product labels, and promotional items laser cut on wood, metal, and glass for Washington DC Metro Area retailers.
            </p>
            <Button variant="spark" size="lg">
              Get Retail Quote
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
                Retail Display & Signage Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Enhance your retail environment with custom laser-engraved displays, product labels, and promotional materials that attract customers and boost sales in the competitive DC Metro retail market.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Product Displays</h3>
                    <p className="text-muted-foreground">Eye-catching product showcases and merchandising displays</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Store Signage</h3>
                    <p className="text-muted-foreground">Department signs, price displays, and wayfinding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Promotional Items</h3>
                    <p className="text-muted-foreground">Sale signs, seasonal displays, and marketing materials</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <ShoppingBag className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Product Labels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Custom product identification and pricing labels</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Tag className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Sale Displays</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Promotional sale signs and special offer displays</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Store className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Store Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Department identification and store directories</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <ShoppingBag className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Branding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Logo displays and brand identification elements</p>
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
            Transform Your Retail Space
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today for custom retail displays and signage in the DC Metro Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Retail Quote
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

export default Retail;