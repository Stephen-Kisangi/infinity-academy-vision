import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SCHOOL, waLink } from "@/lib/school";

export function Footer() {
  const wa = waLink(`Hello ${SCHOOL.name}! I'd like to know more about admissions.`);
  return (
    <footer className="bg-primary text-white/90 mt-0">
      <div className="container-page pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Logo className="h-14 w-14" />
              <div>
                <div className="font-display font-bold text-lg text-white">Infinity View</div>
                <div className="text-xs tracking-widest uppercase text-brand-gold">Academy</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/80 max-w-sm">
              {SCHOOL.tagline}
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-gold tracking-wide italic">
              "{SCHOOL.motto}"
            </p>
          </div>

          <div>
            <h4 className="text-white font-display text-base mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/about", "About Us"],
                ["/headteacher", "Headteacher"],
                ["/programs", "Programs & Fees"],
                ["/admissions", "Admissions"],
                ["/life", "School Life"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/75 hover:text-brand-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-base mb-5">Reach Us</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>{SCHOOL.address.line1}</li>
              <li>{SCHOOL.address.line2}</li>
              <li>{SCHOOL.address.line3}</li>
              <li>
                <a href={`tel:${SCHOOL.phonePrimaryTel}`} className="hover:text-brand-gold transition-colors">
                  {SCHOOL.phonePrimary}
                </a>
              </li>
              <li>
                <a href={`mailto:${SCHOOL.email}`} className="hover:text-brand-gold transition-colors break-all">
                  {SCHOOL.email}
                </a>
              </li>
              <li className="text-white/60 text-xs pt-1">{SCHOOL.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-base mb-5">Admissions Open</h4>
            <p className="text-sm text-white/80 mb-4">
              Chat with our admissions team on WhatsApp — quick responses during school hours.
            </p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
              Chat on WhatsApp
            </a>
            <Link to="/admissions" className="btn-orange w-full mt-3">Enroll Today</Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.</p>
          <p className="text-brand-gold italic">{SCHOOL.motto}</p>
        </div>
      </div>
    </footer>
  );
}
