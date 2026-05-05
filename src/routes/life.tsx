import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import swimming from "@/assets/swimming.jpg";
import music from "@/assets/music.jpg";
import sports from "@/assets/sports.jpg";
import art from "@/assets/art.jpg";
import campus from "@/assets/campus.jpg";
import bus from "@/assets/bus.jpg";
import graduation from "@/assets/graduation.jpg";
import academics from "@/assets/academics.jpg";

export const Route = createFileRoute("/life")({
  head: () => ({
    meta: [
      { title: "School Life — Infinity View Academy" },
      { name: "description", content: "Swimming, Music, Art & Craft, Sports — beyond the classroom at Infinity View Academy." },
      { property: "og:title", content: "School Life at Infinity View" },
      { property: "og:description", content: "A vibrant world beyond the classroom." },
    ],
  }),
  component: LifePage,
});

const pillars = [
  { t: "Swimming", icon: "🏊", d: "Confidence in the water through age-appropriate, supervised lessons.", img: swimming },
  { t: "Music", icon: "🎵", d: "Singing, drums and recorder — every voice finds its rhythm.", img: music },
  { t: "Art & Craft", icon: "🎨", d: "Hands-on creativity that grows imagination and fine motor skills.", img: art },
  { t: "Sports", icon: "⚽", d: "Football, athletics and team games on our open field.", img: sports },
];

const gallery = [
  { src: campus, alt: "Colourful school building" },
  { src: academics, alt: "Hands-on classroom learning" },
  { src: graduation, alt: "PP2 Graduation Day" },
  { src: bus, alt: "School bus service" },
];

function LifePage() {
  return (
    <>
      <PageHero
        eyebrow="School Life"
        title="A vibrant world beyond the classroom."
        subtitle="From the pool to the field to the stage, our learners discover passions that shape who they become."
        image={campus}
      />

      <section className="section">
        <div className="container-page grid md:grid-cols-2 gap-8">
          {pillars.map((p) => (
            <article
              key={p.t}
              className="group relative rounded-3xl overflow-hidden aspect-[16/10] shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-lift)] transition-all duration-500"
            >
              <img
                src={p.img}
                alt={p.t}
                loading="lazy"
                width={1280}
                height={800}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/95 via-brand-green-deep/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-3xl">{p.icon}</div>
                <h3 className="mt-2 text-3xl !text-white">{p.t}</h3>
                <p className="mt-2 text-white/90 leading-relaxed max-w-md">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-card">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Moments</span>
            <h2 className="mt-4 text-3xl md:text-5xl">A glimpse into our community.</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g) => (
              <div key={g.alt} className="rounded-2xl overflow-hidden aspect-square shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 group">
                <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
