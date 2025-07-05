export const metadata = {
  title: "About",
  description: "About page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Zap, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
              About Sparks & Marks
              <span className="block text-spark-gold">Laser Engraving Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional laser engraving and cutting services serving the Washington DC Metro Area, Maryland, and Virginia since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2015, Sparks & Marks began as a small laser engraving shop with a vision to provide high-quality, precise engraving services to businesses and individuals throughout the DC Metro Area.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a passion project has grown into the region's most trusted laser engraving service, specializing in wood, metal, glass, and acrylic materials for diverse industries including medical, hospitality, technology, and more.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we proudly serve customers across Washington DC, Maryland, and Virginia, delivering custom laser engraving solutions that combine traditional craftsmanship with cutting-edge technology.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Precision Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">State-of-the-art laser equipment for precise results</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Skilled professionals with years of experience</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Quality Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">100% satisfaction guarantee on all projects</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Fast Turnaround</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Quick delivery without compromising quality</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              To provide exceptional laser engraving services that help businesses and individuals create lasting impressions through precision-crafted signs, awards, and custom items.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
                <p className="text-muted-foreground">Every project meets our highest standards of precision and craftsmanship</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground">Using the latest laser technology for superior results</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Service</h3>
                <p className="text-muted-foreground">Dedicated customer support from concept to completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today to discuss your laser engraving project and experience the difference quality makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Your Quote
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

export default About;