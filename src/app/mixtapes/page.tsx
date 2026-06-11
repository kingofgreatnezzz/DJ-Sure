'use client'

import { motion } from 'framer-motion'
import { Play, Pause, Download, Headphones, Music, Radio } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { SectionWrapper, SectionHeader } from '@/components/sections/section-wrapper'
import { YoutubeIcon, AppleMusicIcon } from '@/components/ui/social-icons'

const mixtapes = [
  {
    id: 1,
    title: 'Afro Vibes Vol. 4',
    genre: 'Afrobeats / Amapiano',
    duration: '1hr 15min',
    tracks: 22,
    plays: '12.5K',
    date: 'January 2025',
    image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop',
    soundcloud: '#',
  },
  {
    id: 2,
    title: 'Late Night Sessions',
    genre: 'House / Deep House',
    duration: '1hr 30min',
    tracks: 18,
    plays: '8.3K',
    date: 'December 2024',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop',
    soundcloud: '#',
  },
  {
    id: 3,
    title: 'Wedding Classics Mix',
    genre: 'R&B / Soul / Afrobeats',
    duration: '2hr',
    tracks: 30,
    plays: '15.2K',
    date: 'November 2024',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    soundcloud: '#',
  },
  {
    id: 4,
    title: 'Festival Bangers 2024',
    genre: 'EDM / Electronic',
    duration: '1hr 45min',
    tracks: 25,
    plays: '20.1K',
    date: 'October 2024',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
    soundcloud: '#',
  },
  {
    id: 5,
    title: 'Sunday Morning Vibes',
    genre: 'Gospel / Soul / Jazz',
    duration: '1hr',
    tracks: 15,
    plays: '6.8K',
    date: 'September 2024',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop',
    soundcloud: '#',
  },
  {
    id: 6,
    title: 'Throwback Thursday Mix',
    genre: 'Hip-Hop / R&B Classics',
    duration: '1hr 20min',
    tracks: 20,
    plays: '9.7K',
    date: 'August 2024',
    image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=400&fit=crop',
    soundcloud: '#',
  },
]

const platforms = [
  { icon: Headphones, name: 'SoundCloud', color: 'hover:text-orange-400', href: '#' },
  { icon: YoutubeIcon, name: 'YouTube', color: 'hover:text-red-500', href: '#' },
  { icon: Music, name: 'Spotify', color: 'hover:text-green-400', href: '#' },
  { icon: AppleMusicIcon, name: 'Apple Music', color: 'hover:text-pink-400', href: '#' },
]

export default function MixtapesPage() {
  const [playingId, setPlayingId] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-charcoal to-[#0d0d0d]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_60%)] opacity-15" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
          
          {/* Audio visualizer bars */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 h-32 opacity-10">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gold rounded-t-full"
                animate={{ height: [10, 60, 20, 80, 30, 50] }}
                transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: i * 0.05 }}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-heading mb-4 block">Music Library</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              Mixtapes &{' '}
              <span className="text-gradient">Mixes</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my collection of curated mixes, live recordings, and exclusive tracks. 
              Stream, download, and vibe to the sounds of DJ SURE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Links */}
      <SectionWrapper dark>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              className={`flex items-center gap-3 px-6 py-4 glass rounded-xl ${platform.color} transition-all hover:scale-105 hover:gold-glow`}
            >
              <platform.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{platform.name}</span>
            </a>
          ))}
        </div>
      </SectionWrapper>

      {/* Mixtapes Grid */}
      <SectionWrapper>
        <SectionHeader subtitle="Latest Releases" title="Featured Mixtapes" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {mixtapes.map((mixtape) => (
            <motion.div
              key={mixtape.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="!p-0 overflow-hidden group">
                {/* Cover Art */}
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${mixtape.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setPlayingId(playingId === mixtape.id ? null : mixtape.id)}
                      className="w-16 h-16 rounded-full bg-gold flex items-center justify-center transition-transform hover:scale-110"
                    >
                      {playingId === mixtape.id ? (
                        <Pause className="w-7 h-7 text-matte-black" />
                      ) : (
                        <Play className="w-7 h-7 text-matte-black ml-1" />
                      )}
                    </button>
                  </div>
                  {/* Genre Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full">
                    <span className="text-xs text-gold">{mixtape.genre}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white">{mixtape.title}</h3>
                      <p className="text-xs text-gold/70">{mixtape.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span>{mixtape.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                    <span>{mixtape.tracks} tracks</span>
                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                    <span>{mixtape.plays} plays</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => setPlayingId(playingId === mixtape.id ? null : mixtape.id)}
                    >
                      {playingId === mixtape.id ? (
                        <><Pause className="w-3.5 h-3.5 mr-1.5" /> Pause</>
                      ) : (
                        <><Play className="w-3.5 h-3.5 mr-1.5" /> Play</>
                      )}
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Download className="w-3.5 h-3.5" />
                    </Button>
                    <a href={mixtape.soundcloud} className="p-2 rounded-lg glass hover:bg-orange-400/10 hover:text-orange-400 transition-colors">
                      <Headphones className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Now Playing Bar */}
      {playingId && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-gold/20 p-4"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${mixtapes.find(m => m.id === playingId)?.image})` }} />
              <div>
                <p className="text-sm font-medium text-white">{mixtapes.find(m => m.id === playingId)?.title}</p>
                <p className="text-xs text-gray-400">DJ SURE — {mixtapes.find(m => m.id === playingId)?.genre}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button size="sm" variant="ghost" onClick={() => setPlayingId(null)}>
                <Pause className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* CTA */}
      <section className="relative py-20 border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Want to Hear More?
            </h2>
            <p className="text-gray-300 mb-8">Follow DJ SURE on your favorite streaming platform for new releases and exclusive content.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {platforms.map((p) => (
                <a key={p.name} href={p.href} className={`flex items-center gap-2 px-5 py-3 glass rounded-xl ${p.color} transition-all hover:scale-105`}>
                  <p.icon className="w-4 h-4" />
                  <span className="text-sm">Follow on {p.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
