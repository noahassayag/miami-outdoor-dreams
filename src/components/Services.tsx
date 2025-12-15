import { Layers, Home, Grid3X3, Trees, Fence, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const services = [
    {
      icon: Layers,
      title: t("services.driveways.title"),
      description: t("services.driveways.description"),
    },
    {
      icon: Grid3X3,
      title: t("services.stamped.title"),
      description: t("services.stamped.description"),
    },
    {
      icon: Home,
      title: t("services.patios.title"),
      description: t("services.patios.description"),
    },
    {
      icon: Fence,
      title: t("services.pavers.title"),
      description: t("services.pavers.description"),
    },
    {
      icon: Trees,
      title: t("services.turf.title"),
      description: t("services.turf.description"),
    },
    {
      icon: Wrench,
      title: t("services.pergolas.title"),
      description: t("services.pergolas.description"),
    },
  ];

  return (
    <section 
      ref={ref}
      id="services" 
      className={`relative border-t border-foreground/5 bg-background py-16 sm:py-20 lg:py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* soft background detail */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-[0.7rem] tracking-[0.32em] text-foreground/50 uppercase">{t("services.label")}</p>
          <h2 className="text-3xl font-light leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("services.title1")} <span className="font-semibold text-primary">{t("services.title2")}</span> {t("services.title3")}
          </h2>
          <p className="mt-4 text-sm text-foreground/65 sm:text-base">
            {t("services.description")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className="group flex h-full flex-col rounded-2xl border border-foreground/10 bg-card px-5 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-8 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_22px_50px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 transition-colors duration-300 group-hover:bg-primary/25 sm:h-12 sm:w-12">
                <service.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">{service.title}</h3>
              <p className="text-sm text-foreground/70 sm:text-base">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
