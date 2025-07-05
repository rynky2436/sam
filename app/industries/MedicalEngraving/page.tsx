export const metadata = {
  title: "Medicalengraving",
  description: "Medicalengraving page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Shield, CheckCircle, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const MedicalEngraving = () => {
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
              Medical Device Laser Engraving
              <span className="block text-spark-gold">DC Metro Healthcare</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Medical equipment laser engraving, compliance labels, and hospital signage for Washington DC Metro Area healthcare facilities. Precision marking for critical medical applications.
            </p>
            <Button variant="spark" size="lg">
              Get Medical Quote
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
                Healthcare Industry Laser Engraving Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sparks & Marks specializes in medical device marking and healthcare facility signage that meets strict industry standards. Our precision laser engraving ensures compliance, durability, and readability for critical medical applications in the DC Metro Area.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">FDA Compliant Device Marking</h3>
                    <p className="text-muted-foreground">UDI barcodes, serial numbers, and regulatory markings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Hospital Wayfinding Signs</h3>
                    <p className="text-muted-foreground">Room numbers, department signs, and directional signage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Equipment Identification</h3>
                    <p className="text-muted-foreground">Asset tags, calibration labels, and equipment marking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Safety & Compliance Labels</h3>
                    <p className="text-muted-foreground">Warning labels, instruction plates, and safety signage</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Device Marking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Surgical instruments, diagnostic equipment, and medical devices</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Compliance Labels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">FDA, CE marks, UDI barcodes, and regulatory information</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Activity className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Hospital Signage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Room identification, department signs, and wayfinding</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-spark transition-all duration-300">
                <CardHeader>
                  <Heart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Asset Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Equipment tags, inventory labels, and tracking systems</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Medical Industry Compliance & Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our laser engraving meets the highest medical industry standards for safety, compliance, and durability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-spark rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">FDA Compliance</h3>
              <p className="text-muted-foreground">UDI marking, FDA registration, and medical device regulations</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-laser rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Biocompatible Materials</h3>
              <p className="text-muted-foreground">Medical-grade materials safe for healthcare environments</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-spark rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sterilization Safe</h3>
              <p className="text-muted-foreground">Markings that withstand sterilization and cleaning processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Medical Applications We Serve
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Hospitals & Health Systems</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Room identification signage</li>
                <li>• Department wayfinding</li>
                <li>• Equipment asset tags</li>
                <li>• Safety compliance labels</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Medical Device Manufacturers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• UDI barcode marking</li>
                <li>• Serial number engraving</li>
                <li>• FDA compliance labels</li>
                <li>• CE marking requirements</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Surgical Centers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Instrument identification</li>
                <li>• Tray and kit labels</li>
                <li>• Sterilization indicators</li>
                <li>• Operating room signage</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Laboratories</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Equipment calibration labels</li>
                <li>• Sample identification</li>
                <li>• Chemical storage labels</li>
                <li>• Safety warning signs</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Pharmaceutical</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Batch tracking labels</li>
                <li>• Equipment identification</li>
                <li>• GMP compliance marking</li>
                <li>• Quality control tags</li>
              </ul>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Research Facilities</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Lab equipment marking</li>
                <li>• Sample tracking labels</li>
                <li>• Protocol identification</li>
                <li>• Research compliance tags</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partner with Medical Laser Engraving Experts
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact Sparks & Marks today for compliant medical device marking and healthcare facility signage in the DC Metro Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="spark" size="lg">
              Get Medical Quote
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

export default MedicalEngraving;