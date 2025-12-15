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
      className={`bg-secondary py-16 sm:py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 max-w-xl">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">{t("services.label")}</p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {t("services.title1")} <span className="text-primary">{t("services.title2")}</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground font-body">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
