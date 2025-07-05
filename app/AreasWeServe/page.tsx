export const metadata = {
  title: "Areasweserve",
  description: "Areasweserve page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, MapPin, Clock, Truck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AreasWeServe = () => {
  const serviceAreas = [
    {
      region: "Washington DC",
      areas: ["Downtown DC", "Capitol Hill", "Dupont Circle", "Georgetown", "Adams Morgan", "Foggy Bottom"],
      description: "Full laser engraving services throughout the nation's capital"
    },
    {
      region: "Northern Virginia",
      areas: ["Arlington", "Alexandria", "Fairfax", "Loudoun County", "Prince William County", "Falls Church"],
      description: "Comprehensive coverage of Northern VA business districts"
    },
    {
      region: "Maryland Suburbs",
      areas: ["Montgomery County", "Prince George's County", "Bethesda", "Silver Spring", "Rockville", "Gaithersburg"],
      description: "Serving Maryland's major business centers and suburbs"
    },
    {
      region: "Extended DC Metro",
      areas: ["Manassas", "Leesburg", "Herndon", "Reston", "Tysons Corner", "College Park"],
      description: "Expanded service area for larger commercial projects"
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
              Areas We Serve
              <span className="block text-spark-gold">DC Metro Coverage</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional laser engraving services throughout Washington DC Metro Area, Maryland, Virginia, and surrounding regions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Coverage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sparks & Marks provides laser engraving services across the entire DC Metro Area with fast, reliable delivery and pickup options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-xl">{area.region}</CardTitle>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {area.areas.map((location, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground">{location}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Regional Service
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Local expertise with regional coverage for all your laser engraving needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Fast Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Same-day and next-day service available for urgent projects throughout the DC Metro Area.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Delivery & Pickup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Free delivery and pickup for orders over $100 within our primary service areas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Local Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep understanding of local business needs and regulations across DC, MD, and VA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Zones */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Service Zone Details
            </h2>
            
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Primary Service Zone</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Washington DC, Arlington, Alexandria, Bethesda, Silver Spring, Rockville, and Fairfax.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-foreground">Same-day service available</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-foreground">Free delivery over $100</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-foreground">On-site consultation available</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Extended Service Zone</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Loudoun County, Prince William County, Montgomery County, and Prince George's County.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-foreground">1-2 day turnaround</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-foreground">Delivery available for larger orders</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-foreground">Bulk project specialists</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serving Your Area
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your laser engraving project and learn about service options in your specific location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Area-Specific Quote
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

export default AreasWeServe;