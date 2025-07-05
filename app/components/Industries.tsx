import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import medicalImage from "@/assets/medical-engraving.jpg";
import professionalImage from "@/assets/professional-signs.jpg";
import restaurantImage from "@/assets/restaurant-engraving.jpg";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Building2, 
  Utensils, 
  Home, 
  Tractor, 
  ShoppingBag, 
  Factory, 
  Laptop, 
  Hotel,
  ArrowRight 
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: "Medical Device Engraving",
      description: "Medical equipment laser engraving, compliance labels, hospital signage in DC Metro Area, MD, VA",
      image: medicalImage,
      gradient: "bg-gradient-spark",
      link: "/industries/medical-engraving"
    },
    {
      icon: Building2,
      title: "Professional Office Signs",
      description: "Custom office signs, nameplates, awards laser engraved on wood, metal, glass",
      image: professionalImage,
      gradient: "bg-gradient-laser",
      link: "/industries/professional-office-signs"
    },
    {
      icon: Utensils,
      title: "Restaurant Laser Engraving",
      description: "Menu boards, table numbers, promotional signage laser cut for DC Metro Area restaurants",
      image: restaurantImage,
      gradient: "bg-gradient-spark",
      link: "/industries/restaurant-engraving"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property signs, office displays, and marketing materials",
      gradient: "bg-gradient-laser",
      link: "/industries/real-estate"
    },
    {
      icon: Tractor,
      title: "Agriculture Equipment Tags",
      description: "Farm equipment laser engraving, livestock tags, agricultural signage DC Metro MD VA",
      gradient: "bg-gradient-spark",
      link: "/industries/agriculture"
    },
    {
      icon: ShoppingBag,
      title: "Retail Store Displays",
      description: "Store displays, product labels, promotional items laser cut on wood metal glass",
      gradient: "bg-gradient-laser",
      link: "/industries/retail"
    },
    {
      icon: Factory,
      title: "Industrial Laser Marking",
      description: "Safety signs, equipment tags, compliance marking laser engraved in DC Metro Area",
      gradient: "bg-gradient-spark",
      link: "/industries/industrial"
    },
    {
      icon: Laptop,
      title: "Technology Laser Engraving",
      description: "Product labels, corporate awards, tech signage laser cut in Washington DC Metro Area",
      gradient: "bg-gradient-laser",
      link: "/industries/technology"
    },
    {
      icon: Hotel,
      title: "Hospitality Custom Signs",
      description: "Hotel room signs, guest amenities, promotional displays laser engraved DC Metro MD VA",
      gradient: "bg-gradient-spark",
      link: "/industries/hospitality"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Laser Engraving Services by Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sparks & Marks provides specialized laser engraving and cutting services on wood, metal, glass for businesses across all industries in Washington DC Metro Area and throughout Maryland, Virginia, and Northern VA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {industry.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className={`p-3 ${industry.gradient} rounded-lg w-fit mb-3`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {industry.description}
                  </p>
                  <Button variant="outline" size="sm" className="group-hover:border-primary" asChild>
                    <Link to={industry.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;