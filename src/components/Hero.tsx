import { useEffect, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import heroImage from "@/assets/stamped-concrete-patio.jpg";
import drivewayImage from "@/assets/concrete-driveway.jpg";
import paversImage from "@/assets/pavers-turf.jpg";
import pergolaImage from "@/assets/pergola-concrete.jpg";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { t } = useLanguage();

  const galleryImages = [
    {
      src: heroImage,
      label: t("gallery.item1.label"),
      meta: t("gallery.item1.meta"),
    },
    {
      src: drivewayImage,
      label: t("gallery.item2.label"),
      meta: t("gallery.item2.meta"),
    },
    {
      src: paversImage,
      label: t("gallery.item3.label"),
      meta: t("gallery.item3.meta"),
    },
    {
      src: pergolaImage,
      label: t("gallery.item4.label"),
      meta: t("gallery.item4.meta"),
    },
  ];

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused, galleryImages.length]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-background text-foreground">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 -right-20 h-72 w-72 rounded-full bg-primary/16 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-4rem] h-72 w-72 rounded-full bg-foreground/6 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1150px] flex-col gap-6 px-4 pt-20 pb-6 sm:px-6 sm:pt-24 sm:pb-10 lg:flex-row lg:items-center lg:gap-10 lg:px-6 lg:pt-24 lg:pb-12">
        {/* Text */}
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <span className="text-[0.7rem] uppercase tracking-[0.32em] text-foreground/60">{t("hero.subtitle")}</span>
            <h1 className="text-3xl font-light leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              {t("hero.title1")}
              <br />
              <span className="font-semibold text-primary">{t("hero.title2")}</span>
            </h1>
            <p className="max-w-md text-sm text-foreground/70 sm:text-base">
              {t("hero.description")}
            </p>

            <div className="inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-foreground/[0.02] px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-foreground/60 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{t("hero.location")}</span>
            </div>
          </div>

          <p className="hidden text-xs uppercase tracking-[0.24em] text-foreground/45 sm:block sm:text-sm">
            {t("hero.services")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_18px_45px_rgba(0,0,0,0.15)] transition-all duration-300 hover:translate-y-[1px] hover:brightness-110 sm:w-auto sm:px-7 sm:py-3 sm:text-base"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToProjects}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/20 bg-card px-6 py-3.5 text-sm font-normal text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-foreground/40 hover:bg-secondary sm:w-auto sm:px-6 sm:py-3 sm:text-sm"
            >
              {t("hero.cta2")}
            </button>
          </div>

          <p className="mt-3 text-center text-[0.65rem] uppercase tracking-[0.2em] text-foreground/55 sm:hidden">
            {t("hero.services")}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="flex-1 lg:max-w-md xl:max-w-lg">
          <div
            className="relative overflow-hidden rounded-3xl border border-foreground/15 bg-card shadow-[0_26px_70px_rgba(0,0,0,0.15)]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative h-64 w-full sm:h-80 lg:h-96">
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 h-full w-full transition-all duration-700 ease-out ${
                    index === current ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
                  }`}
                >
                  <img src={item.src} alt={item.label} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                </div>
              ))}
            </div>

            {/* Info card */}
            <div className="absolute bottom-4 left-4 right-4 hidden sm:block">
              <div className="flex-1 rounded-2xl border border-background/20 bg-foreground/80 px-4 py-3 backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-background/60">{t("hero.featured")}</p>
                <p className="mt-1 text-sm font-medium text-background">{galleryImages[current].label}</p>
                <p className="text-[0.75rem] text-background/70">{galleryImages[current].meta}</p>
              </div>
            </div>

            {/* Small step indicators */}
            <div className="absolute bottom-4 right-4 flex gap-1.5 sm:bottom-5 sm:right-5">
              {galleryImages.map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-4 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary" : "bg-background/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
