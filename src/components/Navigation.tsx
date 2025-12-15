import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t("nav.services"), id: "services" },
    { label: t("nav.portfolio"), id: "portfolio" },
    { label: t("nav.process"), id: "process" },
    { label: t("nav.contact"), id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight sm:text-2xl">Standard Concrete</span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">Highest Quality</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <LanguageToggle />
            <a
              href="tel:+17868169197"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">786-816-9197</span>
              <span className="lg:hidden">Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button className="text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors font-medium py-3 px-4 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+17868169197"
              className="flex items-center justify-center gap-2 w-full mt-4 rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              786-816-9197
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
