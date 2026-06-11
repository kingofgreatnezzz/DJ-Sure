'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Music, Calendar, Home, User, Disc, Radio, Monitor, Users, Image, MessageSquare, Mail, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/services', label: 'Services', icon: Disc },
  { href: '/mixtapes', label: 'Mixtapes', icon: Radio },
  { href: '/rentals', label: 'Rentals', icon: Monitor },
  { href: '/hostesses', label: 'Hostesses', icon: Users },
  { href: '/gallery', label: 'Gallery', icon: Image },
  { href: '/testimonials', label: 'Reviews', icon: MessageSquare },
  { href: '/bookings', label: 'Book Now', icon: Calendar },
  { href: '/contact', label: 'Contact', icon: Mail },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass-dark shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
              <Music className="w-5 h-5 text-matte-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-heading font-bold text-gradient">
                DJ SURE
              </span>
              <span className="text-[8px] md:text-[10px] text-gold/60 tracking-[0.3em] uppercase leading-none">
                Entertainment
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 6).map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg flex items-center gap-1.5',
                    isActive
                      ? 'text-gold bg-gold/10'
                      : 'text-gray-300 hover:text-gold hover:bg-white/5'
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/bookings">
              <Button size="sm" variant="primary">
                Book Now
              </Button>
            </Link>
            <a href="tel:+233000000000">
              <Button size="sm" variant="outline">
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-gold transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-dark border-t border-gold/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link, idx) => {
                const Icon = link.icon
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'text-gold bg-gold/10 border-l-2 border-gold'
                          : 'text-gray-300 hover:text-gold hover:bg-white/5'
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="pt-4 space-y-3">
                <Link href="/bookings" className="block">
                  <Button className="w-full" size="md" variant="primary">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </Link>
                <a href="tel:+233000000000" className="block">
                  <Button className="w-full" size="md" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
