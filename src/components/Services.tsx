import { Layers, Home, Grid3X3, Umbrella, Waves, ArrowUpRight, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";

import heroImage1 from "@/assets/concrete-hero-1.jpg";
import heroImage2 from "@/assets/concrete-hero-2.jpg";
import heroImage3 from "@/assets/concrete-hero-3.jpg";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const services = [
    {
      icon: Layers,
      title: t("services.driveways.title"),
      description: t("services.driveways.description"),
      featured: true,
      image: heroImage1,
    },
    {
      icon: Grid3X3,
      title: t("services.stamped.title"),
      description: t("services.stamped.description"),
      image: heroImage3,
    },
    {
      icon: Home,
      title: t("services.patios.title"),
      description: t("services.patios.description"),
      image: heroImage2,
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
      className={`relative bg-background py-20 sm:py-28 lg:py-36 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Left aligned */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-primary uppercase">{t("services.label")}</p>
          <h2 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("services.title1")} <span className="text-primary">{t("services.title2")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground font-body">
            {t("services.description")}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {/* Featured large card */}
          <div className="group relative overflow-hidden rounded-3xl lg:col-span-2 lg:row-span-2">
            <img 
              src={services[0].image} 
              alt={services[0].title}
              className="h-full min-h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:min-h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-sm">
                <Layers className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-background sm:text-3xl">{services[0].title}</h3>
              <p className="max-w-md text-background/80 font-body">{services[0].description}</p>
            </div>
          </div>

          {/* Smaller cards */}
          {services.slice(1, 3).map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl">
              {service.image ? (
                <>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="h-full min-h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 backdrop-blur-sm">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-background">{service.title}</h3>
                    <p className="text-sm text-background/70 font-body line-clamp-2">{service.description}</p>
                  </div>
                </>
              ) : (
                <div className="flex h-full min-h-[240px] flex-col justify-between bg-secondary p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground font-body">{service.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Text-only cards */}
          {services.slice(3).map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-primary p-8 sm:flex-row sm:p-10">
          <div>
            <h3 className="text-2xl font-bold text-primary-foreground sm:text-3xl">Ready to transform your space?</h3>
            <p className="mt-2 text-primary-foreground/80 font-body">Get a free estimate today. No obligation.</p>
          </div>
          <a
            href="tel:+17868169197"
            className="inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-lg font-bold text-foreground shadow-xl transition-all hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
