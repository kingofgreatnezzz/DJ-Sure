'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Award, Music, Headphones, Disc, Star, MapPin, 
  Calendar, Users, Check, Play, Quote 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { SectionWrapper, SectionHeader } from '@/components/sections/section-wrapper'
import Link from 'next/link'

const skills = [
  { name: 'Turntablism', level: 98 },
  { name: 'Mixing & Mastering', level: 95 },
  { name: 'Crowd Reading', level: 99 },
  { name: 'Music Curation', level: 97 },
  { name: 'Event MC', level: 92 },
  { name: 'Production', level: 88 },
]

const awards = [
  { title: 'Best DJ of the Year', year: '2024', org: 'Ghana Music Awards' },
  { title: 'Outstanding Event Entertainer', year: '2023', org: 'Event Excellence Awards' },
  { title: 'Nightclub DJ of the Year', year: '2023', org: 'Nightlife Association' },
  { title: 'Golden Turntable Award', year: '2022', org: 'DJ Federation' },
]

const milestones = [
  { year: '2012', event: 'Started DJ career in Accra' },
  { year: '2014', event: 'First major club residency' },
  { year: '2016', event: 'Opened for international artists' },
  { year: '2018', event: 'Launched rental equipment business' },
  { year: '2020', event: '500th event milestone' },
  { year: '2024', event: 'Premium entertainment brand launch' },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <AboutHero />

      {/* BIO */}
      <BioSection />

      {/* SKILLS */}
      <SkillsSection />

      {/* MILESTONES / TIMELINE */}
      <TimelineSection />

      {/* AWARDS */}
      <AwardsSection />

      {/* DJ PHOTO GALLERY */}
      <PhotoGallerySection />

      {/* CTA */}
      <CTASection />
    </>
  )
}

function AboutHero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_60%)] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-heading mb-4 block">
            About the Artist
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
            The Story Behind{' '}
            <span className="text-gradient">DJ SURE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Over a decade of passion, dedication, and an unwavering commitment to 
            delivering extraordinary musical experiences.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function BioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <SectionWrapper>
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div
              className="w-full aspect-[3/4] rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&h=1000&fit=crop)' }}
            />
            {/* Gold frame accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/50 rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/50 rounded-br-2xl" />
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 p-4 glass rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Music className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold text-gradient">12+</p>
                  <p className="text-xs text-gray-400">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-heading">The Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 mb-6">
            More Than a DJ — 
            <span className="text-gradient"> An Experience Curator</span>
          </h2>
          
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p>
              My journey with music began over a decade ago in the vibrant streets of Accra, 
              where rhythm and energy are a way of life. What started as a passion for collecting 
              records quickly evolved into a full-fledged career as one of Ghana&apos;s most sought-after DJs.
            </p>
            <p>
              Today, I&apos;ve had the privilege of performing at over 500 events across West Africa 
              and beyond — from intimate weddings and exclusive corporate galas to massive music 
              festivals and celebrity events. Each performance is a unique experience, carefully 
              curated to match the energy and vision of my clients.
            </p>
            <p>
              My philosophy is simple: every event tells a story, and music is the language that 
              brings it to life. I don&apos;t just play tracks — I create soundscapes, read rooms, 
              and elevate atmospheres. Whether it&apos;s the elegance of a white wedding, the energy 
              of a nightclub, or the sophistication of a corporate event, I bring the same 
              level of dedication, professionalism, and artistry.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { icon: Music, label: 'Genres Mastered', value: '15+' },
              { icon: MapPin, label: 'Cities Played', value: '20+' },
              { icon: Users, label: 'Happy Clients', value: '500+' },
              { icon: Star, label: '5-Star Reviews', value: '200+' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg glass"
              >
                <item.icon className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <p className="text-lg font-heading font-bold text-gradient">{item.value}</p>
                  <p className="text-xs text-gray-400">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/bookings">
              <Button size="lg" variant="primary">
                Book DJ SURE
                <Calendar className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <SectionWrapper dark>
      <SectionHeader
        subtitle="Expertise"
        title="Mastered Skills"
      />
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mb-2 flex justify-between items-center">
              <span className="text-sm font-medium text-white">{skill.name}</span>
              <span className="text-sm text-gold">{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <SectionWrapper>
      <SectionHeader
        subtitle="The Journey"
        title="Career Milestones"
      />
      <div ref={ref} className="relative max-w-3xl mx-auto mt-12">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/30 to-transparent" />

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start gap-6 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                <div className="glass rounded-xl p-4 inline-block">
                  <p className="text-sm text-gray-300">{milestone.event}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="relative flex-shrink-0 z-10">
                <div className="w-8 h-8 rounded-full bg-matte-black border-2 border-gold flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                </div>
              </div>

              <div className="flex-1 md:hidden">
                <div className="glass rounded-xl p-4">
                  <p className="text-sm text-gray-300">{milestone.event}</p>
                </div>
              </div>

              <div className={`flex-1 hidden md:block ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <span className="text-2xl font-heading font-bold text-gradient">{milestone.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

function AwardsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <SectionWrapper gold>
      <SectionHeader
        subtitle="Recognition"
        title="Awards & Honors"
      />
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {awards.map((award, index) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="text-center h-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 flex items-center justify-center mx-auto mb-4 border border-gold/30">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">{award.title}</h3>
              <p className="text-sm text-gold/80 font-medium">{award.year}</p>
              <p className="text-xs text-gray-400 mt-1">{award.org}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

function PhotoGallerySection() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=800&fit=crop', label: 'Studio Session' },
    { url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop', label: 'Live Performance' },
    { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=800&fit=crop', label: 'Club Set' },
    { url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=800&fit=crop', label: 'Festival Main Stage' },
    { url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=800&fit=crop', label: 'Behind the Decks' },
    { url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=800&fit=crop', label: 'Nightclub Residency' },
  ]

  return (
    <SectionWrapper dark>
      <SectionHeader
        subtitle="Visual Portfolio"
        title="Professional Photoshoot"
      />
      
      {/* Elegant DJ Gallery with personality */}
      <div className="mt-12 space-y-4">
        {/* Large featured image */}
        <div className="relative w-full h-[400px] md:h-[550px] rounded-2xl overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
              The Art of the Mix
            </h3>
            <p className="text-gray-300 mt-2">Every set is a journey — crafted, curated, and delivered with precision.</p>
          </div>
        </div>

        {/* Small grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.slice(0, 6).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${img.url})` }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-10">
        <Link href="/gallery">
          <Button variant="outline" size="lg">
            View Full Gallery
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  )
}

function CTASection() {
  return (
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
            Ready to Work With a <span className="text-gradient">Professional</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Whether you&apos;re planning a wedding, corporate event, or nightlife experience — 
            let&apos;s create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/bookings">
              <Button size="lg" variant="gold">
                Book Your Event
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
