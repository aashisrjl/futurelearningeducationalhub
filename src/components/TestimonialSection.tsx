
import React, { useState } from "react";

interface TestimonialProps {
  name: string;
  country: string;
  photo: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, country, photo, text }) => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-brand-blue">{name}</h4>
          <div className="text-brand-gold">{country}</div>
        </div>
      </div>
      <div className="relative">
        <svg className="h-8 w-8 text-gray-200 absolute top-0 left-0 -mt-3 -ml-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-600 relative z-10 pl-4">{text}</p>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sunita Rana",
      country: "Studying in Japan",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      text: "Future Learning Educational Hub made my dream of studying in Japan come true. Their Japanese language classes and visa assistance were exceptional. I'm now pursuing my degree in Tokyo with confidence."
    },
    {
      name: "Aashish Rijal",
      country: "Studying in Australia",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      text: "I'm grateful to the team for their personalized guidance throughout my university application process. Their IELTS preparation helped me secure an excellent band score, and their counseling was spot-on."
    },
    {
      name: "Priya Sharma",
      country: "Studying in Canada",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      text: "The visa success rate at Future Learning is truly amazing. They guided me step-by-step through the complicated process, and I got my Canadian student visa without any hassle. Highly recommended!"
    },
    {
      name: "Kiran Gurung",
      country: "Studying in UK",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      text: "The counselors at Future Learning Educational Hub genuinely care about your career goals. They didn't just push me toward any university but helped me find the perfect program aligned with my interests."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our students who have successfully achieved their dreams.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center mt-8">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-gray-200 hover:bg-brand-blue hover:text-white transition mr-4"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-brand-blue" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="p-2 rounded-full bg-gray-200 hover:bg-brand-blue hover:text-white transition ml-4"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
