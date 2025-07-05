export const metadata = {
  title: "Agriculture",
  description: "Agriculture page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Tractor, Tag, Wheat, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Agriculture = () => {
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
              Agriculture Equipment Tags
              <span className="block text-spark-gold">DC Metro Farms</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Farm equipment laser engraving, livestock tags, and agricultural signage for DC Metro Area, Maryland, and Virginia farms.
            </p>
            <Button variant="spark" size="lg">
              Get Agriculture Quote
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
                Agricultural Laser Engraving Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Durable, weather-resistant laser engraving for farm equipment, livestock identification, and agricultural operations throughout the DC Metro Area and surrounding agricultural regions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Equipment Tags</h3>
                    <p className="text-muted-foreground">Tractor plates, machinery identification, and equipment marking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Livestock Tags</h3>
                    <p className="text-muted-foreground">Ear tags, identification markers, and breeding records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Farm Signage</h3>
                    <p className="text-muted-foreground">Property signs, gate markers, and field identification</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Tractor className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Equipment Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Durable machinery and equipment identification</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Tag className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Livestock ID</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Animal identification and tracking systems</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Wheat className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Farm Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Property and field identification signage</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Tractor className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Safety Labels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Agricultural safety and warning labels</p>
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
            Durable Solutions for Farm Operations
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today for weather-resistant agricultural laser engraving in the DC Metro Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Agriculture Quote
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

export default Agriculture;