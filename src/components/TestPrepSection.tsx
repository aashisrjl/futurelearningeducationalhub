
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
      fee: "NPR 15,000",
      schedule: ["Mon-Fri: 7:00 AM - 9:00 AM", "Mon-Fri: 4:00 PM - 6:00 PM"]
    },
    {
      title: "JLPT N4 Preparation",
      description: "Intermediate course for students who have completed N5 or have equivalent knowledge.",
      duration: "4 months",
      fee: "NPR 18,000",
      schedule: ["Mon-Fri: 9:00 AM - 11:00 AM", "Mon-Fri: 6:00 PM - 8:00 PM"]
    },
    {
      title: "JLPT N3 Preparation",
      description: "Advanced course focusing on more complex grammar and vocabulary required for N3.",
      duration: "5 months",
      fee: "NPR 22,000",
      schedule: ["Tue-Sat: 7:00 AM - 9:00 AM", "Tue-Sat: 5:00 PM - 7:00 PM"]
    }
  ];

  const ieltsCourses = [
    {
      title: "IELTS Foundation",
      description: "Introductory course covering all four sections of the IELTS exam with basics.",
      duration: "6 weeks",
      fee: "NPR 12,000",
      schedule: ["Mon-Wed-Fri: 7:00 AM - 9:00 AM", "Tue-Thu-Sat: 4:00 PM - 6:00 PM"]
    },
    {
      title: "IELTS Intensive",
      description: "Comprehensive course with in-depth coverage and regular mock tests.",
      duration: "2 months",
      fee: "NPR 18,000",
      schedule: ["Mon-Fri: 10:00 AM - 12:00 PM", "Mon-Fri: 5:00 PM - 7:00 PM"]
    },
    {
      title: "IELTS Band 7+",
      description: "Advanced strategies and techniques for students targeting a band score of 7 or higher.",
      duration: "6 weeks",
      fee: "NPR 20,000",
      schedule: ["Sat-Sun: 8:00 AM - 12:00 PM", "Mon-Wed-Fri: 6:00 PM - 8:00 PM"]
    }
  ];

  const pteCourses = [
    {
      title: "PTE Fundamentals",
      description: "Basic course covering the format, question types, and essential strategies for PTE.",
      duration: "4 weeks",
      fee: "NPR 15,000",
      schedule: ["Tue-Thu-Sat: 8:00 AM - 10:00 AM", "Mon-Wed-Fri: 5:00 PM - 7:00 PM"]
    },
    {
      title: "PTE Advanced",
      description: "Intensive course with advanced strategies, regular practice tests, and personalized feedback.",
      duration: "6 weeks",
      fee: "NPR 22,000",
      schedule: ["Mon-Wed-Fri: 10:00 AM - 12:00 PM", "Tue-Thu: 6:00 PM - 9:00 PM"]
    }
  ];

  return (
    <section id="test-preparation" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Test Preparation Courses
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our specialized test preparation courses are designed to help you achieve high scores in language proficiency exams required for overseas education.
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
        </Tabs>
      </div>
    </section>
  );
};

export default TestPrepSection;
