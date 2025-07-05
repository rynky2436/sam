export const metadata = {
  title: "Eventsoccasions",
  description: "Eventsoccasions page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Briefcase, GraduationCap, Calendar, Gift, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EventsOccasions = () => {
  const occasions = [
    {
      icon: Heart,
      title: "Weddings & Anniversaries",
      description: "Custom wedding signs, table numbers, guest books, and anniversary gifts",
      items: ["Welcome signs", "Table numbers", "Guest book alternatives", "Anniversary plaques", "Wedding favors"],
      gradient: "bg-gradient-spark",
      link: "/events/anniversaries"
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Professional signage and awards for business events and conferences",
      items: ["Conference signage", "Award presentations", "Corporate gifts", "Name badges", "Directional signs"],
      gradient: "bg-gradient-laser",
      link: "/events/corporate-events"
    },
    {
      icon: GraduationCap,
      title: "Graduations",
      description: "Commemorate academic achievements with custom engraved items",
      items: ["Graduation plaques", "Achievement awards", "Photo frames", "Class year items", "School memorabilia"],
      gradient: "bg-gradient-spark",
      link: "/events/graduations"
    },
    {
      icon: Calendar,
      title: "Holiday Events",
      description: "Seasonal decorations and gift items for all holidays",
      items: ["Christmas ornaments", "Holiday signs", "Seasonal decorations", "Gift tags", "Memorial items"],
      gradient: "bg-gradient-laser",
      link: "/events/holiday-events"
    },
    {
      icon: Gift,
      title: "Special Celebrations",
      description: "Birthdays, retirements, and milestone celebrations",
      items: ["Birthday signs", "Retirement gifts", "Milestone markers", "Party decorations", "Memory books"],
      gradient: "bg-gradient-spark",
      link: "/events/special-celebrations"
    },
    {
      icon: Star,
      title: "Grand Openings",
      description: "Make your business launch memorable with custom signage",
      items: ["Opening ceremony signs", "Ribbon cutting plaques", "Promotional displays", "Business cards holders", "Welcome banners"],
      gradient: "bg-gradient-laser",
      link: "/events/grand-openings"
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
              Events & Occasions
              <span className="block text-spark-gold">Custom Laser Engraving</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Make every special occasion memorable with custom laser engraved items for weddings, corporate events, graduations, and celebrations throughout the DC Metro Area.
            </p>
            <Button variant="spark" size="lg">
              Plan Your Event
            </Button>
          </div>
        </div>
      </section>

      {/* Occasions Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Special Occasions We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate gatherings to large corporate events, we create custom laser engraved items that make every occasion special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => {
              const IconComponent = occasion.icon;
              
              return (
                <Link key={index} to={occasion.link}>
                  <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardHeader>
                      <div className={`p-3 ${occasion.gradient} rounded-lg w-fit mb-3`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl flex items-center justify-between">
                        {occasion.title}
                        <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </CardTitle>
                      <p className="text-muted-foreground">{occasion.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {occasion.items.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="h-2 w-2 bg-primary rounded-full"></div>
                            <span className="text-foreground text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wedding Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Wedding Laser Engraving
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Create unforgettable wedding moments with custom laser engraved signage, favors, and keepsakes. From rustic wood signs to elegant acrylic displays, we help make your special day perfect.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Ceremony Signage</h3>
                    <p className="text-muted-foreground">Welcome signs, seating charts, and directional displays</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Reception Items</h3>
                    <p className="text-muted-foreground">Table numbers, place cards, and menu displays</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Wedding Favors</h3>
                    <p className="text-muted-foreground">Personalized keepsakes for your guests</p>
                  </div>
                </div>
              </div>
              
              <Button variant="spark" size="lg" className="mt-8">
                Plan Wedding Items
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Save the Dates</h3>
                  <p className="text-muted-foreground text-sm">Custom engraved announcements</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Date Markers</h3>
                  <p className="text-muted-foreground text-sm">Anniversary reminders</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Gift className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Guest Books</h3>
                  <p className="text-muted-foreground text-sm">Alternative signing options</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Photo Props</h3>
                  <p className="text-muted-foreground text-sm">Custom photo booth items</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Corporate Event Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional laser engraving for conferences, trade shows, employee recognition events, and corporate celebrations throughout the DC Metro Area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Conference Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Name badges and lanyards</li>
                  <li>Directional signage</li>
                  <li>Speaker recognition</li>
                  <li>Sponsor displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Awards Ceremonies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Achievement awards</li>
                  <li>Recognition plaques</li>
                  <li>Employee of the month</li>
                  <li>Service anniversaries</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Corporate Gifts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Client appreciation gifts</li>
                  <li>Holiday presents</li>
                  <li>Promotional items</li>
                  <li>Business card holders</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Event Planning Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with you every step of the way to ensure your event items are perfect.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground">Discuss your event needs, timeline, and design preferences</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Design</h3>
              <p className="text-muted-foreground">Create custom designs that match your event theme and style</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Production</h3>
              <p className="text-muted-foreground">Precision laser engraving with quality control at every step</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Delivery</h3>
              <p className="text-muted-foreground">On-time delivery to ensure your event goes perfectly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Make Your Event Memorable
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today to start planning custom laser engraved items for your special occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Plan Your Event
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get Event Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsOccasions;