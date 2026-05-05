import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import headteacherImg from "@/assets/headteacher.jpg";
import graduationImg from "@/assets/graduation.jpg";

export const Route = createFileRoute("/headteacher")({
  head: () => ({
    meta: [
      { title: "Headteacher's Message — Infinity View Academy" },
      { name: "description", content: "A heartfelt message from Tr. Dorcas Kisangi, Headteacher of Infinity View Academy, delivered at the school's first graduation ceremony." },
      { property: "og:title", content: "Headteacher's Speech — Tr. Dorcas Kisangi" },
      { property: "og:description", content: "From one learner to seventeen — the inspiring story of Infinity View Academy's first year." },
      { property: "og:image", content: graduationImg },
    ],
  }),
  component: HeadteacherPage,
});

function HeadteacherPage() {
  return (
    <>
      <PageHero
        eyebrow="From the Headteacher"
        title="A message from Tr. Dorcas Kisangi."
        subtitle="Delivered at our very first Pre-School Graduation Ceremony — Saturday, 18th October 2025."
        image={graduationImg}
      />

      {/* PORTRAIT + INTRO */}
      <section className="section">
        <div className="container-page grid lg:grid-cols-[2fr_3fr] gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="relative">
              <img
                src={headteacherImg}
                alt="Tr. Dorcas Kisangi, Headteacher of Infinity View Academy"
                loading="lazy"
                width={1024}
                height={1280}
                className="rounded-3xl object-cover w-full aspect-[4/5] shadow-[var(--shadow-lift)]"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white px-6 py-4 rounded-2xl shadow-lg max-w-[220px]">
                <div className="text-xs uppercase tracking-widest text-white/80">Headteacher</div>
                <div className="font-display text-xl !text-white mt-1">Tr. Dorcas Kisangi</div>
              </div>
            </div>
            <div className="mt-10 p-6 rounded-2xl bg-brand-green-deep text-white">
              <div className="text-xs uppercase tracking-widest text-brand-gold">Our Vision</div>
              <p className="mt-3 italic text-white/90 leading-relaxed">
                "A community where all children feel loved, respected and encouraged to develop to their fullest potential."
              </p>
            </div>
          </div>

          <article className="prose-custom space-y-6 text-foreground/90 leading-relaxed text-lg">
            <span className="eyebrow">Graduation Speech · 2025</span>
            <h2 className="text-3xl md:text-4xl">Good morning, everyone!</h2>

            <p>
              Our esteemed Director, Mr. Mbugua, dear parents, teachers, our wonderful PP2 graduates, all
              our other learners, and our invited guests — good morning once again!
            </p>

            <p>
              What a beautiful day it is — a day filled with joy, pride, and celebration. Today we are
              gathered here to witness a milestone, not just for our lovely <strong>PP2 learners
              who are graduating today</strong>, but also for our young and growing institution —
              Infinity View Academy.
            </p>

            <div className="my-8 p-6 md:p-8 rounded-2xl bg-accent border-l-4 border-brand-orange">
              <p className="text-xl md:text-2xl font-display text-primary leading-snug">
                "When we opened our doors in January this year, we began a journey of hope and faith.
                We started with just <span className="text-brand-orange">one learner</span> — yes, one!"
              </p>
            </div>

            <p>
              But like a seed planted in fertile soil, that one learner became <strong>four</strong> by
              the end of the first term. By second term, the number grew to <strong>fourteen</strong>,
              and today, as we celebrate this special day, we are proud to say that we have
              <strong> seventeen wonderful learners</strong>, including <strong>four PP2 graduates</strong> who
              have reached this important milestone. Isn't that amazing?
            </p>

            <p>
              Dear parents and guests, this growth is clear evidence of what we stand for and the work being
              done within our classrooms. The progress and confidence of our learners truly speak for themselves.
            </p>

            <h3 className="text-2xl text-primary pt-4">A word of gratitude</h3>

            <p>
              This growth and success would not be possible without the dedication and support of our Director,
              <strong> Mr. Mbugua</strong>. Thank you, sir, for ensuring that our school infrastructure is
              world-class — from the classrooms to the playgrounds. You have made sure that our learners travel
              safely, enjoy delicious meals, and learn in an environment that is clean, safe, and inspiring.
            </p>

            <p>
              Our motto is <em className="text-brand-orange font-semibold">"Learning Today, Leading Tomorrow."</em>{" "}
              And our vision reminds us of our purpose: <em>"A community where all children feel loved,
              respected and encouraged to develop to their fullest potential."</em>
            </p>

            <p>These are not just words on paper — they guide everything we do each day.</p>

            <h3 className="text-2xl text-primary pt-4">To our parents and learners</h3>

            <p>
              To our dear parents — thank you for believing in us, for entrusting us with your precious
              little ones, and for walking this journey with us. Your support, encouragement, and trust mean
              the world to us.
            </p>

            <p>
              To our dear PP2 graduates, <strong>congratulations!</strong> You have worked hard, learned new
              songs, numbers, letters, and so much more. You have grown taller, wiser, and more confident.
              We are so proud of each one of you.
            </p>

            <p>
              And to our other learners — we see you, we celebrate you, and we are proud of you too. You
              are the next generation of leaders, and your day is coming soon! Keep learning, keep shining,
              and keep making us proud.
            </p>

            <p>
              As we celebrate today, let us also look forward with hope. The future is bright, and together,
              we will continue to build a strong foundation for learning and excellence.
            </p>

            <p className="text-xl font-display text-primary pt-2">
              Thank you, and may God bless you all.
            </p>

            <div className="pt-6 border-t border-border">
              <div className="font-display text-lg text-primary">Tr. Dorcas Kisangi</div>
              <div className="text-sm text-muted-foreground">Headteacher · Infinity View Academy · 2025</div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-card">
        <div className="container-page text-center max-w-2xl mx-auto">
          <span className="eyebrow">Join the Family</span>
          <h2 className="mt-4 text-3xl md:text-5xl">Be part of our growing story.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From one learner to seventeen — and growing. We'd love to walk this journey with your family too.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="btn-orange">Enroll Today</Link>
            <Link to="/contact" className="btn-outline-custom">Visit Our School</Link>
          </div>
        </div>
      </section>
    </>
  );
}
