import { Phone, Instagram, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";

import heroImage2 from "@/assets/concrete-hero-2.jpg";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="contact"
      className={`relative overflow-hidden bg-secondary py-20 sm:py-28 lg:py-0 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2">
        {/* Left side - Image */}
        <div className="relative hidden lg:block">
          <img 
            src={heroImage2} 
            alt="Our Work" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/50" />
        </div>

        {/* Right side - Content */}
        <div className="px-4 py-12 sm:px-6 lg:px-12 lg:py-28">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-primary uppercase">{t("contact.label")}</p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            {t("contact.title1")}
            <br />
            <span className="text-primary">{t("contact.title2")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground font-body">
            {t("contact.description")}
          </p>

          {/* Contact info grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <Phone className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-1 text-lg font-bold text-foreground">{t("contact.call.title")}</h3>
              <a href="tel:+17868169197" className="text-2xl font-bold text-primary hover:underline">
                786-816-9197
              </a>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <Instagram className="mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-1 text-lg font-bold text-foreground">{t("contact.social.title")}</h3>
              <a 
                href="https://www.instagram.com/standard_concrete_company_llc" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent hover:underline"
              >
                @standard_concrete_company_llc
              </a>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <MapPin className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-1 text-lg font-bold text-foreground">Location</h3>
              <p className="text-muted-foreground font-body">Miami, FL & Surrounding Areas</p>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <Clock className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-1 text-lg font-bold text-foreground">Hours</h3>
              <p className="text-muted-foreground font-body">Mon-Sat: 7AM - 6PM</p>
            </div>
          </div>

          {/* Big CTA */}
          <a
            href="tel:+17868169197"
            className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-6 text-xl font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02]"
          >
            <Phone className="h-6 w-6" />
            {t("contact.cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
