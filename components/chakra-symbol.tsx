interface ChakraSymbolProps {
  chakra: {
    name: string
    sanskrit: string
    planet: string
    signs: string[]
    mantra: string
    color: string
    glowColor: string
    description: string
    symbol: string
  }
}

export function ChakraSymbol({ chakra }: ChakraSymbolProps) {
  return (
    <div className="group relative">
      {/* Glow effect background */}
      <div
        className={`absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
        style={{ backgroundColor: chakra.glowColor }}
      />

      {/* Main chakra circle */}
      <div
        className={`relative w-24 h-24 rounded-full flex items-center justify-center border-2 transition-all duration-500 group-hover:scale-110`}
        style={{
          backgroundColor: chakra.color + "20",
          borderColor: chakra.color,
          boxShadow: `0 0 20px ${chakra.glowColor}40`,
        }}
      >
        {/* Chakra symbol */}
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-white">
          {chakra.name === "Muladhara" && (
            // Root Chakra - 4-petaled lotus with square and inverted triangle
            <g>
              {/* 4 petals */}
              <path
                d="M20,8 Q12,12 8,20 Q12,28 20,32 Q28,28 32,20 Q28,12 20,8 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <path d="M20,10 L15,15 L20,20 L25,15 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20,20 L15,25 L20,30 L25,25 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10,20 L15,15 L20,20 L15,25 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M30,20 L25,15 L20,20 L25,25 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Square */}
              <rect x="14" y="14" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
              {/* Inverted triangle */}
              <polygon points="20,16 24,24 16,24" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </g>
          )}
          {chakra.name === "Swadisthana" && (
            // Sacral Chakra - 6-petaled lotus with crescent moon
            <g>
              {/* 6 petals */}
              <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <path
                  key={i}
                  d={`M20,20 L${20 + 12 * Math.cos((i * Math.PI) / 3)},${20 + 12 * Math.sin((i * Math.PI) / 3)} Q${20 + 8 * Math.cos(((i + 0.5) * Math.PI) / 3)},${20 + 8 * Math.sin(((i + 0.5) * Math.PI) / 3)} ${20 + 12 * Math.cos(((i + 1) * Math.PI) / 3)},${20 + 12 * Math.sin(((i + 1) * Math.PI) / 3)}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              ))}
              {/* Crescent moon */}
              <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M 16 20 A 4 4 0 0 1 24 20" fill="none" stroke="currentColor" strokeWidth="2" />
            </g>
          )}
          {chakra.name === "Manipura" && (
            // Solar Plexus - 10-petaled lotus with inverted triangle
            <g>
              {/* 10 petals */}
              <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <path
                  key={i}
                  d={`M20,20 L${20 + 12 * Math.cos((i * Math.PI) / 5)},${20 + 12 * Math.sin((i * Math.PI) / 5)} Q${20 + 8 * Math.cos(((i + 0.5) * Math.PI) / 5)},${20 + 8 * Math.sin(((i + 0.5) * Math.PI) / 5)} ${20 + 12 * Math.cos(((i + 1) * Math.PI) / 5)},${20 + 12 * Math.sin(((i + 1) * Math.PI) / 5)}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              ))}
              {/* Inverted triangle */}
              <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
              <polygon points="20,26 16,16 24,16" fill="none" stroke="currentColor" strokeWidth="2" />
            </g>
          )}
          {chakra.name === "Anahata" && (
            // Heart Chakra - 12-petaled lotus with two overlapping triangles (Star of David)
            <g>
              {/* 12 petals */}
              <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                <path
                  key={i}
                  d={`M20,20 L${20 + 12 * Math.cos((i * Math.PI) / 6)},${20 + 12 * Math.sin((i * Math.PI) / 6)} Q${20 + 8 * Math.cos(((i + 0.5) * Math.PI) / 6)},${20 + 8 * Math.sin(((i + 0.5) * Math.PI) / 6)} ${20 + 12 * Math.cos(((i + 1) * Math.PI) / 6)},${20 + 12 * Math.sin(((i + 1) * Math.PI) / 6)}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              ))}
              {/* Star of David - two overlapping triangles */}
              <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
              <polygon points="20,15 24,23 16,23" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <polygon points="20,25 16,17 24,17" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </g>
          )}
          {chakra.name === "Visuddha" && (
            // Throat Chakra - 16-petaled lotus with inverted triangle and circle
            <g>
              {/* 16 petals */}
              <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
                <path
                  key={i}
                  d={`M20,20 L${20 + 12 * Math.cos((i * Math.PI) / 8)},${20 + 12 * Math.sin((i * Math.PI) / 8)} Q${20 + 8 * Math.cos(((i + 0.5) * Math.PI) / 8)},${20 + 8 * Math.sin(((i + 0.5) * Math.PI) / 8)} ${20 + 12 * Math.cos(((i + 1) * Math.PI) / 8)},${20 + 12 * Math.sin(((i + 1) * Math.PI) / 8)}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
              ))}
              {/* Circle with inverted triangle */}
              <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
              <polygon points="20,25 16,16 24,16" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="20" cy="19" r="2" fill="none" stroke="currentColor" strokeWidth="1" />
            </g>
          )}
          {chakra.name === "Ajna" && (
            // Third Eye - 2-petaled lotus with circle, triangle and Om
            <g>
              {/* 2 large petals */}
              <path
                d="M8,20 Q12,12 20,16 Q28,12 32,20 Q28,28 20,24 Q12,28 8,20 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <path d="M12,20 Q16,14 20,18" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M28,20 Q24,14 20,18" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Circle with inverted triangle */}
              <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
              <polygon points="20,25 16,16 24,16" fill="none" stroke="currentColor" strokeWidth="1.5" />
              {/* Om symbol */}
              <text x="20" y="23" textAnchor="middle" fontSize="6" fill="currentColor">
                ॐ
              </text>
            </g>
          )}
          {chakra.name === "Sahasrara" && (
            // Crown Chakra - 1000-petaled lotus (represented as many petals) with Om
            <g>
              {/* Multiple layers of petals to represent 1000 petals */}
              <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
              {/* Outer petals */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((i) => (
                <path
                  key={i}
                  d={`M20,20 L${20 + 14 * Math.cos((i * Math.PI) / 10)},${20 + 14 * Math.sin((i * Math.PI) / 10)} Q${20 + 10 * Math.cos(((i + 0.5) * Math.PI) / 10)},${20 + 10 * Math.sin(((i + 0.5) * Math.PI) / 10)} ${20 + 14 * Math.cos(((i + 1) * Math.PI) / 10)},${20 + 14 * Math.sin(((i + 1) * Math.PI) / 10)}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              ))}
              {/* Inner circle with Om */}
              <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="20" y="24" textAnchor="middle" fontSize="8" fill="currentColor">
                ॐ
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Pulsing ring animation */}
      <div
        className="absolute inset-0 rounded-full border-2 animate-ping opacity-20"
        style={{ borderColor: chakra.color }}
      />
    </div>
  )
}

export default ChakraSymbol
