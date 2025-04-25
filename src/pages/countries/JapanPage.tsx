
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const JapanPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[50vh] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')" }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Study in Japan 🇯🇵</h1>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Why Study in Japan?</h2>
            <div className="space-y-4 text-gray-600">
              <p>Japan offers a unique blend of traditional culture and cutting-edge technology, making it an ideal destination for international students.</p>
              <ul className="list-disc list-inside space-y-2">
                <li>World-class education system</li>
                <li>Rich cultural heritage</li>
                <li>Advanced technology and innovation</li>
                <li>Safe and welcoming environment</li>
                <li>Career opportunities in global companies</li>
              </ul>
            </div>
          </div>
          
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Available Programs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Undergraduate Programs</h3>
                <p>4-year bachelor's degrees in various fields</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Graduate Programs</h3>
                <p>Master's and doctoral programs</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Language Schools</h3>
                <p>Japanese language courses for all levels</p>
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
                <CardTitle>Step 1: Language Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Achieve required Japanese language proficiency (JLPT) or English requirements</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Step 2: University Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Choose universities and programs that match your academic goals</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Step 3: Visa Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Complete visa application with our guidance and support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapanPage;
