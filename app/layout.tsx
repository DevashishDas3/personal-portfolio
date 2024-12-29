'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../app/components/Header'
import Footer from '../app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f8f6f3] text-black`}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}