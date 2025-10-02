import { Star, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Have questions about our services or need assistance? I'm here to help you on your spiritual journey.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">vedsrivastava1312@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91-7905735195</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
              <p className="text-muted-foreground mb-2">Saturday - Sunday: 9:00 AM - 10:00 PM IST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}