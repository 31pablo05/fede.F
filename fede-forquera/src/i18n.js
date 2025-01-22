import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        aboutMe: "About Me",
        portfolio: "Portfolio",
        contact: "Contact",
      },
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        aboutMe: "Sobre mí",
        portfolio: "Portafolio",
        contact: "Contacto",
      },
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Permite usarlo con React
  .init({
    resources,
    fallbackLng: 'en', // Idioma predeterminado
    interpolation: {
      escapeValue: false, // React ya maneja el escape
    },
  });

export default i18n;
