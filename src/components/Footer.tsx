import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-background">Standard Concrete</h3>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">{t("footer.tagline")}</p>
            <p className="mt-6 max-w-sm text-background/60 font-body">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick contact */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-background">Contact</h4>
            <div className="space-y-4">
              <a 
                href="tel:+17868169197" 
                className="flex items-center gap-3 text-background/80 transition-colors hover:text-primary"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">786-816-9197</span>
              </a>
              <a 
                href="https://www.instagram.com/standard_concrete_company_llc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/80 transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-medium">@standard_concrete_company_llc</span>
              </a>
            </div>
          </div>

          {/* Social links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-background">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.tiktok.com/@www.concreteestandar.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-background transition-all hover:bg-primary hover:text-primary-foreground"
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
                className="flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-background transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-sm text-background/50">
            © {currentYear} Standard Concrete Company, LLC. {t("footer.rights")}.
          </p>
          <p className="text-sm text-background/50">
            Miami, FL 🏝️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
