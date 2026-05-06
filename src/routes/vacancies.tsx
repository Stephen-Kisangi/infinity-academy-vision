import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SCHOOL, VACANCIES, waLink } from "@/lib/school";
import academics from "@/assets/academics.jpg";

export const Route = createFileRoute("/vacancies")({
  head: () => ({
    meta: [
      { title: "Careers & Vacancies — Infinity View Academy" },
      { name: "description", content: "Join the Infinity View Academy team. Current teaching, coaching and operations vacancies in Ruai, Nairobi." },
      { property: "og:title", content: "Careers at Infinity View Academy" },
      { property: "og:description", content: "We're growing — come build the future with us." },
    ],
  }),
  component: VacanciesPage,
});

function VacanciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a future with us."
        subtitle="We are growing — and we are looking for warm, qualified and passionate people to walk this journey with our learners."
        image={academics}
      />

      <section className="section">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <span className="eyebrow">Why Join Us</span>
              <h2 className="mt-4 text-3xl md:text-4xl">A workplace that values you.</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                At Infinity View we believe great teaching starts with great teachers — well supported,
                continuously developed and genuinely valued.
              </p>
              <ul className="mt-6 space-y-3 text-foreground/85">
                {[
                  "CBC-aligned teaching environment",
                  "Continuous professional development",
                  "Modern classrooms & learning resources",
                  "Supportive, collaborative team culture",
                  "Competitive remuneration package",
                ].map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-1 inline-block w-2 h-2 rounded-full bg-brand-orange" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-5">
              {VACANCIES.map((v) => {
                const wa = waLink(
                  `Hello ${SCHOOL.name}! I'd like to apply for the position of ${v.title}.`,
                );
                return (
                  <article key={v.title} className="feature-card">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-[10px] uppercase tracking-widest font-bold text-white bg-brand-green-deep px-2.5 py-1 rounded-full">
                            {v.type}
                          </span>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-orange">
                            {v.location}
                          </span>
                        </div>
                        <h3 className="text-2xl">{v.title}</h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed max-w-xl">{v.summary}</p>
                      </div>
                      <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-orange whitespace-nowrap">
                        Apply via WhatsApp
                      </a>
                    </div>
                  </article>
                );
              })}

              <div className="feature-card bg-brand-green-deep border-brand-green-deep text-white mt-8">
                <h3 className="text-2xl !text-white">Don't see your role?</h3>
                <p className="mt-2 text-white/85 leading-relaxed">
                  We're always open to meeting talented educators and support staff. Send your CV to{" "}
                  <a href={`mailto:${SCHOOL.email}`} className="text-brand-gold underline">
                    {SCHOOL.email}
                  </a>{" "}
                  with the role you're interested in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}