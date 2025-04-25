
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const CanadaPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="relative h-[50vh] bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b')" }}>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Study in Canada 🇨🇦</h1>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Why Study in Canada?</h2>
              <div className="space-y-4 text-gray-600">
                <p>Canada provides high-quality education with excellent post-graduation opportunities in a multicultural environment.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Affordable education</li>
                  <li>Post-graduation work permit</li>
                  <li>Path to permanent residence</li>
                  <li>Safe and welcoming environment</li>
                  <li>Bilingual opportunities</li>
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
                  <h3 className="font-semibold mb-2">College Diplomas</h3>
                  <p>2-3 year practical programs</p>
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
                  <CardTitle>Step 1: Language Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Take IELTS/TOEFL for English or TEF for French</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: Apply to Schools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Submit applications to chosen institutions</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Study Permit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Apply for your Canadian study permit</p>
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

export default CanadaPage;
