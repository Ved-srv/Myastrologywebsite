"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Brain, DollarSign, Sparkles, Clock, ArrowLeft, Crown, Moon } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Holistic Healing",
      subtitle: "Complete Life Transformation",
      description:
        "Comprehensive birth chart reading through Parashari astrology and Jaimini sutram, providing detailed future predictions and remedies for all life aspects including career, finances, relationships, and family. Enhanced with chakra healing through remedies and reiki for complete spiritual wellness.",
      price: "₹4,999",
      duration: "90 minutes",
      icon: Crown,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      features: [
        "Complete birth chart analysis",
        "Future predictions for major life events",
        "Career and financial guidance",
        "Relationship and family insights",
        "Personalized remedial measures",
        "7 chakra assessment and healing",
        "Reiki energy healing session",
        "Detailed written report",
      ],
    },
    {
      id: 2,
      title: "Heart-Focused Healing",
      subtitle: "Love & Relationship Mastery",
      description:
        "Specialized consultation focusing on love, relationships, and emotional connections. Combines Parashari and Jaimini astrological insights with targeted chakra healing to enhance your capacity for love and create harmonious relationships.",
      price: "₹2,999",
      duration: "60 minutes",
      icon: Heart,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      features: [
        "Relationship compatibility analysis",
        "Love life predictions and timing",
        "Heart and sacral chakra healing",
        "Emotional blockage removal",
        "Partner attraction guidance",
        "Marriage timing predictions",
        "Relationship remedies",
        "Love enhancement practices",
      ],
    },
    {
      id: 3,
      title: "Emotional Healing",
      subtitle: "Inner Peace & Recovery",
      description:
        "Specialized healing focused on processing emotional pain, grief, and loss through advanced chakra healing techniques combined with astrological remedies. Perfect for those seeking to overcome trauma and find inner peace.",
      price: "₹2,499",
      duration: "75 minutes",
      icon: Brain,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      features: [
        "Emotional trauma assessment",
        "Grief and loss healing",
        "Advanced chakra balancing",
        "Stress and anxiety relief",
        "Mental peace techniques",
        "Emotional strength building",
        "Healing meditation practices",
        "Ongoing support guidance",
      ],
    },
    {
      id: 4,
      title: "Financial Prosperity Healing",
      subtitle: "Wealth & Abundance Activation",
      description:
        "Focused consultation to improve financial aspects of life through the combined power of Vedic astrology and chakra healing. Unlock your wealth potential and remove financial blockages for lasting prosperity.",
      price: "₹3,499",
      duration: "60 minutes",
      icon: DollarSign,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      features: [
        "Financial astrology analysis",
        "Wealth timing predictions",
        "Root and solar plexus chakra healing",
        "Money blockage removal",
        "Business success guidance",
        "Investment timing advice",
        "Prosperity rituals and remedies",
        "Abundance mindset activation",
      ],
    },
    {
      id: 5,
      title: "Complete Chakra Healing",
      subtitle: "Energy System Restoration",
      description:
        "Comprehensive chakra healing consultation designed to heal and balance all seven energy centers in your body. Experience profound transformation through ancient energy healing techniques and personalized practices.",
      price: "₹1,999",
      duration: "45 minutes",
      icon: Sparkles,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      features: [
        "Full 7-chakra assessment",
        "Individual chakra healing",
        "Energy blockage identification",
        "Personalized healing practices",
        "Meditation techniques",
        "Crystal and color therapy guidance",
        "Daily energy maintenance tips",
        "Chakra balancing exercises",
      ],
    },
    {
      id: 6,
      title: "Life Event Predictions",
      subtitle: "Precise Timing & Guidance",
      description:
        "Focused consultation for mapping a single major life event in time. Get precise predictions and set realistic expectations for important life transitions, career changes, or significant personal milestones.",
      price: "₹1,499",
      duration: "30 minutes",
      icon: Moon,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      features: [
        "Single event timing analysis",
        "Precise date predictions",
        "Outcome probability assessment",
        "Preparation guidance",
        "Optimal timing advice",
        "Success enhancement tips",
        "Potential challenges identification",
        "Strategic planning support",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-indigo-300" />
            <span className="text-xl font-bold text-foreground">Ved</span>
          </Link>

          <Link
            href="/"
            className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4 shimmer">
            Professional Consultation Services
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Sacred Services &<span className="text-accent block">Healing Offerings</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
            Transform your life through authentic Vedic astrology and spiritual healing. Each consultation is personally
            crafted to address your unique needs and spiritual journey with 15 years of dedicated practice and wisdom.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.id}
                  className="group hover:scale-105 transition-all duration-300 glow relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative">
                    <div
                      className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className={`h-6 w-6 ${service.color}`} />
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="outline" className="text-accent border-accent/50">
                        {service.price}
                      </Badge>
                    </div>

                    <CardDescription className="text-sm font-medium text-accent/80 mb-2">
                      {service.subtitle}
                    </CardDescription>

                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.duration}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardHeader>

                  <CardContent className="relative">
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-sm text-foreground/90 mb-3">What's Included:</h4>
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={`/booking?service=${service.id}`}>
                      <Button className="w-full glow hover:scale-105 transition-all">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Book Consultation
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Transformation?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto text-pretty">
            Choose the service that resonates with your current needs, or contact me for a personalized recommendation
            based on your unique situation and spiritual goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking?service=free">
              <Button size="lg" className="glow hover:scale-105 transition-all">
                <Sparkles className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="hover:bg-card hover:scale-105 transition-all bg-transparent">
              Ask Questions
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="h-6 w-6 text-accent" />
            <span className="text-lg font-semibold">Shivangi</span>
          </div>
          <p className="text-muted-foreground mb-4">Vedic Astrology Practitioner & Spiritual Healer</p>
          <p className="text-sm text-muted-foreground">© 2025 Shivangi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
