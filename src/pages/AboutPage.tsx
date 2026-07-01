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
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/team_working_faceless_1782922187655.png"
            alt="MG Landscaping Team"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-primary-dark/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/50 to-transparent"></div>
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
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-lines opacity-[0.15]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

      {/* The MG Difference */}
      <section className="py-32 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-lines opacity-5"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[100px] opacity-30 -mr-[300px] -mt-[300px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary-light font-bold tracking-widest uppercase text-sm mb-4">The MG Difference</h2>
              <h3 className="text-4xl font-display font-extrabold mb-6">Built on Trust, Delivered with Excellence</h3>
              <p className="text-lg text-green-50 mb-6 leading-relaxed">
                What sets us apart isn't just the quality of our equipment or the breadth of our services—it's our unwavering commitment to the customer experience.
              </p>
              <p className="text-lg text-green-50 mb-8 leading-relaxed">
                We know that inviting a team onto your property requires trust. That's why every member of our crew is thoroughly vetted, highly trained, and deeply respectful of your home. We show up when we say we will, we do exactly what we promised, and we never leave a mess behind.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 text-center transform transition-transform hover:-translate-y-2">
                <p className="text-5xl font-display font-bold text-primary-light mb-2">15+</p>
                <p className="text-sm font-semibold uppercase tracking-wider text-green-50">Years Servicing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 text-center transform transition-transform hover:-translate-y-2 translate-y-8">
                <p className="text-5xl font-display font-bold text-primary-light mb-2">100%</p>
                <p className="text-sm font-semibold uppercase tracking-wider text-green-50">Local Roots</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-lines opacity-[0.15]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

      {/* Final CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-lines opacity-[0.15]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-6">Ready to Transform Your Landscape?</h2>
          <p className="text-xl text-gray-600 mb-10">Join hundreds of satisfied homeowners in San Marcos. Get your free estimate today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30 hover:-translate-y-1">
              Request a Free Quote
            </a>
            <a href="tel:7604023315" className="glass-morphism hover:bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
              Call 760-402-3315
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
