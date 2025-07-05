export const metadata = {
  title: "Industrialmanufacturing",
  description: "Industrialmanufacturing page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Factory, Wrench, Tag, Settings, Zap, Hash } from "lucide-react";
import { Link } from "react-router-dom";

const IndustrialManufacturing = () => {
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
              Industrial & Manufacturing Laser Services
              <span className="block text-spark-gold">Precision Manufacturing Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional laser marking and engraving for industrial applications, manufacturing processes, and quality control throughout the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industrial Laser Marking & Manufacturing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks provides precision laser marking solutions for manufacturing, quality control, and industrial applications. From part identification to compliance marking, we support DC Metro area manufacturers with reliable, permanent marking services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Hash className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Metal Part Marking & Serial Numbers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Permanent laser marking for part identification, traceability, and quality control.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Serial number marking on metal parts</li>
                  <li>• Lot number and batch identification</li>
                  <li>• Manufacturing date codes</li>
                  <li>• Part specification markings</li>
                  <li>• Quality control stamps</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Tag className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Cable Tags & Industrial Labels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Durable laser engraved tags and labels for industrial identification and organization.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Cable identification tags</li>
                  <li>• Switch plate markings</li>
                  <li>• Control panel labels</li>
                  <li>• Equipment identification plates</li>
                  <li>• Safety compliance tags</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Anodized Aluminum Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">High-contrast laser engraving on anodized aluminum for industrial durability.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Equipment nameplates</li>
                  <li>• Asset tracking tags</li>
                  <li>• Maintenance schedule plates</li>
                  <li>• Safety instruction labels</li>
                  <li>• Compliance certification tags</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Tool Marking & Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Permanent laser marking on tools for inventory control and ownership identification.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Tool inventory markings</li>
                  <li>• Employee tool identification</li>
                  <li>• Calibration date markings</li>
                  <li>• Department tool tags</li>
                  <li>• Theft prevention markings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>PCB & Electronic Component Marking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Precision laser marking for electronic components and circuit board identification.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• PCB trace etching and marking</li>
                  <li>• Component identification numbers</li>
                  <li>• Electronic part marking</li>
                  <li>• Circuit board ID marking</li>
                  <li>• Electronic assembly labels</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Manufacturing Process Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Integrated laser marking solutions for manufacturing workflows and quality systems.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• In-line marking systems</li>
                  <li>• Quality control integration</li>
                  <li>• Automated marking processes</li>
                  <li>• Production line marking</li>
                  <li>• Batch processing systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Industry Applications */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Industrial Applications by Sector</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Aerospace & Defense</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Part traceability marking</li>
                  <li>• Military specification compliance</li>
                  <li>• Component serialization</li>
                  <li>• Quality assurance markings</li>
                  <li>• Security clearance tags</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Automotive Manufacturing</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• VIN number marking</li>
                  <li>• Parts identification</li>
                  <li>• Assembly line markings</li>
                  <li>• Quality control stamps</li>
                  <li>• Recall traceability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Electronics & Technology</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Circuit board identification</li>
                  <li>• Component part numbers</li>
                  <li>• Device serial numbers</li>
                  <li>• Compliance markings</li>
                  <li>• Manufacturing codes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Materials & Capabilities */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Industrial Materials & Specifications</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Stainless Steel & Hardened Metals</h4>
                    <p className="text-muted-foreground text-sm">Permanent marking on stainless steel, titanium, and hardened tool steels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Anodized Aluminum</h4>
                    <p className="text-muted-foreground text-sm">High-contrast marking on anodized surfaces for maximum visibility</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Engineering Plastics</h4>
                    <p className="text-muted-foreground text-sm">Marking on Delrin, ABS, polycarbonate, and other industrial plastics</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Quality & Compliance Standards</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">ISO Compliance</h4>
                    <p className="text-muted-foreground text-sm">Marking solutions that meet ISO quality management standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Military Standards</h4>
                    <p className="text-muted-foreground text-sm">MIL-STD compliant marking for defense contractors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">FDA Requirements</h4>
                    <p className="text-muted-foreground text-sm">Compliant marking for medical device and pharmaceutical applications</p>
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

export default IndustrialManufacturing;