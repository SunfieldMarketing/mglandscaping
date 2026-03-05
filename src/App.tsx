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

// --- Home Page Components ---

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Darker Landscape Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/landscape/1920/1080"
          alt="Landscaping Background"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-green-100 px-4 py-2 rounded-full text-primary-dark text-sm font-semibold mb-6 shadow-sm">
              <Leaf className="text-primary" size={16} />
              <span>Premium Landscaping in Chula Vista, CA</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-6 text-balance">
              Transform Your <br />
              <span className="text-primary">Outdoor Space</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed font-medium">
              Professional landscaping, lawn care, and smart irrigation systems. We bring your vision to life with dependable quality and expert craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#quote"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
              >
                Get a Free Quote <ArrowRight size={20} />
              </a>
              <a
                href="tel:9518580669"
                className="bg-white border-2 border-gray-200 hover:border-primary text-gray-800 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                <Phone size={20} className="text-primary" /> 951-858-0669
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <CheckCircle2 className="text-primary" size={18} /> Fully Licensed
              </div>
              <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <CheckCircle2 className="text-primary" size={18} /> Insured
              </div>
              <div className="flex items-center gap-2 bg-white/50 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <CheckCircle2 className="text-primary" size={18} /> Free Estimates
              </div>
            </div>
          </motion.div>

          {/* Lead Capture Form - GoHighLevel Integration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="quote"
            className="lg:col-span-5"
          >
            <div className="estimate-card">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request an Estimate</h3>
              <p className="text-gray-500 mb-6 text-sm">Fill out the form below and our team will contact you shortly.</p>

              <div className="ghl-form-wrap">
                <div className="ghl-iframe-container">
                  <iframe
                    data-tally-src="https://tally.so/embed/gD5BpJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="762"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="AG Landscape Lead Form"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBadges = () => {
  return (
    <section className="py-10 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Trusted By Homeowners & Businesses</p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 items-center opacity-80 md:grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-gray-800">
            <Award className="text-primary" size={28} /> Top Rated Local
          </div>
          <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-gray-800">
            <ShieldCheck className="text-primary" size={28} /> Licensed & Insured
          </div>
          <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-gray-800">
            <ThumbsUp className="text-primary" size={28} /> 100% Satisfaction
          </div>
          <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-gray-800">
            <Leaf className="text-primary" size={28} /> Eco-Friendly
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Professional Landscaping Services</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a wide range of landscaping services, from innovative design to efficient maintenance, ensuring your outdoor space flourishes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col"
              >
                <div className="h-56 overflow-hidden relative flex-shrink-0">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
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
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://i.ibb.co/rGdnKR1X/image.png" alt="Professional Landscaper" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-3xl shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-sm font-medium opacity-90">Years of Experience</p>
            </div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10"></div>
          </div>

          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">Simple, Stress-Free Landscaping Process</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Getting professional landscaping shouldn't be complicated. When you work with A.G. Landscape, we make the process easy from the first call to final cleanup.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-primary font-bold text-xl">1</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Quick Consultation</h4>
                  <p className="text-gray-600">We start with a quick call or visit to understand your vision and needs.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-primary font-bold text-xl">2</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Clear Estimate</h4>
                  <p className="text-gray-600">You'll receive a transparent, no-obligation quote with no hidden fees.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-primary font-bold text-xl">3</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Efficient Execution</h4>
                  <p className="text-gray-600">Our team shows up on time and handles the job with precision and care.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-800 font-semibold">
                  {f.icon}
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
      name: "Kim G.",
      text: "Alex and his team were incredibly professional start to finish. They did a great job removing our tree. Would highly recommend this company!",
      role: "Homeowner in Chula Vista"
    },
    {
      name: "Jamie S.",
      text: "They are by far the most friendly, professional, prompt with communications, and just overall wonderful to work with.",
      role: "Property Manager"
    },
    {
      name: "Neal A.",
      text: "The guys did a great job, clearly knew what they were doing and worked hard on a very hot day. I highly recommend this business!",
      role: "Homeowner in Bonita"
    }
  ];

  return (
    <section className="py-24 bg-primary-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[100px] opacity-50 -mr-[400px] -mt-[400px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary rounded-full blur-[80px] opacity-30 -ml-[300px] -mb-[300px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-green-300 font-bold tracking-widest uppercase text-sm mb-4">Social Proof</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Loved by Our Community</h3>
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
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/15 transition-colors"
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
                  <p className="text-sm text-green-200">{review.role}</p>
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
    { name: "Chula Vista", zips: "91910, 91911, 91913, 91914, 91915" },
    { name: "Bonita", zips: "91902" },
    { name: "National City", zips: "91950" },
    { name: "San Diego", zips: "92154, 92173" },
    { name: "Imperial Beach", zips: "91932" },
    { name: "Eastlake", zips: "91914, 91915" }
  ];

  return (
    <section id="service-area" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Service Area</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">Serving Chula Vista & Surrounding Areas</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We provide professional landscaping services throughout the South Bay region. If you're in our service area, we can typically provide an estimate within 24-48 hours.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {cities.map((city, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 text-gray-900 font-bold mb-1">
                    <MapPin size={18} className="text-primary" />
                    {city.name}
                  </div>
                  <p className="text-xs text-gray-500 font-mono pl-6">{city.zips}</p>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-3 bg-green-50 text-primary-dark px-6 py-4 rounded-xl font-semibold w-full sm:w-auto">
              <CheckCircle2 className="text-primary" size={24} />
              We serve all of South San Diego County
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107449.19951859664!2d-117.08643885!3d32.6277134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94e45c1109961%3A0x6436b13997204c3!2sChula%20Vista%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A.G Landscape Service Area Map"
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
      q: "What landscaping services does A.G. Landscape offer?",
      a: "A.G. Landscape offers full-service landscaping in Chula Vista, CA including lawn maintenance, irrigation systems, sprinkler repair, landscape design, tree services, hardscaping, and complete property clean-ups for residential and commercial properties."
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
      a: "We offer flexible maintenance plans—weekly, bi-weekly, or monthly—tailored to your garden's specific needs and your budget."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary-dark p-8 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-50 -ml-32 -mb-32"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-6 sm:mb-8">Ready to Transform Your Landscape?</h2>
              <p className="text-lg sm:text-xl text-green-100 mb-10 sm:mb-12 max-w-2xl mx-auto">
                Join hundreds of satisfied homeowners in Chula Vista. Get your free, no-obligation estimate today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <a
                  href="#quote"
                  className="bg-white hover:bg-gray-50 text-primary-dark px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all shadow-xl"
                >
                  Get Started Now
                </a>
                <a
                  href="tel:9518580669"
                  className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all"
                >
                  Call 951-858-0669
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}
