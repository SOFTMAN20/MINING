
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const phoneNumber = "255753392262";
    const message = "Hello, I would like to inquire about your mining explosive solutions.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">HDA Company Limited</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <p className="text-gray-400 text-sm">
              Certificate Incorporation Number: 143611604
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">{t('footer.contactUs')}</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-yellow-400" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="hover:text-yellow-400 transition-colors"
                >
                  +255753392262
                </button>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-yellow-400" />
                <span>imanimwaisunga@hda-company.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p>P.O. Box 1113, Mbeya</p>
                  <p>Street: Maendeleo, Ward: Iyunga</p>
                  <p>Jasma Cash & Carry building</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">{t('footer.quickLinks')}</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors">{t('navigation.home')}</a>
              <a href="/about" className="block text-gray-300 hover:text-yellow-400 transition-colors">{t('navigation.about')}</a>
              <a href="/services" className="block text-gray-300 hover:text-yellow-400 transition-colors">{t('navigation.services')}</a>
              <a href="/products" className="block text-gray-300 hover:text-yellow-400 transition-colors">{t('navigation.products')}</a>
              <a href="/contacts" className="block text-gray-300 hover:text-yellow-400 transition-colors">{t('navigation.contact')}</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {t('footer.copyright')}
            </p>
            
            {/* Stalabs AI Credit */}
            <div className="flex items-center gap-2 text-gray-400 text-base md:text-lg">
              <span>Developed by</span>
              <a 
                href="https://wa.me/255750939217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2 group"
              >
                <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent font-bold text-lg md:text-xl">
                  Stalabs AI
                </span>
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
