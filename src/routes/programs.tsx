import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import academicsImg from "@/assets/academics.jpg";
import { PROGRAMS, SCHOOL, waLink } from "@/lib/school";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Fees — Infinity View Academy" },
      { name: "description", content: "Explore our CBC programs from Playgroup to Grade 4 and view the 2025 school fee structure for Infinity View Academy." },
      { property: "og:title", content: "Programs & Fees — Infinity View" },
      { property: "og:description", content: "CBC programs from Playgroup to Grade 4 with transparent fees." },
    ],
  }),
  component: ProgramsPage,
});

const compulsory = [
  { item: "School Diary", price: "Ksh 350" },
  { item: "Assessment Rubric (annually)", price: "Ksh 500" },
];

const optional = [
  { item: "Stationery (annually)", price: "Ksh 3,000" },
  { item: "Tea (per term)", price: "Ksh 2,000" },
  { item: "Lunch (per term)", price: "Ksh 7,000" },
];

const transport = [
  { route: "Infinity", price: "Ksh 3,500" },
  { route: "Ruai", price: "Ksh 5,000" },
  { route: "Mwihoko", price: "Ksh 5,500" },
];

function ProgramsPage() {
  const wa = waLink("Hello! I'd like more information about your programs and fees.");
  return (
    <>
      <PageHero
        eyebrow="Programs & Fees"
        title="A CBC pathway from Playgroup to Grade 4."
        subtitle="Transparent fees, world-class facilities and a curriculum designed for the leaders of tomorrow."
        image={academicsImg}
      />

      {/* ADMISSIONS BANNER */}
      <section className="bg-brand-red text-white">
        <div className="container-page py-4 text-center text-sm md:text-base font-semibold">
          📢 Admission Fee (one-time): <span className="text-brand-gold">Ksh 1,500</span> · Interview Fee: <span className="text-brand-gold">Ksh 1,000</span>
        </div>
      </section>

      {/* TUITION TABLE */}
      <section className="section">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">2025 Tuition Fees</span>
            <h2 className="mt-4 text-3xl md:text-5xl">Per term, per learner.</h2>
          </div>

          <div className="mt-12 max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] border border-border bg-card">
            <div className="grid grid-cols-2 bg-brand-green-deep text-white px-6 py-4 font-semibold tracking-wide">
              <div>Class</div>
              <div className="text-right">Tuition (per term)</div>
            </div>
            {PROGRAMS.map((p, i) => (
              <div
                key={p.name}
                className={`grid grid-cols-2 px-6 py-4 ${i % 2 === 0 ? "bg-card" : "bg-secondary"} border-t border-border`}
              >
                <div className="font-semibold text-primary">{p.name}</div>
                <div className="text-right text-foreground/80 font-mono">{p.fee}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER FEES */}
      <section className="section bg-card">
        <div className="container-page grid md:grid-cols-3 gap-6">
          <FeeCard title="Compulsory Resources" items={compulsory} accent="green" />
          <FeeCard title="Optional Services" items={optional.map(o => ({ item: o.item, price: o.price }))} accent="orange" />
          <FeeCard title="Transport (two-way, per term)" items={transport.map(t => ({ item: t.route, price: t.price }))} accent="purple" />
        </div>
      </section>

      {/* PAYMENT */}
      <section className="section">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-brand-green via-brand-green-deep to-brand-purple text-white p-10 md:p-14 grid md:grid-cols-[2fr_1fr] gap-10 items-center shadow-[var(--shadow-lift)]">
            <div>
              <span className="eyebrow !text-brand-gold">Mode of Payment</span>
              <h2 className="mt-4 text-3xl md:text-4xl !text-white">Pay directly to the school account.</h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                All payments should be made directly to the school account. Once paid, school fees are
                non-refundable. For questions or to confirm payment, contact us via WhatsApp.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-xs text-white/70 uppercase tracking-widest">M-Pesa Paybill</div>
              <div className="font-display text-3xl text-brand-gold mt-1">{SCHOOL.payment.paybill}</div>
              <div className="mt-5 text-xs text-white/70 uppercase tracking-widest">Account Number</div>
              <div className="font-display text-2xl !text-white mt-1">{SCHOOL.payment.account}</div>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full mt-6">
                Confirm Payment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-card">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl">Ready to enroll?</h2>
          <p className="mt-4 text-muted-foreground">
            Speak with our admissions team or begin your application today.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="btn-orange">Start Admission</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}

function FeeCard({ title, items, accent }: { title: string; items: { item: string; price: string }[]; accent: "green" | "orange" | "purple" }) {
  const accentClass =
    accent === "green" ? "text-brand-green-deep" :
    accent === "orange" ? "text-brand-orange" :
    "text-brand-purple";
  return (
    <div className="feature-card">
      <h3 className={`text-xl ${accentClass}`}>{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it.item} className="flex items-center justify-between gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
            <span className="text-muted-foreground">{it.item}</span>
            <span className="font-semibold text-primary font-mono text-sm">{it.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
