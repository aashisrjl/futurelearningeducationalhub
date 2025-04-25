
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const KoreaPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="relative h-[50vh] bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')" }}>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Study in South Korea 🇰🇷</h1>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Why Study in South Korea?</h2>
              <div className="space-y-4 text-gray-600">
                <p>South Korea offers a unique blend of traditional culture and modern technology, making it an attractive destination for international students.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>World-class universities</li>
                  <li>Advanced technology sector</li>
                  <li>Rich cultural heritage</li>
                  <li>K-pop and entertainment industry</li>
                  <li>Growing international programs</li>
                </ul>
              </div>
            </div>
            
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Available Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Undergraduate Studies</h3>
                  <p>4-year bachelor's programs</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Graduate Studies</h3>
                  <p>Master's and doctoral programs</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Language Programs</h3>
                  <p>Korean language courses</p>
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
                  <CardTitle>Step 1: Language Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>TOPIK certification or English proficiency</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: University Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Submit applications to chosen universities</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Visa Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Apply for your D-2 student visa</p>
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

export default KoreaPage;
