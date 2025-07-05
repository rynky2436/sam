export const metadata = {
  title: "Retirementparties",
  description: "Retirementparties page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Award, Clock, Users, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const RetirementParties = () => {
  const retirementServices = [
    {
      icon: Award,
      title: "Recognition Awards",
      description: "Honor years of dedicated service with custom awards",
      items: ["Service year plaques", "Achievement awards", "Career milestone recognition", "Company appreciation awards", "Department honors"]
    },
    {
      icon: Clock,
      title: "Memory Displays",
      description: "Commemorate career highlights and memories",
      items: ["Career timeline displays", "Photo memory boards", "Achievement showcases", "Project highlights", "Team memory books"]
    },
    {
      icon: Users,
      title: "Party Signage",
      description: "Welcome signs and celebration displays",
      items: ["Welcome retirement signs", "Celebration banners", "Guest sign-in displays", "Photo booth props", "Party decorations"]
    },
    {
      icon: Gift,
      title: "Retirement Gifts",
      description: "Personalized keepsakes for the retiree",
      items: ["Engraved desk accessories", "Retirement clocks", "Photo frames", "Garden stones", "Hobby-related items"]
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
              <Link href="/events-occasions" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Retirement Party Engraving
              <span className="block text-spark-gold">Celebrate Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Honor years of dedicated service with custom laser engraved awards, displays, and retirement gifts in the DC Metro Area.
            </p>
            <Button variant="spark" size="lg">
              Plan Retirement Party
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Retirement Celebration Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create meaningful recognition pieces and celebration displays for retirement parties and career milestones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {retirementServices.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="p-3 bg-gradient-laser rounded-lg w-fit mb-3">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Awards */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Retirement Awards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most requested retirement recognition items for DC Metro businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Service Plaques</h3>
                <p className="text-muted-foreground">Beautiful plaques commemorating years of dedicated service</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Retirement Clocks</h3>
                <p className="text-muted-foreground">Elegant desk clocks with personalized engraving</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Team Recognition</h3>
                <p className="text-muted-foreground">Group awards and team appreciation displays</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Honor Their Service
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create meaningful retirement recognition with custom laser engraved awards and celebration items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Retirement Quote
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

export default RetirementParties;