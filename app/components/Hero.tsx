import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-laser-workshop.jpg";
import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional laser engraving workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              <Zap className="h-4 w-4 mr-2 text-spark-gold" />
              Professional Laser Engraving Services
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional Laser Engraving
            <span className="block text-spark-gold">DC Metro Area</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Expert laser engraving and cutting on wood, metal, glass serving Washington DC Metro Area, Maryland, Virginia, and Northern VA businesses with precision craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="spark" size="lg" className="group" asChild>
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-white/10 rounded-lg">
                <Shield className="h-6 w-6 text-spark-gold" />
              </div>
              <div>
                <p className="font-semibold">Local Expertise</p>
                <p className="text-sm text-white/80">DC Metro Area based</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-white/10 rounded-lg">
                <Zap className="h-6 w-6 text-spark-gold" />
              </div>
              <div>
                <p className="font-semibold">Advanced Technology</p>
                <p className="text-sm text-white/80">State-of-the-art lasers</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-white/10 rounded-lg">
                <Award className="h-6 w-6 text-spark-gold" />
              </div>
              <div>
                <p className="font-semibold">Quality Results</p>
                <p className="text-sm text-white/80">Professional finish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;