import { SCHOOL, waLink } from "@/lib/school";

export function WhatsAppFloat() {
  const href = waLink(`Hello ${SCHOOL.name}! I'd like to make an inquiry about admissions.`);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${SCHOOL.name} on WhatsApp`}
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform flex items-center justify-center"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" fill="currentColor">
        <path d="M19.11 17.27c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.21 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM16.04 4C9.4 4 4.06 9.34 4.06 15.99c0 2.11.55 4.16 1.6 5.97L4 28l6.18-1.62a11.94 11.94 0 0 0 5.85 1.49h.01c6.64 0 11.98-5.34 11.98-11.99 0-3.21-1.25-6.22-3.51-8.49A11.93 11.93 0 0 0 16.04 4z"/>
      </svg>
    </a>
  );
}
