'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Calendar, MapPin, Users, DollarSign, Phone, Mail, 
  MessageSquare, Send, Check, ChevronDown 
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionWrapper, SectionHeader } from '@/components/sections/section-wrapper'

const eventTypes = [
  'Wedding', 'Traditional Wedding', 'White Wedding', 'Engagement',
  'Birthday Party', 'Corporate Event', 'Conference', 'Product Launch',
  'Award Ceremony', 'Gala Night', 'Fashion Show', 'Concert',
  'Music Festival', 'Club Event', 'Pool Party', 'Beach Party',
  'Yacht Party', 'Private Party', 'Graduation', 'Religious Event',
  'Funeral/Memorial', 'Charity Event', 'VIP Event', 'Other'
]

const guestRanges = [
  'Under 50', '50-100', '100-250', '250-500', '500-1000', '1000+'
]

const budgetRanges = [
  'Under GH₵2,000', 'GH₵2,000-5,000', 'GH₵5,000-10,000', 
  'GH₵10,000-20,000', 'GH₵20,000-50,000', '50,000+'
]

export default function BookingsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    eventType: '',
    eventDate: '',
    location: '',
    guests: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    equipment: false,
    hostesses: false,
    lighting: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-matte-black via-[#1a1400] to-matte-black" />
        <div className="relative z-10 max-w-lg mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 border border-green-500/30"
          >
            <Check className="w-10 h-10 text-green-400" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Booking Request Received
          </h2>
          <p className="text-gray-300 mb-8">
            Thank you! We&apos;ll review your request and get back to you within 24 hours 
            with a customized quote and availability.
          </p>
          <div className="space-y-3 mb-8 text-left glass rounded-xl p-6">
            <p className="text-sm text-gray-300"><span className="text-gold font-medium">Event:</span> {formData.eventType}</p>
            <p className="text-sm text-gray-300"><span className="text-gold font-medium">Date:</span> {formData.eventDate}</p>
            <p className="text-sm text-gray-300"><span className="text-gold font-medium">Location:</span> {formData.location}</p>
            <p className="text-sm text-gray-300"><span className="text-gold font-medium">Guests:</span> {formData.guests}</p>
          </div>
          <p className="text-xs text-gray-500">
            In a hurry? Call or WhatsApp us directly.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <Button variant="primary" size="md">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button variant="outline" size="md">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    )
  }

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
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-heading mb-4 block">Get Started</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Book <span className="text-gradient">DJ SURE</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Tell us about your event and we&apos;ll create a customized entertainment 
              experience. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 glass rounded-2xl p-6 md:p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-heading font-bold text-white mb-6">Event Details</h2>

            {/* Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Event Type *</label>
                <select
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                >
                  <option value="" className="bg-matte-black">Select event type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type} className="bg-matte-black">{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Event Date *</label>
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white focus:outline-none focus:border-gold/50 transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Location *</label>
                <input
                  type="text"
                  required
                  placeholder="City, Venue"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Estimated Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                >
                  <option value="" className="bg-matte-black">Select range</option>
                  {guestRanges.map((range) => (
                    <option key={range} value={range} className="bg-matte-black">{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                >
                  <option value="" className="bg-matte-black">Select budget</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range} className="bg-matte-black">{range}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Services */}
            <div>
              <label className="block text-sm text-gray-300 mb-3">Additional Services Needed</label>
              <div className="flex flex-wrap gap-3">
                {[
                  { key: 'equipment', label: 'Equipment Rental' },
                  { key: 'hostesses', label: 'Hostesses/Crew' },
                  { key: 'lighting', label: 'Lighting Setup' },
                ].map((service) => (
                  <button
                    key={service.key}
                    type="button"
                    onClick={() => setFormData({ ...formData, [service.key]: !(formData as any)[service.key] })}
                    className={`px-4 py-2 rounded-lg text-sm transition-all border ${
                      (formData as any)[service.key]
                        ? 'bg-gold/20 border-gold/50 text-gold'
                        : 'glass border-white/10 text-gray-400 hover:text-gold hover:border-gold/30'
                    }`}
                  >
                    {(formData as any)[service.key] && <Check className="w-3 h-3 inline mr-1.5" />}
                    {service.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="golden-divider my-4" />

            <h2 className="text-2xl font-heading font-bold text-white mb-6">Contact Information</h2>

            {/* Contact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+233 XX XXX XXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Additional Message</label>
              <textarea
                rows={4}
                placeholder="Tell us more about your event — what vibe are you looking for, favorite genres, special requests..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors resize-none"
              />
            </div>

            <Button type="submit" size="lg" variant="gold" className="w-full md:w-auto">
              <Send className="w-4 h-4 mr-2" />
              Submit Booking Request
            </Button>

            <p className="text-xs text-gray-500 mt-4">
              By submitting, you agree to our terms and privacy policy. We&apos;ll respond within 24 hours.
            </p>
          </motion.form>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a href="tel:+233****0000" className="flex items-center gap-3 text-sm text-gray-300 hover:text-gold transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call Us</p>
                    <p className="text-sm font-medium">+233 ** *** 0000</p>
                  </div>
                </a>
                <a href="mailto:bookings@djsure.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-gold transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm font-medium">bookings@djsure.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">WhatsApp</p>
                    <p className="text-sm font-medium">+233 ** *** 0000</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-4">Why Book DJ SURE?</h3>
              <ul className="space-y-3">
                {[
                  '12+ years professional experience',
                  '500+ events successfully delivered',
                  'Premium sound & lighting equipment',
                  'Professional, punctual, insured',
                  'Wide music library — all genres',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-gold rounded-2xl p-6 text-center"
            >
              <p className="text-gold text-sm tracking-[0.2em] uppercase font-heading mb-2">Need It Urgent?</p>
              <p className="text-white text-lg font-heading font-bold mb-2">Quick Booking</p>
              <p className="text-xs text-gray-400 mb-4">Call or WhatsApp for last-minute bookings</p>
              <Button variant="primary" size="sm" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call +233 ** *** 0000
              </Button>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
