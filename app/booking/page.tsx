"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowLeft, CreditCard, Globe, CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState, Suspense, useEffect, useRef } from "react"

function BookingContent() {
  const searchParams = useSearchParams()
  const serviceId = searchParams.get("service")
  const [selectedPayment, setSelectedPayment] = useState<"razorpay" | "paypal" | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paypalLoaded, setPaypalLoaded] = useState(false)
  const paypalRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      id: "1",
      title: "Holistic Healing",
      price: 4999,
      priceUSD: 60,
      duration: "90 minutes",
      description: "Complete Life Transformation",
    },
    {
      id: "2",
      title: "Heart-Focused Healing",
      price: 2999,
      priceUSD: 36,
      duration: "60 minutes",
      description: "Love & Relationship Mastery",
    },
    {
      id: "3",
      title: "Emotional Healing",
      price: 2499,
      priceUSD: 30,
      duration: "75 minutes",
      description: "Inner Peace & Recovery",
    },
    {
      id: "4",
      title: "Financial Prosperity Healing",
      price: 3499,
      priceUSD: 42,
      duration: "60 minutes",
      description: "Wealth & Abundance Activation",
    },
    {
      id: "5",
      title: "Complete Chakra Healing",
      price: 1999,
      priceUSD: 24,
      duration: "45 minutes",
      description: "Energy System Restoration",
    },
    {
      id: "6",
      title: "Life Event Predictions",
      price: 1499,
      priceUSD: 18,
      duration: "30 minutes",
      description: "Precise Timing & Guidance",
    },
    {
      id: "free",
      title: "Free Consultation",
      price: 0,
      priceUSD: 0,
      duration: "15 minutes",
      description: "Initial Discovery Session",
    },
  ]

  const selectedService = services.find((s) => s.id === serviceId) || services[0]

  // Load PayPal SDK
  useEffect(() => {
    if (selectedPayment === "paypal" && !paypalLoaded) {
      const script = document.createElement("script")
      script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`
      script.async = true
      script.onload = () => {
        setPaypalLoaded(true)
        renderPayPalButton()
      }
      document.body.appendChild(script)
    }
  }, [selectedPayment, paypalLoaded])

  const renderPayPalButton = () => {
    if (paypalRef.current && (window as any).paypal) {
      paypalRef.current.innerHTML = ""
      
      ;(window as any).paypal
        .Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: selectedService.title,
                  amount: {
                    currency_code: "USD",
                    value: selectedService.priceUSD.toString(),
                  },
                },
              ],
            })
          },
          onApprove: async (data: any, actions: any) => {
            const order = await actions.order.capture()
            console.log("PayPal payment successful:", order)
            alert(`Payment successful! Order ID: ${order.id}`)
            
            // Here you would send the order details to your backend
            // Example: await fetch('/api/paypal-webhook', { method: 'POST', body: JSON.stringify(order) })
            
            setIsProcessing(false)
          },
          onError: (err: any) => {
            console.error("PayPal payment error:", err)
            alert("Payment failed. Please try again.")
            setIsProcessing(false)
          },
          onCancel: () => {
            console.log("PayPal payment cancelled")
            setIsProcessing(false)
          },
          style: {
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "paypal",
          },
        })
        .render(paypalRef.current)
    }
  }

  const handleRazorpayPayment = () => {
    setIsProcessing(true)

    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    script.onload = () => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_live_WqucHMI78hR0cj",
        amount: selectedService.price * 100,
        currency: "INR",
        name: "Ved",
        description: selectedService.title,
        image: "/logo.png",
        handler: (response: any) => {
          console.log("Payment successful:", response)
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`)
          setIsProcessing(false)
          
          // Send payment details to your backend
          // Example: await fetch('/api/razorpay-webhook', { method: 'POST', body: JSON.stringify(response) })
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#6366f1",
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false)
          },
        },
      }

      const razorpay = new (window as any).Razorpay(options)
      razorpay.open()
    }
    document.body.appendChild(script)
  }

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
            href="/services"
            className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </Link>
        </div>
      </nav>

      {/* Booking Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 shimmer">
              Secure Payment
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Your Booking</h1>
            <p className="text-muted-foreground text-lg">Choose your preferred payment method</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Details */}
            <Card className="glow">
              <CardHeader>
                <CardTitle className="text-2xl">Service Details</CardTitle>
                <CardDescription>Review your selected consultation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{selectedService.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{selectedService.description}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{selectedService.duration}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Price (India)</span>
                    <span className="font-medium">₹{selectedService.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Price (International)</span>
                    <span className="font-medium">${selectedService.priceUSD}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Personalized consultation</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Detailed analysis and guidance</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Follow-up support included</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Options */}
            <div className="space-y-6">
              <Card className="glow">
                <CardHeader>
                  <CardTitle className="text-2xl">Payment Method</CardTitle>
                  <CardDescription>Select your preferred payment gateway</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedService.id !== "free" ? (
                    <>
                      {/* Razorpay Option */}
                      <button
                        onClick={() => setSelectedPayment("razorpay")}
                        className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                          selectedPayment === "razorpay"
                            ? "border-accent bg-accent/10"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                              <CreditCard className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Razorpay</h3>
                              <p className="text-xs text-muted-foreground">For Indian customers</p>
                            </div>
                          </div>
                          {selectedPayment === "razorpay" && <CheckCircle2 className="h-5 w-5 text-accent" />}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Pay with UPI, Cards, Net Banking, or Wallets
                        </p>
                        <p className="text-lg font-bold mt-3">₹{selectedService.price.toLocaleString()}</p>
                      </button>

                      {/* PayPal Option */}
                      <button
                        onClick={() => setSelectedPayment("paypal")}
                        className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                          selectedPayment === "paypal"
                            ? "border-accent bg-accent/10"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                              <Globe className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                              <h3 className="font-semibold">PayPal</h3>
                              <p className="text-xs text-muted-foreground">For international customers</p>
                            </div>
                          </div>
                          {selectedPayment === "paypal" && <CheckCircle2 className="h-5 w-5 text-accent" />}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Secure international payment via PayPal</p>
                        <p className="text-lg font-bold mt-3">${selectedService.priceUSD} USD</p>
                      </button>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Free Consultation</h3>
                      <p className="text-sm text-muted-foreground mb-6">No payment required for this session</p>
                      <Button size="lg" className="glow">
                        Schedule Session
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {selectedService.id !== "free" && (
                <>
                  {selectedPayment === "razorpay" && (
                    <Button
                      size="lg"
                      className="w-full glow hover:scale-105 transition-all"
                      disabled={isProcessing}
                      onClick={handleRazorpayPayment}
                    >
                      {isProcessing ? (
                        "Processing..."
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          Pay with Razorpay
                        </>
                      )}
                    </Button>
                  )}

                  {selectedPayment === "paypal" && (
                    <div className="space-y-4">
                      <div ref={paypalRef} className="min-h-[200px]"></div>
                      {!paypalLoaded && (
                        <div className="text-center text-muted-foreground text-sm">Loading PayPal...</div>
                      )}
                    </div>
                  )}
                </>
              )}

              <p className="text-xs text-center text-muted-foreground">
                Your payment is secure and encrypted. We never store your payment information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="h-6 w-6 text-accent" />
            <span className="text-lg font-semibold">Ved</span>
          </div>
          <p className="text-muted-foreground mb-4">Vedic Astrology Practitioner & Spiritual Healer</p>
          <p className="text-sm text-muted-foreground">© 2025 Ved. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookingContent />
    </Suspense>
  )
}