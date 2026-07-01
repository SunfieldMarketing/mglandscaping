import React from 'react';
import { Layout } from '../components/Layout';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { TallyForm } from '../components/TallyForm';

export const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary-dark pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary opacity-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-white mb-6 tracking-tight">
              Get in <span className="text-primary-light">Touch</span>
            </h1>
            <p className="text-xl text-green-50 max-w-2xl mx-auto font-medium">
              Ready to transform your landscape? Contact our team today for a free estimate or to ask any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.15]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Hours */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm text-primary flex-shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:7604023315" className="text-gray-600 hover:text-primary transition-colors text-lg">760-402-3315</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm text-primary flex-shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@mglandscapingca.com" className="text-gray-600 hover:text-primary transition-colors text-lg">info@mglandscapingca.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm text-primary flex-shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Service Area</h4>
                      <p className="text-gray-600 text-lg">San Marcos, La Costa, Escondido, Cardiff, Carlsbad</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-8">Business Hours</h2>
                <div className="glass-card rounded-[2rem] p-8 border border-gray-100">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                      <span className="font-semibold text-gray-700">Monday - Friday</span>
                      <span className="text-primary-dark font-bold">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                      <span className="font-semibold text-gray-700">Saturday</span>
                      <span className="text-primary-dark font-bold">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Sunday</span>
                      <span className="text-gray-500 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] premium-shadow border border-gray-100 h-full">
                <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-2">Request a Free Quote</h3>
                <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                <TallyForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107297.05047805219!2d-117.25301887309063!3d33.14371520692138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc73453f3686df%3A0x7d97517c5bba78c!2sSan%20Marcos%2C%20CA!5e0!3m2!1sen!2sus!4v1714421183578!5m2!1sen!2sus" 
          className="absolute inset-0 w-full h-full border-0" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Service Area Map"
        ></iframe>
      </section>
    </Layout>
  );
};
