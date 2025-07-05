export const metadata = {
  title: "Corporateservices",
  description: "Corporateservices page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Briefcase, Award, Building2, CreditCard, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";

const CorporateServices = () => {
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
              Corporate & Business Laser Engraving Services
              <span className="block text-spark-gold">Professional Solutions for DC Metro Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Enhance your business presence with custom laser engraved signage, promotional items, awards, and branding solutions throughout Washington DC, Northern Virginia, and Maryland.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Business Laser Engraving Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks provides comprehensive corporate laser engraving services for businesses across the DC Metro Area. From branded promotional items to professional signage and awards, we help companies establish their presence and recognize achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Branded Promotional Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser engraved promotional products to strengthen your brand presence.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom branded tumblers and drinkware</li>
                  <li>• Promotional pens and writing instruments</li>
                  <li>• Tech gadgets with company logos</li>
                  <li>• Corporate gift sets</li>
                  <li>• Trade show giveaways</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Business Signage Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Professional laser engraved signage for offices, facilities, and commercial spaces.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Office entrance and lobby signs</li>
                  <li>• ADA compliant accessibility signage</li>
                  <li>• Safety and compliance signs</li>
                  <li>• Wall plaques and directory boards</li>
                  <li>• Wayfinding and directional signs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Trophies & Corporate Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Recognition awards and trophies for employee achievements and corporate milestones.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Employee recognition awards</li>
                  <li>• Service anniversary trophies</li>
                  <li>• Achievement milestone plaques</li>
                  <li>• Sales performance awards</li>
                  <li>• Corporate event trophies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Business Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Unique laser engraved business cards in premium materials for lasting impressions.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Metal business cards (stainless steel, aluminum)</li>
                  <li>• Wood business cards (bamboo, walnut)</li>
                  <li>• Acrylic transparent business cards</li>
                  <li>• Leather business card holders</li>
                  <li>• Executive card presentation cases</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Professional Nameplates & Door Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Executive desk nameplates and professional door signage for corporate environments.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Executive desk nameplates</li>
                  <li>• Office door name signs</li>
                  <li>• Department identification plates</li>
                  <li>• Conference room markers</li>
                  <li>• Cubicle name displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Product Branding & Marking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Permanent laser marking for product branding, logos, and identification numbers.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Company logo engraving</li>
                  <li>• Product model numbers</li>
                  <li>• Serial number marking</li>
                  <li>• Manufacturing date codes</li>
                  <li>• Quality control markings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateServices;