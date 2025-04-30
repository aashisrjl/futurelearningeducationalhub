
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const UKPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="relative h-[50vh] bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485833077593-4278bba3f11f')" }}>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Study in the UK 🇬🇧</h1>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Why Study in the UK?</h2>
              <div className="space-y-4 text-gray-600">
                <p>The UK offers prestigious education with centuries of academic excellence and innovation.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>World-renowned universities</li>
                  <li>Shorter course duration</li>
                  <li>Rich cultural heritage</li>
                  <li>Graduate work opportunities</li>
                  <li>Diverse international community</li>
                </ul>
              </div>
            </div>
            
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Available Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Undergraduate</h3>
                  <p>3-year bachelor's degrees</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Postgraduate</h3>
                  <p>1-year master's programs</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Research Degrees</h3>
                  <p>PhD and research opportunities</p>
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
                  <CardTitle>Step 1: IELTS Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Achieve required IELTS or equivalent scores</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: UCAS Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Apply through UCAS for undergraduate courses</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Student Visa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Apply for your Tier 4 student visa</p>
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

export default UKPage;
