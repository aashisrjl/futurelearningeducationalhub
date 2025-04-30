
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Your Future Journey Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Trusted Guidance for a Brighter Future
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-brand-blue hover:bg-brand-gold text-white rounded-md text-lg px-8 py-6">
              <a href="#study-abroad">Explore Programs</a>
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-blue rounded-md text-lg px-8 py-6">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
