import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#f3f4f6' }} className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: '#10b981' }}>
              AfriBridge
            </h4>
            <p className="text-sm text-gray-400">
              Premium clearing & logistics across Africa. Customs compliance, freight forwarding, and cross-border solutions for SADC trade corridors.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold text-white mb-4">Services</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-emerald-400 transition">Customs Clearing</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition">Air Freight</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition">Ocean Freight</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition">Warehousing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-bold text-white mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/industries" className="hover:text-emerald-400 transition">Industries</Link></li>
              <li><Link href="/trade-corridors" className="hover:text-emerald-400 transition">Trade Corridors</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-white mb-4">Contact</h5>
            <p className="text-sm text-gray-400 mb-2">SADC Operations</p>
            <p className="text-sm text-gray-400 mb-4">
              Email: info@afribridge.com<br />
              Phone: +27 XX XXX XXXX<br />
              WhatsApp: Available 24/7
            </p>
          </div>
        </div>

        <div className="border-t" style={{ borderColor: '#1f2937' }} className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 AfriBridge. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
