'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
  gold?: boolean
}

export function SectionWrapper({ children, className, id, dark = false, gold = false }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'relative py-16 md:py-24 lg:py-32 overflow-hidden',
        dark && 'bg-charcoal',
        gold && 'bg-gradient-to-b from-matte-black via-[#1a1400] to-matte-black',
        className
      )}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Gold accent gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/3 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeader({
  title,
  subtitle,
  gold = true,
  align = 'center'
}: {
  title: string
  subtitle?: string
  gold?: boolean
  align?: 'center' | 'left'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className={cn('mb-12 md:mb-16', align === 'center' ? 'text-center' : 'text-left')}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {subtitle && (
          <span className="inline-block text-gold text-sm md:text-base font-heading tracking-[0.3em] uppercase mb-3">
            {subtitle}
          </span>
        )}
        <h2 className={cn(
          'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight',
          gold ? 'text-gradient' : 'text-white'
        )}>
          {title}
        </h2>
        <div className={cn(
          'mt-4 h-px bg-gradient-to-r',
          align === 'center' ? 'mx-auto w-24' : '',
          'from-gold/80 via-gold to-gold/80'
        )} />
      </motion.div>
    </div>
  )
}
