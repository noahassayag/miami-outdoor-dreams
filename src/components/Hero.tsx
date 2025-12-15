import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Phone, Award, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import heroImage1 from "@/assets/concrete-hero-1.jpg";
import heroImage2 from "@/assets/concrete-hero-2.jpg";
import heroImage3 from "@/assets/concrete-hero-3.jpg";
import heroImage4 from "@/assets/concrete-hero-4.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useLanguage();
  const images = [heroImage1, heroImage2, heroImage3, heroImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full-screen background images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={img} alt="Concrete work" className="h-full w-full object-cover" />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-4 pt-24 pb-8 sm:px-6 lg:px-8">
        {/* Top stats bar */}
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-6 text-background/80 sm:justify-between">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">{t("hero.experience")}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">{t("hero.location")}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-sm font-medium">5.0 Rating</span>
          </div>
        </div>

        {/* Main content - centered */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="mb-4 inline-block rounded-full border border-background/20 bg-background/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-background backdrop-blur-sm">
            Standard Concrete Company
          </span>
          
          <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-background sm:text-6xl md:text-7xl lg:text-8xl">
            {t("hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-lg text-background/80 font-body sm:text-xl">
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-10 py-5 text-lg font-bold text-accent-foreground shadow-2xl shadow-accent/30 transition-all duration-300 hover:shadow-accent/50 hover:scale-105"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="tel:+17868169197"
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-background/30 bg-background/10 px-8 py-5 text-lg font-semibold text-background backdrop-blur-sm transition-all hover:bg-background/20"
            >
              <Phone className="h-5 w-5" />
              786-816-9197
            </a>
          </div>
        </div>

        {/* Bottom image indicators and services */}
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Image indicators */}
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImage ? "w-12 bg-accent" : "w-6 bg-background/40 hover:bg-background/60"
                }`}
              />
            ))}
          </div>

          {/* Services tags */}
          <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
            {["Driveways", "Patios", "Stamped", "Pergolas"].map((service) => (
              <span
                key={service}
                className="rounded-full border border-background/20 bg-background/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-background/80 backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
