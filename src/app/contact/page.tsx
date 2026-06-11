'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Phone, Mail, MapPin, MessageSquare, Send, 
  Clock, Music, Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionWrapper, SectionHeader } from '@/components/sections/section-wrapper'
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from '@/components/ui/social-icons'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+233 ** *** 0000', '+233 ** *** 0001'],
    action: 'Call Now',
    href: 'tel:+233****0000',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@djsure.com', 'bookings@djsure.com'],
    action: 'Send Email',
    href: 'mailto:info@djsure.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    details: ['Accra, Ghana', 'Available nationwide'],
    action: 'Get Directions',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Mon-Sat: 9AM - 10PM', 'Sun: By appointment'],
    action: 'Book a Time',
    href: '/bookings',
  },
]

const socialLinks = [
  { icon: InstagramIcon, name: 'Instagram', handle: '@djsureofficial', color: 'hover:text-pink-400', href: '#' },
  { icon: FacebookIcon, name: 'Facebook', handle: '/djsureofficial', color: 'hover:text-blue-400', href: '#' },
  { icon: TwitterIcon, name: 'Twitter / X', handle: '@djsure', color: 'hover:text-blue-300', href: '#' },
  { icon: YoutubeIcon, name: 'YouTube', handle: '/@djsure', color: 'hover:text-red-500', href: '#' },
  { icon: Music, name: 'SoundCloud', handle: '/djsure', color: 'hover:text-orange-400', href: '#' },
  { icon: Globe, name: 'Website', handle: 'djsure.com', color: 'hover:text-gold', href: '/' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-charcoal to-[#0d0d0d]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_60%)] opacity-15" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-heading mb-4 block">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Let&apos;s{' '}
              <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a question, want a quote, or ready to book? Reach out — we&apos;d love 
              to hear about your event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <SectionWrapper dark>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <a href={item.href} className="glass rounded-xl p-6 block text-center hover:border-gold/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-white mb-2">{item.title}</h3>
                  {item.details.map((detail, j) => (
                    <p key={j} className="text-sm text-gray-400">{detail}</p>
                  ))}
                  <span className="text-xs text-gold/70 mt-2 inline-block">{item.action} →</span>
                </a>
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Main Contact Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">Send a Message</h2>
            <p className="text-sm text-gray-400 mb-8">We typically respond within 24 hours.</p>
            
            {sent ? (
              <div className="glass rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-sm text-gray-400">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Name *</label>
                    <input type="text" required placeholder="Your name" className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Email *</label>
                    <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Phone</label>
                  <input type="tel" placeholder="+233 XX XXX XXXX" className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Message *</label>
                  <textarea required rows={5} placeholder="Tell us about your event, inquiry, or message..." className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors resize-none" />
                </div>
                <Button type="submit" size="lg" variant="gold" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* WhatsApp CTA */}
            <div className="glass-gold rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <MessageSquare className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Chat on WhatsApp</h3>
              <p className="text-sm text-gray-300 mb-6">
                Quickest way to get a response. We&apos;re usually available on WhatsApp during business hours.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Now
              </a>
            </div>

            {/* Map / Location */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2">Location</h3>
                <p className="text-sm text-gray-400 mb-4">Based in Accra, Ghana — available for events nationwide.</p>
              </div>
              <div className="h-64 bg-gradient-to-br from-charcoal to-matte-black flex items-center justify-center border-t border-gold/10">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold/50 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Accra, Ghana</p>
                  <p className="text-xs text-gray-500">Serving nationwide</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-heading font-bold text-white mb-4">Follow DJ SURE</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`flex items-center gap-2 p-3 rounded-lg glass hover:bg-white/5 ${social.color} transition-all`}
                  >
                    <social.icon className="w-4 h-4" />
                    <div className="text-left">
                      <p className="text-xs font-medium text-white">{social.name}</p>
                      <p className="text-[10px] text-gray-500">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  )
}
