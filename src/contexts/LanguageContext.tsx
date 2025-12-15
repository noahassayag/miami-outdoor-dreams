import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.process": "Process",
    "nav.contact": "Contact",
    
    // Hero
    "hero.subtitle": "Standard Concrete Company",
    "hero.title1": "Highest Quality",
    "hero.title2": "Concrete Work",
    "hero.description": "15 years of experience crafting premium concrete solutions in Miami. Driveways, patios, stamped concrete, and custom pergolas built to perfection.",
    "hero.location": "Miami, FL 🏝️",
    "hero.services": "Driveways • Patios • Stamped Concrete • Pergolas",
    "hero.cta1": "Get Free Estimate",
    "hero.cta2": "View Our Work",
    "hero.featured": "Featured Project",
    "hero.experience": "15+ Years Experience",
    
    // Gallery
    "gallery.item1.label": "Custom Pool Deck",
    "gallery.item1.meta": "White concrete with turf joints",
    "gallery.item2.label": "Modern Driveway",
    "gallery.item2.meta": "Clean lines • Premium finish",
    "gallery.item3.label": "Residential Entrance",
    "gallery.item3.meta": "Turf accents • Custom design",
    "gallery.item4.label": "Contemporary Walkway",
    "gallery.item4.meta": "Geometric patterns • Modern home",
    
    // Services
    "services.label": "What We Do",
    "services.title1": "Premium",
    "services.title2": "Concrete Services",
    "services.title3": "in Miami",
    "services.description": "We don't settle for anything less than the highest quality in our work.",
    "services.driveways.title": "Concrete Driveways",
    "services.driveways.description": "Beautiful, durable driveways with clean lines and premium finishes that enhance your home's curb appeal.",
    "services.stamped.title": "Stamped Concrete",
    "services.stamped.description": "Custom patterns and textures that transform ordinary concrete into stunning decorative surfaces.",
    "services.patios.title": "Concrete Patios",
    "services.patios.description": "Elegant outdoor living spaces designed for Miami's tropical lifestyle.",
    "services.pergolas.title": "Pergolas",
    "services.pergolas.description": "Custom pergola structures that provide shade and style for your outdoor oasis.",
    "services.pooldecks.title": "Pool Decks",
    "services.pooldecks.description": "Slip-resistant, beautiful pool surrounds perfect for Miami's year-round swimming weather.",
    "services.walkways.title": "Walkways & Paths",
    "services.walkways.description": "Connected outdoor spaces with elegant walkways and modern geometric designs.",
    
    // Portfolio
    "portfolio.label": "Our Work",
    "portfolio.title1": "Quality Craftsmanship",
    "portfolio.title2": "You Can See",
    "portfolio.description": "Every project reflects our commitment to excellence. See why Miami homeowners trust Standard Concrete Company.",
    
    // Process
    "process.label": "How It Works",
    "process.title1": "Simple &",
    "process.title2": "Professional Process",
    "process.description": "From consultation to completion, we handle every detail with precision and care.",
    "process.step": "Step",
    "process.step1.title": "Free Consultation",
    "process.step1.description": "We visit your property, discuss your vision, and provide a detailed estimate at no cost.",
    "process.step2.title": "Custom Design",
    "process.step2.description": "Our team creates a design tailored to your space, style, and budget.",
    "process.step3.title": "Expert Installation",
    "process.step3.description": "15 years of experience goes into every pour. We don't cut corners.",
    "process.step4.title": "Final Inspection",
    "process.step4.description": "We ensure every detail meets our high standards before the job is complete.",
    
    // Contact
    "contact.label": "Contact Us",
    "contact.title1": "Ready to Start",
    "contact.title2": "Your Project?",
    "contact.description": "Call us today for a free estimate. We're ready to bring your vision to life.",
    "contact.call.title": "Call Now",
    "contact.call.description": "Speak directly with our team.",
    "contact.social.title": "Follow Us",
    "contact.social.description": "See our latest projects on social media.",
    "contact.cta.prompt": "Get your free estimate today",
    "contact.cta.button": "Call 786-816-9197",
    
    // Footer
    "footer.tagline": "Highest Quality Concrete",
    "footer.description": "Standard Concrete Company, LLC - 15 years of excellence in Miami. Driveways, patios, stamped concrete, and pergolas.",
    "footer.rights": "All rights reserved",
  },
  es: {
    // Navigation
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.process": "Proceso",
    "nav.contact": "Contacto",
    
    // Hero
    "hero.subtitle": "Standard Concrete Company",
    "hero.title1": "La Más Alta",
    "hero.title2": "Calidad en Concreto",
    "hero.description": "15 años de experiencia creando soluciones premium de concreto en Miami. Entradas, patios, concreto estampado y pérgolas personalizadas.",
    "hero.location": "Miami, FL 🏝️",
    "hero.services": "Entradas • Patios • Concreto Estampado • Pérgolas",
    "hero.cta1": "Presupuesto Gratis",
    "hero.cta2": "Ver Nuestro Trabajo",
    "hero.featured": "Proyecto Destacado",
    "hero.experience": "15+ Años de Experiencia",
    
    // Gallery
    "gallery.item1.label": "Deck de Piscina",
    "gallery.item1.meta": "Concreto blanco con césped",
    "gallery.item2.label": "Entrada Moderna",
    "gallery.item2.meta": "Líneas limpias • Acabado premium",
    "gallery.item3.label": "Entrada Residencial",
    "gallery.item3.meta": "Acentos de césped • Diseño custom",
    "gallery.item4.label": "Camino Contemporáneo",
    "gallery.item4.meta": "Patrones geométricos • Casa moderna",
    
    // Services
    "services.label": "Lo Que Hacemos",
    "services.title1": "Servicios Premium de",
    "services.title2": "Concreto",
    "services.title3": "en Miami",
    "services.description": "No nos conformamos con nada menos que la máxima calidad en nuestros trabajos.",
    "services.driveways.title": "Entradas de Concreto",
    "services.driveways.description": "Entradas hermosas y duraderas con líneas limpias y acabados premium que realzan la apariencia de su hogar.",
    "services.stamped.title": "Concreto Estampado",
    "services.stamped.description": "Patrones y texturas personalizadas que transforman el concreto ordinario en superficies decorativas impresionantes.",
    "services.patios.title": "Patios de Concreto",
    "services.patios.description": "Elegantes espacios exteriores diseñados para el estilo de vida tropical de Miami.",
    "services.pergolas.title": "Pérgolas",
    "services.pergolas.description": "Estructuras de pérgola personalizadas que brindan sombra y estilo para su oasis exterior.",
    "services.pooldecks.title": "Decks de Piscina",
    "services.pooldecks.description": "Superficies antideslizantes y hermosas, perfectas para el clima de Miami.",
    "services.walkways.title": "Caminos y Senderos",
    "services.walkways.description": "Espacios exteriores conectados con caminos elegantes y diseños geométricos modernos.",
    
    // Portfolio
    "portfolio.label": "Nuestro Trabajo",
    "portfolio.title1": "Calidad Artesanal",
    "portfolio.title2": "Que Se Nota",
    "portfolio.description": "Cada proyecto refleja nuestro compromiso con la excelencia. Vea por qué los propietarios de Miami confían en Standard Concrete Company.",
    
    // Process
    "process.label": "Cómo Funciona",
    "process.title1": "Proceso Simple &",
    "process.title2": "Profesional",
    "process.description": "Desde la consulta hasta la finalización, manejamos cada detalle con precisión y cuidado.",
    "process.step": "Paso",
    "process.step1.title": "Consulta Gratuita",
    "process.step1.description": "Visitamos su propiedad, discutimos su visión y proporcionamos un presupuesto detallado sin costo.",
    "process.step2.title": "Diseño Personalizado",
    "process.step2.description": "Nuestro equipo crea un diseño adaptado a su espacio, estilo y presupuesto.",
    "process.step3.title": "Instalación Experta",
    "process.step3.description": "15 años de experiencia en cada trabajo. No tomamos atajos.",
    "process.step4.title": "Inspección Final",
    "process.step4.description": "Nos aseguramos de que cada detalle cumpla con nuestros altos estándares antes de terminar.",
    
    // Contact
    "contact.label": "Contáctenos",
    "contact.title1": "¿Listo Para Comenzar",
    "contact.title2": "Su Proyecto?",
    "contact.description": "Llámenos hoy para un presupuesto gratis. Estamos listos para dar vida a su visión.",
    "contact.call.title": "Llame Ahora",
    "contact.call.description": "Hable directamente con nuestro equipo.",
    "contact.social.title": "Síguenos",
    "contact.social.description": "Vea nuestros últimos proyectos en redes sociales.",
    "contact.cta.prompt": "Obtenga su presupuesto gratis hoy",
    "contact.cta.button": "Llame 786-816-9197",
    
    // Footer
    "footer.tagline": "La Más Alta Calidad en Concreto",
    "footer.description": "Standard Concrete Company, LLC - 15 años de excelencia en Miami. Entradas, patios, concreto estampado y pérgolas.",
    "footer.rights": "Todos los derechos reservados",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
