import { useEffect, useState } from "react";

/**
 * Cinematic intro animation shown every time the site loads.
 * Two blue elephants walk in with trunk lift, a diamond descends between them,
 * and the wordmark fades in. The background is heavily blurred underneath.
 */
export function LogoIntro() {
  const [mounted, setMounted] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Lock scroll during intro
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const fadeT = window.setTimeout(() => setFadingOut(true), 4200);
    const doneT = window.setTimeout(() => setMounted(false), 5000);
    return () => {
      window.clearTimeout(fadeT);
      window.clearTimeout(doneT);
      document.body.style.overflow = prev;
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-[800ms] ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Blurred backdrop over the site */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(28px) saturate(1.05)",
          WebkitBackdropFilter: "blur(28px) saturate(1.05)",
          background:
            "radial-gradient(ellipse at center, rgba(250,246,238,0.72) 0%, rgba(238,229,214,0.86) 60%, rgba(220,207,186,0.92) 100%)",
        }}
      />

      {/* Subtle Indian mandala ring behind logo */}
      <svg
        className="absolute animate-[intro-spin_20s_linear_infinite] opacity-[0.18]"
        width="640"
        height="640"
        viewBox="0 0 200 200"
      >
        <defs>
          <pattern id="mandalaDots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.7" fill="#8a6d2f" />
          </pattern>
        </defs>
        <circle cx="100" cy="100" r="90" fill="none" stroke="#8a6d2f" strokeWidth="0.4" />
        <circle cx="100" cy="100" r="76" fill="none" stroke="#8a6d2f" strokeWidth="0.3" strokeDasharray="1 3" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#8a6d2f" strokeWidth="0.4" />
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 24;
          const x1 = 100 + Math.cos(a) * 60;
          const y1 = 100 + Math.sin(a) * 60;
          const x2 = 100 + Math.cos(a) * 90;
          const y2 = 100 + Math.sin(a) * 90;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8a6d2f" strokeWidth="0.3" />;
        })}
      </svg>

      {/* Composition */}
      <div className="relative flex flex-col items-center gap-6 px-6">
        <div className="relative flex items-end justify-center" style={{ width: "min(90vw, 560px)", height: "220px" }}>
          {/* Left Elephant */}
          <Elephant
            side="left"
            className="animate-[eleph-in-left_1.2s_cubic-bezier(.2,.7,.2,1)_.2s_both]"
          />
          {/* Right Elephant */}
          <Elephant
            side="right"
            className="animate-[eleph-in-right_1.2s_cubic-bezier(.2,.7,.2,1)_.2s_both]"
          />

          {/* Diamond drops between them */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 opacity-0 animate-[diamond-drop_1s_cubic-bezier(.2,.7,.2,1)_1.6s_forwards]">
            <Diamond />
          </div>
        </div>

        {/* Wordmark */}
        <div className="mt-2 flex flex-col items-center opacity-0 animate-[word-in_1s_ease-out_2.6s_forwards]">
          <div className="h-px w-14 bg-[#8a6d2f]/60" />
          <div
            className="mt-4 font-display tracking-[0.02em] text-[#0f2a5c]"
            style={{ fontSize: "clamp(28px, 4.6vw, 52px)", fontFamily: "Cormorant Garamond, serif", fontWeight: 500 }}
          >
            Ratnanjali Group
          </div>
          <div
            className="mt-1 text-[10px] uppercase text-[#8a6d2f]"
            style={{ letterSpacing: "0.42em" }}
          >
            Est · MMVII · Ahmedabad
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes eleph-in-left {
          0% { transform: translateX(-140px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes eleph-in-right {
          0% { transform: translateX(140px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes trunk-lift {
          0%   { transform: rotate(0deg); }
          40%  { transform: rotate(-18deg); }
          70%  { transform: rotate(-24deg); }
          100% { transform: rotate(-22deg); }
        }
        @keyframes trunk-lift-r {
          0%   { transform: scaleX(-1) rotate(0deg); }
          40%  { transform: scaleX(-1) rotate(-18deg); }
          70%  { transform: scaleX(-1) rotate(-24deg); }
          100% { transform: scaleX(-1) rotate(-22deg); }
        }
        @keyframes diamond-drop {
          0%   { opacity: 0; transform: translate(-50%, -60px) scale(.4) rotate(-30deg); }
          70%  { opacity: 1; transform: translate(-50%, 6px)   scale(1.05) rotate(4deg); }
          100% { opacity: 1; transform: translate(-50%, 0)    scale(1) rotate(0deg); }
        }
        @keyframes diamond-shine {
          0%,100% { filter: drop-shadow(0 0 0 rgba(255,215,120,0)); }
          50%     { filter: drop-shadow(0 0 12px rgba(255,215,120,.7)); }
        }
        @keyframes word-in {
          0%   { opacity: 0; transform: translateY(10px); letter-spacing: 0.12em; }
          100% { opacity: 1; transform: translateY(0);    letter-spacing: 0.02em; }
        }
        @keyframes intro-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function Diamond() {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 100 100"
      className="animate-[diamond-shine_2.4s_ease-in-out_2s_infinite]"
    >
      <defs>
        <linearGradient id="dGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3f6cc7" />
          <stop offset="0.5" stopColor="#1e4788" />
          <stop offset="1" stopColor="#0f2a5c" />
        </linearGradient>
        <linearGradient id="dHi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eaf1ff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#eaf1ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Top facets */}
      <polygon points="50,6 22,34 50,42 78,34" fill="url(#dHi)" stroke="#0f2a5c" strokeWidth="1.2" />
      {/* Main body */}
      <polygon points="22,34 50,42 78,34 50,94" fill="url(#dGrad)" stroke="#0f2a5c" strokeWidth="1.2" />
      {/* Inner facets */}
      <line x1="50" y1="42" x2="50" y2="94" stroke="#0f2a5c" strokeWidth="0.8" opacity="0.6" />
      <line x1="22" y1="34" x2="50" y2="94" stroke="#0f2a5c" strokeWidth="0.5" opacity="0.4" />
      <line x1="78" y1="34" x2="50" y2="94" stroke="#0f2a5c" strokeWidth="0.5" opacity="0.4" />
      <line x1="22" y1="34" x2="78" y2="34" stroke="#0f2a5c" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}

interface ElephantProps {
  side: "left" | "right";
  className?: string;
}

function Elephant({ side, className }: ElephantProps) {
  const flip = side === "right";
  // Elephant faces to the right by default; flip horizontally for right-side elephant so both face inward.
  return (
    <div
      className={`absolute bottom-0 ${side === "left" ? "left-0" : "right-0"} ${className ?? ""}`}
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
        transformOrigin: "bottom center",
        width: "200px",
        height: "200px",
      }}
    >
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <linearGradient id={`eleGrad-${side}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3f6cc7" />
            <stop offset="1" stopColor="#122f6e" />
          </linearGradient>
        </defs>

        {/* Body */}
        <ellipse cx="90" cy="120" rx="60" ry="38" fill={`url(#eleGrad-${side})`} />
        {/* Back hump */}
        <path d="M40 105 Q70 70 100 90 L100 115 Z" fill={`url(#eleGrad-${side})`} />
        {/* Tail */}
        <path d="M30 110 Q20 118 24 132" stroke="#122f6e" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Legs */}
        <rect x="55" y="145" width="16" height="34" rx="4" fill="#122f6e" />
        <rect x="80" y="148" width="16" height="31" rx="4" fill="#0e2557" />
        <rect x="112" y="148" width="16" height="31" rx="4" fill="#122f6e" />
        <rect x="132" y="145" width="16" height="34" rx="4" fill="#0e2557" />

        {/* Head */}
        <circle cx="140" cy="98" r="34" fill={`url(#eleGrad-${side})`} />
        {/* Ear */}
        <path
          d="M118 82 Q96 78 96 106 Q108 118 128 112 Z"
          fill="#1e4788"
          stroke="#0e2557"
          strokeWidth="1"
        />
        {/* Eye */}
        <circle cx="148" cy="94" r="2.4" fill="#f5efdc" />
        <circle cx="148.6" cy="94.4" r="1.1" fill="#0e2557" />

        {/* Tusk hint */}
        <path d="M156 116 Q162 122 158 128" stroke="#f5efdc" strokeWidth="2.4" fill="none" strokeLinecap="round" />

        {/* Trunk — anchored at (156, 112), lifts up */}
        <g
          style={{
            transformOrigin: "156px 112px",
            animation: "trunk-lift 1.4s cubic-bezier(.2,.7,.2,1) 1.1s forwards",
          }}
        >
          <path
            d="M156 112 Q176 130 172 152 Q168 172 152 174"
            stroke="#122f6e"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
          />
          {/* Trunk highlight */}
          <path
            d="M160 118 Q174 134 170 152"
            stroke="#3f6cc7"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.55"
          />
        </g>
      </svg>
    </div>
  );
}
