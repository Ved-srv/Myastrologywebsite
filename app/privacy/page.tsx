import { Star } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">Last updated: January 2025</p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Information we Collect</h2>
              <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
              <p>When you book a consultation, we collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Birth details (date, time, and place of birth)</li>
                <li>Payment information (processed securely through Razorpay/PayPal)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide astrological consultations and spiritual healing services</li>
                <li>Prepare accurate birth charts and predictions</li>
                <li>Communicate with you about your appointments</li>
                <li>Process payments securely</li>
                <li>Send service-related updates and confirmations</li>
                <li>Improve our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>All payment information is encrypted and processed through secure payment gateways (Razorpay/PayPal)</li>
                <li>We never store complete credit card or bank account information</li>
                <li>Personal data is stored securely and accessed only by authorized personnel</li>
                <li>Consultation details are kept confidential</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties.</p>
              <p>We may share information with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Payment processors (Razorpay/PayPal) to complete transactions</li>
                <li>Service providers who assist in operating our website</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Cookies and Tracking</h2>
              <p>Our website may use cookies to enhance user experience:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand how visitors use our site</li>
                <li>You can disable cookies in your browser settings, though this may affect functionality</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide ongoing services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>
              <p>You may request deletion of your data at any time by contacting us.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Children's Privacy</h2>
              <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Changes to Privacy Policy</h2>
              <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">11. Contact Us</h2>
              <p>For questions about this privacy policy or to exercise your rights, contact us at:</p>
              <p>Email: vedsrivastava1312@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}