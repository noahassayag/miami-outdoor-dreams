import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Phone, Award, Star, ChevronLeft, ChevronRight } from "lucide-react";
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="home" className="bg-background pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[80vh] items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            {/* Stats badges */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                <Award className="h-3.5 w-3.5" />
                {t("hero.experience")}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {t("hero.location")}
              </span>
              <span className="inline-flex items-center gap-0.5 rounded-full bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-accent" />
                ))}
              </span>
            </div>

            {/* Company name */}
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Standard Concrete Company
            </p>
            
            {/* Headline */}
            <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("hero.title1")}{" "}
              <span className="text-primary">{t("hero.title2")}</span>
            </h1>

            <p className="mb-6 max-w-md text-base text-muted-foreground font-body">
              {t("hero.description")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                {t("hero.cta1")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href="tel:+17868169197"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
              >
                <Phone className="h-4 w-4" />
                786-816-9197
              </a>
            </div>

            {/* Service tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Driveways", "Patios", "Stamped", "Pergolas"].map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Carousel */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Concrete work ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              
              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-all hover:bg-background"
              >
                <ChevronLeft className="h-5 w-5 text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-all hover:bg-background"
              >
                <ChevronRight className="h-5 w-5 text-foreground" />
              </button>
            </div>

            {/* Indicators */}
            <div className="mt-4 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentImage ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
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
