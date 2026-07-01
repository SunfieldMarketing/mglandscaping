import React from 'react';
import { Layout } from '../components/Layout';
import { Target, Shield, Leaf, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="text-primary" size={32} />,
      title: "Integrity",
      desc: "We stand behind our work, offering transparent pricing and honest assessments."
    },
    {
      icon: <Target className="text-primary" size={32} />,
      title: "Precision",
      desc: "Every cut, trim, and installation is executed with absolute attention to detail."
    },
    {
      icon: <Leaf className="text-primary" size={32} />,
      title: "Sustainability",
      desc: "We utilize eco-friendly practices to keep your landscape healthy and vibrant."
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Customer First",
      desc: "Your vision is our blueprint. We work closely with you from start to finish."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/team_working_faceless_1782922187655.png"
            alt="MG Landscaping Team"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-primary-dark/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 tracking-tight">
              Our <span className="text-primary-light">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto font-medium">
              Cultivating beautiful outdoor spaces in San Marcos with over 15 years of dedicated craftsmanship and passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Mission</h2>
              <h3 className="text-4xl font-display font-extrabold text-gray-900 mb-6">More Than Just Landscaping</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At MG-Landscaping, our mission is to elevate the standard of residential and commercial landscapes in North County. We believe that an outdoor space should be a natural extension of your home—a place for relaxation, entertainment, and beauty.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Founded on the principles of hard work and reliability, we have grown from a small neighborhood operation into a premier landscaping firm. Our team brings unmatched expertise in both maintenance and construction, ensuring that whether we are mowing a lawn or installing a completely new garden, the result is nothing short of perfection.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-800 font-semibold">
                  <CheckCircle2 className="text-primary" size={24} /> Fully Licensed & Insured
                </div>
                <div className="flex items-center gap-3 text-gray-800 font-semibold">
                  <CheckCircle2 className="text-primary" size={24} /> 100% Satisfaction Guarantee
                </div>
                <div className="flex items-center gap-3 text-gray-800 font-semibold">
                  <CheckCircle2 className="text-primary" size={24} /> Expert Team of Professionals
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden premium-shadow">
                <img src="/img/premium_hero_bg_1782920090756.png" alt="Beautiful landscape" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-dark text-white p-8 rounded-3xl premium-shadow z-20">
                <p className="text-3xl font-display font-extrabold mb-1">San Marcos</p>
                <p className="text-sm font-semibold opacity-90 uppercase tracking-widest">Locally Owned</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Core Values</h2>
            <h3 className="text-4xl font-display font-extrabold text-gray-900">What Drives Us</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-3xl premium-shadow border border-white"
              >
                <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h4>
                <p className="text-gray-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
