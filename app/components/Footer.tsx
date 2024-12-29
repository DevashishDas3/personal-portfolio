import Link from 'next/link'
import { Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 py-12 bg-[#96c5b4] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">CONTACT</h3>
            <p className="text-sm mb-2">hello@example.com</p>
            <p className="text-sm">+1 (234) 567-8900</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">SOCIAL</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}