import { MessageSquare, PenTool, Hammer, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: t("process.step1.title"),
      description: t("process.step1.description"),
    },
    {
      icon: PenTool,
      number: "02",
      title: t("process.step2.title"),
      description: t("process.step2.description"),
    },
    {
      icon: Hammer,
      number: "03",
      title: t("process.step3.title"),
      description: t("process.step3.description"),
    },
    {
      icon: CheckCircle,
      number: "04",
      title: t("process.step4.title"),
      description: t("process.step4.description"),
    },
  ];

  return (
    <section 
      ref={ref}
      id="process" 
      className={`relative border-t border-foreground/5 bg-background py-16 sm:py-20 lg:py-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[10%] top-[-3rem] h-36 w-36 rounded-full bg-primary/14 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-[0.7rem] tracking-[0.32em] text-foreground/50 uppercase">{t("process.label")}</p>
          <h2 className="text-3xl font-light leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("process.title1")} <span className="font-semibold text-primary">{t("process.title2")}</span>
          </h2>
          <p className="mt-4 text-sm text-foreground/65 sm:text-base">
            {t("process.description")}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-7 sm:space-y-8 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="relative flex flex-col gap-4 sm:gap-5 rounded-2xl border border-foreground/10 bg-card px-5 py-5 sm:px-6 sm:py-6 lg:items-start lg:justify-between lg:px-6 lg:py-7 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-sm"
            >
              <div className="flex items-start gap-4 lg:gap-3">
                <div className="relative mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-foreground/10 bg-background sm:h-12 sm:w-12">
                  <step.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.7rem] font-medium uppercase tracking-[0.26em] text-foreground/50">
                    {t("process.step")} {step.number}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-foreground sm:text-lg">{step.title}</h3>
                </div>
              </div>

              <p className="mt-3 text-sm text-foreground/70 sm:text-[0.95rem] lg:mt-4">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute right-[-1.3rem] top-1/2 hidden h-px w-8 translate-y-[-50%] bg-gradient-to-r from-foreground/20 to-transparent lg:block" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
