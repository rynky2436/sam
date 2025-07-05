export const metadata = {
  title: "Industrial",
  description: "Industrial page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Factory, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Industrial = () => {
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
              Industrial Laser Marking
              <span className="block text-spark-gold">DC Metro Manufacturing</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Safety signs, equipment tags, and compliance marking laser engraved for Washington DC Metro Area industrial facilities.
            </p>
            <Button variant="spark" size="lg">
              Get Industrial Quote
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
                Industrial Safety & Compliance Marking
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ensure workplace safety and regulatory compliance with durable laser-engraved safety signs, equipment tags, and industrial markings designed to withstand harsh manufacturing environments.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Safety Signage</h3>
                    <p className="text-muted-foreground">OSHA compliant safety signs and warning labels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Equipment Tags</h3>
                    <p className="text-muted-foreground">Asset tracking and maintenance identification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Compliance Marking</h3>
                    <p className="text-muted-foreground">Regulatory compliance and certification labels</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Factory className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Equipment Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Durable machinery identification and tracking</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Safety Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">OSHA compliant workplace safety signage</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <AlertTriangle className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Warning Labels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Hazard identification and safety warnings</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Factory className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Regulatory and certification markings</p>
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
            Ensure Industrial Safety & Compliance
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today for durable industrial laser marking in the DC Metro Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Industrial Quote
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

export default Industrial;