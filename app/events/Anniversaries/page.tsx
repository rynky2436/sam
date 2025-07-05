export const metadata = {
  title: "Anniversaries",
  description: "Anniversaries page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Gift, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Anniversaries = () => {
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
              Wedding & Anniversary Laser Engraving Services
              <span className="block text-spark-gold">DC Metro Area's Premier Custom Engraving</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Celebrate love with custom laser engraved wedding signs, anniversary gifts, and reception items. Serving Washington DC, Northern Virginia, and Maryland with precision laser engraving services for your special day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom Wedding Laser Engraving Services in Washington DC
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks specializes in precision laser engraving for weddings and anniversaries throughout the DC Metro Area. From rustic wood wedding signs to elegant acrylic table numbers, we create personalized keepsakes that make your celebration unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Wedding Welcome Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved welcome signs in wood, acrylic, and metal. Perfect for ceremony entrances and reception areas.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Rustic wood wedding signs</li>
                  <li>• Elegant acrylic displays</li>
                  <li>• Metal welcome plaques</li>
                  <li>• Custom fonts and designs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Wedding Table Numbers & Place Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Precision laser engraved table numbers and place cards to guide your guests with style.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Wooden table number stands</li>
                  <li>• Acrylic table markers</li>
                  <li>• Engraved place cards</li>
                  <li>• Seating chart displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Wedding Guest Book Alternatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Creative laser engraved guest book alternatives that guests will love to sign.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Wood heart drop boxes</li>
                  <li>• Signature picture frames</li>
                  <li>• Engraved guest trees</li>
                  <li>• Memory puzzle pieces</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Anniversary Gifts & Commemorative Plaques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved anniversary gifts to celebrate milestone years together.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Anniversary date plaques</li>
                  <li>• Custom photo frames</li>
                  <li>• Wedding vow engravings</li>
                  <li>• Anniversary ornaments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Personalized Wedding Favors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser engraved wedding favors your guests will treasure long after your special day.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Wooden coaster sets</li>
                  <li>• Engraved bottle openers</li>
                  <li>• Custom keychains</li>
                  <li>• Mini picture frames</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Save the Date & Menu Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved save the dates and menu displays that reflect your wedding style.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Wood save the date cards</li>
                  <li>• Acrylic menu stands</li>
                  <li>• Bar menu displays</li>
                  <li>• Program covers</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Materials Section */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Premium Laser Engraving Materials for Your Wedding</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Wood Engraving</h4>
                <p className="text-muted-foreground text-sm">Bamboo, oak, maple, and walnut for rustic wedding themes. Perfect for outdoor and barn weddings in Virginia and Maryland.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Acrylic Engraving</h4>
                <p className="text-muted-foreground text-sm">Clear and colored acrylic for modern, elegant wedding designs. Ideal for upscale venues in Washington DC.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground mb-2">Metal Engraving</h4>
                <p className="text-muted-foreground text-sm">Stainless steel and aluminum for sophisticated, lasting wedding keepsakes and anniversary gifts.</p>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our Wedding Laser Engraving Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold">1</div>
                <h4 className="font-semibold text-foreground mb-2">Design Consultation</h4>
                <p className="text-muted-foreground text-sm">Free consultation to discuss your wedding theme, timeline, and engraving needs.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold">2</div>
                <h4 className="font-semibold text-foreground mb-2">Custom Design Creation</h4>
                <p className="text-muted-foreground text-sm">Our designers create custom wedding designs that match your style and vision.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold">3</div>
                <h4 className="font-semibold text-foreground mb-2">Precision Laser Engraving</h4>
                <p className="text-muted-foreground text-sm">State-of-the-art laser engraving equipment ensures perfect results every time.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center font-bold">4</div>
                <h4 className="font-semibold text-foreground mb-2">Timely Delivery</h4>
                <p className="text-muted-foreground text-sm">On-time delivery throughout the DC Metro Area, ensuring your wedding goes perfectly.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Frequently Asked Questions - Wedding Laser Engraving</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">How far in advance should I order wedding engravings?</h4>
                <p className="text-muted-foreground text-sm mb-4">We recommend ordering 4-6 weeks before your wedding date to ensure proper design time and delivery to your DC Metro Area venue.</p>
                
                <h4 className="font-semibold text-foreground mb-2">What materials work best for outdoor weddings?</h4>
                <p className="text-muted-foreground text-sm mb-4">Treated wood and metal engravings are ideal for outdoor venues in Virginia and Maryland, offering durability against weather.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Can you match our wedding colors and theme?</h4>
                <p className="text-muted-foreground text-sm mb-4">Absolutely! Our laser engraving services can accommodate any wedding theme, from rustic barn weddings to elegant ballroom celebrations.</p>
                
                <h4 className="font-semibold text-foreground mb-2">Do you offer rush orders for last-minute weddings?</h4>
                <p className="text-muted-foreground text-sm">Yes, we offer expedited laser engraving services for weddings in Washington DC with rush delivery options available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Anniversaries;