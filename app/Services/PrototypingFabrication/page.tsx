export const metadata = {
  title: "Prototypingfabrication",
  description: "Prototypingfabrication page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Building, Wrench, Layers, Settings, Cog, Ruler } from "lucide-react";
import { Link } from "react-router-dom";

const PrototypingFabrication = () => {
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
              Prototyping & Custom Fabrication
              <span className="block text-spark-gold">Precision Manufacturing Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Professional laser cutting and fabrication for prototypes, architectural models, custom parts, and manufacturing fixtures throughout the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom Fabrication & Prototype Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks provides precision laser cutting and fabrication services for rapid prototyping, architectural modeling, and custom manufacturing solutions. From concept to production, we help bring your designs to life with accuracy and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Architectural Models & Scale Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Precision architectural models for design visualization and client presentations.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Building scale models</li>
                  <li>• Urban planning models</li>
                  <li>• Landscape architecture models</li>
                  <li>• Interior design mockups</li>
                  <li>• Development presentation models</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Brackets & Mechanical Parts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser-cut custom brackets, mounting hardware, and mechanical components.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom mounting brackets</li>
                  <li>• Mechanical assemblies</li>
                  <li>• Structural connectors</li>
                  <li>• Hardware prototypes</li>
                  <li>• Replacement parts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Layers className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Templates & Precision Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom templates and patterns for manufacturing and assembly processes.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Manufacturing templates</li>
                  <li>• Assembly guides</li>
                  <li>• Drilling patterns</li>
                  <li>• Alignment fixtures</li>
                  <li>• Quality control templates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Gaskets & Sealing Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Precision-cut gaskets and sealing components for industrial applications.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom gasket cutting</li>
                  <li>• O-ring substitutes</li>
                  <li>• Foam inserts</li>
                  <li>• Weatherstripping</li>
                  <li>• Sealing strips</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Cog className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Manufacturing Fixtures & Jigs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom jigs and fixtures to improve manufacturing workflows and precision.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Assembly jigs</li>
                  <li>• Welding fixtures</li>
                  <li>• Drilling guides</li>
                  <li>• Positioning fixtures</li>
                  <li>• Quality control jigs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Ruler className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Rapid Prototyping & Product Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Fast turnaround prototyping for product development and design validation.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Concept prototypes</li>
                  <li>• Functional testing models</li>
                  <li>• Design iteration support</li>
                  <li>• Pre-production samples</li>
                  <li>• Market validation models</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Industry Applications */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Industries We Support with Custom Fabrication</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Architecture & Construction</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Architectural firm models</li>
                  <li>• Developer presentation models</li>
                  <li>• Construction planning aids</li>
                  <li>• Building component prototypes</li>
                  <li>• Site planning visualizations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Product Design & Engineering</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Consumer product prototypes</li>
                  <li>• Engineering validation models</li>
                  <li>• Patent application models</li>
                  <li>• Investor presentation prototypes</li>
                  <li>• Manufacturing feasibility studies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Manufacturing & Production</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Production line fixtures</li>
                  <li>• Quality control jigs</li>
                  <li>• Assembly line aids</li>
                  <li>• Custom tooling solutions</li>
                  <li>• Workflow optimization tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Materials & Capabilities */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Fabrication Materials & Specifications</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Engineering Plastics</h4>
                    <p className="text-muted-foreground text-sm">Delrin, ABS, polycarbonate, and HDPE for durable prototypes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Sheet Metals</h4>
                    <p className="text-muted-foreground text-sm">Aluminum, stainless steel, and brass for structural components</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Specialty Materials</h4>
                    <p className="text-muted-foreground text-sm">Carbon fiber, fiberglass, and composite materials</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">DC Metro Area Innovation Hubs</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Federal Contractors:</strong> Pentagon area defense contractors, NASA Goddard, NIH research facilities</p>
                <p><strong>Tech Startups:</strong> Northern Virginia tech corridor, DC startup accelerators</p>
                <p><strong>Universities:</strong> George Washington University, Georgetown, Virginia Tech research labs</p>
                <p><strong>Government Agencies:</strong> Department of Energy, NIST, Smithsonian research divisions</p>
              </div>
            </div>
          </div>

          {/* Prototyping Process */}
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Rapid Prototyping Process</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">1</div>
                <h4 className="font-semibold text-foreground mb-2">Design Review</h4>
                <p className="text-muted-foreground text-sm">Analyze CAD files and optimize for laser cutting manufacturing</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">2</div>
                <h4 className="font-semibold text-foreground mb-2">Material Selection</h4>
                <p className="text-muted-foreground text-sm">Choose optimal materials for prototype functionality and cost</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">3</div>
                <h4 className="font-semibold text-foreground mb-2">Rapid Production</h4>
                <p className="text-muted-foreground text-sm">Fast laser cutting and assembly for quick iteration cycles</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center font-bold">4</div>
                <h4 className="font-semibold text-foreground mb-2">Testing & Refinement</h4>
                <p className="text-muted-foreground text-sm">Functional testing support and design iteration assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrototypingFabrication;