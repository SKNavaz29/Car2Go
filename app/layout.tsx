import {Navbar, Footer} from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car2Go - Rent and Ride in a click',
  description: 'Rent the best cars you find on Indian roads',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />        
        {children}
        <Footer />
        </body>
    </html>
  )
}
