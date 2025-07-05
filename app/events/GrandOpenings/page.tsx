export const metadata = {
  title: "Grandopenings",
  description: "Grandopenings page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Star, Building2, Scissors, Users, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const GrandOpenings = () => {
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
              Grand Opening Laser Engraving Services
              <span className="block text-spark-gold">Launch Your Business in DC Metro Style</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Make your business launch unforgettable with custom laser engraved grand opening signage, ribbon cutting plaques, and promotional displays. Serving new businesses throughout Washington DC, Northern Virginia, and Maryland with professional opening ceremony engraving.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Grand Opening Laser Engraving in Washington DC
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks helps businesses make powerful first impressions with custom laser engraved grand opening materials. From ribbon cutting ceremonies to promotional displays, we create professional signage that launches your business with style throughout the DC Metro Area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Grand Opening Ceremony Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser engraved welcome signs and ceremony displays for your grand opening event.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• "Grand Opening" entrance signs</li>
                  <li>• Business name display boards</li>
                  <li>• Opening day welcome banners</li>
                  <li>• Special event announcement signs</li>
                  <li>• Photo backdrop displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Scissors className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Ribbon Cutting Ceremony Plaques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Commemorative laser engraved plaques to mark your ribbon cutting ceremony milestone.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Ribbon cutting commemoration plaques</li>
                  <li>• Opening date milestone markers</li>
                  <li>• Founder recognition displays</li>
                  <li>• Business milestone achievements</li>
                  <li>• Community partnership acknowledgments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Business Promotional Displays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Eye-catching laser engraved promotional displays to attract attention to your grand opening.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Service menu display boards</li>
                  <li>• Special opening promotions</li>
                  <li>• Business hours and contact info</li>
                  <li>• Product showcase displays</li>
                  <li>• "Now Open" announcement signs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Professional Business Card Displays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Elegant laser engraved displays for business cards, brochures, and marketing materials.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Business card holder stands</li>
                  <li>• Brochure display racks</li>
                  <li>• Contact information boards</li>
                  <li>• QR code display signs</li>
                  <li>• Social media promotion displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Welcome Banners & Guest Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Large welcome banners and guest registration materials for grand opening events.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Large format welcome banners</li>
                  <li>• VIP guest registration boards</li>
                  <li>• Community leader recognition</li>
                  <li>• Media and press displays</li>
                  <li>• Customer sign-up stations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Permanent Business Signage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved permanent signage to establish your business presence beyond opening day.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Outdoor business identification</li>
                  <li>• Entrance door signage</li>
                  <li>• Window display signs</li>
                  <li>• Parking and directional signs</li>
                  <li>• Safety and compliance displays</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Business Types */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Grand Opening Services by Business Type</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Retail & Restaurant Openings</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Store front welcome signs</li>
                  <li>• Menu display boards</li>
                  <li>• Special opening deals</li>
                  <li>• Customer loyalty program signs</li>
                  <li>• Social media promotion displays</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Professional Services</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Office entrance signage</li>
                  <li>• Professional credentials displays</li>
                  <li>• Service offering boards</li>
                  <li>• Client consultation signs</li>
                  <li>• Awards and recognition displays</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Healthcare & Medical</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Practice name displays</li>
                  <li>• Doctor credentials signs</li>
                  <li>• Specialty service boards</li>
                  <li>• Patient information displays</li>
                  <li>• Emergency contact signs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Geographic Coverage */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">DC Metro Area Grand Opening Coverage</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Washington DC:</strong> Downtown business district, Capitol Hill, Dupont Circle, Georgetown commercial areas</p>
                <p><strong>Northern Virginia:</strong> Tysons Corner, Reston, Alexandria, Arlington business corridors</p>
                <p><strong>Maryland:</strong> Bethesda, Rockville, Silver Spring, Gaithersburg commercial zones</p>
                <p><strong>Suburban Areas:</strong> Fairfax, Herndon, Manassas, Frederick business parks</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Grand Opening Package Options</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Essential Opening Package</h4>
                    <p className="text-muted-foreground text-sm">Basic signage bundle for small business openings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Professional Launch Package</h4>
                    <p className="text-muted-foreground text-sm">Comprehensive signage for established business openings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Premium Grand Opening Suite</h4>
                    <p className="text-muted-foreground text-sm">Complete signage solution for major business launches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline and Planning */}
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Grand Opening Planning Timeline</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">8</div>
                <h4 className="font-semibold text-foreground mb-2">8 Weeks Before</h4>
                <p className="text-muted-foreground text-sm">Initial consultation and design planning for major signage needs</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">4</div>
                <h4 className="font-semibold text-foreground mb-2">4 Weeks Before</h4>
                <p className="text-muted-foreground text-sm">Finalize designs and begin production of custom engraved materials</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">2</div>
                <h4 className="font-semibold text-foreground mb-2">2 Weeks Before</h4>
                <p className="text-muted-foreground text-sm">Complete production and coordinate delivery schedule with your team</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">1</div>
                <h4 className="font-semibold text-foreground mb-2">Opening Day</h4>
                <p className="text-muted-foreground text-sm">Professional installation and setup support for your grand opening event</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrandOpenings;