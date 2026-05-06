import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import academicsImg from "@/assets/academics.jpg";
import campusImg from "@/assets/campus.jpg";
import busImg from "@/assets/bus.jpg";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";
import g5 from "@/assets/gallery5.jpg";
import g6 from "@/assets/gallery6.jpg";
import director from "@/assets/director.jpg";
import headteacherImg from "@/assets/headteacher.jpg";
import deputy from "@/assets/deputy.jpg";
import admin from "@/assets/admin.jpg";
import { Logo } from "@/components/Logo";
import { SCHOOL, waLink, LEADERSHIP } from "@/lib/school";

const leaderImages: Record<string, string> = { director, headteacher: headteacherImg, deputy, admin };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Infinity View Academy — Learning Today, Leading Tomorrow" },
      { name: "description", content: "A modern CBC-based school in Ruai, Nairobi nurturing learners from Playgroup to Grade 4 in a safe, value-driven environment." },
      { property: "og:title", content: "Infinity View Academy" },
      { property: "og:description", content: "Learning Today, Leading Tomorrow." },
    ],
  }),
  component: Home,
});

const stats = [
  { v: "17+", l: "Happy Learners" },
  { v: "1:8", l: "Teacher–Learner Ratio" },
  { v: "5", l: "Co-Curricular Pathways" },
  { v: "100%", l: "CBC Aligned" },
];

const features = [
  { icon: "📘", title: "CBC Curriculum", desc: "Kenya's Competency-Based Curriculum delivered through play, inquiry and real-world skills." },
  { icon: "❤️", title: "Safe & Child-Friendly", desc: "Clean, hygienic facilities and a warm, supportive community for every learner." },
  { icon: "👩🏽‍🏫", title: "Qualified Teachers", desc: "Caring, trained educators who give individual attention to every child." },
  { icon: "💡", title: "Life Skills Development", desc: "Beyond academics — confidence, character and creativity that last a lifetime." },
  { icon: "🚌", title: "Transport Available", desc: "A trusted, child-friendly school bus service across Infinity, Ruai and Mwihoko." },
  { icon: "🌟", title: "Modern Facilities", desc: "Bright, spacious classrooms designed to inspire learning and exploration." },
];

const programs = [
  { img: aboutImg, title: "Pre-School", years: "Playgroup · PP1 · PP2", desc: "Play-based discovery, foundational literacy and numeracy in a warm environment." },
  { img: academicsImg, title: "Lower Primary", years: "Grade 1 – Grade 4", desc: "Building strong CBC fundamentals through guided inquiry and creative exploration." },
  { img: campusImg, title: "Co-Curricular", years: "Beyond the Classroom", desc: "Swimming, Music, Art & Craft, Sports — every child finds their spark." },
];

