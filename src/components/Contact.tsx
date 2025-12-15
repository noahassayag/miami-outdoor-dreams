import { Phone, Instagram, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="contact"
      className={`bg-background py-16 sm:py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">{t("contact.label")}</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {t("contact.title1")} <span className="text-primary">{t("contact.title2")}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground font-body">
            {t("contact.description")}
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <Phone className="mb-3 h-6 w-6 text-primary" />
            <h3 className="mb-1 text-sm font-semibold text-foreground">{t("contact.call.title")}</h3>
            <a href="tel:+17868169197" className="text-lg font-bold text-primary hover:underline">
              786-816-9197
            </a>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <Instagram className="mb-3 h-6 w-6 text-accent" />
            <h3 className="mb-1 text-sm font-semibold text-foreground">{t("contact.social.title")}</h3>
            <a 
              href="https://www.instagram.com/standard_concrete_company_llc" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-accent hover:underline"
            >
              @standard_concrete_company_llc
            </a>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <MapPin className="mb-3 h-6 w-6 text-primary" />
            <h3 className="mb-1 text-sm font-semibold text-foreground">Location</h3>
            <p className="text-sm text-muted-foreground font-body">Miami, FL & Surrounding</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <Clock className="mb-3 h-6 w-6 text-primary" />
            <h3 className="mb-1 text-sm font-semibold text-foreground">Hours</h3>
            <p className="text-sm text-muted-foreground font-body">Mon-Sat: 7AM - 6PM</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="tel:+17868169197"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            {t("contact.cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
