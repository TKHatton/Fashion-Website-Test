'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  Sparkles, Award, Target, BookOpen, DollarSign, Users,
  TrendingUp, Zap, Heart, Globe, Clock, ArrowRight,
  ChevronDown, ChevronUp, CheckCircle2, Star, GraduationCap,
  Briefcase, Lightbulb, Palette, Video
} from 'lucide-react'

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('tools')
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Countdown Timer to January 17, 2026
  useEffect(() => {
    const deadline = new Date('2026-01-17T23:59:59').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = deadline - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  return (
    <main className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-sheisai-crimson" />
              <span className="font-bold text-xl text-sheisai-black">She Is AI</span>
            </div>
            <div className="hidden lg:flex space-x-6">
              <a href="#mission" className="text-sheisai-black hover:text-sheisai-crimson transition text-sm font-medium">Mission</a>
              <a href="#pathways" className="text-sheisai-black hover:text-sheisai-crimson transition text-sm font-medium">Opportunities</a>
              <a href="#categories" className="text-sheisai-black hover:text-sheisai-crimson transition text-sm font-medium">Categories</a>
              <a href="#who" className="text-sheisai-black hover:text-sheisai-crimson transition text-sm font-medium">Who This Is For</a>
              <a href="#value" className="text-sheisai-black hover:text-sheisai-crimson transition text-sm font-medium">Value</a>
            </div>
            <div>
              <Link href="/apply" className="bg-sheisai-crimson hover:bg-sheisai-coral text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl text-sm">
                Apply Now - $45
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mission First */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero/presskit-fashion-3-us.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for text readability - lighter so image shows through */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/80 to-white/75"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-sheisai-crimson/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sheisai-mint/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>

        <div className="section-container relative z-10">
          {/* Editorial Offset Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="editorial-offset-left"
          >
            <div className="inline-flex items-center space-x-2 bg-sheisai-crimson/10 text-sheisai-crimson px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sheisai-crimson/30">
              <Heart className="h-4 w-4" />
              <span>Economic Empowerment Through AI</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-sheisai-black leading-tight">
              Get Your Break in <span className="gradient-text">Fashion</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 mb-6 leading-relaxed font-light">
              From AI Concept to Runway Reality
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              This is an empowerment program, not just a competition. AI makes fashion accessible by removing traditional barriers—no expensive fashion school, no professional design background needed. Turn your ideas into marketable designs in a sustainable, affordable way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/apply" className="bg-sheisai-crimson hover:bg-sheisai-coral text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl text-lg inline-flex items-center justify-center gap-2 group">
                <span>Apply Now - $45</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#how-it-works" className="bg-white hover:bg-gray-50 text-sheisai-crimson px-8 py-4 rounded-lg font-semibold border-2 border-sheisai-crimson transition-all text-lg">
                Learn How to Create AI Fashion
              </a>
            </div>

            {/* Countdown Timer */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-2 border-sheisai-crimson/20 shadow-lg max-w-2xl">
              <p className="text-sm font-semibold text-sheisai-crimson mb-3">Applications Close:</p>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sheisai-crimson">{timeLeft.days}</div>
                  <div className="text-xs text-gray-600 font-medium">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sheisai-crimson">{timeLeft.hours}</div>
                  <div className="text-xs text-gray-600 font-medium">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sheisai-crimson">{timeLeft.minutes}</div>
                  <div className="text-xs text-gray-600 font-medium">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sheisai-crimson">{timeLeft.seconds}</div>
                  <div className="text-xs text-gray-600 font-medium">Seconds</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3 text-center">Deadline: <strong>January 17, 2026</strong></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Multiple Pathways to Success - NEW */}
      <section id="pathways" className="section-container bg-sheisai-deepBlue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sheisai-mint/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="editorial-offset-right text-right mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">This Is NOT Just 5 Winners</h2>
            <p className="text-xl text-sheisai-mint">Multiple pathways to showcase your work and launch your career</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Finalist Program */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-sheisai-mint hover:border-sheisai-coral transition-all"
            >
              <Award className="h-12 w-12 text-sheisai-mint mb-4" />
              <h3 className="text-2xl font-bold mb-3">Finalist Program</h3>
              <p className="text-sheisai-warmBeige mb-4">5 finalists receive:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-sheisai-mint flex-shrink-0 mt-0.5" />
                  <span>6 months of industry mentorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-sheisai-mint flex-shrink-0 mt-0.5" />
                  <span>Pattern-making & production training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-sheisai-mint flex-shrink-0 mt-0.5" />
                  <span>Professional runway experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-sheisai-mint flex-shrink-0 mt-0.5" />
                  <span>$10,000-$15,000 value program</span>
                </li>
              </ul>
              <div className="bg-sheisai-mint/20 rounded-lg p-3 border border-sheisai-mint/30">
                <p className="text-sm font-semibold">Your $45 entry could get you into a professional mentorship program worth thousands</p>
              </div>
            </motion.div>

            {/* 3DD Metaverse Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-sheisai-coral hover:border-sheisai-mint transition-all"
            >
              <Globe className="h-12 w-12 text-sheisai-coral mb-4" />
              <h3 className="text-2xl font-bold mb-3">3DD Metaverse Gallery</h3>
              <p className="text-sheisai-warmBeige mb-4">Many more designers featured with:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-sheisai-coral flex-shrink-0 mt-0.5" />
                  <span>Global metaverse showcase</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-sheisai-coral flex-shrink-0 mt-0.5" />
                  <span>Commercial sales opportunity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-sheisai-coral flex-shrink-0 mt-0.5" />
                  <span>International exposure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-sheisai-coral flex-shrink-0 mt-0.5" />
                  <span>Real commercial potential</span>
                </li>
              </ul>
              <div className="bg-sheisai-coral/20 rounded-lg p-3 border border-sheisai-coral/30">
                <p className="text-sm font-semibold">From AI concept to metaverse showcase—reach global audiences</p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-sheisai-mint">Multiple opportunities. Multiple pathways. Real career acceleration.</p>
          </div>
        </motion.div>
      </section>

      {/* What This Program Really Is */}
      <section className="section-container bg-gradient-to-br from-white to-sheisai-warmBeige/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="editorial-offset-left"
        >
          <div className="inline-flex items-center space-x-2 bg-sheisai-deepBlue/10 text-sheisai-deepBlue px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sheisai-deepBlue/30">
            <Target className="h-4 w-4" />
            <span>Career Accelerator</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-sheisai-black">What This Program Really Is</h2>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            This isn't just about creating pretty designs. It's a career accelerator program that uses fashion as the vehicle and AI as the tool to open doors that have traditionally been closed.
          </p>

          {/* Timeline */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 max-w-3xl mb-8">
            <h3 className="text-2xl font-bold mb-6 text-sheisai-black flex items-center gap-2">
              <Clock className="h-6 w-6 text-sheisai-crimson" />
              The Journey
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-sheisai-crimson rounded-full"></div>
                <div>
                  <div className="font-bold text-sheisai-crimson mb-1">Now - January 17, 2026</div>
                  <p className="text-gray-700">Applications open. Create your AI fashion collections.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-sheisai-coral rounded-full"></div>
                <div>
                  <div className="font-bold text-sheisai-coral mb-1">January - February 2026</div>
                  <p className="text-gray-700">Judging period. Expert panel reviews all submissions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-sheisai-mint rounded-full"></div>
                <div>
                  <div className="font-bold text-sheisai-mint mb-1">March 2026</div>
                  <p className="text-gray-700">Finalists announced. 3DD Metaverse Gallery selections revealed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-sheisai-deepBlue rounded-full"></div>
                <div>
                  <div className="font-bold text-sheisai-deepBlue mb-1">March - September 2026</div>
                  <p className="text-gray-700">6 months of mentorship for finalists. Pattern-making, production training, AI integration.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-sheisai-crimson rounded-full"></div>
                <div>
                  <div className="font-bold text-sheisai-crimson mb-1">Fall 2026</div>
                  <p className="text-gray-700">Runway show. Commercial sales launch. Media exposure.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sheisai-crimson/5 border-l-4 border-sheisai-crimson rounded-r-xl p-6 max-w-3xl">
            <p className="text-lg font-semibold text-sheisai-black mb-2">Clear Value Proposition</p>
            <p className="text-gray-700">Learn real skills. Build real connections. Create real opportunities. Whether you become a finalist or feature in the 3DD Metaverse Gallery, you gain industry experience and global exposure.</p>
          </div>
        </motion.div>
      </section>

      {/* How to Create AI Fashion - Interactive Tutorial */}
      <section id="how-it-works" className="section-container bg-sheisai-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-sheisai-mint/20 text-sheisai-mint px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sheisai-mint/30">
              <BookOpen className="h-4 w-4" />
              <span>Learn AI Fashion</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How to Create AI Fashion</h2>
            <p className="text-xl text-gray-300">Never created fashion with AI before? We'll guide you through the entire process.</p>
          </div>

          {/* Interactive Accordion */}
          <div className="space-y-4">
            {/* AI Tool Selection */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              <button
                onClick={() => toggleAccordion('tools')}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-sheisai-mint" />
                  <span className="text-xl font-bold">1. Choose Your AI Tools</span>
                </div>
                {openAccordion === 'tools' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openAccordion === 'tools' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="bg-white/5 rounded-lg p-6">
                    <p className="text-gray-300 mb-4">Popular AI tools for fashion design:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-bold text-sheisai-mint mb-2">Midjourney</h4>
                        <p className="text-sm text-gray-300">Industry standard for high-quality fashion imagery. Great for detailed, artistic designs.</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-bold text-sheisai-mint mb-2">DALL-E 3</h4>
                        <p className="text-sm text-gray-300">Excellent for specific styling and text integration. User-friendly interface.</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-bold text-sheisai-mint mb-2">Stable Diffusion</h4>
                        <p className="text-sm text-gray-300">Free and customizable. Great for experimentation and iteration.</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-bold text-sheisai-mint mb-2">Leonardo AI</h4>
                        <p className="text-sm text-gray-300">Fast generation with fashion-specific models. Good for quick concepts.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Prompting Guidance */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              <button
                onClick={() => toggleAccordion('prompting')}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Palette className="h-6 w-6 text-sheisai-coral" />
                  <span className="text-xl font-bold">2. Master Effective Prompting</span>
                </div>
                {openAccordion === 'prompting' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openAccordion === 'prompting' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="bg-white/5 rounded-lg p-6">
                    <p className="text-gray-300 mb-4">Key elements of a great fashion prompt:</p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-sheisai-coral flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Garment Type:</strong> Be specific - "evening gown", "cargo pants", "oversized hoodie"
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-sheisai-coral flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Materials & Textures:</strong> "silk", "metallic", "sequined", "cotton jersey"
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-sheisai-coral flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Color Palette:</strong> Specific colors and combinations
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-sheisai-coral flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Style & Aesthetic:</strong> "minimalist", "avant-garde", "streetwear", "haute couture"
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-sheisai-coral flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Photography Style:</strong> "editorial fashion photography", "runway shot", "lookbook style"
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4 bg-sheisai-coral/20 rounded-lg p-4 border border-sheisai-coral/30">
                      <p className="text-sm font-semibold text-white mb-2">Example Prompt:</p>
                      <p className="text-sm text-gray-200 italic">"Avant-garde evening gown with asymmetrical draping, metallic rose gold fabric, architectural structure, haute couture elegance, dramatic train, Met Gala worthy, high-fashion editorial photography, 8k quality"</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Collection Creation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              <button
                onClick={() => toggleAccordion('collection')}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-sheisai-mint" />
                  <span className="text-xl font-bold">3. Build Your 5-Piece Collection</span>
                </div>
                {openAccordion === 'collection' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openAccordion === 'collection' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="bg-white/5 rounded-lg p-6">
                    <p className="text-gray-300 mb-4">Each category requires a cohesive 5-piece collection:</p>
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-bold text-sheisai-mint mb-2">✓ Cohesive Theme</h4>
                        <p className="text-sm text-gray-300">All 5 pieces should tell a story and work together visually</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-bold text-sheisai-mint mb-2">✓ Consistent Color Palette</h4>
                        <p className="text-sm text-gray-300">Use 2-4 main colors that repeat throughout the collection</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-bold text-sheisai-mint mb-2">✓ Variety Within Unity</h4>
                        <p className="text-sm text-gray-300">Mix different garment types while maintaining visual harmony</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="font-bold text-sheisai-mint mb-2">✓ Category-Appropriate</h4>
                        <p className="text-sm text-gray-300">Make sure designs fit your chosen category (Red Carpet, Streetwear, etc.)</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Submission Preparation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
              <button
                onClick={() => toggleAccordion('submission')}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-sheisai-coral" />
                  <span className="text-xl font-bold">4. Prepare Your Submission</span>
                </div>
                {openAccordion === 'submission' ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openAccordion === 'submission' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="bg-white/5 rounded-lg p-6">
                    <p className="text-gray-300 mb-4">What you need to submit (per category):</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-sheisai-coral flex-shrink-0 mt-0.5" />
                          20 runway look images
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-sheisai-coral flex-shrink-0 mt-0.5" />
                          5 accessory close-ups
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-sheisai-coral flex-shrink-0 mt-0.5" />
                          5 behind-the-scenes images
                        </li>
                      </ul>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-sheisai-coral flex-shrink-0 mt-0.5" />
                          3 editorial/advertising images
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-sheisai-coral flex-shrink-0 mt-0.5" />
                          1 editorial with She Is AI logo
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-sheisai-coral flex-shrink-0 mt-0.5" />
                          1 moodboard + design statement
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/apply" className="bg-sheisai-mint hover:bg-sheisai-mint/90 text-sheisai-black px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-lg">
              <span>Start Creating Your Collection</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* True Value / Cost Comparison */}
      <section id="value" className="section-container bg-gradient-to-br from-sheisai-warmBeige/30 via-white to-sheisai-coral/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="editorial-offset-right text-right mb-12">
            <div className="inline-flex items-center space-x-2 bg-sheisai-crimson/10 text-sheisai-crimson px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sheisai-crimson/30">
              <DollarSign className="h-4 w-4" />
              <span>Real Value</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sheisai-black">$45 vs. $120,000</h2>
            <p className="text-xl text-gray-700">Fashion school isn't the only path anymore</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Fashion School */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-100 rounded-2xl p-8 border-2 border-gray-300 relative"
            >
              <div className="absolute top-4 right-4 bg-gray-400 text-white text-xs px-3 py-1 rounded-full font-semibold">Traditional Path</div>
              <GraduationCap className="h-12 w-12 text-gray-500 mb-4" />
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Fashion School</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                  <span className="text-gray-700">Tuition (4 years)</span>
                  <span className="font-bold text-gray-800">$80,000 - $200,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                  <span className="text-gray-700">Materials & Supplies</span>
                  <span className="font-bold text-gray-800">$10,000+</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                  <span className="text-gray-700">Time Investment</span>
                  <span className="font-bold text-gray-800">4 years</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-300">
                  <span className="text-gray-700">Guaranteed Outcome</span>
                  <span className="font-bold text-gray-800">❌ None</span>
                </div>
              </div>

              <div className="bg-gray-200 rounded-lg p-4">
                <p className="text-2xl font-bold text-gray-800 mb-1">~$120,000</p>
                <p className="text-sm text-gray-600">Average cost + no guaranteed job placement</p>
              </div>
            </motion.div>

            {/* She Is AI Program */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-sheisai-crimson to-sheisai-coral rounded-2xl p-8 border-2 border-sheisai-crimson text-white relative shadow-2xl"
            >
              <div className="absolute top-4 right-4 bg-sheisai-mint text-sheisai-black text-xs px-3 py-1 rounded-full font-semibold">AI-Powered Path</div>
              <Sparkles className="h-12 w-12 text-white mb-4" />
              <h3 className="text-3xl font-bold mb-6">She Is AI Fashion Awards</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-white/30">
                  <span>Entry Fee (per category)</span>
                  <span className="font-bold">$45</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/30">
                  <span>Materials & Supplies</span>
                  <span className="font-bold">AI tools (many free)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/30">
                  <span>Time Investment</span>
                  <span className="font-bold">Flexible</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/30">
                  <span>Potential Value (Finalist)</span>
                  <span className="font-bold">✓ $10K-$15K</span>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                <p className="text-3xl font-bold mb-1">$45</p>
                <p className="text-sm">Could get you into a professional mentorship program</p>
              </div>

              <div className="bg-sheisai-mint/30 backdrop-blur-sm rounded-lg p-4 border border-sheisai-mint/50">
                <p className="font-semibold mb-2">✓ Portfolio building opportunity</p>
                <p className="font-semibold mb-2">✓ Industry connections & mentorship</p>
                <p className="font-semibold mb-2">✓ Global exposure (3DD Gallery)</p>
                <p className="font-semibold">✓ Learn cutting-edge AI skills</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-sheisai-deepBlue text-white rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">AI is Democratizing Fashion</h3>
              <p className="text-lg text-gray-200 mb-6">No expensive materials. No fashion school debt. No barrier to entry. Just your creativity and AI tools.</p>
              <Link href="/apply" className="bg-sheisai-mint hover:bg-sheisai-mint/90 text-sheisai-black px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2">
                <span>Apply Now for $45</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Who This Program Serves - 5 Personas */}
      <section id="who" className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-sheisai-mint/10 text-sheisai-deepBlue px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sheisai-mint/30">
              <Users className="h-4 w-4" />
              <span>Who This Is For</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sheisai-black">Is This Program For You?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We designed this program for five specific groups. Find yourself here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* High School Students */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-sheisai-crimson/10 to-sheisai-coral/10 p-8 rounded-2xl border-2 border-sheisai-crimson/30 hover:border-sheisai-crimson hover:shadow-xl transition-all"
            >
              <GraduationCap className="h-12 w-12 text-sheisai-crimson mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-sheisai-black">High School Students</h3>
              <p className="text-gray-700 mb-4">Exploring if fashion could be your career path</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-sheisai-crimson mb-2">You're thinking:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• "Is fashion a viable career for me?"</li>
                  <li>• "I can't afford fashion school"</li>
                  <li>• "I don't know where to start"</li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-semibold text-sheisai-black mb-2">You'll Gain:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Real portfolio piece for college apps</li>
                  <li>✓ Career clarity & validation</li>
                  <li>✓ Industry mentorship if selected</li>
                </ul>
              </div>
            </motion.div>

            {/* College Students */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-sheisai-mint/10 to-sheisai-deepBlue/10 p-8 rounded-2xl border-2 border-sheisai-mint/30 hover:border-sheisai-mint hover:shadow-xl transition-all"
            >
              <BookOpen className="h-12 w-12 text-sheisai-deepBlue mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-sheisai-black">College Students</h3>
              <p className="text-gray-700 mb-4">Building your portfolio and seeking competitive advantages</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-sheisai-deepBlue mb-2">You're thinking:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• "My portfolio needs real projects"</li>
                  <li>• "Physical samples are expensive"</li>
                  <li>• "I need industry connections"</li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-semibold text-sheisai-black mb-2">You'll Gain:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Professional portfolio piece</li>
                  <li>✓ Industry connections</li>
                  <li>✓ Resume differentiator</li>
                </ul>
              </div>
            </motion.div>

            {/* Recent Graduates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-sheisai-coral/10 to-sheisai-warmBeige/20 p-8 rounded-2xl border-2 border-sheisai-coral/30 hover:border-sheisai-coral hover:shadow-xl transition-all"
            >
              <TrendingUp className="h-12 w-12 text-sheisai-coral mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-sheisai-black">Recent Graduates</h3>
              <p className="text-gray-700 mb-4">Need your breakthrough into the fashion industry</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-sheisai-coral mb-2">You're thinking:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• "Can't get my foot in the door"</li>
                  <li>• "Entry-level jobs are hard to find"</li>
                  <li>• "How do I get industry visibility?"</li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-semibold text-sheisai-black mb-2">You'll Gain:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Direct industry visibility</li>
                  <li>✓ Professional mentorship</li>
                  <li>✓ Confidence & validation</li>
                </ul>
              </div>
            </motion.div>

            {/* Career Changers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-sheisai-deepBlue/10 to-sheisai-mint/10 p-8 rounded-2xl border-2 border-sheisai-deepBlue/30 hover:border-sheisai-deepBlue hover:shadow-xl transition-all"
            >
              <Briefcase className="h-12 w-12 text-sheisai-deepBlue mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-sheisai-black">Career Changers</h3>
              <p className="text-gray-700 mb-4">Testing if fashion is your next career move</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-sheisai-deepBlue mb-2">You're thinking:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• "Can't quit my job for fashion school"</li>
                  <li>• "Is it too late to change careers?"</li>
                  <li>• "Am I good enough?"</li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-semibold text-sheisai-black mb-2">You'll Gain:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Low-risk way to test fashion</li>
                  <li>✓ Skills validation</li>
                  <li>✓ Clear path forward</li>
                </ul>
              </div>
            </motion.div>

            {/* Self-Taught Creatives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-sheisai-warmBeige/30 to-sheisai-coral/10 p-8 rounded-2xl border-2 border-sheisai-crimson/30 hover:border-sheisai-crimson hover:shadow-xl transition-all"
            >
              <Lightbulb className="h-12 w-12 text-sheisai-crimson mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-sheisai-black">Self-Taught Creatives</h3>
              <p className="text-gray-700 mb-4">Need professional validation for your skills</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-sheisai-crimson mb-2">You're thinking:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• "Not taken seriously without a degree"</li>
                  <li>• "Dealing with imposter syndrome"</li>
                  <li>• "How do I professionalize my work?"</li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-semibold text-sheisai-black mb-2">You'll Gain:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Professional validation</li>
                  <li>✓ Recognition independent of credentials</li>
                  <li>✓ Creative community</li>
                </ul>
              </div>
            </motion.div>

            {/* Universal CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-sheisai-crimson to-sheisai-coral p-8 rounded-2xl text-white flex items-center justify-center hover:shadow-2xl transition-all"
            >
              <div className="text-center">
                <Star className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">See Yourself Here?</h3>
                <p className="text-white/90 mb-6">Your talent matters more than your credentials</p>
                <Link href="/apply" className="bg-white text-sheisai-crimson hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                  <span>Start Your Application</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Universal Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 bg-sheisai-black text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-6 text-center">We Understand These Barriers</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">💰</div>
                <p className="font-semibold mb-2">Fashion is Expensive</p>
                <p className="text-sm text-gray-300">School costs $120K+. AI costs $45.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🚪</div>
                <p className="font-semibold mb-2">Doors Are Closed</p>
                <p className="text-sm text-gray-300">Need connections & credentials. AI opens new paths.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">❓</div>
                <p className="font-semibold mb-2">Imposter Syndrome</p>
                <p className="text-sm text-gray-300">"Is this for me?" Yes. This is for you.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories Section - 5 Full-Width Blocks */}
      <section id="categories" className="py-0">
        <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-sheisai-crimson/10 text-sheisai-crimson px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sheisai-crimson/30">
              <Palette className="h-4 w-4" />
              <span>5 Categories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sheisai-black">Explore the Categories</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose from five distinct fashion categories. Each requires a unique 5-piece collection. Entry fee: $45 per category.
            </p>
          </motion.div>
        </div>

        {/* Red Carpet Category */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="category-gradient-red-carpet text-white py-24 relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/categories/red-carpet.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 category-gradient-red-carpet opacity-80"></div>
          <div className="section-container relative z-10">
            <div className="editorial-offset-left max-w-3xl">
              <div className="inline-block bg-sheisai-crimson px-4 py-2 rounded-full text-sm font-bold mb-4">RED CARPET</div>
              <h3 className="text-5xl md:text-6xl font-bold mb-6">Glamour. Drama. Artistry.</h3>
              <p className="text-xl mb-6 text-gray-100">
                High-glamour, statement-making looks designed for global premieres, galas, and fashion's biggest stages. Think Met Gala, Oscars, and couture-level vision.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-bold mb-2 text-sheisai-mint">What Belongs Here:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Evening gowns & cocktail dresses</li>
                    <li>• Avant-garde tuxedos</li>
                    <li>• Sculptural capes & outerwear</li>
                    <li>• Wearable art pieces</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-sheisai-mint">Design Focus:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Drama & red carpet presence</li>
                    <li>• Luxe fabrications (sequins, silk)</li>
                    <li>• Architectural innovation</li>
                    <li>• Show-stopping silhouettes</li>
                  </ul>
                </div>
              </div>
              <Link href="/apply" className="bg-white text-sheisai-crimson hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2">
                <span>Enter Red Carpet - $45</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Loungewear Category */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sheisai-black py-24 relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/categories/loungewear.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-white/20"></div>
          <div className="absolute inset-0 category-gradient-loungewear opacity-70"></div>
          <div className="section-container relative z-10">
            <div className="editorial-offset-right max-w-3xl ml-auto text-right">
              <div className="inline-block bg-sheisai-coral px-4 py-2 rounded-full text-sm font-bold mb-4 text-white">LOUNGEWEAR</div>
              <h3 className="text-5xl md:text-6xl font-bold mb-6">Comfort. Refinement. Ritual.</h3>
              <p className="text-xl mb-6 text-gray-800">
                Luxurious, comfortable designs that elevate rest and sensuality. From reimagined intimates to indulgent sleepwear. Comfort is the canvas, refinement is the frame.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                <div>
                  <h4 className="font-bold mb-2 text-sheisai-coral">What Belongs Here:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Silk pajama sets</li>
                    <li>• Luxurious robes & kimonos</li>
                    <li>• Slip dresses</li>
                    <li>• Refined sleep shirts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-sheisai-coral">Design Focus:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Sensory luxury</li>
                    <li>• Quality textiles (silk, satin)</li>
                    <li>• Intimate elegance</li>
                    <li>• Personal sanctuary aesthetic</li>
                  </ul>
                </div>
              </div>
              <Link href="/apply" className="bg-sheisai-coral text-white hover:bg-sheisai-crimson px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2">
                <span>Enter Loungewear - $45</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Athleisurewear Category */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white py-24 relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/categories/athleisurewear.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 category-gradient-athleisurewear opacity-80"></div>
          <div className="section-container relative z-10">
            <div className="editorial-offset-left max-w-3xl">
              <div className="inline-block bg-sheisai-mint text-sheisai-black px-4 py-2 rounded-full text-sm font-bold mb-4">ATHLEISUREWEAR</div>
              <h3 className="text-5xl md:text-6xl font-bold mb-6">Performance. Energy. Style.</h3>
              <p className="text-xl mb-6 text-gray-100">
                Where performance meets presence. Designs that blend mobility, energy, and personal style, created for movement and modern life.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-bold mb-2 text-sheisai-mint">What Belongs Here:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Performance leggings & sports bras</li>
                    <li>• Athletic jackets & hoodies</li>
                    <li>• Joggers & track pants</li>
                    <li>• Training tops with tech details</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-sheisai-mint">Design Focus:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Functional performance</li>
                    <li>• Style in motion</li>
                    <li>• Technical innovation (mesh, panels)</li>
                    <li>• Bold color blocking</li>
                  </ul>
                </div>
              </div>
              <Link href="/apply" className="bg-sheisai-mint text-sheisai-black hover:bg-sheisai-mint/90 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2">
                <span>Enter Athleisurewear - $45</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Streetwear Category */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white py-24 relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/categories/streetwear.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 category-gradient-streetwear opacity-80"></div>
          <div className="section-container relative z-10">
            <div className="editorial-offset-right max-w-3xl ml-auto text-right">
              <div className="inline-block bg-sheisai-coral px-4 py-2 rounded-full text-sm font-bold mb-4">STREETWEAR</div>
              <h3 className="text-5xl md:text-6xl font-bold mb-6">Culture. Edge. Identity.</h3>
              <p className="text-xl mb-6 text-gray-100">
                Culture-forward fashion with bold energy and global influence. A space for experimentation, graphics, layering, and silhouettes that challenge convention.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                <div>
                  <h4 className="font-bold mb-2 text-sheisai-coral">What Belongs Here:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Oversized hoodies & graphic tees</li>
                    <li>• Utility jackets & outerwear</li>
                    <li>• Cargo pants & wide-leg trousers</li>
                    <li>• Layered looks & bomber jackets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-sheisai-coral">Design Focus:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Cultural commentary</li>
                    <li>• Bold graphics & typography</li>
                    <li>• Urban authenticity</li>
                    <li>• Boundary-pushing design</li>
                  </ul>
                </div>
              </div>
              <Link href="/apply" className="bg-white text-sheisai-crimson hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2">
                <span>Enter Streetwear - $45</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Proleisurewear™ Category */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white py-24 relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/categories/proleisurewear.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 category-gradient-proleisurewear opacity-80"></div>
          <div className="section-container relative z-10">
            <div className="editorial-offset-left max-w-3xl">
              <div className="inline-block bg-sheisai-deepBlue px-4 py-2 rounded-full text-sm font-bold mb-4">PROLEISUREWEAR™</div>
              <h3 className="text-5xl md:text-6xl font-bold mb-6">Professional. Comfortable. Hybrid.</h3>
              <p className="text-xl mb-6 text-gray-100">
                Fashion for the executive, remote-first, hybrid world. Designed for creative leaders who need to be camera-ready yet comfortable—professional enough for Zoom, cozy enough for home.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-bold mb-2 text-sheisai-mint">What Belongs Here:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Structured blazers with soft bottoms</li>
                    <li>• Elevated knit sets</li>
                    <li>• Hybrid work dresses</li>
                    <li>• Camera-ready comfortable pieces</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-sheisai-mint">Design Focus:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Camera-ready polish</li>
                    <li>• All-day comfort</li>
                    <li>• Modern work-life integration</li>
                    <li>• Professional meets practical</li>
                  </ul>
                </div>
              </div>
              <Link href="/apply" className="bg-white text-sheisai-deepBlue hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2">
                <span>Enter Proleisurewear™ - $45</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why This Initiative Matters */}
      <section id="mission" className="section-container bg-gradient-to-br from-sheisai-deepBlue to-sheisai-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-sheisai-mint/20 text-sheisai-mint px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sheisai-mint/30">
              <Heart className="h-4 w-4" />
              <span>Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why This Initiative Matters</h2>
            <p className="text-2xl text-gray-300 mb-8">
              Economic empowerment is at the heart of She Is AI
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Fashion is the vehicle, AI is the tool. The real goal is helping people gain skills, income, and opportunities. AI makes fashion accessible by removing traditional barriers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Globe className="h-12 w-12 text-sheisai-mint mb-4" />
              <h3 className="text-2xl font-bold mb-3">Democratizing Fashion</h3>
              <p className="text-gray-300">Opening doors that have traditionally been closed, especially for women, youth, and underserved communities.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <DollarSign className="h-12 w-12 text-sheisai-mint mb-4" />
              <h3 className="text-2xl font-bold mb-3">Breaking Down Barriers</h3>
              <p className="text-gray-300">No expensive fashion school ($120K+). No professional design background needed. Just $45 and your creativity.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <TrendingUp className="h-12 w-12 text-sheisai-mint mb-4" />
              <h3 className="text-2xl font-bold mb-3">Creating Opportunity</h3>
              <p className="text-gray-300">Real mentorship. Real production. Real career acceleration. Multiple pathways to success for many participants.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sheisai-crimson to-sheisai-coral rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Vision for Change</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We envision a fashion industry where talent matters more than credentials, where AI tools open doors instead of gatekeeping, and where anyone with creativity can launch a fashion career.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-lg font-semibold">
              <div>
                <div className="text-4xl font-bold mb-2">$45</div>
                <div className="text-sm">vs. $120,000 fashion school</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-sm">finalists + gallery features</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Global</div>
                <div className="text-sm">metaverse exposure</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What Finalists Actually Receive */}
      <section className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="editorial-offset-right text-right mb-16">
            <div className="inline-flex items-center space-x-2 bg-sheisai-crimson/10 text-sheisai-crimson px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sheisai-crimson/30">
              <Award className="h-4 w-4" />
              <span>Finalist Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sheisai-black">What Finalists Actually Receive</h2>
            <p className="text-xl text-gray-700">$10,000-$15,000 value program over 6 months</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-sheisai-crimson/10 to-sheisai-coral/10 p-6 rounded-xl border-2 border-sheisai-crimson/20 hover:border-sheisai-crimson hover:shadow-lg transition-all"
            >
              <Users className="h-10 w-10 text-sheisai-crimson mb-3" />
              <h3 className="text-xl font-bold mb-2 text-sheisai-black">Industry Mentorship</h3>
              <p className="text-gray-700 text-sm mb-2">6 months of one-on-one mentorship from working fashion professionals</p>
              <p className="text-xs text-sheisai-crimson font-semibold">Value: $3,000-$5,000</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-sheisai-mint/10 to-sheisai-deepBlue/10 p-6 rounded-xl border-2 border-sheisai-mint/20 hover:border-sheisai-mint hover:shadow-lg transition-all"
            >
              <Zap className="h-10 w-10 text-sheisai-deepBlue mb-3" />
              <h3 className="text-xl font-bold mb-2 text-sheisai-black">Pattern-Making Training</h3>
              <p className="text-gray-700 text-sm mb-2">Professional pattern-making and production training</p>
              <p className="text-xs text-sheisai-deepBlue font-semibold">Value: $2,000-$3,000</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-sheisai-coral/10 to-sheisai-warmBeige/20 p-6 rounded-xl border-2 border-sheisai-coral/20 hover:border-sheisai-coral hover:shadow-lg transition-all"
            >
              <Star className="h-10 w-10 text-sheisai-coral mb-3" />
              <h3 className="text-xl font-bold mb-2 text-sheisai-black">Runway Experience</h3>
              <p className="text-gray-700 text-sm mb-2">Professional runway show with your designs featured</p>
              <p className="text-xs text-sheisai-coral font-semibold">Value: $2,000-$3,000</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-sheisai-deepBlue/10 to-sheisai-mint/10 p-6 rounded-xl border-2 border-sheisai-deepBlue/20 hover:border-sheisai-deepBlue hover:shadow-lg transition-all"
            >
              <Lightbulb className="h-10 w-10 text-sheisai-deepBlue mb-3" />
              <h3 className="text-xl font-bold mb-2 text-sheisai-black">AI Integration Skills</h3>
              <p className="text-gray-700 text-sm mb-2">Advanced AI fashion design techniques and workflows</p>
              <p className="text-xs text-sheisai-deepBlue font-semibold">Value: $1,000-$2,000</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-sheisai-warmBeige/30 to-sheisai-coral/10 p-6 rounded-xl border-2 border-sheisai-crimson/20 hover:border-sheisai-crimson hover:shadow-lg transition-all"
            >
              <DollarSign className="h-10 w-10 text-sheisai-crimson mb-3" />
              <h3 className="text-xl font-bold mb-2 text-sheisai-black">Commercial Opportunity</h3>
              <p className="text-gray-700 text-sm mb-2">Your designs can be purchased and commercially sold</p>
              <p className="text-xs text-sheisai-crimson font-semibold">Value: Unlimited potential</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-sheisai-crimson/10 to-sheisai-coral/10 p-6 rounded-xl border-2 border-sheisai-crimson/20 hover:border-sheisai-crimson hover:shadow-lg transition-all"
            >
              <Globe className="h-10 w-10 text-sheisai-crimson mb-3" />
              <h3 className="text-xl font-bold mb-2 text-sheisai-black">Media & Exposure</h3>
              <p className="text-gray-700 text-sm mb-2">Featured in She Is AI magazine and media coverage</p>
              <p className="text-xs text-sheisai-crimson font-semibold">Value: $2,000+</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 text-center bg-gradient-to-r from-sheisai-crimson to-sheisai-coral rounded-2xl p-12 text-white max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-4">Your $45 Entry Could Change Everything</h3>
            <p className="text-xl mb-8">
              From AI concept to runway reality. From bedroom designer to industry professional. This is your break in fashion.
            </p>
            <Link href="/apply" className="bg-white text-sheisai-crimson hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2 text-lg">
              <span>Apply Now - Applications Close Jan 17, 2026</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-sheisai-black text-white py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-sheisai-crimson" />
                <span className="font-bold text-xl">She Is AI</span>
              </div>
              <p className="text-gray-400 text-sm">Economic empowerment through AI and fashion.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#mission" className="hover:text-sheisai-mint transition">Mission</a></li>
                <li><a href="#pathways" className="hover:text-sheisai-mint transition">Opportunities</a></li>
                <li><a href="#categories" className="hover:text-sheisai-mint transition">Categories</a></li>
                <li><a href="#who" className="hover:text-sheisai-mint transition">Who This Is For</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Program</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#how-it-works" className="hover:text-sheisai-mint transition">How It Works</a></li>
                <li><a href="#value" className="hover:text-sheisai-mint transition">Value Comparison</a></li>
                <li><Link href="/apply" className="hover:text-sheisai-mint transition">Apply Now</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/terms" className="hover:text-sheisai-mint transition">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-sheisai-mint transition">Privacy Policy</Link></li>
                <li><Link href="/contact" className="hover:text-sheisai-mint transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 She Is AI. All rights reserved. Proleisurewear™ is a trademark of She Is AI.</p>
            <p className="mt-2 text-xs">Empowering women, youth, and underserved communities through AI and fashion.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
