'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play, Image, Camera, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionWrapper, SectionHeader } from '@/components/sections/section-wrapper'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop', label: 'Live Performance', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop', label: 'Club Night', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop', label: 'Festival Main Stage', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&h=600&fit=crop', label: 'Behind the Decks', category: 'behind' },
  { src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop', label: 'Studio Session', category: 'behind' },
  { src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=600&fit=crop', label: 'Nightclub Residency', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', label: 'Wedding Reception', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop', label: 'Event Setup', category: 'setup' },
  { src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop', label: 'Fashion Show', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop', label: 'VIP Area', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop', label: 'Concert', category: 'events' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop', label: 'Behind the Scenes Setup', category: 'setup' },
]

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'events', label: 'Events' },
  { id: 'behind', label: 'Behind the Scenes' },
  { id: 'setup', label: 'Event Setups' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string } | null>(null)

  const filtered = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

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
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-heading mb-4 block">Visual Archive</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Photo & Video{' '}
              <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A visual journey through unforgettable events, electrifying performances, 
              and behind-the-scenes moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <SectionWrapper>
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold text-matte-black'
                  : 'glass text-gray-300 hover:text-gold hover:border-gold/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${img.src})` }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gold/80 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-matte-black" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm text-white">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden"
          >
            <div
              className="w-full h-[80vh] bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${selectedImage.src})` }}
            />
            <p className="text-center text-white text-sm mt-4">{selectedImage.label}</p>
          </motion.div>
        </motion.div>
      )}

      {/* Video Section */}
      <SectionWrapper gold>
        <SectionHeader subtitle="In Motion" title="Video Highlights" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { label: 'Live at Accra Music Festival', duration: '3:45' },
            { label: 'Wedding DJ Set Highlight', duration: '2:30' },
            { label: 'Club Residency Night', duration: '4:15' },
            { label: 'Behind the Decks: Setup', duration: '1:50' },
          ].map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=450&fit=crop&sig=${i})` }}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-all">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-matte-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium">{video.label}</p>
                <p className="text-xs text-gray-400 mt-1">{video.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  )
}
