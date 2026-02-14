export default function SaidiLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SAIDI Canada logo"
    >
      <defs>
        <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a5632" />
          <stop offset="50%" stopColor="#2d7a4a" />
          <stop offset="100%" stopColor="#87a96b" />
        </linearGradient>
        <linearGradient id="infinityGradAlt" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87a96b" />
          <stop offset="50%" stopColor="#2d7a4a" />
          <stop offset="100%" stopColor="#1a5632" />
        </linearGradient>
      </defs>
      {/* Left loop */}
      <path
        d="M60 30
           C60 16 50 6 38 6
           C26 6 16 16 16 30
           C16 44 26 54 38 54
           C50 54 60 44 60 30Z"
        stroke="url(#infinityGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right loop */}
      <path
        d="M60 30
           C60 44 70 54 82 54
           C94 54 104 44 104 30
           C104 16 94 6 82 6
           C70 6 60 16 60 30Z"
        stroke="url(#infinityGradAlt)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Small leaf accent at the center crossing */}
      <path
        d="M56 26 C58 20 64 18 68 22 C64 22 60 24 58 28Z"
        fill="#2d7a4a"
        opacity="0.8"
      />
    </svg>
  );
}
