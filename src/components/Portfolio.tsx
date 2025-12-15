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

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "Miami", label: "Based & Local" },
  ];

  return (
    <section 
      ref={ref}
      id="portfolio" 
      className={`bg-foreground py-16 sm:py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">{t("portfolio.label")}</p>
          <h2 className="text-2xl font-bold text-background sm:text-3xl">
            {t("portfolio.title1")} <span className="text-primary">{t("portfolio.title2")}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-background/70 font-body">
            {t("portfolio.description")}
          </p>
        </div>

        {/* Uniform Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <span className="block text-[10px] font-medium uppercase tracking-wider text-primary">{project.category}</span>
                <h3 className="text-sm font-semibold text-background">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-background/10 pt-12 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary sm:text-3xl">{stat.number}</div>
              <div className="mt-1 text-xs text-background/60 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
