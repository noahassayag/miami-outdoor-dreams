import { useEffect, useState } from "react";
import { ArrowRight, MapPin, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import project1 from "@/assets/portfolio/project-1.jpg";
import project2 from "@/assets/portfolio/project-2.jpg";
import project3 from "@/assets/portfolio/project-3.jpg";
import project4 from "@/assets/portfolio/project-4.jpg";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { t } = useLanguage();

  const galleryImages = [
    {
      src: project1,
      label: t("gallery.item1.label"),
      meta: t("gallery.item1.meta"),
    },
    {
      src: project2,
      label: t("gallery.item2.label"),
      meta: t("gallery.item2.meta"),
    },
    {
      src: project3,
      label: t("gallery.item3.label"),
      meta: t("gallery.item3.meta"),
    },
    {
      src: project4,
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
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-[-4rem] h-80 w-80 rounded-full bg-accent/6 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1200px] flex-col gap-8 px-4 pt-24 pb-8 sm:px-6 sm:pt-28 sm:pb-12 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:pt-28 lg:pb-16">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium tracking-wide text-primary">{t("hero.experience")}</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {t("hero.title1")}
              <br />
              <span className="text-primary">{t("hero.title2")}</span>
            </h1>
            
            <p className="max-w-lg text-base text-muted-foreground font-body sm:text-lg">
              {t("hero.description")}
            </p>

            <div className="inline-flex items-center gap-3 rounded-full bg-secondary/50 px-4 py-2.5 text-sm text-foreground/70">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="font-medium">{t("hero.location")}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/15 bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
            >
              {t("hero.cta2")}
            </button>
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground pt-2">
            {t("hero.services")}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="flex-1 lg:max-w-lg xl:max-w-xl">
          <div
            className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-foreground/5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative h-72 w-full sm:h-80 lg:h-[420px]">
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 h-full w-full transition-all duration-700 ease-out ${
                    index === current ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-105"
                  }`}
                >
                  <img src={item.src} alt={item.label} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                </div>
              ))}
            </div>

            {/* Info card */}
            <div className="absolute bottom-4 left-4 right-4 hidden sm:block">
              <div className="rounded-2xl border border-background/20 bg-foreground/85 px-5 py-4 backdrop-blur-md">
                <p className="text-[0.65rem] font-medium uppercase tracking-widest text-background/60">{t("hero.featured")}</p>
                <p className="mt-1 text-lg font-semibold text-background">{galleryImages[current].label}</p>
                <p className="text-sm text-background/70">{galleryImages[current].meta}</p>
              </div>
            </div>

            {/* Step indicators */}
            <div className="absolute bottom-5 right-5 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? "w-8 bg-primary" : "w-2 bg-background/50 hover:bg-background/70"
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
