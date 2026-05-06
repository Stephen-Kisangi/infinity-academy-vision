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
