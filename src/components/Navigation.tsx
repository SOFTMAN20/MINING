import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
    { path: "/gallery", label: "Gallery" },
    { path: "/contacts", label: t('navigation.contact') }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-slate-900/98 backdrop-blur-lg shadow-lg shadow-yellow-500/10 border-b border-yellow-500/20"
        : "bg-slate-900/95 backdrop-blur-md border-b border-slate-700"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <img
                  src="images/logo2.jpg"
                  alt="HDA Company Limited Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm md:text-lg lg:text-xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
                  HDA COMPANY
                </div>
                <div className="text-[10px] md:text-xs text-gray-400 -mt-1">Mining Explosives</div>
              </div>
              <div className="sm:hidden text-xs font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                HDA
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center space-x-1"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${isActive(item.path)
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
                  }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-lg border border-yellow-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            ))}
          </motion.div>

          {/* Desktop Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center space-x-3"
          >
            <button
              onClick={handleWhatsAppClick}
              className="group flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-slate-900 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-105"
            >
              <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-none opacity-90">Call Us</span>
                <span className="text-xs leading-none font-bold">+255 753 392 262</span>
              </div>
            </button>
            <LanguageSwitcher />
          </motion.div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={handleWhatsAppClick}
              className="p-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/30"
            >
              <Phone className="h-4 w-4 text-slate-900" />
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-yellow-400 hover:text-yellow-300 hover:bg-slate-800/50 relative"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-slate-800/98 backdrop-blur-lg border-t border-yellow-500/20"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 ${isActive(item.path)
                      ? "bg-gradient-to-r from-yellow-500/20 to-red-500/20 text-yellow-400 border-l-4 border-yellow-400 shadow-lg shadow-yellow-500/10"
                      : "text-gray-300 hover:text-yellow-400 hover:bg-slate-700/50 border-l-4 border-transparent hover:border-yellow-400/50"
                      }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    {isActive(item.path) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                className="pt-4 border-t border-slate-700 flex items-center justify-between"
              >
                <div className="text-gray-400 text-sm">Language</div>
                <LanguageSwitcher />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
