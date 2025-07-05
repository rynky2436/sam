export const metadata = {
  title: "Educationawards",
  description: "Educationawards page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, GraduationCap, Award, Trophy, BookOpen, Beaker, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const EducationAwards = () => {
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
              Education & Awards Laser Engraving
              <span className="block text-spark-gold">Academic Excellence Recognition</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Custom laser engraved medals, certificates, educational materials, and STEM project kits for schools and educational institutions throughout the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Educational Laser Engraving & Award Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks supports educational excellence with custom laser engraved awards, certificates, and educational materials. From elementary schools to universities, we help recognize achievements and enhance learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Academic Medals & Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser engraved medals and certificate holders for academic achievements.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Honor roll recognition medals</li>
                  <li>• Academic achievement certificates</li>
                  <li>• Perfect attendance awards</li>
                  <li>• Subject-specific recognition</li>
                  <li>• Graduation ceremony medals</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Diploma Holders & Frames</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Elegant laser engraved diploma holders and graduation keepsakes.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom diploma frames</li>
                  <li>• Graduation ceremony holders</li>
                  <li>• School-branded presentations</li>
                  <li>• Commemorative plaques</li>
                  <li>• Multi-certificate displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Student ID Cards & Name Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Durable laser engraved student identification and name tags for schools.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Student ID card templates</li>
                  <li>• Classroom name tags</li>
                  <li>• Teacher identification badges</li>
                  <li>• Visitor name tags</li>
                  <li>• Event identification systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>School Signs & Award Boards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Professional school signage and recognition display boards.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• School entrance signs</li>
                  <li>• Honor roll display boards</li>
                  <li>• Hall of fame plaques</li>
                  <li>• Athletic achievement displays</li>
                  <li>• Directory and wayfinding signs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Beaker className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>STEM/STEAM Project Kits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Educational laser-cut kits for science, technology, engineering, and math learning.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Physics demonstration models</li>
                  <li>• Engineering design challenges</li>
                  <li>• Mathematics visualization tools</li>
                  <li>• Science fair project components</li>
                  <li>• Robotics competition parts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Educational Tools & Manipulatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser-cut educational tools and hands-on learning materials.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Math manipulative tools</li>
                  <li>• Alphabet and number sets</li>
                  <li>• Puzzle-based learning aids</li>
                  <li>• Interactive learning games</li>
                  <li>• Classroom organizational tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Educational Institutions */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">DC Metro Educational Institutions We Serve</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">K-12 Public Schools</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• DC Public Schools (DCPS)</li>
                  <li>• Montgomery County Schools</li>
                  <li>• Fairfax County Public Schools</li>
                  <li>• Prince George's County Schools</li>
                  <li>• Arlington Public Schools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Private & Charter Schools</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sidwell Friends School</li>
                  <li>• Georgetown Preparatory</li>
                  <li>• St. Albans School</li>
                  <li>• National Cathedral School</li>
                  <li>• Local charter schools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Universities & Colleges</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• George Washington University</li>
                  <li>• Georgetown University</li>
                  <li>• American University</li>
                  <li>• George Mason University</li>
                  <li>• University of Maryland</li>
                </ul>
              </div>
            </div>
          </div>

          {/* STEM Programs */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">STEM Education Support</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Robotics Competition Parts</h4>
                    <p className="text-muted-foreground text-sm">Custom components for FIRST Robotics, VEX, and other competitions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Science Fair Projects</h4>
                    <p className="text-muted-foreground text-sm">Custom displays, models, and demonstration components</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Engineering Design Challenges</h4>
                    <p className="text-muted-foreground text-sm">Pre-cut kits for classroom engineering projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Award Categories & Recognition</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Academic Excellence</h4>
                    <p className="text-muted-foreground text-sm">Honor roll, dean's list, and academic achievement recognition</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Athletic Achievements</h4>
                    <p className="text-muted-foreground text-sm">Sports awards, championship recognition, and athletic halls of fame</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Service & Leadership</h4>
                    <p className="text-muted-foreground text-sm">Community service, leadership, and character recognition awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bulk Ordering */}
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Educational Institution Benefits</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Volume Pricing & Partnerships</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Educational institution discounts</li>
                  <li>• Bulk order pricing for ceremonies</li>
                  <li>• Annual award program partnerships</li>
                  <li>• Purchase order acceptance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Educational Support Services</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• STEM curriculum integration support</li>
                  <li>• Custom educational kit development</li>
                  <li>• Teacher professional development</li>
                  <li>• Student design competition support</li>
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

export default EducationAwards;