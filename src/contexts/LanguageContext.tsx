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
    "hero.subtitle": "Concrete Hernandez",
    "hero.title1": "Quality concrete work,",
    "hero.title2": "built to last.",
    "hero.description": "Driveways, patios, stamped concrete, pavers, turf, and pergolas. Expert craftsmanship for indoor and outdoor spaces.",
    "hero.location": "Miami-Dade & Broward Counties",
    "hero.services": "Concrete • Patios • Pavers • Turf • Pergolas",
    "hero.cta1": "Get a free estimate",
    "hero.cta2": "View our work",
    "hero.featured": "Featured Project",
    
    // Gallery
    "gallery.item1.label": "Decorative stamped patio",
    "gallery.item1.meta": "Custom patterns • Full install",
    "gallery.item2.label": "Polished concrete driveway",
    "gallery.item2.meta": "Smooth finish • 2 weeks",
    "gallery.item3.label": "Pavers with artificial turf",
    "gallery.item3.meta": "Hardscape • Turf install",
    "gallery.item4.label": "Pergola on concrete base",
    "gallery.item4.meta": "Structure • Patio work",
    
    // Services
    "services.label": "What We Do",
    "services.title1": "Expert",
    "services.title2": "concrete & hardscape",
    "services.title3": "services.",
    "services.description": "From driveways to decorative patios, quality craftsmanship for every project.",
    "services.driveways.title": "Concrete Driveways",
    "services.driveways.description": "Durable, smooth driveways built to withstand daily use and weather.",
    "services.stamped.title": "Stamped Concrete",
    "services.stamped.description": "Decorative patterns and textures that elevate any outdoor space.",
    "services.patios.title": "Patios & Walkways",
    "services.patios.description": "Custom patios and paths designed for beauty and function.",
    "services.pavers.title": "Pavers",
    "services.pavers.description": "Elegant paver installations for patios, driveways, and pool decks.",
    "services.turf.title": "Artificial Turf",
    "services.turf.description": "Low-maintenance turf that stays green year-round.",
    "services.pergolas.title": "Pergolas & Structures",
    "services.pergolas.description": "Custom outdoor structures to complete your backyard vision.",
    
    // Portfolio
    "portfolio.label": "Our Work",
    "portfolio.title1": "Projects that showcase",
    "portfolio.title2": "quality craftsmanship.",
    "portfolio.description": "A glimpse into driveways, patios, and hardscape work we've completed. Built with precision and pride.",
    "portfolio.project1.title": "Decorative Stamped Patio",
    "portfolio.project1.category": "Stamped Concrete",
    "portfolio.project1.location": "Residential",
    "portfolio.project2.title": "Modern Polished Driveway",
    "portfolio.project2.category": "Driveway",
    "portfolio.project2.location": "Custom Home",
    "portfolio.project3.title": "Pavers & Turf Combo",
    "portfolio.project3.category": "Hardscape",
    "portfolio.project3.location": "Backyard",
    "portfolio.project4.title": "Polished Interior Floor",
    "portfolio.project4.category": "Interior Concrete",
    "portfolio.project4.location": "Modern Living",
    
    // Process
    "process.label": "How It Works",
    "process.title1": "A simple,",
    "process.title2": "stress-free process.",
    "process.description": "From first call to finished project, we handle everything so you don't have to.",
    "process.step": "Step",
    "process.step1.title": "Free Consultation",
    "process.step1.description": "We visit your property, discuss your vision, and provide a detailed free estimate with no obligation.",
    "process.step2.title": "Design & Planning",
    "process.step2.description": "We create a custom plan tailored to your space, budget, and style preferences.",
    "process.step3.title": "Expert Construction",
    "process.step3.description": "Our skilled team handles all the work: prep, pour, and finishing, with attention to every detail.",
    "process.step4.title": "Final Walkthrough",
    "process.step4.description": "We ensure everything meets our high standards and your expectations before the job is complete.",
    
    // Contact
    "contact.label": "Contact",
    "contact.title1": "Ready to start",
    "contact.title2": "your project?",
    "contact.description": "Get in touch for a free estimate. We'll discuss your vision and provide a detailed quote.",
    "contact.call.title": "Call Us",
    "contact.call.description": "Best for quick questions or to schedule an estimate.",
    "contact.email.title": "Email",
    "contact.email.description": "Send project details, photos, or questions anytime.",
    "contact.cta.prompt": "Ready for a free estimate?",
    "contact.cta.button": "Call for free estimate",
    
    // Footer
    "footer.tagline": "Concrete • Patios • Pavers • Turf",
    "footer.description": "Quality concrete and hardscape services: driveways, patios, stamped concrete, pavers, turf, and pergolas built with expert craftsmanship.",
    "footer.rights": "All rights reserved",
  },
  es: {
    // Navigation
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.process": "Proceso",
    "nav.contact": "Contacto",
    
    // Hero
    "hero.subtitle": "Concrete Hernandez",
    "hero.title1": "Trabajo de concreto de calidad,",
    "hero.title2": "hecho para durar.",
    "hero.description": "Entradas, patios, concreto estampado, adoquines, césped artificial y pérgolas. Artesanía experta para espacios interiores y exteriores.",
    "hero.location": "Condados de Miami-Dade y Broward",
    "hero.services": "Concreto • Patios • Adoquines • Césped • Pérgolas",
    "hero.cta1": "Obtener presupuesto gratis",
    "hero.cta2": "Ver nuestro trabajo",
    "hero.featured": "Proyecto Destacado",
    
    // Gallery
    "gallery.item1.label": "Patio de concreto estampado",
    "gallery.item1.meta": "Patrones personalizados • Instalación completa",
    "gallery.item2.label": "Entrada de concreto pulido",
    "gallery.item2.meta": "Acabado liso • 2 semanas",
    "gallery.item3.label": "Adoquines con césped artificial",
    "gallery.item3.meta": "Hardscape • Instalación de césped",
    "gallery.item4.label": "Pérgola sobre base de concreto",
    "gallery.item4.meta": "Estructura • Trabajo de patio",
    
    // Services
    "services.label": "Lo Que Hacemos",
    "services.title1": "Servicios expertos de",
    "services.title2": "concreto y hardscape",
    "services.title3": ".",
    "services.description": "Desde entradas hasta patios decorativos, artesanía de calidad para cada proyecto.",
    "services.driveways.title": "Entradas de Concreto",
    "services.driveways.description": "Entradas duraderas y lisas construidas para soportar el uso diario y el clima.",
    "services.stamped.title": "Concreto Estampado",
    "services.stamped.description": "Patrones decorativos y texturas que elevan cualquier espacio exterior.",
    "services.patios.title": "Patios y Caminos",
    "services.patios.description": "Patios y caminos personalizados diseñados para belleza y función.",
    "services.pavers.title": "Adoquines",
    "services.pavers.description": "Instalaciones elegantes de adoquines para patios, entradas y cubiertas de piscinas.",
    "services.turf.title": "Césped Artificial",
    "services.turf.description": "Césped de bajo mantenimiento que se mantiene verde todo el año.",
    "services.pergolas.title": "Pérgolas y Estructuras",
    "services.pergolas.description": "Estructuras exteriores personalizadas para completar la visión de su patio.",
    
    // Portfolio
    "portfolio.label": "Nuestro Trabajo",
    "portfolio.title1": "Proyectos que demuestran",
    "portfolio.title2": "artesanía de calidad.",
    "portfolio.description": "Un vistazo a entradas, patios y trabajos de hardscape que hemos completado. Construido con precisión y orgullo.",
    "portfolio.project1.title": "Patio Estampado Decorativo",
    "portfolio.project1.category": "Concreto Estampado",
    "portfolio.project1.location": "Residencial",
    "portfolio.project2.title": "Entrada Pulida Moderna",
    "portfolio.project2.category": "Entrada",
    "portfolio.project2.location": "Casa Personalizada",
    "portfolio.project3.title": "Combo de Adoquines y Césped",
    "portfolio.project3.category": "Hardscape",
    "portfolio.project3.location": "Patio Trasero",
    "portfolio.project4.title": "Piso Interior Pulido",
    "portfolio.project4.category": "Concreto Interior",
    "portfolio.project4.location": "Vida Moderna",
    
    // Process
    "process.label": "Cómo Funciona",
    "process.title1": "Un proceso",
    "process.title2": "simple y sin estrés.",
    "process.description": "Desde la primera llamada hasta el proyecto terminado, manejamos todo para que usted no tenga que hacerlo.",
    "process.step": "Paso",
    "process.step1.title": "Consulta Gratuita",
    "process.step1.description": "Visitamos su propiedad, discutimos su visión y proporcionamos un presupuesto detallado gratuito sin obligación.",
    "process.step2.title": "Diseño y Planificación",
    "process.step2.description": "Creamos un plan personalizado adaptado a su espacio, presupuesto y preferencias de estilo.",
    "process.step3.title": "Construcción Experta",
    "process.step3.description": "Nuestro equipo calificado maneja todo el trabajo: preparación, vertido y acabado, con atención a cada detalle.",
    "process.step4.title": "Revisión Final",
    "process.step4.description": "Nos aseguramos de que todo cumpla con nuestros altos estándares y sus expectativas antes de que se complete el trabajo.",
    
    // Contact
    "contact.label": "Contacto",
    "contact.title1": "¿Listo para comenzar",
    "contact.title2": "su proyecto?",
    "contact.description": "Contáctenos para un presupuesto gratuito. Discutiremos su visión y proporcionaremos una cotización detallada.",
    "contact.call.title": "Llámenos",
    "contact.call.description": "Ideal para preguntas rápidas o para programar un presupuesto.",
    "contact.email.title": "Correo",
    "contact.email.description": "Envíe detalles del proyecto, fotos o preguntas en cualquier momento.",
    "contact.cta.prompt": "¿Listo para un presupuesto gratuito?",
    "contact.cta.button": "Llame para presupuesto gratis",
    
    // Footer
    "footer.tagline": "Concreto • Patios • Adoquines • Césped",
    "footer.description": "Servicios de calidad de concreto y hardscape: entradas, patios, concreto estampado, adoquines, césped y pérgolas construidas con artesanía experta.",
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
