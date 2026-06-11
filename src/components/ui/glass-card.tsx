'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  gold?: boolean
  hover?: boolean
  onClick?: () => void
}

export function GlassCard({ children, className, gold = false, hover = true, onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className={cn(
        'rounded-xl p-6',
        gold ? 'glass-gold' : 'glass',
        hover && 'cursor-pointer',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function GlassCardStatic({ children, className, gold = false }: { children: ReactNode; className?: string; gold?: boolean }) {
  return (
    <div className={cn('rounded-xl p-6', gold ? 'glass-gold' : 'glass', className)}>
      {children}
    </div>
  )
}
