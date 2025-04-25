
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const AustraliaPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="relative h-[50vh] bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d')" }}>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Study in Australia 🇦🇺</h1>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Why Study in Australia?</h2>
              <div className="space-y-4 text-gray-600">
                <p>Australia offers world-class education with a high standard of living and excellent post-study work opportunities.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Globally recognized qualifications</li>
                  <li>Multicultural environment</li>
                  <li>Work while studying opportunities</li>
                  <li>Post-study work visa options</li>
                  <li>High quality of life</li>
                </ul>
              </div>
            </div>
            
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Available Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Bachelor's Degrees</h3>
                  <p>3-4 year undergraduate programs</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Master's Programs</h3>
                  <p>1-2 year postgraduate degrees</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">VET Courses</h3>
                  <p>Vocational Education and Training</p>
                </div>
                <Button className="w-full mt-4">Contact Us for More Information</Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Application Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Step 1: English Proficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Take IELTS or other approved English language tests</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: University Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Choose from Australia's top universities and courses</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Student Visa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Apply for your student visa (subclass 500)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AustraliaPage;
