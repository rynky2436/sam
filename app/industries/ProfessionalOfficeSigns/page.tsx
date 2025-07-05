export const metadata = {
  title: "Professionalofficesigns",
  description: "Professionalofficesigns page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Building2, Users, Trophy, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ProfessionalOfficeSigns = () => {
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
              Professional Office Signs
              <span className="block text-spark-gold">DC Metro Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Custom office signs, nameplates, and awards laser engraved on wood, metal, and glass for Washington DC Metro Area businesses.
            </p>
            <Button variant="spark" size="lg">
              Get Office Sign Quote
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
                Professional Office Signage Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Enhance your professional image with custom laser-engraved office signs and nameplates. Sparks & Marks creates elegant, professional signage for DC Metro Area offices, corporate facilities, and business environments.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Executive Nameplates</h3>
                    <p className="text-muted-foreground">Professional desk nameplates and door signs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Corporate Awards</h3>
                    <p className="text-muted-foreground">Recognition plaques and achievement awards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Office Directory Signs</h3>
                    <p className="text-muted-foreground">Building directories and wayfinding signage</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Building2 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Office Signs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Professional door signs and office identification</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Nameplates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Executive desk nameplates and title plates</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Trophy className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Awards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Corporate recognition and achievement awards</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Building2 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Directories</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Building directories and tenant listings</p>
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
            Elevate Your Professional Image
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today for custom professional office signage in the DC Metro Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Office Sign Quote
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

export default ProfessionalOfficeSigns;