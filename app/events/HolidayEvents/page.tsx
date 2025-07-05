export const metadata = {
  title: "Holidayevents",
  description: "Holidayevents page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, TreePine, Gift, Tag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const HolidayEvents = () => {
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
              Holiday Laser Engraving Services
              <span className="block text-spark-gold">Seasonal Celebrations in DC Metro Area</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Create magical holiday memories with custom laser engraved ornaments, decorations, and seasonal gifts. Serving Washington DC, Northern Virginia, and Maryland with personalized holiday laser engraving for Christmas, Thanksgiving, Halloween, and all seasonal celebrations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom Holiday Laser Engraving Services in Washington DC
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks brings holiday magic to life with precision laser engraving services throughout the DC Metro Area. From personalized Christmas ornaments to seasonal business decorations, we create memorable holiday pieces for every celebration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <TreePine className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Christmas Ornaments & Decorations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser engraved Christmas ornaments and holiday decorations for homes and businesses.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Personalized family ornaments</li>
                  <li>• Baby's first Christmas keepsakes</li>
                  <li>• Custom Christmas tree toppers</li>
                  <li>• Holiday photo ornaments</li>
                  <li>• Corporate Christmas gifts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Seasonal Holiday Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Festive laser engraved holiday signs for home decorating and business seasonal displays.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Welcome holiday guests signs</li>
                  <li>• Halloween spooky decorations</li>
                  <li>• Thanksgiving gratitude displays</li>
                  <li>• Easter spring celebrations</li>
                  <li>• Valentine's Day romantic signs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Holiday Gift Items & Decorations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved seasonal decorations and holiday-themed items for all celebrations.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Thanksgiving serving trays</li>
                  <li>• Halloween costume accessories</li>
                  <li>• New Year's celebration items</li>
                  <li>• Fourth of July patriotic pieces</li>
                  <li>• Mother's/Father's Day gifts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Tag className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Gift Tags & Labels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Personalized laser engraved gift tags and labels for holiday presents and packages.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Wooden Christmas gift tags</li>
                  <li>• Acrylic holiday labels</li>
                  <li>• Corporate gift packaging</li>
                  <li>• Family name gift markers</li>
                  <li>• Seasonal party favors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Memorial & Remembrance Ornaments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved memorial ornaments and remembrance items for honoring loved ones during holidays.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Memorial Christmas ornaments</li>
                  <li>• In loving memory decorations</li>
                  <li>• Pet remembrance keepsakes</li>
                  <li>• Angel memorial ornaments</li>
                  <li>• Heaven-themed holiday items</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Business Holiday Displays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Professional laser engraved holiday decorations for businesses throughout the DC Metro Area.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Office holiday decorations</li>
                  <li>• Retail seasonal displays</li>
                  <li>• Restaurant holiday menus</li>
                  <li>• Corporate holiday cards</li>
                  <li>• Business gift items</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Holiday Calendar */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Year-Round Holiday Laser Engraving Services</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Winter Holidays</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Christmas (December)</li>
                  <li>• New Year's (January)</li>
                  <li>• Valentine's Day (February)</li>
                  <li>• Presidents Day</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Spring Celebrations</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Easter (March/April)</li>
                  <li>• Mother's Day (May)</li>
                  <li>• Memorial Day</li>
                  <li>• Graduation Season</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Summer Events</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Father's Day (June)</li>
                  <li>• Fourth of July</li>
                  <li>• Summer Vacations</li>
                  <li>• Back to School</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Fall Traditions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Halloween (October)</li>
                  <li>• Thanksgiving (November)</li>
                  <li>• Harvest Festivals</li>
                  <li>• Football Season</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Material Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Holiday Engraving Materials</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Natural Wood Options</h4>
                    <p className="text-muted-foreground text-sm">Pine, birch, and bamboo for rustic holiday charm and traditional appeal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Colored Acrylics</h4>
                    <p className="text-muted-foreground text-sm">Red, green, gold, and silver acrylics perfect for holiday themes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Specialty Materials</h4>
                    <p className="text-muted-foreground text-sm">Mirror acrylics, cork, and leather for unique holiday gifts</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Holiday Ordering Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Christmas Orders</h4>
                    <p className="text-muted-foreground text-sm">Place orders by November 15th for December delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Corporate Holiday Gifts</h4>
                    <p className="text-muted-foreground text-sm">Business orders recommended 6-8 weeks in advance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Rush Holiday Orders</h4>
                    <p className="text-muted-foreground text-sm">Express service available for last-minute holiday needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Holiday Requests */}
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Most Popular Holiday Laser Engraving Requests in DC Metro</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Family Holiday Traditions</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• First Christmas together ornaments</li>
                  <li>• Family name Christmas stockings</li>
                  <li>• Holiday dinner blessing boards</li>
                  <li>• Santa's workshop signs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Corporate Holiday Needs</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Employee appreciation gifts</li>
                  <li>• Client holiday presents</li>
                  <li>• Office party decorations</li>
                  <li>• Year-end recognition awards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Community Events</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Holiday market vendor signs</li>
                  <li>• Church nativity decorations</li>
                  <li>• School holiday performances</li>
                  <li>• Community tree ornaments</li>
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

export default HolidayEvents;