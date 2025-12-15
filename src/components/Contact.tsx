import { Phone, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="contact"
      className={`relative border-t border-foreground/5 bg-background py-16 sm:py-20 lg:py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute bottom-[-3rem] left-[12%] h-40 w-40 rounded-full bg-primary/14 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-[0.7rem] tracking-[0.32em] text-foreground/50 uppercase">{t("contact.label")}</p>
          <h2 className="text-3xl font-light leading-tight text-foreground sm:text-4xl">
            {t("contact.title1")} <span className="font-semibold text-primary">{t("contact.title2")}</span>
          </h2>
          <p className="mt-4 text-sm text-foreground/65 sm:text-base">{t("contact.description")}</p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-foreground/10 bg-card px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 shadow-[0_24px_70px_rgba(0,0,0,0.1)] backdrop-blur-sm">
          {/* Contact methods */}
          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-6">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground sm:text-base">{t("contact.call.title")}</h3>
                <p className="mt-1 text-xs text-foreground/60 sm:text-sm">{t("contact.call.description")}</p>
                <a href="tel:+13052630154" className="mt-2 block text-sm font-medium text-primary hover:underline">
                  (305) 263-0154
                </a>
                <a href="tel:+17864823142" className="block text-sm font-medium text-primary hover:underline">
                  (786) 482-3142
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground sm:text-base">{t("contact.email.title")}</h3>
                <p className="mt-1 text-xs text-foreground/60 sm:text-sm">{t("contact.email.description")}</p>
                <a
                  href="mailto:info@concretehernandez.com"
                  className="mt-2 block text-sm font-medium text-primary hover:underline"
                >
                  info@concretehernandez.com
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 border-t border-foreground/10 pt-6 text-center sm:mt-10 sm:pt-7">
            <p className="mb-3 text-sm font-medium text-foreground sm:text-base">{t("contact.cta.prompt")}</p>
            <a
              href="tel:+13052630154"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[0_18px_45px_rgba(0,0,0,0.15)] transition-all duration-300 hover:brightness-110 hover:translate-y-[1px] sm:text-base sm:px-8 sm:py-3.5"
            >
              <Phone className="h-4 w-4" />
              {t("contact.cta.button")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
