
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudyAbroadSection from "@/components/StudyAbroadSection";
import TestPrepSection from "@/components/TestPrepSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StudyAbroadSection />
        <TestPrepSection />
        <AboutSection />
        <AchievementsSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
