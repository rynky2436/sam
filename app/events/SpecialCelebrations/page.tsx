export const metadata = {
  title: "Specialcelebrations",
  description: "Specialcelebrations page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Cake, Gift, Award, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const SpecialCelebrations = () => {
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
              Special Celebration Laser Engraving Services
              <span className="block text-spark-gold">Milestone Moments in DC Metro Area</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Celebrate life's special milestones with custom laser engraved birthday signs, retirement gifts, and anniversary commemoratives. Serving Washington DC, Northern Virginia, and Maryland with personalized engraving for all your milestone celebrations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom Milestone Celebration Laser Engraving in Washington DC
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks specializes in laser engraved keepsakes for life's most important celebrations. From birthday milestones to retirement parties, we create personalized items that honor special moments throughout the DC Metro Area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Cake className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Birthday Celebration Signs & Decorations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser engraved birthday signs and party decorations for milestone birthdays.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Sweet 16 birthday decorations</li>
                  <li>• 21st birthday celebration signs</li>
                  <li>• 30th, 40th, 50th milestone markers</li>
                  <li>• Custom age birthday banners</li>
                  <li>• Photo birthday display boards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Retirement Gifts & Commemoratives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved retirement plaques and gifts to honor career achievements and service.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Career service recognition plaques</li>
                  <li>• Retirement countdown clocks</li>
                  <li>• Years of service awards</li>
                  <li>• Custom retirement keepsakes</li>
                  <li>• Professional achievement displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Milestone Achievement Markers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved markers for special life milestones and personal achievements.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• First home purchase commemoratives</li>
                  <li>• Career promotion celebrations</li>
                  <li>• Fitness goal achievement awards</li>
                  <li>• Personal milestone markers</li>
                  <li>• Life goal accomplishment plaques</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Special Party Decorations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser engraved decorations for special celebrations and milestone parties.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Welcome celebration signs</li>
                  <li>• Party table centerpieces</li>
                  <li>• Custom event photo props</li>
                  <li>• Celebration guest books</li>
                  <li>• Memory sharing boards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Memory Books & Guest Registries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved memory books and guest registries for capturing celebration memories.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom memory book covers</li>
                  <li>• Guest signature boards</li>
                  <li>• Celebration photo albums</li>
                  <li>• Memory jar alternatives</li>
                  <li>• Time capsule containers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Personalized Celebration Gifts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser engraved gifts for special celebration honorees and guests.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Personalized celebration favors</li>
                  <li>• Custom thank you gifts</li>
                  <li>• Milestone commemorative items</li>
                  <li>• Special occasion keepsakes</li>
                  <li>• Celebration photo frames</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Age-Specific Celebrations */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Age-Specific Milestone Celebrations</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Teen Milestones</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sweet 16 celebrations</li>
                  <li>• High school graduation</li>
                  <li>• Driver's license achievement</li>
                  <li>• College acceptance parties</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Young Adult Achievements</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 21st birthday celebrations</li>
                  <li>• College graduation parties</li>
                  <li>• First job celebrations</li>
                  <li>• Engagement announcements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Adult Milestones</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 30th, 40th birthday parties</li>
                  <li>• Career advancement celebrations</li>
                  <li>• Home ownership milestones</li>
                  <li>• Family achievement markers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Senior Celebrations</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 50th+ birthday celebrations</li>
                  <li>• Retirement parties</li>
                  <li>• Anniversary milestones</li>
                  <li>• Grandparent achievements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Retirement Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Professional Retirement Celebration Services</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Government Employee Retirements</h4>
                    <p className="text-muted-foreground text-sm">Special recognition for federal and local government service in DC</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Corporate Executive Retirements</h4>
                    <p className="text-muted-foreground text-sm">Executive-level retirement commemoratives for business leaders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Military Service Retirements</h4>
                    <p className="text-muted-foreground text-sm">Honor military careers with custom engraved recognition</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Birthday Party Planning Services</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Theme-Based Decorations</h4>
                    <p className="text-muted-foreground text-sm">Custom engraved items matching your celebration theme</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Photo Memory Displays</h4>
                    <p className="text-muted-foreground text-sm">Timeline displays showcasing life memories and achievements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Guest Participation Items</h4>
                    <p className="text-muted-foreground text-sm">Interactive elements for guests to contribute memories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Planning Tips */}
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Special Celebration Planning Tips</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Timeline Planning</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Order custom items 3-4 weeks in advance</li>
                  <li>• Rush orders available for urgent celebrations</li>
                  <li>• Consider guest count for favor quantities</li>
                  <li>• Plan decoration placement and sizing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Popular Celebration Themes</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Vintage/retro milestone birthdays</li>
                  <li>• Career achievement celebrations</li>
                  <li>• Memory lane retirement parties</li>
                  <li>• "Through the years" timelines</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">DC Metro Venues We Serve</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Private homes and backyards</li>
                  <li>• Community centers and halls</li>
                  <li>• Corporate event spaces</li>
                  <li>• Restaurant private dining rooms</li>
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

export default SpecialCelebrations;