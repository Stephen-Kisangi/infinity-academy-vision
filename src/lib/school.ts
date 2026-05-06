export const SCHOOL = {
  name: "Infinity View Academy",
  shortName: "Infinity View",
  motto: "Learning Today, Leading Tomorrow",
  tagline: "A modern CBC institution preparing learners for a bright future.",
  vision:
    "A community where all children feel loved, respected and encouraged to develop to their fullest potential.",
  mission:
    "To nurture confident, curious and caring learners through a CBC-aligned education that blends academic excellence, character formation and discovery — in a safe, joyful and inspiring environment.",
  phonePrimary: "+254 745 564 870",
  phonePrimaryTel: "+254745564870",
  whatsappNumber: "254745564870",
  email: "infinityviewacademy@gmail.com",
  address: {
    line1: "Ruai – Ruiru Bypass",
    line2: "Off Infinity Road, Opposite Infinity Industrial Park",
    line3: "Nairobi, Kenya",
  },
  hours: "Monday – Friday · 7:00am – 5:00pm",
  mapsEmbed:
    "https://www.google.com/maps?q=Ruai+Ruiru+Bypass+Nairobi&output=embed",
  payment: {
    paybill: "522533",
    account: "7948999",
  },
};

export function waLink(message: string, number: string = SCHOOL.whatsappNumber) {
  const trimmed = message.trim().slice(0, 1000);
  return `https://wa.me/${number}?text=${encodeURIComponent(trimmed)}`;
}

export const PROGRAMS = [
  { name: "Playgroup", fee: "Ksh 11,200" },
  { name: "PP1", fee: "Ksh 12,500" },
  { name: "PP2", fee: "Ksh 12,500" },
  { name: "Grade 1", fee: "Ksh 13,200" },
  { name: "Grade 2", fee: "Ksh 14,500" },
  { name: "Grade 3", fee: "Ksh 15,300" },
  { name: "Grade 4", fee: "Ksh 16,000" },
];

export const LEADERSHIP = [
  {
    name: "Mr. Mbugua",
    role: "Director & Founder",
    bio: "Visionary founder of Infinity View Academy. He has built an institution where world-class infrastructure, safe transport, nutritious meals and inspiring learning spaces meet — making sure every child thrives.",
    image: "director",
    accent: "brand-green-deep",
  },
  {
    name: "Tr. Dorcas Kisangi",
    role: "Headteacher",
    bio: "A passionate CBC educator who leads our academic team with warmth and rigour. Under her guidance the school grew from one learner to seventeen in its first year.",
    image: "headteacher",
    accent: "brand-orange",
  },
  {
    name: "Mrs. Wanjiru",
    role: "Deputy Headteacher · Academics",
    bio: "Oversees our CBC curriculum delivery, teacher development and learner assessments — making sure every child is known, supported and stretched.",
    image: "deputy",
    accent: "brand-purple",
  },
  {
    name: "Mr. Otieno",
    role: "Administrator · Operations & Welfare",
    bio: "Leads daily operations — transport, meals, safety and parent communication — keeping the school running smoothly so teachers can focus on teaching.",
    image: "admin",
    accent: "brand-green",
  },
] as const;

export const VACANCIES = [
  {
    title: "CBC Lower Primary Teacher",
    type: "Full-time",
    location: "Ruai, Nairobi",
    summary: "TSC-registered teacher with proven CBC experience to join our growing Grade 1–4 team.",
  },
  {
    title: "Pre-Primary Teacher (PP1 / PP2)",
    type: "Full-time",
    location: "Ruai, Nairobi",
    summary: "ECDE-trained, warm and creative educator passionate about play-based, child-centred learning.",
  },
  {
    title: "Swimming & PE Coach",
    type: "Part-time",
    location: "Ruai, Nairobi",
    summary: "Certified coach to lead age-appropriate swimming lessons and supervise sports activities.",
  },
  {
    title: "School Bus Driver",
    type: "Full-time",
    location: "Infinity / Ruai / Mwihoko routes",
    summary: "Experienced PSV driver with a clean record and genuine love for children's safety.",
  },
] as const;
