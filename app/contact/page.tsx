import React from 'react';
import Navbar from '../components/Navbar';
import ChatBot from '../components/ChatBot';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#003366] text-center mb-12">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Contact Information Card */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-[#003366] text-xl" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+254 700 000 000</p>
                      <p className="text-gray-600">+254 720 000 000</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-[#003366] text-xl" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@snep.co.ke</p>
                      <p className="text-gray-600">support@snep.co.ke</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-[#003366] text-xl" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">Kimathi Street, Nairobi</p>
                      <p className="text-gray-600">Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-[#003366]">
                    Business Hours: Monday - Friday, 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold text-[#003366] mb-6">
                  Visit Our Office
                </h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8193293038464!2d36.82170731475455!3d-1.2841336359777297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f42bf35%3A0xb44ddf0d73a3c40e!2sKimathi%20Street%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1647750493000!5m2!1sen!2ske"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column - Chat */}
            <div className="relative md:sticky md:top-4 self-start">
              <ChatBot />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 
