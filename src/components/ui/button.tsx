import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'relative inline-flex items-center justify-center font-heading font-semibold tracking-wider uppercase transition-all duration-300 rounded-lg overflow-hidden group',
          {
            'bg-gradient-to-r from-gold to-gold-dark text-matte-black hover:shadow-lg hover:gold-glow': variant === 'primary',
            'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-gold/50': variant === 'secondary',
            'bg-transparent text-gold border border-gold/50 hover:bg-gold/10 hover:border-gold': variant === 'outline',
            'bg-transparent text-gold hover:bg-gold/10': variant === 'ghost',
            'bg-gradient-to-r from-gold via-gold-light to-gold text-matte-black shadow-lg gold-glow': variant === 'gold',
          },
          {
            'px-4 py-2 text-xs': size === 'sm',
            'px-6 py-3 text-sm': size === 'md',
            'px-8 py-4 text-base': size === 'lg',
            'px-10 py-5 text-lg': size === 'xl',
          },
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
