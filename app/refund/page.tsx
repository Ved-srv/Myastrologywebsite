import { Star } from "lucide-react"
import Link from "next/link"

export default function RefundPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Cancellation & Refund Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">Last updated: January 2025</p>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Cancellation Policy</h2>
              <h3 className="text-xl font-semibold text-foreground mb-2">By Customer</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>24+ hours before appointment:</strong> Full refund or free rescheduling</li>
                <li><strong>12-24 hours before appointment:</strong> 50% refund or free rescheduling</li>
                <li><strong>Less than 12 hours before appointment:</strong> No refund, rescheduling subject to availability with additional fee</li>
                <li><strong>No-show:</strong> No refund or rescheduling</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">By Ved Srivastava</h3>
              <p>In the rare event that I need to cancel your appointment:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You will receive a full refund</li>
                <li>Or free rescheduling to a convenient time</li>
                <li>I will notify you as soon as possible</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Refund Policy</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">Eligible for Refund</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellation made 24+ hours before scheduled appointment</li>
                <li>Technical issues on our end preventing the consultation</li>
                <li>Service not provided as described</li>
                <li>Double payment or payment processing errors</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Not Eligible for Refund</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consultation already completed</li>
                <li>Dissatisfaction with astrological predictions (as outcomes may vary)</li>
                <li>Failure to attend scheduled appointment without prior notice</li>
                <li>Technical issues on your end (internet connectivity, device problems)</li>
                <li>Cancellation less than 12 hours before appointment</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Rescheduling Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may reschedule your appointment up to 24 hours before the scheduled time at no additional cost</li>
                <li>Rescheduling requests between 12-24 hours may incur a nominal fee</li>
                <li>Rescheduling less than 12 hours before appointment is subject to availability and may require rebooking with full payment</li>
                <li>You can reschedule once per booking without penalty (within the 24-hour window)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Refund Process</h2>
              <h3 className="text-xl font-semibold text-foreground mb-2">How to Request a Refund</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Email me at vedsrivastava1312@gmail.com with your booking details</li>
                <li>Include your name, booking ID, and reason for refund</li>
                <li>I will review your request within 2-3 business days</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Refund Timeline</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Approved refunds will be processed within 5-7 business days</li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Razorpay refunds: 5-7 business days to reflect in your account</li>
                <li>PayPal refunds: 3-5 business days to reflect in your account</li>
                <li>Bank processing times may vary</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Special Circumstances</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">Emergency Situations</h3>
              <p>I understand that emergencies happen. If you have a genuine emergency preventing you from attending:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contact me as soon as possible</li>
                <li>Provide relevant documentation if available</li>
                <li>I will work with you to reschedule or provide a partial refund at our discretion</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Free Consultations</h3>
              <p>Free consultation sessions cannot be rescheduled more than once. Failure to attend will result in forfeiture of the free session.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Partial Services</h2>
              <p>If a consultation is interrupted due to technical issues on our end:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>I will attempt to complete the session as soon as possible</li>
                <li>If completion is not possible, you will receive a partial refund proportional to the incomplete portion</li>
                <li>Or I can reschedule to complete the remaining time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Package Deals & Subscriptions</h2>
              <p>If you purchase a package or subscription:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Individual sessions within the package follow the same cancellation policy</li>
                <li>Unused sessions may be refunded on a pro-rata basis within 30 days of purchase</li>
                <li>After 30 days, packages are non-refundable but sessions remain valid for 6 months</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Disputes</h2>
              <p>If you have any concerns about your consultation or payment:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Contact me first at vedsrivastava1312@gmail.com</li>
                <li>I will make every effort to resolve the issue amicably</li>
                <li>Most disputes can be resolved within 7 business days</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Payment Gateway Policies</h2>
              <p>Refunds are subject to the terms and conditions of our payment partners:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Razorpay (for Indian customers)</li>
                <li>PayPal (for international customers)</li>
              </ul>
              <p>Processing fees charged by payment gateways are non-refundable.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Contact for Cancellations</h2>
              <p>To cancel or reschedule your appointment:</p>
              <p><strong>Email:</strong> contact@radhavani.com</p>
              <p><strong>Subject:</strong> Cancellation/Refund Request - [Your Booking ID]</p>
              <p>Please include your full name, booking ID, and preferred action (refund or reschedule).</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">11. Policy Updates</h2>
              <p>I reserve the right to modify this cancellation and refund policy at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of any changes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}