import {
  Phone,
  MapPin,
  CheckCircle2,
  Droplets,
  Leaf,
  Sun,
  Waves,
  Shovel,
  Lightbulb,
  ArrowRight,
  Star,
  ShieldCheck,
  Clock,
  ChevronDown,
  Award,
  ThumbsUp,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { servicesData } from './servicesData';
import { Layout } from './components/Layout';
import { ServicePage } from './pages/ServicePage';
import { TallyForm } from './components/TallyForm';

// --- Home Page Components ---

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Darker Landscape Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/premium_hero_bg_1782920090756.png"
          alt="Landscaping Background"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary-dark/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-sm mb-6 border border-primary/30">
              <Leaf className="text-primary-light" size={16} />
              <span>Premium Landscaping in San Marcos, CA</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 text-balance tracking-tight">
              Transform Your <br />
              <span className="text-primary-light">Outdoor Space</span>
            </h1>
            <p className="text-lg md:text-xl text-green-50 mb-8 max-w-xl leading-relaxed font-medium">
              Professional landscaping, lawn care, and smart irrigation systems. We bring your vision to life with dependable quality and expert craftsmanship. Experience the difference of a truly premium landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#quote"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
              >
                Get a Free Quote <ArrowRight size={20} />
              </a>
              <a
                href="tel:7604023315"
                className="glass-morphism hover:bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:-translate-y-1"
              >
                <Phone size={20} className="text-primary" /> 760-402-3315
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm font-semibold text-white drop-shadow-md">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary-light" size={20} /> Fully Licensed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary-light" size={20} /> Insured
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-primary-light" size={20} /> Free Estimates
              </div>
            </div>
          </motion.div>

          {/* Native Quick Quote Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="bg-white p-8 rounded-[2rem] premium-shadow border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-2 relative z-10">Quick Quote</h3>
              <p className="text-gray-500 mb-6 text-sm relative z-10">Get a fast, no-obligation estimate for your project.</p>

              <form className="space-y-4 relative z-10" onSubmit={(e) => { e.preventDefault(); window.location.href = '#quote'; }}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50" placeholder="(760) 555-0123" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 text-gray-700" required>
                    <option value="">Select a service...</option>
                    <option value="maintenance">Lawn Maintenance</option>
                    <option value="cleanup">Yard Cleanup</option>
                    <option value="tree">Tree Service</option>
                    <option value="sod">Sod Installation</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Project Details</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 resize-none h-24" placeholder="Tell us about your landscape..." required></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all mt-2 shadow-lg shadow-primary/30 hover:-translate-y-1">
                  Get My Free Estimate
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">We respect your privacy. No spam.</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBadges = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-[80px] opacity-40 -mr-[250px] -mt-[250px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-light/10 rounded-full blur-[60px] opacity-30 -ml-[150px] -mb-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted By Homeowners & Businesses in North County</p>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 items-center">
          <div className="flex flex-col items-center gap-3 group">
            <div className="bg-green-50 p-4 rounded-2xl group-hover:bg-primary transition-colors duration-300">
              <Award className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base">Top Rated Local</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="bg-green-50 p-4 rounded-2xl group-hover:bg-primary transition-colors duration-300">
              <ShieldCheck className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base">Licensed & Insured</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="bg-green-50 p-4 rounded-2xl group-hover:bg-primary transition-colors duration-300">
              <ThumbsUp className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base">100% Satisfaction</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="bg-green-50 p-4 rounded-2xl group-hover:bg-primary transition-colors duration-300">
              <Leaf className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base">Eco-Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary-light font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-6">Comprehensive Landscape Services</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From routine maintenance to complete outdoor transformations, our experienced team delivers premium results tailored to your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -12 }}
                className="glass-card rounded-[2rem] overflow-hidden premium-shadow transition-all group flex flex-col border border-white/40"
              >
                <div className="h-56 overflow-hidden relative flex-shrink-0 rounded-t-[2rem]">
                  <div className="absolute inset-0 bg-primary-dark/20 mix-blend-overlay group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 sm:p-8 relative flex flex-col flex-grow">
                  <div className="absolute -top-10 right-8 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border border-gray-50 z-20">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-2">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{service.shortDesc}</p>

                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors group-hover:gap-3">
                      Learn More & Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { title: "Licensed & Insured", icon: <ShieldCheck className="text-primary" /> },
    { title: "Free Estimates", icon: <CheckCircle2 className="text-primary" /> },
    { title: "On-Time Service", icon: <Clock className="text-primary" /> },
    { title: "Eco-Friendly Solutions", icon: <Leaf className="text-primary" /> }
  ];

  return (
    <section id="about" className="py-32 bg-primary-dark text-white overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden premium-shadow">
              <img src="/img/team_working_faceless_1782922187655.png" alt="Landscaping Team Working" className="w-full h-auto transform transition-transform duration-700 hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white text-primary-dark p-8 rounded-3xl premium-shadow z-20 hidden md:block border border-gray-100">
              <p className="text-5xl font-display font-extrabold mb-1 text-primary">15+</p>
              <p className="text-sm font-bold tracking-wider uppercase opacity-90">Years Experience</p>
            </div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl -z-10"></div>
          </div>

          <div>
            <h2 className="text-primary-light font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Simple, Stress-Free Landscaping Process</h3>
            <p className="text-green-50/80 text-lg mb-8 leading-relaxed">
              Getting professional landscaping shouldn't be complicated. When you work with MG-Landscaping, we make the process easy from the first call to final cleanup.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-light font-bold text-xl border border-white/20">1</div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Quick Consultation</h4>
                  <p className="text-green-50/70">We start with a quick call or visit to understand your vision and needs.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-light font-bold text-xl border border-white/20">2</div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Clear Estimate</h4>
                  <p className="text-green-50/70">You'll receive a transparent, no-obligation quote with no hidden fees.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-light font-bold text-xl border border-white/20">3</div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Efficient Execution</h4>
                  <p className="text-green-50/70">Our team shows up on time and handles the job with precision and care.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-green-50 font-semibold">
                  <div className="text-primary-light">{f.icon}</div>
                  <span>{f.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const reviews = [
    {
      name: "Kathleen K.",
      text: "Very friendly, expertise in tree removal and tree trimming, and gardening upkeep. Highly recommended!",
      role: "Homeowner in San Marcos"
    },
    {
      name: "Richard A.",
      text: "I needed to get vegetation out of the alley and off the power line quickly. Marcelino and his team were prompt and professional.",
      role: "Homeowner in Escondido"
    },
    {
      name: "Fred D.",
      text: "We were looking for a regular gardener and MG landscape has been fantastic. They are reliable and do wonderful work.",
      role: "Homeowner in Cardiff"
    }
  ];

  return (
    <section className="py-32 bg-white text-gray-900 overflow-hidden relative">

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-50 rounded-full blur-[100px] opacity-50 -mr-[400px] -mt-[400px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-[80px] opacity-30 -ml-[300px] -mb-[300px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Loved by Our Community</h3>
          <div className="flex justify-center items-center gap-2 text-xl font-medium">
            <span className="text-yellow-400 flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </span>
            <span>5.0 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 shadow-xl p-8 rounded-3xl hover:border-primary/20 transition-colors"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-lg mb-8 leading-relaxed font-medium">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-white text-lg">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceArea = () => {
  const cities = [
    { name: "San Marcos", zips: "92069, 92078, 92096" },
    { name: "Carlsbad", zips: "92008, 92009, 92010, 92011" },
    { name: "Escondido", zips: "92025, 92026, 92027, 92029" },
    { name: "Oceanside", zips: "92054, 92056, 92057, 92058" },
    { name: "Vista", zips: "92081, 92083, 92084, 92085" },
    { name: "Encinitas", zips: "92024, 92007" },
    { name: "San Diego", zips: "North County" },
    { name: "Temecula", zips: "92590, 92591, 92592" }
  ];

  return (
    <section id="service-area" className="py-32 bg-primary-dark text-white relative overflow-hidden">`n      <div className="absolute inset-0 bg-grid-pattern-light opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary-light font-bold tracking-widest uppercase text-sm mb-4">Service Area</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Serving San Marcos & Surrounding Areas</h3>
            <p className="text-lg text-green-50/80 mb-6 leading-relaxed">
              MG-Landscaping is a premier landscaping maintenance and construction company proudly serving San Marcos, La Costa, Escondido, Cardiff, and Carlsbad. We specialize in transforming outdoor spaces with unmatched expertise and care.
            </p>
            <p className="text-lg text-green-50/80 mb-8 leading-relaxed">
              Whether you need a complete garden overhaul, reliable routine maintenance, or specialized tree care, our dedicated team brings passion and precision to every project. We don't just maintain yards; we cultivate outdoor experiences.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {cities.map((city, idx) => (
                <div key={idx} className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 text-white font-bold mb-1">
                    <MapPin size={18} className="text-primary-light" />
                    {city.name}
                  </div>
                  <p className="text-xs text-green-50/70 font-mono pl-6">{city.zips}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 bg-white text-primary-dark px-6 py-5 rounded-xl font-bold w-full shadow-lg shadow-black/10 mt-2">
              <CheckCircle2 className="text-primary" size={24} />
              Serving all cities and zip codes within a 50-mile radius
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] bg-white/5 rounded-3xl overflow-hidden premium-shadow border border-white/10 p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107449.19951859664!2d-117.2023199!3d33.1433723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc743c3a9f0e1d%3A0xc6c78e1b12b504a5!2sSan%20Marcos%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.5rem' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MG Landscaping Service Area Map"
              className="absolute inset-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What landscaping services does MG-Landscaping offer?",
      a: "MG-Landscaping offers full-service landscaping in San Marcos, CA including clean-ups, mowing, tree trimming, sod installation, tree removal, and gardening upkeep."
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes, we are fully licensed and insured to operate in California. We prioritize safety and professionalism on every job site."
    },
    {
      q: "Do you provide free landscaping estimates?",
      a: "Absolutely! We provide free, no-obligation estimates for all our services. Simply call us or fill out our online form."
    },
    {
      q: "Do you work on residential and commercial projects?",
      a: "Yes, we handle both residential homes and commercial properties of all sizes, from small backyards to large corporate landscapes."
    },
    {
      q: "Do you offer ongoing lawn and garden maintenance?",
      a: "We offer flexible maintenance plans—weekly, bi-weekly, or monthly—tailored to your garden's specific needs and your budget in San Marcos."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-gray-50 relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Questions</h2>
          <h3 className="text-4xl font-display font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 sm:px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 pr-4 text-lg">{faq.q}</span>
                <ChevronDown className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <Layout>
      <Hero />
      <TrustBadges />
      <Services />
      <WhyChooseUs />
      <SocialProof />
      <ServiceArea />
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary-dark p-8 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-50 -ml-32 -mb-32"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-6 sm:mb-8">Ready to Transform Your Landscape?</h2>
              <p className="text-lg sm:text-xl text-green-100 mb-10 sm:mb-12 max-w-2xl mx-auto">
                Join hundreds of satisfied homeowners in San Marcos. Get your free, no-obligation estimate today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
                <a
                  href="#quote"
                  className="bg-white hover:bg-gray-50 text-primary-dark px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all shadow-xl"
                >
                  Get Started Now
                </a>
                <a
                  href="tel:7604023315"
                  className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all"
                >
                  Call 760-402-3315
                </a>
              </div>

              <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl max-w-2xl mx-auto overflow-hidden">
                <TallyForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}
