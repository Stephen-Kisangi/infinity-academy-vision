import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import aboutImg from "@/assets/about.jpg";
import campusImg from "@/assets/campus.jpg";
import { SCHOOL, LEADERSHIP } from "@/lib/school";
import director from "@/assets/director.jpg";
import headteacherImg from "@/assets/headteacher.jpg";
import deputy from "@/assets/deputy.jpg";
import admin from "@/assets/admin.jpg";

const imageMap: Record<string, string> = { director, headteacher: headteacherImg, deputy, admin };

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Infinity View Academy" },
      { name: "description", content: "Our story, vision, motto and the values shaping a new generation of learners at Infinity View Academy." },
      { property: "og:title", content: "About Infinity View Academy" },
      { property: "og:description", content: "Learning Today, Leading Tomorrow — discover the story, values and people behind Infinity View." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Love", d: "Every child is treasured, encouraged and seen for who they are." },
  { t: "Respect", d: "We honour each learner, family and team member with dignity." },
  { t: "Excellence", d: "We pursue the best in academics, character and community." },
  { t: "Curiosity", d: "Lessons start with questions — discovery drives learning." },
  { t: "Faith", d: "We started with one learner. We believe in the power of small beginnings." },
  { t: "Community", d: "Parents, teachers and learners — we grow stronger together." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Our School"
        title="A community where every child is loved, respected and championed."
        subtitle="Infinity View Academy is a modern CBC institution rooted in love, faith and the conviction that every child has limitless potential."
        image={campusImg}
      />

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={aboutImg}
            alt="Teacher and children reading at Infinity View Academy"
            loading="lazy"
            width={1280}
            height={1280}
            className="rounded-3xl object-cover w-full aspect-[4/5] shadow-[var(--shadow-elegant)]"
          />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl md:text-5xl">From <span className="gradient-text">one learner</span> to a thriving family.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              When Infinity View Academy opened its doors in January 2025, we began a journey of hope and faith.
              We started with just <strong className="text-primary">one learner</strong>. Like a seed in fertile
              soil, that one became four by the end of term one — fourteen by term two — and seventeen wonderful
              learners by our first graduation in October 2025, including four proud PP2 graduates.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              That growth is no accident. It is the fruit of a community where children are known by name,
              taught with care, and prepared for a bright future — guided by our motto:
              <em className="text-brand-orange font-semibold"> "Learning Today, Leading Tomorrow."</em>
            </p>
            <Link to="/headteacher" className="btn-primary-custom mt-8">Read the Headteacher's Speech</Link>
          </div>
        </div>
      </section>

      {/* MISSION/VISION/MOTTO */}
      <section className="section bg-card">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Mission, Vision & Motto.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
          <div className="feature-card">
            <span className="eyebrow">Our Vision</span>
            <p className="mt-4 text-lg leading-relaxed text-foreground italic">
              "{SCHOOL.vision}"
            </p>
          </div>
          <div className="feature-card bg-brand-green-deep border-brand-green-deep">
            <span className="eyebrow !text-brand-gold">Our Motto</span>
            <h3 className="mt-4 text-3xl !text-white">Learning Today, Leading Tomorrow.</h3>
            <p className="mt-3 text-white/80 text-sm">
              Not just words on paper — they guide everything we do each day.
            </p>
          </div>
          <div className="feature-card">
            <span className="eyebrow">Our Mission</span>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {SCHOOL.mission}
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Core Values</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Six values, lived every day.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.t} className="feature-card">
                <h3 className="text-xl">{v.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="section bg-primary text-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow !text-brand-gold">Our Leadership</span>
            <h2 className="mt-4 text-3xl md:text-5xl !text-white">Guided by people who care.</h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              A team of dedicated educators and administrators behind every learner's success.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((p) => (
              <div key={p.name} className="bg-white/5 backdrop-blur rounded-3xl overflow-hidden border border-white/10 hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1">
                <img
                  src={imageMap[p.image]}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="p-5 text-center">
                  <div className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{p.role}</div>
                  <div className="font-display text-lg !text-white mt-1">{p.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/leadership" className="btn-orange">Meet the Team</Link>
            <Link to="/headteacher" className="btn-outline-light">Headteacher's Speech</Link>
          </div>
        </div>
      </section>
    </>
  );
}
