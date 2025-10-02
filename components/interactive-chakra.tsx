"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChakraSymbol } from "@/components/chakra-symbol"
import { useMediaQuery } from "@/hooks/use-media-query"

interface Chakra {
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

interface InteractiveChakraProps {
  chakra: Chakra
  index: number
}

export default function InteractiveChakra({ chakra, index }: InteractiveChakraProps) {
  const [isClicked, setIsClicked] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleClick = () => {
    if (isMobile) {
      setIsClicked(!isClicked)
    }
  }

  const showDescription = isMobile ? isClicked : false

  return (
    <div className="relative group">
      {/* Chakra Symbol */}
      <div
        className={`flex items-center justify-center cursor-pointer transition-all duration-300 ${
          isMobile ? "active:scale-95" : "hover:scale-110"
        }`}
        onClick={handleClick}
      >
        <ChakraSymbol chakra={chakra} />
      </div>

      {/* Desktop Hover Tooltip */}
      {!isMobile && (
        <div className="absolute left-full ml-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-10">
          <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-2xl min-w-[400px] max-w-[500px]">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground mb-1">{chakra.name}</h3>
              <p className="text-lg text-foreground/80">{chakra.sanskrit}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Planetary Ruler</h4>
                <p className="text-foreground/70 text-sm">{chakra.planet}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Astrological Signs</h4>
                <div className="flex flex-wrap gap-1">
                  {chakra.signs.map((sign) => (
                    <Badge key={sign} variant="secondary" className="text-xs">
                      {sign}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Mantra</h4>
                <p
                  className="text-lg font-mono font-bold"
                  style={{
                    color: chakra.color,
                    textShadow: `0 0 10px ${chakra.glowColor}40`,
                    filter: "brightness(1.2) contrast(1.3)",
                  }}
                >
                  {chakra.mantra}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Qualities</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">{chakra.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Click Description */}
      {isMobile && isClicked && (
        <div className="mt-4 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-xl">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-1">{chakra.name}</h3>
            <p className="text-lg text-foreground/80">{chakra.sanskrit}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Planetary Ruler</h4>
              <p className="text-foreground/70">{chakra.planet}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Astrological Signs</h4>
              <div className="flex flex-wrap gap-2">
                {chakra.signs.map((sign) => (
                  <Badge key={sign} variant="secondary" className="text-xs">
                    {sign}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Mantra</h4>
              <p
                className="text-lg font-mono font-bold"
                style={{
                  color: chakra.color,
                  textShadow: `0 0 10px ${chakra.glowColor}40`,
                  filter: "brightness(1.2) contrast(1.3)",
                }}
              >
                {chakra.mantra}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Qualities</h4>
              <p className="text-sm text-foreground/70 leading-relaxed">{chakra.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
