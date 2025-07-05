export const metadata = {
  title: "Generallaserservices",
  description: "Generallaserservices page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Zap, Settings, Target, Hash, Camera, Scan } from "lucide-react";
import { Link } from "react-router-dom";

const GeneralLaserServices = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6">
              <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              General Laser Services
              <span className="block text-spark-gold">Professional Laser Solutions in DC Metro</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Comprehensive laser engraving, cutting, etching, and marking services for all industries in Washington DC, Northern Virginia, and Maryland.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Laser Engraving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">High-precision laser engraving on wood, metal, acrylic, and more materials</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Laser Cutting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Precise laser cutting for custom shapes and intricate designs</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Laser Etching & Marking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Permanent, high-contrast marking for industrial and commercial applications</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Hash className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Serial Numbers & Barcodes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Product traceability with serial numbers, barcodes, and QR codes</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>High-Detail Photo Engraving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Detailed photo reproduction on various materials with laser precision</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Scan className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Deep Engraving & Personalization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Deep metal engraving and comprehensive product personalization services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GeneralLaserServices;