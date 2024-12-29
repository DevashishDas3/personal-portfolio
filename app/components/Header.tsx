'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/media', label: 'MEDIA' },
  { href: '/contact', label: 'CONTACT' },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f6f3] shadow-sm">
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="text-3xl md:text-4xl font-bold tracking-tighter">
            Devashish Das
          </Link>
          <div className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm tracking-wide hover:text-[#96c5b4] transition-colors ${
                  pathname === href ? 'text-[#96c5b4]' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-3 px-6 text-sm tracking-wide hover:bg-[#96c5b4] hover:text-white transition-colors ${
                pathname === href ? 'text-[#96c5b4]' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

