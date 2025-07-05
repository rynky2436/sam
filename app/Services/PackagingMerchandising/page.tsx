export const metadata = {
  title: "Packagingmerchandising",
  description: "Packagingmerchandising page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Package, Gift, Tag, ShoppingBag, Store, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const PackagingMerchandising = () => {
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
              Packaging & Merchandising Solutions
              <span className="block text-spark-gold">Custom Retail & Product Packaging</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional laser-cut packaging, custom gift boxes, retail displays, and merchandising solutions for businesses throughout the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom Packaging & Retail Display Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks creates premium packaging and merchandising solutions that enhance your brand presence. From luxury gift boxes to point-of-purchase displays, we help your products stand out in the competitive retail environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Product Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser-cut custom packaging solutions including wooden boxes and foam inserts.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Wooden presentation boxes</li>
                  <li>• Custom foam inserts</li>
                  <li>• Product protection packaging</li>
                  <li>• Luxury item presentation</li>
                  <li>• Shipping box inserts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Engraved Gift Boxes & Containers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Premium laser engraved gift boxes and containers for special occasions and corporate gifts.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Corporate gift boxes</li>
                  <li>• Wedding favor containers</li>
                  <li>• Holiday gift packaging</li>
                  <li>• Luxury product presentations</li>
                  <li>• Personalized keepsake boxes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Tag className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Hang Tags & Branding Labels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser-cut hang tags and branding labels for product identification and marketing.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Product hang tags</li>
                  <li>• Brand identification labels</li>
                  <li>• Care instruction tags</li>
                  <li>• Promotional labels</li>
                  <li>• QR code integration tags</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Store className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Retail Signage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Professional retail signage solutions for stores, boutiques, and commercial spaces.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Store front signage</li>
                  <li>• Department identification signs</li>
                  <li>• Price and product signs</li>
                  <li>• Sale and promotion displays</li>
                  <li>• Brand messaging boards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Point of Purchase (POP) Displays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Eye-catching point-of-purchase displays to drive sales and highlight products.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Counter-top displays</li>
                  <li>• Product showcases</li>
                  <li>• Interactive demonstrations</li>
                  <li>• Promotional stands</li>
                  <li>• Brand experience displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <ShoppingBag className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Trade Show & Event Displays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Professional trade show displays and event merchandising solutions.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Trade show booth components</li>
                  <li>• Product demonstration stands</li>
                  <li>• Literature display racks</li>
                  <li>• Banner and sign supports</li>
                  <li>• Interactive display elements</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Industry Applications */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Retail & Packaging Industries We Serve</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Luxury & High-End Retail</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Jewelry presentation boxes</li>
                  <li>• Premium product packaging</li>
                  <li>• Luxury brand displays</li>
                  <li>• High-end gift packaging</li>
                  <li>• Boutique store signage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">E-commerce & Fulfillment</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Unboxing experience packaging</li>
                  <li>• Protective shipping inserts</li>
                  <li>• Branded packaging solutions</li>
                  <li>• Return shipping materials</li>
                  <li>• Subscription box components</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Corporate & B2B</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Corporate gift packaging</li>
                  <li>• Trade show materials</li>
                  <li>• Sales presentation kits</li>
                  <li>• Product launch packaging</li>
                  <li>• Client appreciation boxes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Materials & Capabilities */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Packaging Materials & Options</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Premium Wood Packaging</h4>
                    <p className="text-muted-foreground text-sm">Bamboo, birch, and hardwoods for luxury presentation boxes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Protective Foam Solutions</h4>
                    <p className="text-muted-foreground text-sm">Custom-cut foam inserts for product protection and presentation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sustainable Materials</h4>
                    <p className="text-muted-foreground text-sm">Eco-friendly packaging options including recycled materials</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">DC Metro Retail Locations</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Shopping Centers:</strong> Tysons Corner, Pentagon City, Montgomery Mall, Westfield Wheaton</p>
                <p><strong>Downtown Areas:</strong> Georgetown, Dupont Circle, Adams Morgan, Capitol Hill</p>
                <p><strong>Business Districts:</strong> K Street corridor, Crystal City, Bethesda Row, Reston Town Center</p>
                <p><strong>Specialty Markets:</strong> Eastern Market, Union Market, local farmers markets</p>
              </div>
            </div>
          </div>

          {/* Design Services */}
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Complete Packaging Design Services</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">1</div>
                <h4 className="font-semibold text-foreground mb-2">Concept Development</h4>
                <p className="text-muted-foreground text-sm">Collaborate on packaging design that reflects your brand identity</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">2</div>
                <h4 className="font-semibold text-foreground mb-2">Prototype Creation</h4>
                <p className="text-muted-foreground text-sm">Rapid prototyping to test fit, function, and visual appeal</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">3</div>
                <h4 className="font-semibold text-foreground mb-2">Production Scaling</h4>
                <p className="text-muted-foreground text-sm">Efficient production runs from small batches to large volumes</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">4</div>
                <h4 className="font-semibold text-foreground mb-2">Fulfillment Support</h4>
                <p className="text-muted-foreground text-sm">Inventory management and just-in-time delivery services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackagingMerchandising;