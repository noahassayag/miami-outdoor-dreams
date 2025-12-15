import logo from "@/assets/concrete-hernandez-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-7">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <img src={logo} alt="Concrete Hernandez" className="h-24 w-auto sm:h-28" />
            <p className="text-[0.7rem] tracking-[0.26em] text-foreground/45 uppercase">{t("footer.tagline")}</p>
          </div>

          {/* Copy */}
          <p className="max-w-xl text-sm text-foreground/60 sm:text-[0.95rem]">
            {t("footer.description")}
          </p>

          {/* Divider */}
          <div className="h-px w-14 bg-foreground/15" />

          {/* Bottom row */}
          <div className="flex flex-col items-center gap-2 text-[0.8rem] text-foreground/45 sm:flex-row sm:justify-between sm:text-xs w-full">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <span>© {currentYear} Concrete Hernandez</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">{t("footer.rights")}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
              <a 
                href="https://www.tiktok.com/@david.hernandez817?is_from_webapp=1&sender_device=pc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/45 hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/hernandezdelcarmen1991?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/45 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/people/Concreto-HM-Llc/61561092957463/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/45 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
