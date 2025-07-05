export const metadata = {
  title: "Hobbyspecialtyprojects",
  description: "Hobbyspecialtyprojects page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Gamepad2, Plane, Puzzle, Zap, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";

const HobbySpecialtyProjects = () => {
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
              Hobby & Specialty Projects
              <span className="block text-spark-gold">Custom Laser Solutions for Enthusiasts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Precision laser cutting and engraving for cosplay, RC parts, gaming accessories, and specialty hobby projects throughout the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom Hobby & Specialty Laser Cutting Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks brings your hobby projects to life with precision laser cutting and engraving. From cosplay props to RC components, we provide the quality and accuracy that hobby enthusiasts demand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Cosplay Props & Costume Parts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser-cut cosplay armor, props, and costume accessories for conventions and performances.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Armor pieces and panels</li>
                  <li>• Weapon props (convention-safe)</li>
                  <li>• Character accessories</li>
                  <li>• Helmet components</li>
                  <li>• Decorative costume elements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Plane className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>RC Parts & Model Components</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Precision parts for remote control vehicles, drones, and model aircraft.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• RC car chassis components</li>
                  <li>• Drone frame parts</li>
                  <li>• Model airplane components</li>
                  <li>• Custom mounting brackets</li>
                  <li>• Replacement parts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Puzzle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Board Game Components</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom game pieces, organizers, and accessories for board game enthusiasts.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom game tokens</li>
                  <li>• Board game organizers</li>
                  <li>• Card holders and trays</li>
                  <li>• Dice towers and accessories</li>
                  <li>• Prototype game components</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>EVA Foam Cutting & Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Precision EVA foam cutting for cosplay and costume making projects.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• EVA foam armor templates</li>
                  <li>• Costume pattern cutting</li>
                  <li>• Foam prop components</li>
                  <li>• Packaging inserts</li>
                  <li>• Custom foam shapes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Knife Scales & Gun Grips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom knife handles and firearm grips in wood, G10, and other materials.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom knife scales</li>
                  <li>• Pistol grip panels</li>
                  <li>• G10 and Micarta cutting</li>
                  <li>• Wood handle blanks</li>
                  <li>• Tactical accessories</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gamepad2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Gaming & Electronics Accessories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom gaming accessories and electronic project enclosures.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Controller modifications</li>
                  <li>• Gaming desk accessories</li>
                  <li>• Electronics enclosures</li>
                  <li>• Custom PC case panels</li>
                  <li>• Arduino project boxes</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Hobby Communities */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">DC Metro Hobby Communities We Support</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Cosplay & Convention Scene</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Awesome Con Washington DC</li>
                  <li>• MAGFest cosplay community</li>
                  <li>• Local comic conventions</li>
                  <li>• Costume contest participants</li>
                  <li>• Professional cosplay builders</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">RC & Model Communities</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Local RC car racing clubs</li>
                  <li>• Drone racing enthusiasts</li>
                  <li>• Model airplane clubs</li>
                  <li>• FPV racing community</li>
                  <li>• Scale model builders</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Gaming & Maker Spaces</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Board game cafes and clubs</li>
                  <li>• Local makerspaces</li>
                  <li>• Gaming tournaments</li>
                  <li>• Electronics hobbyists</li>
                  <li>• DIY enthusiast groups</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Specialty Materials */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Specialty Hobby Materials</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Carbon Fiber & Composites</h4>
                    <p className="text-muted-foreground text-sm">Lightweight, strong materials for RC vehicles and performance applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">G10 & Micarta</h4>
                    <p className="text-muted-foreground text-sm">Durable materials for knife handles and tactical applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">EVA Foam & Specialty Foams</h4>
                    <p className="text-muted-foreground text-sm">Perfect for cosplay armor and protective packaging</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Project Support Services</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Design Assistance</h4>
                    <p className="text-muted-foreground text-sm">Help optimize designs for laser cutting and assembly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Prototype Iterations</h4>
                    <p className="text-muted-foreground text-sm">Multiple versions to perfect fit and function</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Small Batch Production</h4>
                    <p className="text-muted-foreground text-sm">Limited runs for groups and communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Projects */}
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Popular Hobby Projects in DC Metro</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Convention Season Projects</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Awesome Con costume builds</li>
                  <li>• Star Wars celebration props</li>
                  <li>• Comic convention displays</li>
                  <li>• Professional cosplay commissions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">RC Racing Season</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Competition chassis modifications</li>
                  <li>• Custom racing drone frames</li>
                  <li>• Performance upgrade parts</li>
                  <li>• Track-specific modifications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Gaming Community Projects</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Tournament organization systems</li>
                  <li>• Custom game modifications</li>
                  <li>• Streaming setup accessories</li>
                  <li>• Gaming cafe equipment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HobbySpecialtyProjects;