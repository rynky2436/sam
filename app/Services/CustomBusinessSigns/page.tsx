export const metadata = {
  title: "Custombusinesssigns",
  description: "Custombusinesssigns page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Building, Zap, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CustomBusinessSigns = () => {
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
              Custom Business Signs
              <span className="block text-spark-gold">DC Metro Area</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional laser engraved business signage on wood, metal, and glass for Washington DC Metro Area companies. Elevate your brand with precision-crafted custom signs.
            </p>
            <Button variant="spark" size="lg">
              Get Custom Sign Quote
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
                Premium Business Signage Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sparks & Marks specializes in creating distinctive business signs that make lasting impressions. Our laser engraving technology delivers unmatched precision and durability for DC Metro Area businesses.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Wood Business Signs</h3>
                    <p className="text-muted-foreground">Elegant wooden signs with laser-engraved logos and text</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Metal Office Signs</h3>
                    <p className="text-muted-foreground">Durable metal signage for professional environments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Glass Entry Signs</h3>
                    <p className="text-muted-foreground">Sophisticated glass signs with precise laser etching</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Acrylic Display Signs</h3>
                    <p className="text-muted-foreground">Modern acrylic signs for contemporary businesses</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Building className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Reception Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional lobby and reception area signage</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Storefront Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Eye-catching exterior business identification</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Directory Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Multi-tenant building and office directories</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Building className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Room Numbers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Consistent office and room identification</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Sparks & Marks for Business Signs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We serve businesses throughout the Washington DC Metro Area with professional-grade signage solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-spark rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Laser Technology</h3>
              <p className="text-muted-foreground">State-of-the-art laser engraving for precise, professional results</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-laser rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">DC Metro Expertise</h3>
              <p className="text-muted-foreground">Local knowledge serving MD, DC, and Northern VA businesses</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-spark rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">Durable materials and professional craftsmanship guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready for Professional Business Signs?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today for a free consultation on custom business signage for your DC Metro Area location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Free Quote
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

export default CustomBusinessSigns;