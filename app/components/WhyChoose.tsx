import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Users, 
  Award, 
  Zap, 
  Settings, 
  TrendingUp, 
  DollarSign,
  ArrowRight 
} from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Sparks & Marks Laser Engraving in Washington DC Metro Area?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom business signage to personalized gifts, we offer complete laser engraving and cutting services on wood, metal, glass, and all materials for Washington DC Metro Area, Maryland, Virginia, and Northern VA businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">Local DC Metro Area Expertise</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-spark rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Located in Washington DC Metro Area serving the region</p>
                  <p className="text-muted-foreground">Convenient location for Maryland, DC, Virginia, and Northern VA businesses</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-laser rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Fast turnaround for DC Metro Area businesses</p>
                  <p className="text-muted-foreground">Quick delivery and efficient service for local MD, DC, VA clients</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-spark rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Personal service from local laser engraving experts</p>
                  <p className="text-muted-foreground">Direct communication with experienced professionals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-laser rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Understanding of regional business needs</p>
                  <p className="text-muted-foreground">Tailored solutions for local market requirements</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">Advanced Laser Technology</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-spark rounded-lg flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">State-of-the-art laser engraving on wood, metal, glass</p>
                  <p className="text-muted-foreground">Latest technology for superior precision and quality</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-laser rounded-lg flex-shrink-0">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Precision laser cutting for all materials</p>
                  <p className="text-muted-foreground">Accurate cuts and engravings for professional results</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-spark rounded-lg flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">High-quality results for business applications</p>
                  <p className="text-muted-foreground">Professional finish that represents your brand</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-laser rounded-lg flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Competitive pricing for MD DE VA region</p>
                  <p className="text-muted-foreground">Fair rates without compromising on quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready for Professional Laser Engraving in DC Metro Area?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Contact Sparks & Marks today for a free quote on laser engraving services for your Washington DC Metro Area, Maryland, Virginia, or Northern VA business. We handle bulk orders and custom projects with efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="spark" size="lg">
                  Get a Bulk or Custom Project Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  View All Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;