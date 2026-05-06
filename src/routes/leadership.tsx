import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { LEADERSHIP, SCHOOL, waLink } from "@/lib/school";
import director from "@/assets/director.jpg";
import headteacher from "@/assets/headteacher.jpg";
import deputy from "@/assets/deputy.jpg";
import admin from "@/assets/admin.jpg";
import campus from "@/assets/campus.jpg";

const imageMap: Record<string, string> = { director, headteacher, deputy, admin };
const accentMap: Record<string, string> = {
  "brand-green": "bg-brand-green",
  "brand-green-deep": "bg-brand-green-deep",
  "brand-orange": "bg-brand-orange",
  "brand-purple": "bg-brand-purple",
};

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership Team — Infinity View Academy" },
      { name: "description", content: "Meet the Director, Headteacher and leadership team behind Infinity View Academy." },
      { property: "og:title", content: "Leadership Team — Infinity View Academy" },
      { property: "og:description", content: "The people guiding Infinity View Academy with care, vision and excellence." },
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  const wa = waLink(`Hello ${SCHOOL.name}! I'd like to speak with the school leadership.`);
  return (
    <>
      <PageHero
        eyebrow="Our Leadership"
        title="People who lead with vision, warmth and excellence."
        subtitle="Behind every learner's progress is a dedicated team — guiding our school with care, structure and a shared belief in every child."
        image={campus}
      />

      <section className="section">
        <div className="container-page space-y-16">
          {LEADERSHIP.map((p, i) => (
            <article
              key={p.name}
              className={`grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-14 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={imageMap[p.image]}
                  alt={`${p.name}, ${p.role}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="rounded-3xl object-cover w-full aspect-[4/5] shadow-[var(--shadow-lift)]"
                />
                <div className={`absolute -bottom-5 left-6 right-6 ${accentMap[p.accent]} text-white px-5 py-3 rounded-2xl shadow-lg text-center`}>
                  <div className="text-[10px] uppercase tracking-widest text-white/85">{p.role}</div>
                  <div className="font-display text-lg !text-white">{p.name}</div>
                </div>
              </div>
              <div>
                <span className="eyebrow">{p.role}</span>
                <h2 className="mt-4 text-3xl md:text-4xl">{p.name}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{p.bio}</p>
                {p.image === "headteacher" && (
                  <Link to="/headteacher" className="btn-outline-custom mt-6">Read Graduation Speech</Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container-page text-center max-w-2xl mx-auto">
          <span className="eyebrow !text-brand-gold">Talk to Us</span>
          <h2 className="mt-4 text-3xl md:text-5xl !text-white">Speak with our leadership team.</h2>
          <p className="mt-5 text-white/85 leading-relaxed">
            Have a question about admissions, the curriculum or your child's needs? We'd love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</a>
            <Link to="/contact" className="btn-outline-light">Visit the School</Link>
          </div>
        </div>
      </section>
    </>
  );
}