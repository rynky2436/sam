export const metadata = {
  title: "Graduations",
  description: "Graduations page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, GraduationCap, Award, Camera, Users, School } from "lucide-react";
import { Link } from "react-router-dom";

const Graduations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6">
              <Link href="/events-occasions" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Graduation Laser Engraving Services
              <span className="block text-spark-gold">Celebrate Academic Achievement in DC Metro</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Honor academic milestones with custom laser engraved graduation plaques, awards, and keepsakes. Serving high schools, colleges, and universities throughout Washington DC, Northern Virginia, and Maryland with precision graduation engraving services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom Graduation Laser Engraving Services in Washington DC
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks specializes in laser engraved graduation awards, plaques, and keepsakes for students across the DC Metro Area. From high school diplomas to PhD achievements, we create lasting memories of academic success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Graduation Plaques & Diplomas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved graduation plaques and diploma frames to commemorate academic achievements.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• High school graduation plaques</li>
                  <li>• College degree commemorations</li>
                  <li>• Graduate program achievements</li>
                  <li>• Professional certification awards</li>
                  <li>• Academic milestone markers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Academic Achievement Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Recognition awards for outstanding academic performance and scholarly achievements.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Dean's List recognition awards</li>
                  <li>• Valedictorian/Salutatorian plaques</li>
                  <li>• Academic scholarship awards</li>
                  <li>• Honor society inductions</li>
                  <li>• Perfect attendance recognition</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Graduation Photo Frames & Displays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom laser engraved photo frames and display cases for graduation memories.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Personalized graduation frames</li>
                  <li>• Class photo display cases</li>
                  <li>• Multi-photo graduation collages</li>
                  <li>• Diploma and photo combinations</li>
                  <li>• Shadow box memory displays</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Class of 2024 & Year-Specific Items</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved items featuring graduation year and class-specific information.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Class year keepsakes</li>
                  <li>• Graduation date commemoratives</li>
                  <li>• School mascot engravings</li>
                  <li>• Class motto displays</li>
                  <li>• Reunion planning items</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <School className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>School & University Memorabilia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom school-branded laser engraved memorabilia and keepsakes.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• University logo engravings</li>
                  <li>• School spirit items</li>
                  <li>• Alumni association gifts</li>
                  <li>• Campus landmark replicas</li>
                  <li>• School history timelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Teacher & Faculty Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Laser engraved appreciation gifts for teachers, professors, and faculty members.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Teacher appreciation plaques</li>
                  <li>• Professor retirement gifts</li>
                  <li>• Faculty service awards</li>
                  <li>• Mentor recognition items</li>
                  <li>• Coach achievement trophies</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Educational Institution Services */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Educational Institution Laser Engraving Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">High Schools in DC Metro</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Graduation ceremony awards</li>
                  <li>• Senior class keepsakes</li>
                  <li>• Athletic achievement trophies</li>
                  <li>• Academic department awards</li>
                  <li>• Student council recognition</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Colleges & Universities</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Degree program completions</li>
                  <li>• Research achievement awards</li>
                  <li>• Fraternity/sorority items</li>
                  <li>• Campus organization gifts</li>
                  <li>• Alumni association products</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Graduate & Professional Schools</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Medical school graduations</li>
                  <li>• Law school achievements</li>
                  <li>• MBA program completions</li>
                  <li>• PhD dissertation celebrations</li>
                  <li>• Professional certification marks</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Local Schools We Serve */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">DC Metro Area Schools We Serve</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Washington DC:</strong> George Washington University, Georgetown University, American University, Howard University, Catholic University</p>
                <p><strong>Northern Virginia:</strong> George Mason University, Virginia Tech Northern Virginia, Marymount University</p>
                <p><strong>Maryland:</strong> University of Maryland College Park, Johns Hopkins University, Montgomery College</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Popular Graduation Materials</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Walnut & Cherry Wood</h4>
                    <p className="text-muted-foreground text-sm">Traditional, elegant materials perfect for diploma frames and awards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Black & Clear Acrylic</h4>
                    <p className="text-muted-foreground text-sm">Modern, sophisticated look for contemporary achievement displays</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Brass & Aluminum</h4>
                    <p className="text-muted-foreground text-sm">Durable metal options for permanent recognition displays</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graduation Season Planning */}
          <div className="bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Graduation Season Planning & Ordering</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Spring Graduation Season (May-June)</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Order by March 15th for May graduation ceremonies</li>
                  <li>• Bulk discounts available for class orders of 25+</li>
                  <li>• Rush delivery available for last-minute needs</li>
                  <li>• Coordinate with graduation committees</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Winter/Summer Graduations</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• December winter graduation ceremonies</li>
                  <li>• August summer session completions</li>
                  <li>• Individual orders welcome year-round</li>
                  <li>• Special pricing for educational institutions</li>
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

export default Graduations;