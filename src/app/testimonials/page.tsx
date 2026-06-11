'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ThumbsUp } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { SectionWrapper, SectionHeader } from '@/components/sections/section-wrapper'

const reviews = [
  {
    name: 'Sarah & Michael Johnson',
    role: 'Wedding, 2024',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    date: 'December 2024',
    content: 'DJ SURE made our wedding absolutely magical. From the ceremony to the reception, every song was perfectly timed. He read the room effortlessly and kept our guests dancing all night. We received countless compliments from our guests. Thank you for making our day unforgettable!',
    event: 'Wedding at Golden Tulip Hotel',
  },
  {
    name: 'James Osei',
    role: 'CEO, TechCorp Ghana',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    date: 'November 2024',
    content: 'We hired DJ SURE for our annual corporate gala and the experience was outstanding. His professionalism, setup quality, and ability to cater to a mixed corporate audience was impressive. The sound system was crystal clear and the lighting added the perfect ambiance. Highly recommended for corporate events.',
    event: 'TechCorp Annual Gala',
  },
  {
    name: 'Grace Mensah',
    role: 'Event Planner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    date: 'October 2024',
    content: 'As an event planner, I work with many vendors. DJ SURE is consistently one of the best. Punctual, professional, and incredibly talented. His equipment is always top-notch and he adapts to any event vibe. He is my go-to DJ for all my premium events.',
    event: 'Multiple Events',
  },
  {
    name: 'Dr. Kwame Asare',
    role: 'University Vice Chancellor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5,
    date: 'September 2024',
    content: 'We hired DJ SURE for our university\'s Homecoming event. He handled the massive crowd of over 5,000 students with ease. The energy was incredible from start to finish. Truly a professional who knows how to engage a large audience.',
    event: 'University Homecoming',
  },
  {
    name: 'Nana Yaa & Kojo',
    role: 'Traditional Wedding',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop',
    rating: 5,
    date: 'August 2024',
    content: 'Our traditional wedding needed someone who understood the cultural significance of different moments. DJ SURE didn\'t just play music — he curated an experience that honored our traditions while keeping everyone energized. Absolutely phenomenal.',
    event: 'Traditional Wedding Ceremony',
  },
  {
    name: 'Michael Akoto',
    role: 'Nightclub Owner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
    date: 'July 2024',
    content: 'DJ SURE has been our club\'s resident DJ for two years. Our crowd numbers and engagement have never been better. He knows exactly how to build energy throughout the night and keeps our guests coming back week after week.',
    event: 'Club Residency',
  },
  {
    name: 'Ama Serwah',
    role: 'Fashion Show Producer',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    rating: 5,
    date: 'June 2024',
    content: 'For our fashion show, timing was everything — DJ SURE synchronized perfectly with our models\' walks and wardrobe changes. His music selection elevated the entire production. True professional and artist.',
    event: 'Accra Fashion Week',
  },
  {
    name: 'Robert Taylor',
    role: 'Corporate Event Manager',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    rating: 5,
    date: 'May 2024',
    content: 'We hired DJ SURE for our product launch event. He was incredibly professional, arrived early for setup, and worked seamlessly with our event team. The music was perfect for every segment of the evening.',
    event: 'Product Launch Event',
  },
]

const stats = [
  { label: '5-Star Reviews', value: '200+' },
  { label: 'Events Delivered', value: '500+' },
  { label: 'Happy Clients', value: '450+' },
  { label: 'Years in Business', value: '12+' },
]

export default function TestimonialsPage() {
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
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-heading mb-4 block">Client Feedback</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              What Clients{' '}
              <span className="text-gradient">Say</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don&apos;t take our word for it. Here&apos;s what event planners, couples, 
              and corporate clients have to say about working with DJ SURE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper dark>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-heading font-bold text-gradient">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Reviews */}
      <SectionWrapper>
        <SectionHeader subtitle="Real Reviews" title="Client Testimonials" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <GlassCard className="h-full !p-6 md:!p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-gold/30 shrink-0"
                    style={{ backgroundImage: `url(${review.image})` }}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold text-white">{review.name}</h3>
                    <p className="text-sm text-gold/80">{review.role}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-gold fill-gold' : 'text-gray-600'}`} />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-gold/30 mb-2" />
                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  &ldquo;{review.content}&rdquo;
                </p>
                
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gold/10">
                  <ThumbsUp className="w-3.5 h-3.5 text-gold/60" />
                  <span className="text-xs text-gray-500">{review.event}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-[#1a1400] to-matte-black" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Join Our Happy{' '}
              <span className="text-gradient">Clients</span>
            </h2>
            <p className="text-gray-300 mb-8">Ready to experience the DJ SURE difference? Book your event today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/bookings">
                <div className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-matte-black font-semibold rounded-lg hover:shadow-lg hover:gold-glow transition-all uppercase tracking-wider">
                  Book Your Event
                </div>
              </a>
              <a href="/contact">
                <div className="px-8 py-4 glass border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all uppercase tracking-wider">
                  Get in Touch
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
