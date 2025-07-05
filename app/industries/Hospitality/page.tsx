export const metadata = {
  title: "Hospitality",
  description: "Hospitality page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Hotel, Bed, Coffee, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hospitality = () => {
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
              Hospitality Custom Signs
              <span className="block text-spark-gold">DC Metro Hotels</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Hotel room signs, guest amenities, and promotional displays laser engraved for Washington DC Metro Area hospitality venues.
            </p>
            <Button variant="spark" size="lg">
              Get Hospitality Quote
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
                Hospitality Signage & Guest Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Enhance guest experience with elegant laser-engraved signage, room amenities, and promotional displays for hotels, resorts, and hospitality venues throughout the DC Metro Area.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Room Signage</h3>
                    <p className="text-muted-foreground">Door plaques, room numbers, and guest information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Guest Amenities</h3>
                    <p className="text-muted-foreground">Welcome gifts, key cards, and branded items</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Wayfinding</h3>
                    <p className="text-muted-foreground">Lobby signs, directional markers, and facility maps</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Hotel className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Hotel Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Lobby displays and hotel identification signage</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Bed className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Room Numbers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Elegant room identification and door plaques</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Coffee className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Amenity Labels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Guest service labels and facility markers</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Hotel className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Event Signage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Conference and event promotional displays</p>
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
            Elevate Your Guest Experience
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today for custom hospitality signage in the DC Metro Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Hospitality Quote
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

export default Hospitality;