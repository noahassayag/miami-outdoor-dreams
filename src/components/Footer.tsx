import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Standard Concrete</h3>
            <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">{t("footer.tagline")}</p>
          </div>

          {/* Description */}
          <p className="max-w-lg text-muted-foreground font-body">
            {t("footer.description")}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.tiktok.com/@www.concreteestandar.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="TikTok"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/standard_concrete_company_llc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-20 bg-border" />

          {/* Bottom row */}
          <div className="text-sm text-muted-foreground">
            <span>© {currentYear} Standard Concrete Company, LLC</span>
            <span className="mx-2">•</span>
            <span>{t("footer.rights")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
