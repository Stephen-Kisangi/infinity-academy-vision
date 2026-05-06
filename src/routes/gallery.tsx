import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import campus from "@/assets/campus.jpg";
import academics from "@/assets/academics.jpg";
import graduation from "@/assets/graduation.jpg";
import bus from "@/assets/bus.jpg";
import swimming from "@/assets/swimming.jpg";
import music from "@/assets/music.jpg";
import sports from "@/assets/sports.jpg";
import art from "@/assets/art.jpg";
import about from "@/assets/about.jpg";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";
import g5 from "@/assets/gallery5.jpg";
import g6 from "@/assets/gallery6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Infinity View Academy" },
      { name: "description", content: "Photos and moments from life at Infinity View Academy — classrooms, playground, graduation, sports and more." },
      { property: "og:title", content: "Gallery — Infinity View Academy" },
      { property: "og:description", content: "A visual walk through life at Infinity View Academy." },
    ],
  }),
  component: GalleryPage,
});

const categories = [
  { id: "campus", label: "Campus" },
  { id: "classroom", label: "Classroom" },
  { id: "play", label: "Play & Sports" },
  { id: "events", label: "Events" },
] as const;

type Cat = (typeof categories)[number]["id"];

const photos: { src: string; alt: string; cat: Cat; span?: string }[] = [
  { src: g1, alt: "Children eager to answer in CBC class", cat: "classroom", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Pre-school children playing on bright playground", cat: "play" },
  { src: graduation, alt: "PP2 graduation ceremony 2025", cat: "events", span: "md:col-span-2" },
  { src: g5, alt: "Hands-on science experiment in class", cat: "classroom" },
  { src: campus, alt: "Colourful Infinity View campus building", cat: "campus" },
  { src: swimming, alt: "Swimming lesson at school pool", cat: "play" },
  { src: g3, alt: "Children enjoying nutritious school lunch", cat: "campus" },
  { src: music, alt: "Children in music class", cat: "events" },
  { src: g4, alt: "Two learners reading in the library", cat: "classroom" },
  { src: sports, alt: "Children playing football on the field", cat: "play" },
  { src: g6, alt: "Stage performance during school assembly", cat: "events", span: "md:col-span-2" },
  { src: bus, alt: "Infinity View school bus", cat: "campus" },
  { src: art, alt: "Art and craft session", cat: "classroom" },
  { src: about, alt: "Teacher reading with learners", cat: "classroom" },
  { src: academics, alt: "Hands-on learning materials", cat: "classroom" },
];

import { useState } from "react";

function GalleryPage() {
  const [active, setActive] = useState<Cat | "all">("all");
  const filtered = active === "all" ? photos : photos.filter((p) => p.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from our growing family."
        subtitle="From the classroom to the playground, from graduations to gala days — every photo tells a story of childhood lived well."
        image={g6}
      />

      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setActive("all")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === "all"
                  ? "bg-primary text-white shadow-md"
                  : "bg-secondary text-foreground/70 hover:text-primary"
              }`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === c.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-secondary text-foreground/70 hover:text-primary"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {filtered.map((p) => (
              <figure
                key={p.alt}
                className={`group relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 ${p.span ?? ""}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/85 via-brand-green-deep/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <figcaption className="absolute bottom-3 left-4 right-4 text-white text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {p.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-card">
        <div className="container-page text-center max-w-2xl mx-auto">
          <span className="eyebrow">Come See For Yourself</span>
          <h2 className="mt-4 text-3xl md:text-5xl">Pictures speak — a visit speaks louder.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Book a school tour and experience the warmth, structure and joy of Infinity View Academy in person.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary-custom">Book a Tour</Link>
            <Link to="/admissions" className="btn-orange">Apply Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}