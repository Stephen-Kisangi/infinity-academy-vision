import logo from "@/assets/logo.jpg";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Infinity View Academy crest"
      className={`${className} rounded-full object-contain bg-white p-0.5`}
      width={256}
      height={256}
    />
  );
}
