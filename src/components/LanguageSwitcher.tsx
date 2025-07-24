
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'sw' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center space-x-1">
      <Globe className="h-4 w-4 text-white" />
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="text-white hover:text-yellow-400 hover:bg-slate-800 px-3 py-1 text-sm min-w-[50px]"
      >
        {i18n.language === 'en' ? 'KS' : 'EN'}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
