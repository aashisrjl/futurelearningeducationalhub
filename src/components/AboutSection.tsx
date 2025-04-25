
import React from "react";
import { CheckCircle } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      title: "Personalized Counseling",
      description: "Tailored guidance based on your academic background, interests, and career goals."
    },
    {
      title: "High Visa Success Rate",
      description: "Our proven approach ensures excellent visa approval rates for our students."
    },
    {
      title: "Experienced Instructors",
      description: "Learn from qualified teachers with extensive international education experience."
    },
    {
      title: "Transparent Process",
      description: "Clear communication and no hidden fees throughout your application journey."
    }
  ];

  const services = [
    {
      title: "Career Counseling",
      description: "Expert guidance to help you choose the right course and university aligned with your career goals."
    },
    {
      title: "Visa Assistance",
      description: "Comprehensive support with visa applications, documentation, and interview preparation."
    },
    {
      title: "Language Training",
      description: "Professional language courses for IELTS, PTE, Japanese, and other required tests."
    },
    {
      title: "Pre-departure Support",
      description: "Guidance on accommodation, travel arrangements, and cultural adaptation before you leave."
    }
  ];

  const team = [
    {
      name: "Rajesh Sharma",
      position: "Founder & Director",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      bio: "15+ years of experience in international education consulting."
    },
    {
      name: "Priya Thapa",
      position: "Head of Japanese Language",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      bio: "JLPT N1 certified with 8+ years of teaching experience."
    },
    {
      name: "Anil Poudel",
      position: "IELTS Instructor",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      bio: "Former British Council teacher with band score of 8.5."
    },
    {
      name: "Sunita Rai",
      position: "Student Counselor",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      bio: "Specialized in Australian and Canadian university admissions."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            About Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Future Learning Educational Hub is a leading educational consultancy in Nepal, 
            helping students achieve their dreams of studying abroad with personalized guidance and support.
          </p>
        </div>

        {/* Who We Are */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">Who We Are</h3>
            <p className="text-gray-600">
              Established in 2015, Future Learning Educational Hub has been a trusted name in educational consultancy in Nepal. 
              We specialize in helping students navigate the complex process of applying to international universities and ensuring 
              they have all the support they need to succeed. Our team of experienced counselors and instructors are dedicated to 
              providing personalized guidance and quality education to help our students achieve their academic and career goals.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-brand-blue mb-8 text-center">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-brand-gold mr-3 h-6 w-6" />
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-brand-blue mb-8 text-center">What We Do?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h4 className="text-lg font-semibold text-brand-blue mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div>
          <h3 className="text-2xl font-bold text-brand-blue mb-8 text-center">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-brand-blue">{member.name}</h4>
                  <p className="text-brand-gold font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-brand-blue transition">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-brand-blue transition">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-brand-blue transition">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
