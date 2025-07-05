export const metadata = {
  title: "Awardsrecognition",
  description: "Awardsrecognition page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Award, Trophy, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AwardsRecognition = () => {
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
              Awards & Recognition Plaques
              <span className="block text-spark-gold">DC Metro Area</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Laser engraved achievement awards and recognition items for corporate programs and employee appreciation in Washington DC Metro Area. Honor excellence with precision-crafted awards.
            </p>
            <Button variant="spark" size="lg">
              Get Award Quote
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
                Premium Award & Recognition Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Celebrate achievements with custom laser-engraved awards and plaques. Sparks & Marks creates meaningful recognition pieces that honor excellence and motivate continued success for DC Metro Area organizations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Employee Recognition Awards</h3>
                    <p className="text-muted-foreground">Custom plaques for employee of the month, years of service, and achievements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Corporate Achievement Plaques</h3>
                    <p className="text-muted-foreground">Professional awards for business milestones and accomplishments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Sports & Competition Trophies</h3>
                    <p className="text-muted-foreground">Custom laser-engraved awards for sports teams and competitions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Academic Recognition</h3>
                    <p className="text-muted-foreground">Graduation and academic achievement awards for educational institutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Wood Plaques</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Classic wooden awards with laser-engraved text and logos</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Trophy className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Metal Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Durable metal plaques for lasting recognition</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Star className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Glass Etching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Elegant glass awards with precision laser etching</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Acrylic Displays</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Modern acrylic awards for contemporary recognition</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Award Types */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recognition Solutions for Every Achievement
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From corporate milestones to individual accomplishments, we create awards that truly honor success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-lg">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Employee Awards</h3>
              <p className="text-muted-foreground text-sm">Recognition for outstanding performance and dedication</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Corporate Milestones</h3>
              <p className="text-muted-foreground text-sm">Commemorating business achievements and anniversaries</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Academic Excellence</h3>
              <p className="text-muted-foreground text-sm">Honoring educational achievements and graduations</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Sports Achievements</h3>
              <p className="text-muted-foreground text-sm">Custom trophies for athletic accomplishments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Honor Excellence with Custom Awards
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today for a free consultation on custom awards and recognition plaques for your DC Metro Area organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Award Quote
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

export default AwardsRecognition;