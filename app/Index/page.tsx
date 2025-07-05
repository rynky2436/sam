export const metadata = {
  title: "Index",
  description: "Index page for Spark Mark Scribe."
};

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <WhyChoose />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
