"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Moon, Sparkles, Heart, Menu, X } from "lucide-react";
import InteractiveChakra from "@/components/interactive-chakra";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Removed glow animation from star */}
            <Star className="h-8 w-8 text-indigo-300" />
            <span className="text-xl font-bold text-foreground">Ved</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Specialities
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a
                href="#services"
                className="text-muted-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Specialities
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-accent transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full float"></div>
          <div
            className="absolute top-32 right-20 w-1 h-1 bg-primary rounded-full float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-accent rounded-full float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-40 right-1/3 w-1 h-1 bg-primary rounded-full float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 shimmer">
              Vedic Astrology Practitioner
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Unlock Your Cosmic
            <span className="text-accent block">Destiny</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Experience authentic Vedic astrology guidance through Parashari
            astrology and Jaimini sutram, combined with spiritual healing
            through kriya yoga and chakra balancing all through the infinte
            blessings of Shree Radha Rani.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="glow hover:scale-105 transition-all">
                <Sparkles className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
            </Link>
            <a href="#chakras">
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-card hover:text-foreground hover:scale-105 transition-all bg-transparent"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text content - first on desktop, second on mobile */}
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Ved</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At 25 years old, I have dedicated 5 years to mastering the
                ancient sciences of Vedic astrology and spiritual healing,
                guided by the divine grace of Radha Rani. My journey began with
                a profound connection to the cosmic energies that guide our
                earthly experiences and shape our destinies, blessed by the
                merciful compassion of the Supreme Goddess.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Under Radha Rani's divine guidance, I specialize in Parashari
                astrology and Jaimini sutram, offering precise insights into
                life's mysteries. As a devoted kriya yoga practitioner, I
                understand the subtle energies that flow through our being.
                Uniquely, I am also a musician deeply rooted in Indian classical
                music, channeling Radha Rani's divine love through the power of
                the seven musical notes (swaras), each corresponding to the
                seven chakras, creating healing frequencies that restore balance
                to your energy centers.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Through this sacred combination of astrological wisdom, yogic
                practices, and sound healing—all blessed by Radha Rani's
                infinite grace—I guide souls toward their highest potential and
                deepest healing. Just as Radha Rani embodies unconditional love
                and devotion, I channel that divine energy to illuminate your
                path and awaken your inner radiance.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Parashari Astrology</Badge>
                <Badge variant="secondary">Jaimini Sutram</Badge>
                <Badge variant="secondary">Kriya Yoga</Badge>
                <Badge variant="secondary">Chakra Healing</Badge>
                <Badge variant="secondary">Sound Healing</Badge>
                <Badge variant="secondary">Indian Classical Music</Badge>
              </div>
            </div>

            {/* Image - second on desktop, first on mobile */}
            <div className="relative order-1 md:order-2 -mt-28 md:mt-0">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PFP.jpg-HxKbGZmeWY147IJYwy2O9hyXHMrpxs.jpeg"
                  alt="Ved - Vedic Astrology Practitioner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas of Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Discover the ancient wisdom of Vedic astrology and spiritual
              healing practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300 glow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Parashari Astrology</CardTitle>
                <CardDescription>
                  Traditional Vedic astrology readings based on the ancient
                  Parashari system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Birth chart analysis</li>
                  <li>• Planetary periods (Dasha)</li>
                  <li>• Life predictions & guidance</li>
                  <li>• Remedial measures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 glow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Moon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Jaimini Sutram</CardTitle>
                <CardDescription>
                  Advanced astrological techniques using the Jaimini system of
                  prediction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Karakamsa analysis</li>
                  <li>• Chara dasha system</li>
                  <li>• Yogas & combinations</li>
                  <li>• Timing of events</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 glow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Chakra Healing</CardTitle>
                <CardDescription>
                  Energy healing through kriya yoga and chakra balancing
                  techniques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 7 chakra assessment</li>
                  <li>• Kriya yoga practices</li>
                  <li>• Energy cleansing</li>
                  <li>• Spiritual guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Chakras Section */}
      <section id="chakras" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Astrology & The Seven Chakras
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
              Discover the profound connection between planetary energies and
              your chakra system. Each energy center corresponds to specific
              astrological influences that shape your spiritual and physical
              well-being.
            </p>
            <p className="text-sm text-muted-foreground mt-4 md:hidden">
              Tap on each chakra to learn more
            </p>
            <p className="text-sm text-muted-foreground mt-4 hidden md:block">
              Hover over each chakra to learn more
            </p>
          </div>

          <div className="flex flex-col items-center space-y-12 max-w-md mx-auto">
            {[
              {
                name: "Sahasrara",
                sanskrit: "Crown Chakra",
                planet: "Beyond - Divine Consciousness",
                signs: ["Universal Connection"],
                mantra: "ॐ (AUM)",
                color: "#9333ea",
                glowColor: "#a855f7",
                description:
                  "Pure Intuition - Balance of Higher and Lower Selves",
                symbol: "crown",
              },
              {
                name: "Ajna",
                sanskrit: "Third Eye Chakra",
                planet: "Sun / Moon",
                signs: ["Cancer", "Leo"],
                mantra: "AUM",
                color: "#4f46e5",
                glowColor: "#6366f1",
                description:
                  "Pure Intuition - Balance of Higher and Lower Selves",
                symbol: "third-eye",
              },
              {
                name: "Visuddha",
                sanskrit: "Throat Chakra",
                planet: "Mercury",
                signs: ["Gemini", "Virgo"],
                mantra: "HAM",
                color: "#0ea5e9",
                glowColor: "#38bdf8",
                description: "Growth - Communication - Freedom - Mantra Siddhi",
                symbol: "throat",
              },
              {
                name: "Anahata",
                sanskrit: "Heart Chakra",
                planet: "Venus",
                signs: ["Taurus", "Libra"],
                mantra: "YAM",
                color: "#10b981",
                glowColor: "#34d399",
                description:
                  "Selfless Love - Creativity - Union of Male and Female",
                symbol: "heart",
              },
              {
                name: "Manipura",
                sanskrit: "Solar Plexus Chakra",
                planet: "Mars",
                signs: ["Aries", "Scorpio"],
                mantra: "RAM",
                color: "#f59e0b",
                glowColor: "#fbbf24",
                description:
                  "Courage - Independence - Clarity - Self-Will - Protection",
                symbol: "solar-plexus",
              },
              {
                name: "Swadisthana",
                sanskrit: "Sacral Chakra",
                planet: "Jupiter",
                signs: ["Pisces", "Sagittarius"],
                mantra: "VAM",
                color: "#f97316",
                glowColor: "#fb923c",
                description: "Expansion - Passion - Reproduction - Growth",
                symbol: "sacral",
              },
              {
                name: "Muladhara",
                sanskrit: "Root Chakra",
                planet: "Saturn",
                signs: ["Aquarius", "Capricorn"],
                mantra: "LAM",
                color: "#dc2626",
                glowColor: "#ef4444",
                description: "Security - Longevity - Structure - Control",
                symbol: "root",
              },
            ].map((chakra, index) => (
              <InteractiveChakra
                key={chakra.name}
                chakra={chakra}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Cosmic Journey
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Ready to discover what the stars have in store for you? Book a
            personalized consultation and unlock the wisdom of ancient Vedic
            astrology.
          </p>
          <Link href="/booking?service=free">
            <Button size="lg" className="glow hover:scale-105 transition-all">
              <Sparkles className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
      {/* Footer */}
      <footer id="contact" className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="h-6 w-6 text-accent" />
            <span className="text-lg font-semibold">Ved Srivastava</span>
          </div>
          <p className="text-muted-foreground mb-4 text-center">
            Vedic Astrology Practitioner & Spiritual Healer
          </p>

          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Cancellation & Refund
            </Link>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © 2025 Ved Srivastava. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
