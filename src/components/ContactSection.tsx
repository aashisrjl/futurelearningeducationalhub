
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to start your global education journey? 
            Get in touch with our team of experts today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Get In Touch</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="What is this regarding?" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    rows={4} 
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-gold text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-brand-gold h-6 w-6 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <address className="not-italic text-gray-600">
                      Samakhusi-3, Kathmandu<br />
                      (Opposite to Sekuwa by Kilo)
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-brand-gold h-6 w-6 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Numbers</h4>
                    <p className="text-gray-600">
                      <a href="tel:+977015922651" className="hover:text-brand-blue">015-922651</a><br />
                      <a href="tel:+9779810303451" className="hover:text-brand-blue">9810-303451</a> (WhatsApp)<br />
                      <a href="tel:+9779813899006" className="hover:text-brand-blue">9813-899006</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-brand-gold h-6 w-6 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:futurelearningeducationalhub@gmail.com" className="hover:text-brand-blue break-words">
                        futurelearningeducationalhub@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-brand-gold h-6 w-6 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Hours</h4>
                    <p className="text-gray-600">
                      Sunday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.845937604746!2d85.31031207538708!3d27.72293377626671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19071bd1729d%3A0x12c585a252ae1840!2sSamakhusi%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1718319176932!5m2!1sen!2snp" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
