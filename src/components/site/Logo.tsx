import logo from "@/assets/ratnanjali-logo.png.asset.json";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className = "h-12 w-auto", variant = "dark" }: LogoProps) {
  return (
    <img
      src={logo.url}
      alt="Ratnanjali Group"
      className={`${className} select-none ${variant === "light" ? "brightness-0 invert" : ""}`}
      draggable={false}
    />
  );
}
