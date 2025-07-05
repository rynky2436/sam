export const metadata = {
  title: "Babyshowers",
  description: "Babyshowers page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Baby, Gift, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const BabyShowers = () => {
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
              Baby Showers & Gender Reveals
              <span className="block text-spark-gold">Celebrate New Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Custom laser engraved items for baby showers, gender reveal parties, and welcoming new arrivals in the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Baby className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Welcome Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Beautiful welcome signs for baby showers and announcements</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Party Favors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Personalized keepsakes for guests to remember the special day</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Gender Reveals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Special reveal boxes and signs for gender announcement parties</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-spark transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Guest Books</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Alternative guest book ideas for collecting wishes and advice</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BabyShowers;