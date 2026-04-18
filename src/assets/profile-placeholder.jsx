// This is a styled SVG avatar placeholder for Mohammad Faisal
// Replace profile.jpg with the actual photo to use the real image

export default function ProfilePlaceholder({ size = 352 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 352 352"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: '50%' }}
    >
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1a0a3e" />
          <stop offset="100%" stopColor="#0a0a1f" />
        </radialGradient>
        <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c8956c" />
          <stop offset="100%" stopColor="#b07850" />
        </linearGradient>
        <linearGradient id="suit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a2744" />
          <stop offset="100%" stopColor="#0d1a2e" />
        </linearGradient>
        <linearGradient id="shirt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0ece4" />
          <stop offset="100%" stopColor="#e0dbd0" />
        </linearGradient>
        <linearGradient id="hair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1008" />
          <stop offset="100%" stopColor="#0d0804" />
        </linearGradient>
        <clipPath id="circle">
          <circle cx="176" cy="176" r="176" />
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx="176" cy="176" r="176" fill="url(#bg)" />

      <g clipPath="url(#circle)">
        {/* Suit body */}
        <ellipse cx="176" cy="310" rx="130" ry="80" fill="url(#suit)" />
        <ellipse cx="176" cy="290" rx="110" ry="70" fill="url(#suit)" />

        {/* Shirt */}
        <ellipse cx="176" cy="295" rx="55" ry="65" fill="url(#shirt)" />

        {/* Suit lapels */}
        <path d="M176 240 L130 280 L150 320 L176 300 Z" fill="#1e2f52" />
        <path d="M176 240 L222 280 L202 320 L176 300 Z" fill="#1e2f52" />

        {/* Neck */}
        <ellipse cx="176" cy="235" rx="22" ry="18" fill="url(#skin)" />

        {/* Head */}
        <ellipse cx="176" cy="175" rx="68" ry="75" fill="url(#skin)" />

        {/* Hair */}
        <ellipse cx="176" cy="118" rx="68" ry="38" fill="url(#hair)" />
        <path d="M108 140 Q108 100 176 100 Q244 100 244 140 L244 130 Q244 90 176 88 Q108 90 108 130 Z" fill="url(#hair)" />

        {/* Beard / stubble */}
        <ellipse cx="176" cy="222" rx="32" ry="14" fill="#8b6040" opacity="0.5" />
        <ellipse cx="176" cy="215" rx="18" ry="8" fill="#6b4830" opacity="0.4" />

        {/* Eyes */}
        <ellipse cx="152" cy="172" rx="12" ry="9" fill="#fff" />
        <ellipse cx="200" cy="172" rx="12" ry="9" fill="#fff" />
        <circle cx="153" cy="173" r="6" fill="#2a1a0a" />
        <circle cx="201" cy="173" r="6" fill="#2a1a0a" />
        <circle cx="155" cy="171" r="2" fill="#fff" opacity="0.8" />
        <circle cx="203" cy="171" r="2" fill="#fff" opacity="0.8" />

        {/* Glasses frames */}
        <rect x="138" y="163" width="28" height="20" rx="5" fill="none" stroke="#1a1a2e" strokeWidth="3" />
        <rect x="186" y="163" width="28" height="20" rx="5" fill="none" stroke="#1a1a2e" strokeWidth="3" />
        <line x1="166" y1="173" x2="186" y2="173" stroke="#1a1a2e" strokeWidth="2.5" />
        <line x1="110" y1="170" x2="138" y2="170" stroke="#1a1a2e" strokeWidth="2.5" />
        <line x1="214" y1="170" x2="242" y2="170" stroke="#1a1a2e" strokeWidth="2.5" />

        {/* Nose */}
        <ellipse cx="176" cy="193" rx="8" ry="6" fill="#a07050" opacity="0.4" />

        {/* Smile */}
        <path d="M158 210 Q176 224 194 210" stroke="#8b5030" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Ears */}
        <ellipse cx="108" cy="175" rx="10" ry="14" fill="url(#skin)" />
        <ellipse cx="244" cy="175" rx="10" ry="14" fill="url(#skin)" />
      </g>
    </svg>
  )
}
