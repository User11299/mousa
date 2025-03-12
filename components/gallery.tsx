"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-03%20at%202.09.56%20AM%20%284%29-c9XvN9kEEEFbDHGTYUpHB7QgyJXmBP.jpeg",
    alt: "Professional dental work close-up",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-03%20at%202.09.57%20AM%20%281%29-luVxKHnnpEb4wcBUQU6Mex5sloa3ge.jpeg",
    alt: "Dental treatment result",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-03%20at%202.09.56%20AM%20%281%29-H1RKGBe8dN2qeF9AeVGkHUr08yu2vK.jpeg",
    alt: "Beautiful smile transformation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-03%20at%202.09.56%20AM-eegcRBLERekxyBXINB9qhsvi3jeiyP.jpeg",
    alt: "Perfect teeth alignment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-03%20at%202.09.56%20AM%20%282%29-2AFcMh9Mdv3cRkjcdi27fRt8y5HkPT.jpeg",
    alt: "Dental work showcase",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-03%20at%202.09.56%20AM%20%283%29-rbPUO28vqTyD7Wny6vyJ9mAteVth4n.jpeg",
    alt: "Professional dental care result",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-03%20at%202.09.58%20AM%20%281%29-lW7EhQ7GveBMbCPaUdBdUjfpqPcCQr.jpeg",
    alt: "Dental treatment showcase",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-03%20at%202.09.58%20AM-nxZ9FheQg5Kkw39muxFYleqZgrUdTj.jpeg",
    alt: "Beautiful smile result",
  },
]

export default function Gallery() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">{t("gallery_title")}</h2>
          <p className="text-xl text-gray-300 mb-4">{t("gallery_subtitle")}</p>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <span className="text-gold text-lg">{t("gallery_title")}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button className="absolute top-4 right-4 text-white hover:text-gold" onClick={() => setSelectedImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  )
}

