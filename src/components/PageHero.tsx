import type { ReactNode } from "react";

export function PageHero({
  eyebrow, title, subtitle, image, children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="container-page relative text-white">
        {eyebrow && <span className="eyebrow !text-brand-gold">{eyebrow}</span>}
        <h1 className="mt-4 text-4xl md:text-6xl !text-white max-w-3xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-white/90 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
