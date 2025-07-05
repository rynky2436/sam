export const metadata = {
  title: "Blog",
  description: "Blog page for Spark Mark Scribe."
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 5 Materials for Laser Engraving in 2024",
      excerpt: "Discover the best materials for laser engraving projects and what makes them ideal for different applications in the DC Metro Area.",
      author: "Sparks & Marks Team",
      date: "March 15, 2024",
      category: "Materials",
      readTime: "5 min read"
    },
    {
      title: "Medical Device Engraving: Compliance and Best Practices",
      excerpt: "Essential guidelines for medical device laser engraving to ensure FDA compliance and patient safety in healthcare applications.",
      author: "Sparks & Marks Team",
      date: "March 10, 2024",
      category: "Medical",
      readTime: "7 min read"
    },
    {
      title: "Restaurant Signage Trends: What's Hot in DC Metro",
      excerpt: "Latest trends in restaurant signage and menu boards that are popular with DC area hospitality businesses.",
      author: "Sparks & Marks Team",
      date: "March 5, 2024",
      category: "Hospitality",
      readTime: "4 min read"
    },
    {
      title: "How to Choose the Right Award Material",
      excerpt: "Complete guide to selecting the perfect material for corporate awards, recognition plaques, and achievement trophies.",
      author: "Sparks & Marks Team",
      date: "February 28, 2024",
      category: "Corporate",
      readTime: "6 min read"
    },
    {
      title: "Laser Cutting vs. Traditional Methods: A Comparison",
      excerpt: "Comparing laser cutting with traditional cutting methods to help you choose the best option for your project.",
      author: "Sparks & Marks Team",
      date: "February 20, 2024",
      category: "Technology",
      readTime: "8 min read"
    },
    {
      title: "Maintaining Your Laser Engraved Items",
      excerpt: "Tips and techniques for keeping your laser engraved signs, awards, and custom items looking their best over time.",
      author: "Sparks & Marks Team",
      date: "February 15, 2024",
      category: "Maintenance",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Laser Engraving Blog
              <span className="block text-spark-gold">Tips & Industry Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Expert advice, industry trends, and tips for laser engraving projects in the DC Metro Area.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest trends, tips, and insights in laser engraving and cutting technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="outline" size="sm" className="group-hover:border-primary">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find articles specific to your industry or interest area.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Materials", "Medical", "Hospitality", "Corporate", "Technology", "Maintenance"].map((category, index) => (
              <Button key={index} variant="outline" className="h-12">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest laser engraving tips, industry news, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="spark">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;