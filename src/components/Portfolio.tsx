import { useMemo } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";

import heroImage1 from "@/assets/concrete-hero-1.jpg";
import heroImage2 from "@/assets/concrete-hero-2.jpg";
import heroImage3 from "@/assets/concrete-hero-3.jpg";
import heroImage4 from "@/assets/concrete-hero-4.jpg";

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const projects = [
    { image: heroImage1, title: "Modern Driveway", category: "Driveway" },
    { image: heroImage2, title: "Pool Deck", category: "Pool Deck" },
    { image: heroImage3, title: "Stamped Patio", category: "Patio" },
    { image: heroImage4, title: "Walkway", category: "Walkway" },
  ];

  return (
    <section 
      ref={ref}
      id="portfolio" 
      className={`relative bg-foreground py-20 sm:py-28 lg:py-36 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-primary uppercase">{t("portfolio.label")}</p>
          <h2 className="text-4xl font-bold leading-tight text-background sm:text-5xl lg:text-6xl">
            {t("portfolio.title1")}
            <br />
            <span className="text-primary">{t("portfolio.title2")}</span>
          </h2>
          <p className="mt-6 text-lg text-background/70 font-body">
            {t("portfolio.description")}
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? "row-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 || index === 3 ? "h-[400px] sm:h-[500px]" : "h-[200px] sm:h-[240px]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-primary">{project.category}</span>
                <h3 className="text-lg font-bold text-background">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-background/10 pt-16 sm:grid-cols-4">
          {[
            { number: "15+", label: "Years Experience" },
            { number: "500+", label: "Projects Completed" },
            { number: "100%", label: "Satisfaction Rate" },
            { number: "Miami", label: "Based & Local" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary sm:text-5xl">{stat.number}</div>
              <div className="mt-2 text-sm text-background/60 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
