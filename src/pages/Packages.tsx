import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import singaporeImg from "@/assets/singapore.jpg";
import malaysiaImg from "@/assets/malaysia.jpg";
import indiaImg from "@/assets/india.jpg";

const Packages = () => {
  const packages = [
    {
      id: 1,
      title: "Singapore Tour Package",
      description: "Experience the futuristic cityscape, world-class attractions, and diverse culture",
      image: singaporeImg,
      duration: "5 Days / 4 Nights",
      price: "₹45,000",
      rating: 4.8,
      highlights: ["Marina Bay Sands", "Universal Studios", "Gardens by the Bay", "Sentosa Island"],
    },
    {
      id: 2,
      title: "Malaysia Tour Package",
      description: "Discover the perfect blend of modernity and tradition in Malaysia",
      image: malaysiaImg,
      duration: "6 Days / 5 Nights",
      price: "₹38,000",
      rating: 4.7,
      highlights: ["Petronas Towers", "Langkawi Island", "Genting Highlands", "Batu Caves"],
    },
    {
      id: 3,
      title: "All India Tour Package",
      description: "Journey through India's incredible heritage, culture, and natural beauty",
      image: indiaImg,
      duration: "10 Days / 9 Nights",
      price: "₹55,000",
      rating: 4.9,
      highlights: ["Taj Mahal", "Rajasthan Forts", "Kerala Backwaters", "Golden Temple"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 gradient-ocean">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Tour Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            Handpicked destinations with complete travel management from doorstep to drop-off
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className="overflow-hidden hover-lift border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-secondary text-white flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{pkg.rating}</span>
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>All Inclusive</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold mb-2 text-muted-foreground">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">Starting from</p>
                    <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full gradient-hero hover:opacity-90 transition-opacity text-lg py-6">
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 gradient-sunset">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Can't Find Your Dream Destination?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us create a custom package tailored just for you. Contact our travel experts today!
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Request Custom Package
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