function Home() {
  const wa = waLink(`Hello ${SCHOOL.name}! I'd like to inquire about admissions for my child.`);
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-page relative text-white py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 fade-up">
              <Logo className="h-14 w-14 drop-shadow-xl" />
              <span className="eyebrow !text-brand-gold">Admissions Open · 2025 / 2026</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl !text-white leading-[1.05] fade-up fade-up-delay-1">
              Learning Today.<br />
              <span className="text-brand-gold italic">Leading Tomorrow.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed fade-up fade-up-delay-2">
              A modern CBC-based institution in Ruai, Nairobi — preparing learners for a bright future
              in a safe, value-driven and child-friendly environment.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 fade-up fade-up-delay-3">
              <Link to="/admissions" className="btn-orange">Enroll Today</Link>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</a>
              <Link to="/about" className="btn-outline-light">Discover More</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.3em] uppercase">
          Scroll
        </div>
      </section>

      {/* MOTTO BANNER */}
      <section className="bg-gradient-to-r from-brand-orange via-brand-red to-brand-orange text-white">
        <div className="container-page py-4 text-center text-sm md:text-base font-semibold tracking-wide">
          🎓 Admissions Open — Give your child a head start in a nurturing environment where learning is fun and meaningful.
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl md:text-5xl gradient-text">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Children reading at Infinity View Academy"
              loading="lazy"
              width={1280}
              height={1280}
              className="rounded-3xl shadow-[var(--shadow-elegant)] w-full object-cover aspect-[4/5]"
            />
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-brand-green-deep text-white p-6 rounded-2xl shadow-[var(--shadow-lift)] max-w-[260px]">
              <div className="font-display text-2xl !text-white">Our Vision</div>
              <div className="text-sm text-white/90 mt-2 italic">"{SCHOOL.vision}"</div>
            </div>
          </div>
          <div>
            <span className="eyebrow">About Our School</span>
            <h2 className="mt-4 text-3xl md:text-5xl">A modern CBC institution preparing learners for a <span className="gradient-text">bright future</span>.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Infinity View Academy opened its doors in January 2025 with one learner — and a vision rooted
              in love, respect and excellence. Today, we are a thriving community of families who believe
              every child deserves to be known, nurtured and challenged.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our world-class infrastructure, qualified teachers and warm community make Infinity View
              the home where childhood is celebrated and futures are built.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary-custom">Our Story</Link>
              <Link to="/headteacher" className="btn-outline-custom">Meet the Headteacher</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section bg-card">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Why Infinity View</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Six reasons families choose us.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-5 text-xl">{f.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Programs Offered</span>
              <h2 className="mt-4 text-3xl md:text-5xl">A learning journey that grows with your child.</h2>
            </div>
            <Link to="/programs" className="btn-outline-custom self-start md:self-end">View Programs & Fees</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((lv) => (
              <article
                key={lv.title}
                className="group bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[5/4] overflow-hidden">
                  <img src={lv.img} alt={lv.title} loading="lazy" width={1280} height={960}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="text-xs uppercase tracking-widest text-brand-orange font-semibold">{lv.years}</div>
                  <h3 className="mt-2 text-2xl">{lv.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{lv.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="section bg-primary text-white relative overflow-hidden">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="eyebrow !text-brand-gold">Safe Transport</span>
            <h2 className="mt-4 text-3xl md:text-5xl !text-white">A trusted, child-friendly school bus service.</h2>
            <p className="mt-6 text-white/85 leading-relaxed">
              Our school bus serves Infinity, Ruai and Mwihoko — bringing your child to school safely,
              on time, and back home with a smile. Every route is supervised and trusted by parents.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <div className="bg-white/10 backdrop-blur p-4 rounded-2xl text-center">
                <div className="text-xs text-white/70">Infinity</div>
                <div className="font-display text-xl text-brand-gold">3,500</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-2xl text-center">
                <div className="text-xs text-white/70">Ruai</div>
                <div className="font-display text-xl text-brand-gold">5,000</div>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-2xl text-center">
                <div className="text-xs text-white/70">Mwihoko</div>
                <div className="font-display text-xl text-brand-gold">5,500</div>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/60">Two-way transport per term, in KES.</p>
          </div>
          <div>
            <img src={busImg} alt="Infinity View Academy school bus" loading="lazy" width={1280} height={960}
              className="rounded-3xl object-cover w-full aspect-[4/3] shadow-[var(--shadow-lift)] border-4 border-white/20" />
          </div>
        </div>
      </section>

      {/* KIDS LIFE / GALLERY TEASER */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="eyebrow">Kids Life · Moments</span>
              <h2 className="mt-4 text-3xl md:text-5xl">A childhood worth <span className="gradient-text">remembering</span>.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every day at Infinity View is a chance to learn, laugh and grow — through play,
                discovery, friendship and celebration.
              </p>
            </div>
            <Link to="/gallery" className="btn-outline-custom self-start md:self-end">View Full Gallery</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            <figure className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)] group">
              <img src={g1} alt="Children eager to answer in class" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </figure>
            {[g2, g5, g3, g4, g6].map((src, i) => (
              <figure key={i} className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] group">
                <img src={src} alt="Infinity View kids life" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEASER */}
      <section className="section bg-card">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Our Leadership</span>
            <h2 className="mt-4 text-3xl md:text-5xl">The people behind the mission.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A dedicated team of educators and leaders walking alongside your child's journey.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((p) => (
              <div key={p.name} className="bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-lift)] transition-all duration-500 hover:-translate-y-2 group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={leaderImages[p.image]}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-brand-orange">{p.role}</div>
                  <div className="font-display text-lg text-primary mt-1">{p.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/leadership" className="btn-primary-custom">Meet the Full Team</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-brand-green via-brand-green-deep to-brand-purple text-white p-10 md:p-16 text-center shadow-[var(--shadow-lift)] relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-orange/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-gold/20 blur-3xl" />
            <div className="relative">
              <span className="eyebrow !text-brand-gold">Admissions Open · 2025 / 2026</span>
              <h2 className="mt-4 text-3xl md:text-5xl !text-white">Begin your child's Infinity View journey.</h2>
              <p className="mt-5 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Give your child a head start in a nurturing environment where learning is fun and meaningful.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link to="/admissions" className="btn-orange">Start Application</Link>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp {SCHOOL.phonePrimary}</a>
                <Link to="/contact" className="btn-outline-light">Visit the School</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
