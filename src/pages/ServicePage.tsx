import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../servicesData';
import { Layout } from '../components/Layout';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  ShieldCheck,
  ArrowRight,
  Star
} from 'lucide-react';
import { TallyForm } from '../components/TallyForm';

export const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <Layout>
        <div className="py-40 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary font-bold hover:underline">Return Home</Link>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      {/* SEO Meta Tags (Conceptual - in a real app these would be in the head) */}
      {/* Keywords: {service.seoKeywords.join(', ')} */}

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7"
            >
              <div className="bg-green-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-sm border border-green-100">
                <Icon className="text-primary" size={40} />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">
                {service.title} <br />
                <span className="text-gradient text-2xl md:text-3xl block mt-2">Expert Solutions in San Marcos</span>
              </h1>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                {service.longDesc}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={24} /> Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Star className="text-primary" size={24} /> Professional Features
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="glass-card p-8 rounded-[2rem] border border-gray-100/50 premium-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <h3 className="text-xl font-extrabold mb-4 relative z-10 text-primary-dark">Why Choose MG-Landscaping for {service.title}?</h3>
                <p className="text-gray-600 mb-6">
                  We combine local expertise with premium materials and advanced technology to deliver results that last. Our team is dedicated to your satisfaction and the long-term health of your landscape.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    <ShieldCheck className="text-primary" size={20} /> Licensed & Insured
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                    <CheckCircle2 className="text-primary" size={20} /> 15+ Years Experience
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lead Form - GoHighLevel Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 sticky top-32"
            >
              <div className="estimate-card">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Estimate</h3>
                <p className="text-gray-500 mb-6 text-sm">Interested in {service.title.toLowerCase()}? Fill out the form below.</p>

                <div className="ghl-form-wrap">
                  <div className="ghl-iframe-container">
                    <TallyForm />
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100/50 text-center">
                  <p className="text-gray-500 text-sm mb-4">Prefer to call?</p>
                  <a href="tel:7604023315" className="text-2xl font-bold text-primary-dark hover:text-primary transition-colors flex items-center justify-center gap-2">
                    <Phone size={24} /> 760-402-3315
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">How It Works</h2>
            <h3 className="text-4xl font-display font-extrabold text-gray-900">Our {service.title} Process</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl premium-shadow border border-white text-center">
              <div className="w-16 h-16 bg-primary-dark text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h4 className="text-xl font-bold mb-3">Consultation</h4>
              <p className="text-gray-600">We discuss your needs, evaluate your property, and provide a transparent estimate.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl premium-shadow border border-white text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h4 className="text-xl font-bold mb-3">Execution</h4>
              <p className="text-gray-600">Our professional team arrives on time and completes the work with precision and care.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl premium-shadow border border-white text-center">
              <div className="w-16 h-16 bg-primary-light text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h4 className="text-xl font-bold mb-3">Final Review</h4>
              <p className="text-gray-600">We ensure you are 100% satisfied with the results and leave your property pristine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.06]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-10">Contact us today to schedule your {service.title.toLowerCase()} service.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30 hover:-translate-y-1">
              Request a Free Quote
            </Link>
            <a href="tel:7604023315" className="glass-morphism hover:bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
              Call 760-402-3315
            </a>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.06]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12">Other Professional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.filter(s => s.id !== service.id).slice(0, 3).map((s, idx) => (
              <Link
                key={idx}
                to={`/services/${s.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{s.shortDesc}</p>
                  <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
