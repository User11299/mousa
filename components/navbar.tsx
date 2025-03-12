"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Menu, X, Globe } from "lucide-react"

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      const sections = ["home", "services", "gallery", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 py-2" : "bg-black/50 py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={
                scrolled
                  ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-01%20at%209.09.39%20PM-37MMg8mSpbnSBNc5J32QxbgIfm21tx.jpeg"
                  : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-01%20at%209.09.40%20PM-seyf8PBv7EBsg3jN2KGOQGopRZ81XF.jpeg"
              }
              alt="Dr. Mousa Abdulnasser Dental Clinic"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "services", "gallery", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-white hover:text-gold transition-colors font-heading text-lg ${
                  activeSection === section ? "text-gold" : ""
                }`}
              >
                {t(section)}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gold hover:text-gold-light transition-colors"
            >
              <Globe className="w-5 h-5 mr-1" />
              <span className="font-heading text-lg">{language === "en" ? "العربية" : "English"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleLanguage} className="text-gold hover:text-gold-light transition-colors mr-4">
              <Globe className="w-5 h-5" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-gold transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              {["home", "services", "gallery", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-white hover:text-gold transition-colors text-left font-heading text-lg ${
                    activeSection === section ? "text-gold" : ""
                  }`}
                >
                  {t(section)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

