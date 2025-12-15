import { Layers, Home, Grid3X3, Umbrella, Waves, ArrowUpRight } from "lucide-react";
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
      icon: Umbrella,
      title: t("services.pergolas.title"),
      description: t("services.pergolas.description"),
    },
    {
      icon: Waves,
      title: t("services.pooldecks.title"),
      description: t("services.pooldecks.description"),
    },
    {
      icon: ArrowUpRight,
      title: t("services.walkways.title"),
      description: t("services.walkways.description"),
    },
  ];

  return (
    <section 
      ref={ref}
      id="services" 
      className={`relative bg-secondary/30 py-20 sm:py-24 lg:py-32 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-primary uppercase">{t("services.label")}</p>
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("services.title1")} <span className="text-primary">{t("services.title2")}</span> {t("services.title3")}
          </h2>
          <p className="mt-5 text-base text-muted-foreground font-body sm:text-lg max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
