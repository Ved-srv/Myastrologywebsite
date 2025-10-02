import { Star } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-indigo-300" />
            <span className="text-xl font-bold text-foreground">Ved Srivastava</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">Last updated: January 2025</p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the services provided by Ved Srivastava through radhavani.com, you accept and agree to be bound by the terms and conditions of this agreement.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Services Provided</h2>
              <p>Ved Srivastava offers Vedic astrology consultations, spiritual healing, chakra balancing, and related services. These services are for guidance and educational purposes only.</p>
              <p>All astrological predictions and spiritual guidance are based on ancient Vedic principles and are subject to interpretation. Results may vary for each individual.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Booking and Payment</h2>
              <p>All bookings must be made through our website. Payment is required at the time of booking.</p>
              <p>We accept payments through Razorpay (for Indian customers) and PayPal (for international customers).</p>
              <p>Prices are listed in INR for Indian customers and USD for international customers.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Consultation Sessions</h2>
              <p>Consultations are conducted online via video call at the scheduled time.</p>
              <p>You must provide accurate birth details (date, time, and place) for astrological consultations.</p>
              <p>Sessions are private and confidential. Recording of sessions without prior consent is prohibited.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. User Responsibilities</h2>
              <p>You agree to provide accurate and complete information when booking services.</p>
              <p>You are responsible for maintaining the confidentiality of your booking details.</p>
              <p>You agree to attend scheduled sessions on time or notify us in advance if you need to reschedule.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Disclaimer</h2>
              <p>Vedic astrology and spiritual healing are not substitutes for professional medical, legal, or financial advice.</p>
              <p>We do not guarantee specific outcomes or results from our services.</p>
              <p>Decisions made based on consultations are your own responsibility.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Intellectual Property</h2>
              <p>All content, including reports, recordings, and materials provided during consultations, remain the intellectual property of Ved Srivastava.</p>
              <p>You may not reproduce, distribute, or commercially exploit any materials without written permission.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Limitation of Liability</h2>
              <p>Ved Srivastava shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
              <p>Our maximum liability is limited to the amount paid for the specific service.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Modifications to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.</p>
              <p>Continued use of our services after changes constitutes acceptance of modified terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Contact Information</h2>
              <p>For questions about these terms, please contact us at contact@radhavani.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}