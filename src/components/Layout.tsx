import React from 'react';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Mail,
  MessageSquare
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5 border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-primary-dark">
              MG <span className="text-primary">Landscaping</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">Home</Link>
            {isHome ? (
              <>
                <a href="#services" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">Services</a>
                <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">About</a>
                <a href="#service-area" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">Service Area</a>
              </>
            ) : (
              <>
                <Link to="/#services" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">Services</Link>
                <Link to="/#about" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">About</Link>
                <Link to="/#service-area" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">Service Area</Link>
              </>
            )}
            <a 
              href="tel:7604023315" 
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-primary/20"
            >
              <Phone size={16} /> 760-402-3315
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-dark p-2 -mr-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-lg font-semibold text-gray-800 hover:bg-green-50 hover:text-primary rounded-xl transition-colors">Home</Link>
              <Link to="/#services" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-lg font-semibold text-gray-800 hover:bg-green-50 hover:text-primary rounded-xl transition-colors">Services</Link>
              <Link to="/#about" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-lg font-semibold text-gray-800 hover:bg-green-50 hover:text-primary rounded-xl transition-colors">About</Link>
              <Link to="/#service-area" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-lg font-semibold text-gray-800 hover:bg-green-50 hover:text-primary rounded-xl transition-colors">Service Area</Link>
              <div className="pt-4 px-2">
                <a 
                  href="tel:7604023315" 
                  className="w-full bg-primary text-white px-4 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                >
                  <Phone size={20} /> Call Now: 760-402-3315
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-3xl font-bold tracking-tighter mb-6 block">
              MG <span className="text-primary">Landscaping</span>
            </span>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Providing professional landscaping services including lawn care, tree trimming, property maintenance and much more in San Marcos, CA.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/#services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/#service-area" className="hover:text-white transition-colors">Service Area</Link></li>
              <li><Link to="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Clean-ups</li>
              <li>Mowing</li>
              <li>Tree Trimming</li>
              <li>Sod Installation</li>
              <li>Gardening Upkeep</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                <span>San Marcos, CA 92069</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <a href="tel:7604023315" className="hover:text-white transition-colors">760-402-3315</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <a href="mailto:info@mglandscapingca.com" className="hover:text-white transition-colors">info@mglandscapingca.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MG Landscaping-maintenance & construction. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const MobileWidget = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full z-50 md:hidden flex bg-white shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.2)] border-t border-gray-200 pb-safe"
        >
          <a href="tel:7604023315" className="flex-1 flex flex-col items-center justify-center py-5 text-primary-dark font-bold border-r border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition-colors">
            <Phone size={24} className="mb-1" />
            <span className="text-sm">Call Now</span>
          </a>
          <a href="sms:7604023315" className="flex-1 flex flex-col items-center justify-center py-5 text-primary font-bold hover:bg-gray-50 active:bg-gray-100 transition-colors">
            <MessageSquare size={24} className="mb-1" />
            <span className="text-sm">Text Us</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-primary/20 selection:text-primary-dark pb-16 md:pb-0">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <MobileWidget />
      <div id="ghl-chat-widget-container"></div>
    </div>
  );
};
