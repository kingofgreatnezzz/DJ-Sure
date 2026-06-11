'use client'

import { motion } from 'framer-motion'
import { 
  Users, Star, Check, Phone, Calendar, MapPin,
  Sparkles, Gem
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { SectionWrapper, SectionHeader } from '@/components/sections/section-wrapper'
import Link from 'next/link'

const crewRoles = [
  { title: 'Event Hostesses', desc: 'Elegant and professional event hostesses for VIP experiences', count: '15 available' },
  { title: 'VIP Hostesses', desc: 'Exclusive VIP table service and guest management', count: '10 available' },
  { title: 'Promotional Models', desc: 'Brand promotion and product demonstration specialists', count: '12 available' },
  { title: 'Brand Ambassadors', desc: 'Professional representation for your brand or product', count: '8 available' },
  { title: 'Event Greeters', desc: 'Warm and welcoming greeters for arrivals', count: '20 available' },
  { title: 'Dancers', desc: 'Professional dancers for performances and entertainment', count: '10 available' },
  { title: 'Hype Crew', desc: 'Energy and excitement generators for events', count: '15 available' },
  { title: 'Ushers', desc: 'Professional ushering and guest direction services', count: '25 available' },
  { title: 'Waitresses', desc: 'Professional waitstaff for premium events', count: '20 available' },
  { title: 'Bartenders', desc: 'Expert bartenders for cocktail service', count: '10 available' },
  { title: 'MCs', desc: 'Professional masters of ceremony for all events', count: '5 available' },
  { title: 'Event Coordinators', desc: 'On-site coordination and event management', count: '6 available' },
]

const hostessProfiles = [
  {
    name: 'Abena',
    role: 'VIP Hostess',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop',
    rating: 5,
    experience: '5 years',
  },
  {
    name: 'Maya',
    role: 'Promotional Model',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop',
    rating: 5,
    experience: '4 years',
  },
  {
    name: 'Nana',
    role: 'Event Hostess',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop',
    rating: 5,
    experience: '6 years',
  },
  {
    name: 'Esi',
    role: 'Brand Ambassador',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=400&fit=crop',
    rating: 5,
    experience: '3 years',
  },
]

export default function HostessesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-charcoal to-[#0d0d0d]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_60%)] opacity-15" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-heading mb-4 block">Event Staff</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              Premium Event Hostesses{' '}
              <span className="text-gradient">& Party Crew</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Professional, elegant, and experienced event staff to elevate your event. 
              From VIP hostesses to MCs and dancers — we&apos;ve got your event covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Roles */}
      <SectionWrapper>
        <SectionHeader subtitle="Our Crew" title="Available Roles" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {crewRoles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <GlassCard className="h-full !p-5 text-center hover:border-gold/30">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2">{role.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{role.desc}</p>
                <span className="text-xs text-gold/70">{role.count}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Profiles */}
      <SectionWrapper gold>
        <SectionHeader subtitle="Meet Our Team" title="Featured Hostesses" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {hostessProfiles.map((profile, i) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="!p-0 overflow-hidden text-center group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${profile.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button size="sm" variant="primary">
                      <Phone className="w-3.5 h-3.5 mr-1.5" />
                      Book Now
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {Array.from({ length: profile.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                    ))}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white">{profile.name}</h3>
                  <p className="text-sm text-gold/80">{profile.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{profile.experience} experience</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Hire Through Us */}
      <SectionWrapper>
        <SectionHeader subtitle="Quality Assured" title="Why Hire Through DJ SURE?" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Gem, title: 'Pre-Vetted Professionals', desc: 'All staff are interviewed, trained, and vetted for professionalism.' },
            { icon: Star, title: 'Elite Standards', desc: 'Dressed to impress, punctual, and experienced in premium events.' },
            { icon: Check, title: 'Fully Managed Service', desc: 'We handle scheduling, briefing, and coordination so you don\'t have to.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 border border-gold/20">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Booking CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-[#1a1400] to-matte-black" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Need Event Staff?{' '}
              <span className="text-gradient">We&apos;re Ready</span>
            </h2>
            <p className="text-gray-300 mb-8">Tell us your staffing needs and we&apos;ll match you with the perfect crew.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/bookings">
                <Button size="lg" variant="gold">
                  <Users className="w-4 h-4 mr-2" />
                  Request Staff
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
