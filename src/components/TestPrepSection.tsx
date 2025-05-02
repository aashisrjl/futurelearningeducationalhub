import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface CourseProps {
  title: string;
  description: string;
  duration: string;
  fee: string;
  schedule: string[];
}

const CourseCard: React.FC<CourseProps> = ({ title, description, duration, fee, schedule }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
      <h3 className="text-xl font-bold text-brand-blue mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2 mb-6">
        <div className="flex items-start">
          <span className="font-medium text-gray-700 mr-2">Duration:</span>
          <span className="text-gray-600">{duration}</span>
        </div>
        <div className="flex items-start">
          <span className="font-medium text-gray-700 mr-2">Fee:</span>
          <span className="text-gray-600">{fee}</span>
        </div>
        <div className="flex items-start">
          <span className="font-medium text-gray-700 mr-2">Schedule:</span>
          <div className="text-gray-600">
            {schedule.map((time, index) => (
              <div key={index}>{time}</div>
            ))}
          </div>
        </div>
      </div>
      <Button className="w-full bg-brand-blue hover:bg-brand-gold text-white">Enroll Now</Button>
    </div>
  );
};

const TestPrepSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("japanese");

  const japaneseLanguageCourses = [
    {
      title: "JLPT N5 Preparation",
      description: "Basic Japanese language course for beginners aiming to pass the JLPT N5 exam.",
      duration: "3 months",
      fee: "NPR 10,000",
      schedule: ["Mon-Fri: 7:00 AM - 9:00 AM", "10:00 AM - 12:00 PM", "1:00 PM - 3:00 PM", "4:00 PM - 6:00 PM"]
    },
    {
      title: "JLPT N4 Preparation",
      description: "Intermediate course for students who have completed N5 or have equivalent knowledge.",
      duration: "4 months",
      fee: "NPR 13,000",
      schedule: ["Mon-Fri: 7:00 AM - 9:00 AM", "10:00 AM - 12:00 PM", "1:00 PM - 3:00 PM", "4:00 PM - 6:00 PM"]
    },
    {
      title: "JLPT N3 Preparation",
      description: "Advanced course focusing on more complex grammar and vocabulary required for N3.",
      duration: "5 months",
      fee: "NPR 18,000",
      schedule: ["Mon-Fri: 7:00 AM - 9:00 AM", "10:00 AM - 12:00 PM", "1:00 PM - 3:00 PM", "4:00 PM - 6:00 PM"]
    }
  ];

  const ieltsCourses = [
    {
      title: "IELTS Foundation",
      description: "Introductory course covering all four sections of the IELTS exam with basics.",
      duration: "6 weeks",
      fee: "NPR 12,000",
      schedule: ["Sun to Fri: 7:00 AM - 6:00 PM"]
    },
    {
      title: "IELTS Intensive",
      description: "Comprehensive course with in-depth coverage and regular mock tests.",
      duration: "2 months",
      fee: "NPR 18,000",
      schedule: ["Sun to Fri: 7:00 AM - 6:00 PM"]    },
    {
      title: "IELTS Band 7+",
      description: "Advanced strategies and techniques for students targeting a band score of 7 or higher.",
      duration: "6 weeks",
      fee: "NPR 20,000",
      schedule: ["Sun to Fri: 7:00 AM - 6:00 PM"]    }
  ];

  const pteCourses = [
    {
      title: "PTE Fundamentals",
      description: "Basic course covering the format, question types, and essential strategies for PTE.",
      duration: "4 weeks",
      fee: "NPR 15,000",
      schedule: ["Sun to Fri: 7:00 AM - 6:00 PM"]    },
    {
      title: "PTE Advanced",
      description: "Intensive course with advanced strategies, regular practice tests, and personalized feedback.",
      duration: "6 weeks",
      fee: "NPR 22,000",
      schedule: ["Sun to Fri: 7:00 AM - 6:00 PM"]    }
  ];

  const skillTestCourses = [
    {
      title: "Food Service Training",
      description: "Comprehensive training for food service industry, covering hygiene, customer service, and food preparation techniques.",
      duration: "8 weeks",
      fee: "NPR 15,000",
      schedule: ["Sun to Fri: 7:00 AM - 6:00 PM"]    },
    {
      title: "Kaigo (Caregiving)",
      description: "Specialized course for caregiving, focusing on elderly care, patient handling, and healthcare basics.",
      duration: "10 weeks",
      fee: "NPR 20,000",
      schedule: ["Sun to Fri: 7:00 AM - 6:00 PM"]    },
    {
      title: "Agriculture Skills",
      description: "Hands-on training in modern farming techniques, crop management, and sustainable agriculture practices.",
      duration: "12 weeks",
      fee: "NPR 18,000",
      schedule: ["Sun to Fri: 7:00 AM - 6:00 PM"]    },
    {
      title: "Construction Basics",
      description: "Practical course covering construction techniques, safety protocols, and basic masonry and carpentry skills.",
      duration: "10 weeks",
      fee: "NPR 17,000",
      schedule: ["Sun to Fri: 7:00 AM - 6:00 PM"]    },
    {
      title: "Driving Skills",
      description: "Professional driving course focusing on road safety, vehicle maintenance, and advanced driving techniques.",
      duration: "6 weeks",
      fee: "NPR 14,000",
      schedule: ["Sun to Fri: 7:00 AM - 6:00 PM"]    },
    {
      title: "Hospitality Management",
      description: "Training in hotel and restaurant management, customer service, and hospitality industry standards.",
      duration: "8 weeks",
      fee: "NPR 16,000",
      schedule: ["Sun to Fri:  7:00 AM - 6:00 PM"]    }
  ];

  return (
    <section id="test-preparation" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Test Preparation & Skill Courses
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our specialized courses are designed to help you achieve high scores in language proficiency exams and acquire practical skills for overseas opportunities.
          </p>
        </div>

        <Tabs defaultValue="japanese" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger 
                value="japanese" 
                id="japanese-language"
                className="px-6 py-3 data-[state=active]:bg-brand-blue data-[state=active]:text-white"
              >
                Japanese Language
              </TabsTrigger>
              <TabsTrigger 
                value="ielts" 
                id="ielts"
                className="px-6 py-3 data-[state=active]:bg-brand-blue data-[state=active]:text-white"
              >
                IELTS
              </TabsTrigger>
              <TabsTrigger 
                value="pte" 
                id="pte"
                className="px-6 py-3 data-[state=active]:bg-brand-blue data-[state=active]:text-white"
              >
                PTE
              </TabsTrigger>
              <TabsTrigger 
                value="skills" 
                id="skills"
                className="px-6 py-3 data-[state=active]:bg-brand-blue data-[state=active]:text-white"
              >
                Skill Training
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="japanese" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {japaneseLanguageCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ielts" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ieltsCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pte" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pteCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="skills" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillTestCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TestPrepSection;