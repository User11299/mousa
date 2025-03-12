"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"

export default function HeroSlider() {
  const { t, language } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Doctor's Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-12%20at%204.43.17%20AM-lUUBOnXNlrMalevxDktT0B2a2ayzC7.jpeg"
                alt="Dr. Mousa Abdulnasser"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gold-gradient">{t("clinic_name")}</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {language === "en"
                ? "Professional dental care with the latest technology"
                : "رعاية الأسنان الاحترافية بأحدث التقنيات"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="tel:01555661521"
                className="bg-gold hover:bg-gold-dark text-black font-bold py-3 px-8 rounded-full transition-colors"
              >
                {t("appointment_btn")}
              </a>
              <a
                href="https://wa.me/+201500604440"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-black font-bold py-3 px-8 rounded-full transition-colors"
              >
                {language === "en" ? "WhatsApp" : "واتساب"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 -z-10 bg-black/90"></div>
    </section>
  )
}

