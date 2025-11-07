import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, HeadphonesIcon, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-beach.jpg";
import maldivesImg from "@/assets/maldives.jpg";
import mountainsImg from "@/assets/mountains.jpg";
import singaporeImg from "@/assets/singapore.jpg";

const Index = () => {
  const features = [
    {
      icon: MapPin,
      title: "Doorstep Pickup & Drop",
      description: "We pick you up from your home and ensure a safe drop-off when you return. Zero travel stress!",
      gradient: "gradient-hero",
    },
    {
      icon: CheckCircle2,
      title: "End-to-End Travel Management",
      description: "From flights to hotels, activities to meals - we handle everything so you can just relax and enjoy.",
      gradient: "gradient-sunset",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Customer Support",
      description: "Our dedicated travel experts are available round the clock to assist you anytime, anywhere.",
      gradient: "bg-accent",
    },
  ];

  const destinations = [
    {
      name: "Maldives Paradise",
      image: maldivesImg,
      description: "Overwater villas & crystal waters",
    },
    {
      name: "Swiss Alps",
      image: mountainsImg,
      description: "Breathtaking mountain escapes",
    },
    {
      name: "Singapore Nights",
      image: singaporeImg,
      description: "Modern city adventures",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Travel Without Stress<br />
            <span className="text-secondary">We Handle Everything for You</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            From your doorstep to dream destinations — relax, explore, and enjoy!
          </p>
          <Link to="/packages">
            <Button size="lg" className="text-lg px-8 py-6 gradient-sunset hover:scale-105 transition-transform duration-300">
              Explore Packages
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose WanderWay?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just a travel agency — we're your complete travel partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg ${feature.gradient} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover breathtaking locations handpicked by our travel experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                  <p className="text-white/90">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/packages">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                View All Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-ocean">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Clock className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us plan your perfect getaway. Contact our travel experts today for a personalized quote!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/packages">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Browse Packages
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
