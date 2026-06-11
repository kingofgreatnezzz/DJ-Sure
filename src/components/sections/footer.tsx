'use client'

import { Music, Phone, Mail, MapPin, Send, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from '@/components/ui/social-icons'

const footerLinks = {
  quick: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Mixtapes', href: '/mixtapes' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
  ],
  rentals: [
    { label: 'DJ Equipment', href: '/rentals' },
    { label: 'Sound Systems', href: '/rentals#sound' },
    { label: 'Lighting', href: '/rentals#lighting' },
    { label: 'Stage Equipment', href: '/rentals#stage' },
    { label: 'Event Accessories', href: '/rentals#accessories' },
  ],
  services: [
    { label: 'Weddings', href: '/services' },
    { label: 'Corporate Events', href: '/services' },
    { label: 'Nightlife', href: '/services' },
    { label: 'Private Parties', href: '/services' },
    { label: 'Festivals', href: '/services' },
    { label: 'Celebrity Events', href: '/services' },
  ],
}

const socialLinks = [
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: TwitterIcon, href: '#', label: 'Twitter / X' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-matte-black border-t border-gold/10">
      {/* Gold accent top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <Music className="w-6 h-6 text-matte-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold text-gradient">DJ SURE</span>
                <span className="text-[10px] text-gold/60 tracking-[0.3em] uppercase">Premium Entertainment</span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Premium DJ and entertainment services for weddings, corporate events, nightlife, 
              and high-end private events. Elevating experiences with world-class sound and performance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a href="tel:+233****0000" className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <span>+233 ** *** 0000</span>
              </a>
              <a href="mailto:info@djsure.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <span>info@djsure.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400 group">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <span>Accra, Ghana</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold/20 hover:text-gold transition-all duration-300 border border-white/5 hover:border-gold/30"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rentals */}
          <div>
            <h3 className="text-gold font-heading font-bold text-lg mb-6">Rentals</h3>
            <ul className="space-y-3">
              {footerLinks.rentals.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-heading font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 p-8 glass rounded-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Stay Connected</h3>
              <p className="text-sm text-gray-400">Subscribe for exclusive mixes, event updates, and VIP offers.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <Button variant="gold" size="md">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} DJ SURE Entertainment. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 font-heading italic tracking-wider">
              Created with ❤️ by King of Greatness
            </p>
            <button
              onClick={scrollToTop}
              className="text-xs text-gold/60 hover:text-gold transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
