
import React, { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration: number;
  suffix: string;
  title: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix, title }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);
  
  return (
    <div ref={counterRef} className="animate-counter-up opacity-0">
      <div className="text-4xl font-bold text-brand-blue mb-2">
        {count}<span className="text-brand-gold">{suffix}</span>
      </div>
      <div className="text-gray-600">{title}</div>
    </div>
  );
};

const AchievementsSection: React.FC = () => {
  const achievements = [
    { end: 2500, suffix: "+", title: "Total Students Served", duration: 2000 },
    { end: 95, suffix: "%", title: "Visa Approval Rate", duration: 2000 },
    { end: 10, suffix: "+", title: "Countries Supported", duration: 1500 },
    { end: 20, suffix: "+", title: "Courses Offered", duration: 1500 }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our success is measured by the success of our students. 
            Here's what we've accomplished together over the years.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {achievements.map((achievement, index) => (
            <Counter 
              key={index} 
              end={achievement.end} 
              suffix={achievement.suffix} 
              title={achievement.title} 
              duration={achievement.duration} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
