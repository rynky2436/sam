export const metadata = {
  title: "Technology",
  description: "Technology page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Laptop, Smartphone, Server, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Technology = () => {
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
              Technology Laser Engraving
              <span className="block text-spark-gold">DC Metro Tech</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Product labels, corporate awards, and tech signage laser cut for Washington DC Metro Area technology companies.
            </p>
            <Button variant="spark" size="lg">
              Get Technology Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Technology Industry Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Precision laser engraving for technology companies, startups, and tech facilities in the DC Metro Area. From product marking to corporate awards, we deliver high-quality solutions for the tech industry.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Product Labels</h3>
                    <p className="text-muted-foreground">Device marking, serial numbers, and brand identification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Corporate Awards</h3>
                    <p className="text-muted-foreground">Employee recognition and achievement awards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Office Signage</h3>
                    <p className="text-muted-foreground">Tech office displays and company branding</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Laptop className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Device Marking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Laptop, tablet, and hardware identification</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Product Labels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Mobile device and accessory marking</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Server className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Data Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Server rack labels and equipment tags</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Laptop className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Office Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Tech company branding and office displays</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partner with Tech Industry Experts
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today for precision technology laser engraving in the DC Metro Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Technology Quote
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

export default Technology;