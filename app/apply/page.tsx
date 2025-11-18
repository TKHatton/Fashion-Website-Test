import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-4">Start Your Application</h1>
          <p className="text-xl text-gray-600 mb-8">
            Submit your AI-generated fashion collection to the AI Fashion Awards
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Application Process</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Select Categories</h3>
                  <p className="text-gray-600">Choose 1-5 categories to enter ($45 each)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Upload Your Collection</h3>
                  <p className="text-gray-600">Bulk upload 35+ images and organize by category</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Write Your Design Statement</h3>
                  <p className="text-gray-600">Describe your creative vision (200-300 words)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Submit & Pay</h3>
                  <p className="text-gray-600">Complete your submission with secure payment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-lg mb-3">What You'll Need:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>20 runway look images (min 1024x1024px, JPG or PNG)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>5 accessory close-up images</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>5 behind-the-scenes images</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>3 editorial/advertising images</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>1 editorial image with She Is AI logo</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>1 moodboard image</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Optional: Up to 5 videos (max 60 seconds, max 100MB each)</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex-1">
              Continue to Application
            </button>
            <Link href="/" className="btn-secondary flex-1 text-center">
              Learn More First
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Full application system coming soon. Authentication and upload functionality under construction.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
