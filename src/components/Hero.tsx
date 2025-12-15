import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Phone, Award, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import heroImage1 from "@/assets/concrete-hero-1.jpg";
import heroImage2 from "@/assets/concrete-hero-2.jpg";
import heroImage3 from "@/assets/concrete-hero-3.jpg";
import heroImage4 from "@/assets/concrete-hero-4.jpg";

const Hero = () => {
  const { t } = useLanguage();
  const images = [heroImage1, heroImage2, heroImage3, heroImageImage4].filter(Boolean) as string[];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const services = ["Driveways", "Patios", "Stamped", "Pergolas"];

  return (
    <section id="home" className="bg-background pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: image band */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          {/* Image area */}
          <div className="relative h-[52vh] min-h-[420px] w-full">
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

            {/* Soft gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent" />

            {/* Floating mini header */}
            <div className="absolute left-6 top-6 right-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Standard Concrete Company</p>

              {/* Stats badges */}
              <div className="flex flex-wrap items-center gap-2">
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
            </div>

            {/* Carousel arrows */}
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-all hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 backdrop-blur-sm transition-all hover:bg-background"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentImage ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom: overlapping content row */}
          <div className="relative -mt-14 px-4 pb-6 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
              {/* Main content card */}
              <div className="rounded-2xl border border-border bg-background/95 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  {t("hero.title1")} <span className="text-primary">{t("hero.title2")}</span>
                </h1>

                <p className="mt-4 max-w-2xl text-base font-body text-muted-foreground">{t("hero.description")}</p>

                <div className="mt-6 flex flex-wrap gap-3">
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

                <div className="mt-6 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Side card: quick pitch / highlights */}
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <div className="space-y-4">
                  <div className="rounded-xl bg-secondary p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What we do</p>
                    <p className="mt-2 text-sm text-foreground">
                      Clean finishes, solid prep, and consistent timelines—built for Florida weather.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border p-4">
                      <p className="text-xs font-semibold text-muted-foreground">Fast Quotes</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">Same-day</p>
                    </div>
                    <div className="rounded-xl border border-border p-4">
                      <p className="text-xs font-semibold text-muted-foreground">Warranty</p>
                      <p className="mt-1 text-sm font-semibold text-foreground">Available</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-border p-4">
                    <p className="text-xs font-semibold text-muted-foreground">Service Area</p>
                    <p className="mt-1 text-sm text-foreground">{t("hero.location")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
