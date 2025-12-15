import { useMemo } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import project1 from "@/assets/portfolio/project-1.jpg";
import project2 from "@/assets/portfolio/project-2.jpg";
import project3 from "@/assets/portfolio/project-3.jpg";
import project4 from "@/assets/portfolio/project-4.jpg";
import project5 from "@/assets/portfolio/project-5.jpg";
import project6 from "@/assets/portfolio/project-6.jpg";
import project7 from "@/assets/portfolio/project-7.jpg";
import project8 from "@/assets/portfolio/project-8.jpg";
import project9 from "@/assets/portfolio/project-9.jpg";
import project10 from "@/assets/portfolio/project-10.jpg";
import project11 from "@/assets/portfolio/project-11.jpg";
import project12 from "@/assets/portfolio/project-12.jpg";
import project13 from "@/assets/portfolio/project-13.jpg";
import project14 from "@/assets/portfolio/project-14.jpg";
import project15 from "@/assets/portfolio/project-15.jpg";
import project16 from "@/assets/portfolio/project-16.jpg";

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const allProjects = [
    project12, project3, project15, project7, project1, project10, project5, project14, project9, project2, project16, project6, project11, project4, project8, project13
  ];

  // Shuffle images once on mount
  const shuffledProjects = useMemo(() => {
    const shuffled = [...allProjects];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  return (
    <section 
      ref={ref}
      id="portfolio" 
      className={`relative border-t border-foreground/5 bg-background py-16 sm:py-20 lg:py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute top-[-4rem] right-[10%] h-40 w-40 rounded-full bg-primary/14 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-[0.7rem] tracking-[0.32em] text-foreground/50 uppercase">{t("portfolio.label")}</p>
          <h2 className="text-3xl font-light leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("portfolio.title1")}
            <br />
            <span className="font-semibold text-primary">{t("portfolio.title2")}</span>
          </h2>
          <p className="mt-4 text-sm text-foreground/65 sm:text-base">
            {t("portfolio.description")}
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {shuffledProjects.map((image, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-primary/60">
                  <div className="overflow-hidden">
                    <img
                      src={image}
                      alt={`Project ${index + 1}`}
                      className="h-64 w-full object-cover sm:h-72 transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2 border-foreground/20 bg-background/80 backdrop-blur-sm hover:bg-background hover:border-primary" />
          <CarouselNext className="right-0 translate-x-1/2 border-foreground/20 bg-background/80 backdrop-blur-sm hover:bg-background hover:border-primary" />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
