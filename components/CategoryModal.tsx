'use client'

import { X } from 'lucide-react'
import { useEffect } from 'react'

interface CategoryModalProps {
  isOpen: boolean
  onClose: () => void
  category: {
    name: string
    description: string
    fullDescription: string
    examples: string[]
    videoExample?: string
    targetAudience: string
    whatToSubmit: string[]
  }
}

export default function CategoryModal({ isOpen, onClose, category }: CategoryModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-brand-black mb-3">{category.name}</h2>
              <p className="text-xl text-gray-600">{category.description}</p>
            </div>

            {/* Full Description */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">{category.fullDescription}</p>
            </div>

            {/* Target Audience */}
            <div className="mb-8 bg-brand-neutral-soft rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-black mb-3">Perfect For:</h3>
              <p className="text-gray-700">{category.targetAudience}</p>
            </div>

            {/* Example Images */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-brand-black mb-4">Visual Examples</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {category.examples.map((example, idx) => (
                  <div key={idx} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      {example}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">* Example images will be added</p>
            </div>

            {/* Video Example (if available) */}
            {category.videoExample && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-brand-black mb-4">Video Example</h3>
                <div className="aspect-video bg-black rounded-lg">
                  <div className="w-full h-full flex items-center justify-center text-white">
                    Video: {category.videoExample}
                  </div>
                </div>
              </div>
            )}

            {/* What to Submit */}
            <div className="mb-8 bg-brand-red/5 rounded-xl p-6 border border-brand-red/20">
              <h3 className="text-xl font-bold text-brand-black mb-4">What You'll Submit:</h3>
              <ul className="space-y-2">
                {category.whatToSubmit.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-red mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={onClose}
                className="bg-brand-red hover:bg-brand-red-light text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Choose This Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
