export const metadata = {
  title: "Medicalscientific",
  description: "Medicalscientific page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Microscope, Stethoscope, FlaskConical, Shield, Pill } from "lucide-react";
import { Link } from "react-router-dom";

const MedicalScientific = () => {
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
              Medical & Scientific Laser Engraving
              <span className="block text-spark-gold">Precision Healthcare Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              FDA-compliant laser marking for medical devices, laboratory equipment, and scientific instruments throughout the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Medical Device & Scientific Equipment Laser Marking
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks provides compliant laser marking services for medical devices, laboratory equipment, and scientific instruments. Our precision marking meets FDA requirements and industry standards for healthcare applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Medical Device Marking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">FDA-compliant laser marking on medical devices and surgical instruments.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Surgical instrument marking</li>
                  <li>• Medical device serial numbers</li>
                  <li>• Lot number traceability</li>
                  <li>• Manufacturer identification</li>
                  <li>• CE mark and compliance symbols</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <FlaskConical className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Laboratory Equipment Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Precision marking for laboratory glassware, equipment, and research instruments.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Lab equipment asset tags</li>
                  <li>• Glassware identification</li>
                  <li>• Calibration date markings</li>
                  <li>• Research instrument labels</li>
                  <li>• Sample container markings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Scientific Instrument Marking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Specialized marking for scientific and analytical instrumentation.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Analytical instrument panels</li>
                  <li>• Microscope component marking</li>
                  <li>• Spectroscopy equipment labels</li>
                  <li>• Research device identification</li>
                  <li>• Precision measurement tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Pill className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Pharmaceutical Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser marking for pharmaceutical manufacturing and drug development equipment.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Pharmaceutical equipment marking</li>
                  <li>• Drug manufacturing tools</li>
                  <li>• Quality control instruments</li>
                  <li>• Clinical trial equipment</li>
                  <li>• Regulatory compliance markings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Biocompatible Material Marking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Specialized UV laser marking on biocompatible polymers and medical materials.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Biocompatible polymer marking</li>
                  <li>• Medical-grade plastic identification</li>
                  <li>• Implant component marking</li>
                  <li>• Surgical tool identification</li>
                  <li>• Sterilization-resistant markings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Healthcare Facility Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom marking solutions for hospitals, clinics, and healthcare facilities.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Patient identification systems</li>
                  <li>• Hospital equipment tags</li>
                  <li>• Emergency equipment marking</li>
                  <li>• Medical cart identification</li>
                  <li>• Healthcare compliance labels</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Compliance & Standards */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Medical & Scientific Compliance Standards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">FDA Regulations</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• CFR 21 Part 820 compliance</li>
                  <li>• Medical device marking requirements</li>
                  <li>• UDI (Unique Device Identifier) marking</li>
                  <li>• Traceability requirements</li>
                  <li>• Quality system regulations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">International Standards</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• ISO 13485 medical device standards</li>
                  <li>• CE marking for European compliance</li>
                  <li>• ISO 15223 medical device symbols</li>
                  <li>• IEC 62304 medical device software</li>
                  <li>• ISO 14971 risk management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Laboratory Standards</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• CLIA laboratory requirements</li>
                  <li>• CAP accreditation standards</li>
                  <li>• ISO 15189 medical laboratories</li>
                  <li>• Good Laboratory Practice (GLP)</li>
                  <li>• Research compliance markings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DC Metro Medical Institutions */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">DC Metro Healthcare Institutions We Serve</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Major Medical Centers:</strong> Johns Hopkins, MedStar Health, Inova Health System, Children's National Hospital</p>
                <p><strong>Research Institutions:</strong> NIH Bethesda Campus, Walter Reed Medical Center, Georgetown University Medical Center</p>
                <p><strong>Government Healthcare:</strong> VA Medical Centers, FDA facilities, CDC Atlanta liaison offices</p>
                <p><strong>Biotech Companies:</strong> Gaithersburg biotech corridor, Alexandria life sciences companies</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Specialized Laser Technologies</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">UV Laser Marking</h4>
                    <p className="text-muted-foreground text-sm">Ideal for biocompatible polymers and sensitive medical materials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Fiber Laser Systems</h4>
                    <p className="text-muted-foreground text-sm">Permanent marking on stainless steel surgical instruments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">CO2 Laser Engraving</h4>
                    <p className="text-muted-foreground text-sm">Precise marking on medical packaging and labels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalScientific;