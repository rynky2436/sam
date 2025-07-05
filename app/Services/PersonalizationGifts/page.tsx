export const metadata = {
  title: "Personalizationgifts",
  description: "Personalizationgifts page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Gift, Coffee, PawPrint, Watch, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalizationGifts = () => {
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
              Personalization & Custom Gifts
              <span className="block text-spark-gold">Unique Laser Engraved Gifts in DC Metro</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Create meaningful personalized gifts with custom laser engraving on nameplates, drinkware, cutting boards, jewelry, and keepsakes throughout Washington DC, Northern Virginia, and Maryland.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom Personalized Laser Engraving Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks specializes in creating personalized gifts and custom items that make lasting impressions. From wedding favors to family keepsakes, we transform ordinary items into treasured memories with precision laser engraving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Nameplates & Keychains</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Personalized nameplates, keychains, and small accessories for every occasion.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom metal nameplates</li>
                  <li>• Personalized keychains and charms</li>
                  <li>• Luggage tags and ID accessories</li>
                  <li>• Custom bag tags and labels</li>
                  <li>• Engraved medallions and tokens</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Kitchen & Home Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved cutting boards, photo frames, and home accessories for personal use or gifts.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom cutting boards (bamboo, walnut, maple)</li>
                  <li>• Personalized photo frames</li>
                  <li>• Engraved serving trays and boards</li>
                  <li>• Custom coaster sets</li>
                  <li>• Kitchen utensil engravings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Coffee className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Drinkware & Barware</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom engraved drinkware for special occasions, gifts, and personal use.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Personalized tumblers and travel mugs</li>
                  <li>• Custom wine glasses and champagne flutes</li>
                  <li>• Engraved beer mugs and steins</li>
                  <li>• Whiskey glasses and decanters</li>
                  <li>• Water bottles and sports bottles</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Wedding Favors & Event Mementos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Beautiful laser engraved wedding favors and event keepsakes for special celebrations.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Wedding favor keepsakes</li>
                  <li>• Anniversary commemoration items</li>
                  <li>• Birthday party mementos</li>
                  <li>• Graduation keepsakes</li>
                  <li>• Event milestone markers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Jewelry & Accessories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Precision laser engraving on jewelry tags, metal pieces, and personal accessories.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom jewelry tags and charms</li>
                  <li>• Metal bracelet and necklace engravings</li>
                  <li>• Personalized cufflinks</li>
                  <li>• Custom metal accessories</li>
                  <li>• Jewelry box engravings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <PawPrint className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Pet ID Tags & Accessories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Durable laser engraved pet ID tags and accessories for pet safety and identification.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom pet ID tags (stainless steel, aluminum)</li>
                  <li>• Pet collar nameplates</li>
                  <li>• Memorial pet keepsakes</li>
                  <li>• Pet food bowls engraving</li>
                  <li>• Pet memorial stones</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Additional Personalization Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Personal Accessories</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Engraved pens and writing instruments</li>
                  <li>• Custom wallet and purse engravings</li>
                  <li>• Watch back personalization</li>
                  <li>• Phone case custom engraving</li>
                  <li>• Laptop and tech device marking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Gift Occasions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Valentine's Day romantic gifts</li>
                  <li>• Mother's and Father's Day presents</li>
                  <li>• Christmas and holiday gifts</li>
                  <li>• Graduation commemoration items</li>
                  <li>• Retirement celebration gifts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Materials Available</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Stainless steel and aluminum</li>
                  <li>• Wood varieties (bamboo, walnut, maple)</li>
                  <li>• Acrylic and plexiglass</li>
                  <li>• Leather and fabric materials</li>
                  <li>• Glass and ceramic items</li>
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

export default PersonalizationGifts;