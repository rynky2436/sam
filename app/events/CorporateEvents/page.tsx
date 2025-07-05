export const metadata = {
  title: "Corporateevents",
  description: "Corporateevents page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Building2, Award, Users, MapPin, Badge } from "lucide-react";
import { Link } from "react-router-dom";

const CorporateEvents = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
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
              Corporate Event Laser Engraving Services
              <span className="block text-spark-gold">Washington DC's Premier Business Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional laser engraving for corporate events, conferences, trade shows, and employee recognition in the DC Metro Area. Custom business signage, awards, and promotional items for companies in Washington DC, Northern Virginia, and Maryland.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Corporate Laser Engraving in Washington DC
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks delivers premium laser engraving services for corporate events throughout the DC Metro Area. From employee recognition awards to conference signage, we help businesses make lasting impressions with precision-engraved materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Conference & Trade Show Signage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Professional laser engraved signage for conferences, trade shows, and corporate events in DC.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Directional wayfinding signs</li>
                  <li>• Booth identification plaques</li>
                  <li>• Speaker podium nameplates</li>
                  <li>• Sponsor recognition displays</li>
                  <li>• Room identification signs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Employee Recognition Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser engraved awards and plaques for employee recognition programs and corporate achievements.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Employee of the month awards</li>
                  <li>• Service anniversary plaques</li>
                  <li>• Achievement recognition trophies</li>
                  <li>• Retirement commemoration gifts</li>
                  <li>• Performance milestone awards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Corporate Gifts & Promotional Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved corporate gifts and promotional products that showcase your brand professionally.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Executive desk accessories</li>
                  <li>• Branded business card holders</li>
                  <li>• Custom corporate awards</li>
                  <li>• Client appreciation gifts</li>
                  <li>• Holiday corporate presents</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Badge className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Professional Name Badges & ID Plates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">High-quality laser engraved name badges and identification plates for corporate professionals.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Executive name badges</li>
                  <li>• Department identification plates</li>
                  <li>• Conference attendee badges</li>
                  <li>• Magnetic name tags</li>
                  <li>• Security ID plates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Event Wayfinding & Directional Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser engraved wayfinding and directional signage for corporate facilities and events.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Floor directory signs</li>
                  <li>• Meeting room markers</li>
                  <li>• Parking lot identification</li>
                  <li>• Emergency exit signs</li>
                  <li>• Facility maps and guides</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Corporate Branding Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved corporate branding items that reinforce your company identity and professionalism.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Logo engraved reception signs</li>
                  <li>• Company milestone displays</li>
                  <li>• Corporate history timelines</li>
                  <li>• Mission statement plaques</li>
                  <li>• Executive office nameplates</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Industry Applications */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Corporate Laser Engraving Applications by Industry</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Government & Federal Contractors</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Security clearance badges</li>
                  <li>• Department identification</li>
                  <li>• Award ceremonies</li>
                  <li>• Official recognition plaques</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technology & Software Companies</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Product launch signage</li>
                  <li>• Innovation awards</li>
                  <li>• Tech conference materials</li>
                  <li>• Startup milestone markers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Healthcare & Medical</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Medical facility signage</li>
                  <li>• Doctor identification plates</li>
                  <li>• Patient care awards</li>
                  <li>• Department directories</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Materials & Capabilities */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Professional-Grade Materials</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Stainless Steel & Aluminum</h4>
                    <p className="text-muted-foreground text-sm">Durable metal engraving for executive awards and permanent signage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Acrylic & Plexiglass</h4>
                    <p className="text-muted-foreground text-sm">Modern, clean appearance perfect for contemporary office environments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Premium Wood Finishes</h4>
                    <p className="text-muted-foreground text-sm">Elegant wood engraving for traditional corporate settings</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">DC Metro Area Service Locations</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Washington DC downtown business district</p>
                <p>• Northern Virginia corporate corridors</p>
                <p>• Bethesda and Rockville business parks</p>
                <p>• Arlington government contractors</p>
                <p>• Tysons Corner corporate centers</p>
                <p>• Alexandria business complexes</p>
                <p>• Silver Spring commercial areas</p>
              </div>
            </div>
          </div>

          {/* Corporate Benefits */}
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Why Choose Sparks & Marks for Corporate Laser Engraving?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Professional Service Standards</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fast turnaround for urgent corporate needs</li>
                  <li>• Bulk pricing for large corporate orders</li>
                  <li>• Account management for repeat clients</li>
                  <li>• Corporate invoicing and purchase orders</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Quality & Reliability</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Precision laser engraving technology</li>
                  <li>• Consistent quality across all orders</li>
                  <li>• Professional packaging and delivery</li>
                  <li>• Satisfaction guarantee on all work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateEvents;