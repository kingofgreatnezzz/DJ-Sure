'use client'

import { motion } from 'framer-motion'
import { 
  Heart, Users, Star, Music, Briefcase, PartyPopper, 
  GlassWater, Waves, Sailboat, Home, GraduationCap, 
  Church, Building2, TreePine, Shirt, Megaphone, 
  Trophy, Sun, Moon, Sparkles, Gem, Globe, 
  Cigarette, Flame, Snowflake, Sunrise, 
  Palette,  Medal, Radio, Tv, 
  Theater, Tent, Bone, Plane, Crown
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { SectionWrapper, SectionHeader } from '@/components/sections/section-wrapper'
import Link from 'next/link'

const serviceCategories = [
  {
    id: 'weddings',
    title: 'Wedding Ceremonies',
    icon: Heart,
    gold: true,
    services: [
      'Weddings', 'Traditional Weddings', 'White Weddings', 
      'Engagement Ceremonies', 'Wedding Receptions', 'Bridal Showers', 
      'Bachelor/Bachelorette Parties'
    ]
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    icon: Briefcase,
    services: [
      'Corporate Events', 'Conferences', 'Product Launches', 
      'Award Ceremonies', 'Gala Nights', 'Corporate End-of-Year Parties',
      'Team Building Events', 'Company Anniversaries'
    ]
  },
  {
    id: 'nightlife',
    title: 'Nightlife & Clubs',
    icon: Music,
    services: [
      'Club DJ Services', 'Lounge DJ Services', 'Nightclub Residencies',
      'Bar Openings', 'VIP Events', 'Celebrity Events',
      'Red Carpet Events'
    ]
  },
  {
    id: 'parties',
    title: 'Parties & Social',
    icon: PartyPopper,
    services: [
      'Birthday Parties', 'Children\'s Parties', 'Pool Parties',
      'Beach Parties', 'Yacht Parties', 'House Parties',
      'Indoor Parties', 'Outdoor Parties', 'Private Parties',
      'Graduation Parties', 'Family Reunions', 'Holiday Events',
      'Christmas Parties', 'New Year Parties', 'Valentine\'s Events'
    ]
  },
  {
    id: 'fashion',
    title: 'Fashion & Entertainment',
    icon: Shirt,
    services: [
      'Fashion Shows', 'Concerts', 'Music Festivals',
      'Cultural Events', 'Community Events'
    ]
  },
  {
    id: 'educational',
    title: 'Academic & School',
    icon: GraduationCap,
    services: [
      'School Events', 'University Events', 'Alumni Gatherings',
      'Homecoming Events'
    ]
  },
  {
    id: 'religious',
    title: 'Religious & Spiritual',
    icon: Church,
    services: [
      'Religious Events', 'Church Programs', 'Crusades',
      'Thanksgiving Services'
    ]
  },
  {
    id: 'memorial',
    title: 'Memorial & Funeral',
    icon: Heart,
    services: [
      'Burial Ceremonies', 'Funeral Events', 'Memorial Services',
      'Celebration of Life Events'
    ]
  },
  {
    id: 'political',
    title: 'Political & Community',
    icon: Megaphone,
    services: [
      'Political Campaign Events', 'Political Rallies',
      'Community Events', 'Charity Events', 'Fundraisers'
    ]
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Venues',
    icon: Building2,
    services: [
      'Hotel Entertainment', 'Resort Entertainment',
      'Restaurant Entertainment', 'Spa & Wellness Events'
    ]
  },
  {
    id: 'sports',
    title: 'Sports & Fitness',
    icon: Trophy,
    services: [
      'Sporting Events', 'Sports Award Ceremonies',
      'Fitness Events', 'Marathon & Race Events'
    ]
  },
  {
    id: 'specialty',
    title: 'Specialty Events',
    icon: Crown,
    services: [
      'VIP Events', 'Celebrity Events', 'Red Carpet Events',
      'Launch Parties', 'Brand Activations', 'Influencer Events'
    ]
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-charcoal to-[#0d0d0d]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_60%)] opacity-15" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-heading mb-4 block">Premium Services</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              Every Event Deserves{' '}
              <span className="text-gradient">Great Music</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              From intimate gatherings to massive festivals — professional DJ services 
              tailored to your event&apos;s unique vibe and vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <SectionWrapper>
        <SectionHeader
          subtitle="What I Offer"
          title="Comprehensive Event Services"
        />
        <div className="mt-12 space-y-16">
          {serviceCategories.map((category, catIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.05 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    category.gold 
                      ? 'bg-gradient-to-br from-gold to-gold-dark' 
                      : 'glass'
                  }`}>
                    <Icon className={`w-6 h-6 ${category.gold ? 'text-matte-black' : 'text-gold'}`} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                    {category.title}
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <GlassCard className="!p-3 !rounded-lg text-center !min-h-[70px] flex items-center justify-center hover:border-gold/40 transition-all">
                        <span className="text-xs md:text-sm text-gray-300 font-medium">{service}</span>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
                {catIndex < serviceCategories.length - 1 && (
                  <div className="mt-8 golden-divider" />
                )}
              </motion.div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Why Choose Me */}
      <SectionWrapper gold>
        <SectionHeader subtitle="Why DJ SURE?" title="The Premium Difference" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Star,
              title: 'Professional Grade Equipment',
              desc: 'Industry-leading sound systems, lighting, and DJ gear for flawless performance at every event.'
            },
            {
              icon: Music,
              title: 'Curated Music Library',
              desc: 'Thousands of tracks across every genre — from Afrobeats to EDM, highlife to hip-hop, curated for your audience.'
            },
            {
              icon: Users,
              title: 'Crowd Reading Expertise',
              desc: 'Over 12 years of experience reading rooms and adapting sets in real-time to keep the energy perfect.'
            },
            {
              icon: Sparkles,
              title: 'Full Event Support',
              desc: 'From planning to setup to performance — I work with your team to ensure seamless execution.'
            },
            {
              icon: Shield,
              title: 'Reliability & Professionalism',
              desc: 'Punctual, dressed to impress, and fully insured. Your event is in professional hands.'
            },
            {
              icon: Medal,
              title: 'Award-Winning Service',
              desc: 'Multiple industry awards and hundreds of 5-star reviews from happy clients and event planners.'
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full !p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 border border-gold/20">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-[#1a1400] to-matte-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Let&apos;s Make Your Event{' '}
              <span className="text-gradient">Unforgettable</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Tell us about your event and get a customized quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/bookings">
                <Button size="lg" variant="gold">
                  Request Booking
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Missing lucide icon
function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
