import { Phone, Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="contact"
      className={`relative bg-background py-20 sm:py-24 lg:py-32 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-primary uppercase">{t("contact.label")}</p>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("contact.title1")} <span className="text-primary">{t("contact.title2")}</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground font-body sm:text-lg">{t("contact.description")}</p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 lg:p-12 shadow-xl shadow-foreground/5">
          {/* Contact methods */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{t("contact.call.title")}</h3>
                <p className="mt-1 text-sm text-muted-foreground font-body">{t("contact.call.description")}</p>
                <a href="tel:+17868169197" className="mt-3 inline-block text-xl font-bold text-primary hover:underline">
                  (786) 816-9197
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                <Instagram className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{t("contact.social.title")}</h3>
                <p className="mt-1 text-sm text-muted-foreground font-body">{t("contact.social.description")}</p>
                <a 
                  href="https://www.instagram.com/standard_concrete_company_llc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-base font-semibold text-accent hover:underline"
                >
                  @standard_concrete_company_llc
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 border-t border-border pt-8 text-center sm:mt-12 sm:pt-10">
            <p className="mb-5 text-lg font-semibold text-foreground">{t("contact.cta.prompt")}</p>
            <a
              href="tel:+17868169197"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" />
              {t("contact.cta.button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
