"use client"

import { Phone, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function FloatingActionButtons() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="flex flex-col space-y-4 mb-4 animate-fade-in">
          <a
            href="tel:01555661521"
            className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center shadow-lg hover:bg-gold-dark transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/+201500604440"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      )}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-gold text-black flex items-center justify-center shadow-lg hover:bg-gold-dark transition-colors"
        aria-label="Toggle contact options"
      >
        {isExpanded ? <span className="text-2xl font-bold">×</span> : <Phone className="w-6 h-6" />}
      </button>
    </div>
  )
}

