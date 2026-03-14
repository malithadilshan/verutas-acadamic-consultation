import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="font-bold text-2xl tracking-tighter text-white">
                VERITAS
                <span className="block text-xs font-normal tracking-widest text-[#D4AF37] uppercase">Academic Consultation</span>
              </div>
            </Link>
            <p className="text-sm mb-6 max-w-xs">
              Designing Education. Building Capability. Strategic advisory and capability-building firm in education.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link></li>
              <li><Link href="/audit" className="hover:text-[#D4AF37] transition-colors">Veritas Audit™</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-[#D4AF37] transition-colors">Consulting</Link></li>
              <li><Link href="/services" className="hover:text-[#D4AF37] transition-colors">Accreditation</Link></li>
              <li><Link href="/services" className="hover:text-[#D4AF37] transition-colors">Curriculum</Link></li>
              <li><Link href="/services" className="hover:text-[#D4AF37] transition-colors">Capacity Building</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-[#D4AF37] shrink-0" />
                <span>Office location will be updated here.</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <span>+94 71 751 1917</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                <span>veritasacademic@...</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} Veritas Academic Consultation. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
