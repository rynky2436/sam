export const metadata = {
  title: "Creativeartservices",
  description: "Creativeartservices page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Palette, Puzzle, Layers, TreePine, Sparkles, Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const CreativeArtServices = () => {
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
              Creative & Art Laser Services
              <span className="block text-spark-gold">Artistic Innovation in DC Metro</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transform your creative vision with custom laser cutting and engraving for art projects, prototypes, and unique designs throughout Washington DC, Northern Virginia, and Maryland.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Custom Art & Creative Laser Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Sparks & Marks brings artistic visions to life with precision laser cutting and engraving services. From custom stencils to mixed-media art pieces, we help artists, designers, and creators realize their unique projects with cutting-edge laser technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Custom Stencils & Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Precision laser-cut stencils for painting, crafting, and artistic applications.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom painting stencils</li>
                  <li>• Crafting templates</li>
                  <li>• Fabric and textile stencils</li>
                  <li>• Sign making templates</li>
                  <li>• Educational and instructional stencils</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Puzzle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Laser-Cut Puzzles & Games</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom puzzles and educational games designed and cut with precision laser technology.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom jigsaw puzzles</li>
                  <li>• Educational puzzle games</li>
                  <li>• 3D puzzle assemblies</li>
                  <li>• Brain teaser designs</li>
                  <li>• Promotional puzzle gifts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Layers className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Model Making & Prototyping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Architectural models, product prototypes, and scale models with laser precision.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Architectural scale models</li>
                  <li>• Product design prototypes</li>
                  <li>• Educational model kits</li>
                  <li>• Engineering concept models</li>
                  <li>• Display and presentation models</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <TreePine className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Wood Inlays & Artistic Panels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Intricate wood inlay work and decorative panels for artistic and architectural applications.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Custom wood inlay designs</li>
                  <li>• Decorative wall panels</li>
                  <li>• Furniture accent pieces</li>
                  <li>• Artistic wood compositions</li>
                  <li>• Architectural detail elements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Art Prints on Multiple Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Custom art reproduction and engraving on stone, tile, wood, and acrylic surfaces.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Stone and marble engraving</li>
                  <li>• Ceramic tile art prints</li>
                  <li>• Wood grain art reproduction</li>
                  <li>• Acrylic art displays</li>
                  <li>• Metal artistic engravings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Scissors className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Mixed-Media Art Pieces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Complex art installations combining wood, acrylic, metal, and other materials.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• Multi-material art installations</li>
                  <li>• Layered acrylic and wood pieces</li>
                  <li>• Metal and wood combinations</li>
                  <li>• Interactive art elements</li>
                  <li>• Custom gallery displays</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Artist Communities */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">DC Metro Creative Communities We Serve</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Art Galleries & Museums</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Smithsonian Institution exhibits</li>
                  <li>• Local DC gallery installations</li>
                  <li>• Museum display components</li>
                  <li>• Interactive exhibit elements</li>
                  <li>• Educational museum tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Educational Institutions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Art school projects</li>
                  <li>• University research models</li>
                  <li>• STEAM education kits</li>
                  <li>• Student thesis projects</li>
                  <li>• Academic prototyping</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Independent Artists</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Custom art installations</li>
                  <li>• Gallery exhibition pieces</li>
                  <li>• Public art projects</li>
                  <li>• Commissioned artwork</li>
                  <li>• Artist studio productions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Creative Materials */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Artistic Materials & Capabilities</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Exotic Wood Species</h4>
                    <p className="text-muted-foreground text-sm">Walnut, cherry, mahogany, and bamboo for unique artistic expressions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Colored Acrylics</h4>
                    <p className="text-muted-foreground text-sm">Full spectrum of colors including fluorescent and mirror acrylics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Natural Stone & Ceramics</h4>
                    <p className="text-muted-foreground text-sm">Marble, granite, slate, and ceramic tiles for artistic applications</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Design Services & Support</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">File Conversion & Preparation</h4>
                    <p className="text-muted-foreground text-sm">Convert artwork to laser-ready formats with design optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Creative Consultation</h4>
                    <p className="text-muted-foreground text-sm">Collaborate with artists to achieve optimal laser cutting results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Prototyping Support</h4>
                    <p className="text-muted-foreground text-sm">Test cuts and iterations to perfect your artistic vision</p>
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

export default CreativeArtServices;