
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppClick = () => {
    const phoneNumber = "255753392262";
    const message = "Hello, I would like to inquire about your mining explosive solutions.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { path: "/", label: t('navigation.home') },
    { path: "/about", label: t('navigation.about') },
    { path: "/services", label: t('navigation.services') },
    { path: "/products", label: t('navigation.products') },
    { path: "/contacts", label: t('navigation.contact') }
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="images/logo2.jpg" 
                alt="HDA Company Limited Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
              />
              <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                HDA COMPANY LIMITED
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition-all duration-300 px-3 py-2 rounded-md text-base font-medium group ${
                  isActive(item.path) 
                    ? "text-white bg-blue-600/20" 
                    : "text-white hover:text-blue-300 hover:bg-blue-600/10"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Phone & Language */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-3 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
            >
              <Phone className="h-5 w-5 phone-calling" />
              <div className="flex flex-col">
                <span className="text-xs font-medium">Have any questions?</span>
                <span className="font-bold text-sm">Call: +255753392262</span>
              </div>
            </button>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-yellow-400 hover:text-yellow-300 hover:bg-slate-800"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-slate-800 border-t border-slate-700"
        >
          <div className="px-6 py-4 space-y-4">
            <div className="border-b border-slate-600 pb-4 flex justify-between items-center">
              <LanguageSwitcher />
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 text-yellow-400 text-sm hover:text-yellow-300 transition-colors cursor-pointer"
              >
                <Phone className="h-4 w-4 phone-calling" />
                <span>+255753392262</span>
              </button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`block transition-all duration-300 py-3 px-4 rounded-md border-l-4 ${
                  isActive(item.path)
                    ? "text-yellow-400 bg-yellow-400/10 border-yellow-400"
                    : "text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 border-transparent hover:border-yellow-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
