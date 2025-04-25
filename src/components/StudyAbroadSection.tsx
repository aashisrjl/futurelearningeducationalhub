
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CountryCardProps {
  name: string;
  flag: string;
  image: string;
  description: string;
  id: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, flag, image, description, id }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300" id={id}>
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 flex items-center">
          {name} <span className="ml-2 text-2xl">{flag}</span>
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button className="w-full bg-brand-blue hover:bg-brand-gold text-white">Learn More</Button>
      </div>
    </div>
  );
};

const StudyAbroadSection: React.FC = () => {
  const countries = [
    {
      id: "study-japan",
      name: "Japan",
      flag: "🇯🇵",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Study in Japan to experience cutting-edge technology, rich cultural heritage, and excellent educational standards."
    },
    {
      id: "study-australia",
      name: "Australia",
      flag: "🇦🇺",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Australia offers world-class education, amazing quality of life, and post-study work opportunities."
    },
    {
      id: "study-uk",
      name: "UK",
      flag: "🇬🇧",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "The UK is home to some of the world's oldest universities with a reputation for academic excellence and innovation."
    },
    {
      id: "study-canada",
      name: "Canada",
      flag: "🇨🇦",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Canada provides affordable education with immigrant-friendly policies and diverse, inclusive communities."
    },
    {
      id: "study-korea",
      name: "South Korea",
      flag: "🇰🇷",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "South Korea combines technological advancement with rich cultural traditions and growing international programs."
    },
    {
      id: "study-usa",
      name: "USA",
      flag: "🇺🇸",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "The USA offers diverse educational opportunities with renowned research facilities and vibrant campus life."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 3) % countries.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [countries.length, isMobile]);

  const visibleCountries = isMobile
    ? countries
    : countries.slice(activeIndex, activeIndex + 3).concat(
        activeIndex + 3 >= countries.length
          ? countries.slice(0, (activeIndex + 3) % countries.length)
          : []
      ).slice(0, 3);

  return (
    <section id="study-abroad" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Study Abroad Opportunities
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore top educational destinations around the world with our comprehensive guidance
            and support throughout your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleCountries.map((country) => (
            <CountryCard
              key={country.name}
              id={country.id}
              name={country.name}
              flag={country.flag}
              image={country.image}
              description={country.description}
            />
          ))}
        </div>

        {!isMobile && (
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(countries.length / 3) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx * 3)}
                  className={`w-3 h-3 rounded-full ${
                    Math.floor(activeIndex / 3) === idx ? "bg-brand-blue" : "bg-gray-300"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudyAbroadSection;
