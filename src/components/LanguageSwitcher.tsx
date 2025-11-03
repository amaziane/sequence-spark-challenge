import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="absolute top-4 left-4 font-bold hover:scale-105 transition-transform"
    >
      {i18n.language === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
    </Button>
  );
};
