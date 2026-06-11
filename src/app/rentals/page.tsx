'use client'

import { motion } from 'framer-motion'
import { 
  Monitor, Volume2, Lightbulb, LayoutDashboard, 
  Zap, PartyPopper, ShoppingCart, Check, 
  Clock, DollarSign, Wifi
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { SectionWrapper, SectionHeader } from '@/components/sections/section-wrapper'

const rentalCategories = [
  {
    id: 'dj-equipment',
    title: 'DJ Equipment',
    icon: Monitor,
    items: [
      { name: 'DJ Controllers', desc: 'Professional DJ controllers for seamless mixing', daily: 150, weekly: 600, available: true },
      { name: 'CDJs', desc: 'Industry-standard CDJ media players', daily: 200, weekly: 750, available: true },
      { name: 'DJ Mixers', desc: 'High-quality DJ mixers with multiple channels', daily: 120, weekly: 450, available: true },
      { name: 'Turntables', desc: 'Vinyl turntables for authentic sound', daily: 100, weekly: 380, available: true },
      { name: 'DJ Booths', desc: 'Customizable DJ performance booths', daily: 300, weekly: 1000, available: false },
      { name: 'DJ Facades', desc: 'Professional DJ facade setups', daily: 250, weekly: 800, available: true },
    ]
  },
  {
    id: 'sound',
    title: 'Sound Systems',
    icon: Volume2,
    items: [
      { name: 'Powered Speakers', desc: 'Active speakers with built-in amplification', daily: 200, weekly: 700, available: true },
      { name: 'Passive Speakers', desc: 'High-output passive speaker systems', daily: 180, weekly: 650, available: true },
      { name: 'Subwoofers', desc: 'Deep bass subwoofers for full-range sound', daily: 250, weekly: 900, available: true },
      { name: 'Line Array Systems', desc: 'Professional line array for large venues', daily: 500, weekly: 1800, available: true },
      { name: 'Monitors', desc: 'Stage monitors for clear artist monitoring', daily: 100, weekly: 350, available: true },
    ]
  },
  {
    id: 'lighting',
    title: 'Lighting',
    icon: Lightbulb,
    items: [
      { name: 'Moving Heads', desc: 'Intelligent moving head lights', daily: 180, weekly: 650, available: true },
      { name: 'Beam Lights', desc: 'Powerful beam lighting effects', daily: 120, weekly: 400, available: true },
      { name: 'Wash Lights', desc: 'Color wash lights for ambiance', daily: 100, weekly: 350, available: true },
      { name: 'Laser Lights', desc: 'DMX-controlled laser light systems', daily: 200, weekly: 700, available: true },
      { name: 'Strobe Lights', desc: 'High-intensity strobe effects', daily: 80, weekly: 280, available: true },
      { name: 'LED Bars', desc: 'RGB LED bar lights', daily: 90, weekly: 300, available: true },
      { name: 'Uplights', desc: 'Wireless uplighting for venues', daily: 50, weekly: 180, available: true },
    ]
  },
  {
    id: 'stage',
    title: 'Stage Equipment',
    icon: LayoutDashboard,
    items: [
      { name: 'Stages', desc: 'Modular stage platforms', daily: 400, weekly: 1400, available: true },
      { name: 'Trusses', desc: 'Aluminum truss structures', daily: 250, weekly: 850, available: true },
      { name: 'Backdrops', desc: 'Custom backdrop designs', daily: 150, weekly: 500, available: true },
      { name: 'Stage Platforms', desc: 'Elevated performance platforms', daily: 200, weekly: 700, available: true },
    ]
  },
  {
    id: 'power',
    title: 'Power & Cables',
    icon: Zap,
    items: [
      { name: 'Generators', desc: 'Silent generators for events', daily: 300, weekly: 1000, available: true },
      { name: 'Extension Cables', desc: 'Heavy-duty extension cables', daily: 30, weekly: 100, available: true },
      { name: 'Power Distribution Units', desc: 'Professional power distribution', daily: 80, weekly: 250, available: true },
    ]
  },
  {
    id: 'accessories',
    title: 'Event Accessories',
    icon: PartyPopper,
    items: [
      { name: 'Smoke Machines', desc: 'Professional haze and smoke effects', daily: 100, weekly: 350, available: true },
      { name: 'Bubble Machines', desc: 'Bubble effect machines', daily: 60, weekly: 200, available: true },
      { name: 'Confetti Machines', desc: 'Confetti blast systems', daily: 120, weekly: 400, available: true },
      { name: 'CO2 Cannons', desc: 'CO2 jet cannon effects', daily: 200, weekly: 650, available: true },
      { name: 'LED Screens', desc: 'LED video wall panels', daily: 500, weekly: 1800, available: true },
      { name: 'Projectors', desc: 'High-lumen event projectors', daily: 150, weekly: 500, available: true },
      { name: 'TV Displays', desc: 'Large screen TV displays', daily: 120, weekly: 400, available: true },
    ]
  },
]

export default function RentalsPage() {
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
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-heading mb-4 block">Equipment Hire</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              Premium Event{' '}
              <span className="text-gradient">Equipment Rental</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Top-quality sound, lighting, and stage equipment for events of all sizes. 
              Professional gear delivered and set up at your venue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Rent From Us */}
      <SectionWrapper dark>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Check, label: 'Top Quality Gear', desc: 'Industry-leading equipment' },
            { icon: Clock, label: 'On-Time Delivery', desc: 'Setup before your event' },
            { icon: DollarSign, label: 'Best Rates', desc: 'Competitive daily & weekly' },
            { icon: Wifi, label: 'Full Support', desc: 'Technical support included' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{item.label}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Rental Categories */}
      <SectionWrapper>
        {rentalCategories.map((category) => {
          const Icon = category.icon
          return (
            <div key={category.id} id={category.id} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <GlassCard className="!p-5">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-base font-heading font-bold text-white">{item.name}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          item.available ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {item.available ? 'Available' : 'Booked'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mb-4">{item.desc}</p>
                      <div className="flex items-center gap-4 mb-4">
                        <div>
                          <span className="text-xs text-gray-500">Daily</span>
                          <p className="text-lg font-heading font-bold text-gradient">GH₵{item.daily}</p>
                        </div>
                        <div className="w-px h-8 bg-gold/20" />
                        <div>
                          <span className="text-xs text-gray-500">Weekly</span>
                          <p className="text-lg font-heading font-bold text-gradient">GH₵{item.weekly}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={item.available ? 'primary' : 'secondary'}
                        disabled={!item.available}
                        className="w-full"
                      >
                        <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                        {item.available ? 'Rent Now' : 'Unavailable'}
                      </Button>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </SectionWrapper>

      {/* CTA for custom rental */}
      <SectionWrapper gold>
        <div className="text-center">
          <SectionHeader subtitle="Need Something Custom?" title="Bespoke Rental Packages" />
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Need a custom package for your event? We offer tailored rental solutions 
            for large-scale events, multi-day festivals, and corporate functions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="gold">Request Custom Quote</Button>
            <Button size="lg" variant="outline">View Full Catalog</Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
