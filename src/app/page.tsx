'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { 
  Play, ChevronRight, Star, Music, Users, Calendar, Award, 
  MapPin, Quote, ArrowRight, Disc, Volume2, Headphones, 
  Heart, Sparkles, Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { SectionWrapper, SectionHeader } from '@/components/sections/section-wrapper'
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from '@/components/ui/social-icons'

const stats = [
  { icon: Calendar, value: '500+', label: 'Events Played' },
  { icon: Users, value: '50K+', label: 'Happy Guests' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: Music, value: '10K+', label: 'Tracks Mixed' },
]

const testimonials = [
  {
    name: 'Sarah & Michael',
    role: 'Wedding, 2024',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    content: 'DJ SURE made our wedding absolutely magical. The music selection was perfect, and the way he read the room was incredible. Our guests are still talking about it!',
    rating: 5,
  },
  {
    name: 'James Osei',
    role: 'CEO, TechCorp Ghana',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    content: 'Exceptional service for our company\'s annual gala. Professional, punctual, and the sound quality was world-class. Highly recommended for corporate events.',
    rating: 5,
  },
  {
    name: 'Grace Mensah',
    role: 'Event Planner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    content: 'I\'ve worked with many DJs over the years, and DJ SURE stands out. His equipment is top-notch, his playlist curation is artistic, and his professionalism is unmatched.',
    rating: 5,
  },
]

const featuredEvents = [
  {
    title: 'Accra Music Festival 2024',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop',
    date: 'December 2024',
    location: 'Accra International Conference Centre',
    guests: '15,000+',
  },
  {
    title: 'Royal Gold Wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop',
    date: 'November 2024',
    location: 'Golden Tulip Hotel',
    guests: '500+',
  },
  {
    title: 'New Year\'s Eve Gala',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=500&fit=crop',
    date: 'January 2025',
    location: 'Labadi Beach Hotel',
    guests: '2,000+',
  },
]

const services = [
  { icon: Heart, title: 'Weddings', desc: 'Making your special day unforgettable' },
  { icon: Users, title: 'Corporate Events', desc: 'Professional entertainment for business' },
  { icon: Music, title: 'Nightlife', desc: 'Energy that moves the crowd' },
  { icon: Star, title: 'Private Events', desc: 'Exclusive experiences for VIP guests' },
]

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <HeroSection />

      {/* ===== STATS SECTION ===== */}
      <StatsSection />

      {/* ===== SERVICES INTRO ===== */}
      <ServicesIntro />

      {/* ===== FEATURED EVENTS ===== */}
      <FeaturedEvents />

      {/* ===== TESTIMONIALS ===== */}
      <TestimonialsSection />

      {/* ===== DJ GALLERY PREVIEW ===== */}
      <GalleryPreview />

      {/* ===== CTA SECTION ===== */}
      <CTASection />
    </>
  )
}

function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video / Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-20 z-10" />
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-20 z-10" />
        
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-charcoal to-[#0d0d0d]" />
        
        {/* Golden orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-gold text-xs md:text-sm tracking-[0.2em] uppercase mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Premium DJ & Entertainment Services
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold leading-none mb-6">
            <span className="text-white block">The Name Is</span>
            <span className="text-gradient block">DJ SURE</span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-10"
          >
            Elevating experiences with world-class sound, unmatched energy, 
            and a passion for creating unforgettable moments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/bookings">
              <Button size="xl" variant="primary">
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Button>
            </Link>
            <Link href="/services">
              <Button size="xl" variant="outline">
                View Services
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/mixtapes">
              <Button size="xl" variant="secondary">
                <Headphones className="w-5 h-5 mr-2" />
                Listen to Mixes
              </Button>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-matte-black bg-gradient-to-br from-gold/50 to-gold/20 flex items-center justify-center"
                  style={{ zIndex: 5 - i }}
                >
                  <span className="text-xs font-bold text-gold">{i}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Trusted by <span className="text-gold font-semibold">500+</span> happy clients
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-3 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 rounded-xl glass hover:glass-gold transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  className="text-3xl md:text-4xl font-heading font-bold text-gradient block"
                >
                  {stat.value}
                </motion.span>
                <span className="text-sm text-gray-400 mt-1 block">{stat.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServicesIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <SectionWrapper dark>
      <SectionHeader
        subtitle="What I Offer"
        title="Premium DJ Services"
      />
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <GlassCard className="text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto mb-6 border border-gold/20">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400 mb-6">{service.desc}</p>
                <Link href="/services">
                  <span className="text-gold text-sm font-medium hover:text-gold-light transition-colors inline-flex items-center gap-1">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </GlassCard>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

function FeaturedEvents() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <SectionWrapper>
      <SectionHeader
        subtitle="Recent Work"
        title="Featured Events"
      />
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {featuredEvents.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl aspect-[4/3]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${event.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 text-gold text-xs mb-2">
                <MapPin className="w-3 h-3" />
                <span>{event.location}</span>
                <span className="text-gray-500">•</span>
                <span>{event.date}</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white">{event.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{event.guests} attendees</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/gallery">
          <Button variant="outline" size="lg">
            View Full Gallery
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  )
}

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <SectionWrapper gold>
      <SectionHeader
        subtitle="Client Feedback"
        title="What People Say"
      />
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <GlassCard className="h-full flex flex-col">
              <Quote className="w-8 h-8 text-gold/40 mb-4" />
              <p className="text-sm text-gray-300 leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-gold/30"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-gold/70">{testimonial.role}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/testimonials">
          <Button variant="ghost" size="lg">
            Read All Reviews
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  )
}

function GalleryPreview() {
  const images = [
    'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop',
  ]

  return (
    <SectionWrapper dark>
      <SectionHeader
        subtitle="Visual Journey"
        title="Captured Moments"
      />
      
      {/* DJ Picture Gallery - Creative Masonry Layout */}
      <div className="mt-12">
        {/* Hero Shot */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-6 group">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=1200&h=600&fit=crop)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-2 text-gold text-sm mb-2">
              <Play className="w-4 h-4 fill-gold" />
              <span>Live Performance</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
              DJ SURE in Action
            </h3>
            <p className="text-gray-300 text-sm mt-1">Setting the vibe at Accra&apos;s finest venues</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gold/80 flex items-center justify-center">
                  <Play className="w-5 h-5 text-matte-black fill-matte-black" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link href="/gallery">
          <Button variant="outline" size="lg">
            <Image className="w-4 h-4 mr-2" />
            Explore Full Gallery
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  )
}

function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-[#1a1400] to-matte-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[200px]" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-gold text-sm tracking-[0.3em] uppercase mb-4 font-heading">
            Ready to Elevate Your Event?
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Let&apos;s Create Something{' '}
            <span className="text-gradient">Unforgettable</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Whether it&apos;s an intimate wedding, a corporate gala, or a massive festival, 
            DJ SURE brings the energy, professionalism, and world-class sound you deserve.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/bookings">
              <Button size="xl" variant="gold">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Event Now
              </Button>
            </Link>
            <a href="tel:+233****0000">
              <Button size="xl" variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                Call for Inquiry
              </Button>
            </a>
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm hover:bg-green-500/20 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quick inquiry via WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Image({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { className?: string }) {
  return <img {...props} className={className} />
}
