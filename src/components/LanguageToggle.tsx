import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-card px-3 py-1.5 text-xs font-medium text-foreground/70 transition-all duration-300 hover:border-primary/50 hover:text-primary"
      aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
    >
      <Globe className="h-3.5 w-3.5" />
      <span>{language === "en" ? "ES" : "EN"}</span>
    </button>
  );
};

export default LanguageToggle;
