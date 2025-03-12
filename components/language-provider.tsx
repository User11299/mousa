"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"
type Translations = Record<string, Record<Language, string>>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Translations = {
  home: {
    en: "Home",
    ar: "الرئيسية",
  },
  about: {
    en: "About Us",
    ar: "من نحن",
  },
  services: {
    en: "Services",
    ar: "الخدمات",
  },
  gallery: {
    en: "Gallery",
    ar: "معرض الصور",
  },
  contact: {
    en: "Contact",
    ar: "اتصل بنا",
  },
  clinic_name: {
    en: "Dr. Mousa Abdulnasser Dental Clinic",
    ar: "عيادة الدكتور موسى عبدالناصر لطب الأسنان",
  },
  hero_title: {
    en: "Your Smile, Our Passion",
    ar: "ابتسامتك، شغفنا",
  },
  hero_subtitle: {
    en: "Professional dental care with the latest technology",
    ar: "رعاية الأسنان الاحترافية بأحدث التقنيات",
  },
  appointment_btn: {
    en: "Book an Appointment",
    ar: "احجز موعد",
  },
  services_title: {
    en: "Our Services",
    ar: "خدماتنا",
  },
  orthodontics: {
    en: "Orthodontics",
    ar: "تقويم الأسنان",
  },
  cosmetic_dentistry: {
    en: "Cosmetic Dentistry",
    ar: "طب الأسنان التجميلي",
  },
  dental_implants: {
    en: "Dental Implants",
    ar: "زراعة الأسنان",
  },
  teeth_whitening: {
    en: "Teeth Whitening",
    ar: "تبييض الأسنان",
  },
  general_dentistry: {
    en: "General Dentistry",
    ar: "طب الأسنان العام",
  },
  pediatric_dentistry: {
    en: "Pediatric Dentistry",
    ar: "طب أسنان الأطفال",
  },
  gallery_title: {
    en: "Our Work",
    ar: "أعمالنا",
  },
  gallery_subtitle: {
    en: "See the transformations we've created",
    ar: "شاهد التحولات التي أنشأناها",
  },
  contact_title: {
    en: "Contact Us",
    ar: "اتصل بنا",
  },
  address: {
    en: "Visit Us",
    ar: "زورنا",
  },
  phone: {
    en: "Call Us",
    ar: "اتصل بنا",
  },
  social_media: {
    en: "Follow Us",
    ar: "تابعنا",
  },
  copyright: {
    en: "© 2025 Dr. Mousa Abdulnasser Dental Clinic. All rights reserved.",
    ar: "© 2025 عيادة الدكتور موسى عبدالناصر لطب الأسنان. جميع الحقوق محفوظة.",
  },
  book_appointment: {
    en: "Book an Appointment",
    ar: "احجز موعد",
  },
  appointment_description: {
    en: "Schedule your visit with our professional dental team",
    ar: "احجز زيارتك مع فريق طب الأسنان المحترف لدينا",
  },
  working_days: {
    en: "Working Days",
    ar: "أيام العمل",
  },
  working_hours: {
    en: "Working Hours",
    ar: "ساعات العمل",
  },
  contact_number: {
    en: "Contact Number",
    ar: "رقم الاتصال",
  },
  saturday: {
    en: "Saturday",
    ar: "السبت",
  },
  thursday: {
    en: "Thursday",
    ar: "الخميس",
  },
  book_now: {
    en: "Book Now via WhatsApp",
    ar: "احجز الآن عبر واتساب",
  },
  all_week: {
    en: "All Week",
    ar: "طوال الأسبوع",
  },
  call_now: {
    en: "Call Now",
    ar: "اتصل الآن",
  },
  reviews_title: {
    en: "Patient Reviews",
    ar: "آراء المرضى",
  },
  reviews_subtitle: {
    en: "What our patients say about us",
    ar: "ما يقوله مرضانا عنا",
  },
  location_status: {
    en: "Location Status",
    ar: "حالة الموقع",
  },
  currently_open: {
    en: "Currently Open",
    ar: "مفتوح حاليا",
  },
  currently_closed: {
    en: "Currently Closed",
    ar: "مغلق حاليا",
  },
  today_hours: {
    en: "Today's Hours",
    ar: "ساعات العمل اليوم",
  },
  popular_times: {
    en: "Popular Times",
    ar: "الأوقات المزدحمة",
  },
  weekly_hours: {
    en: "Weekly Hours",
    ar: "ساعات العمل الأسبوعية",
  },
  closed: {
    en: "Closed",
    ar: "مغلق",
  },
  friday_closed: {
    en: "Friday: Closed",
    ar: "الجمعة: مغلق",
  },
  all_week_except_friday: {
    en: "All Week Except Friday",
    ar: "طوال الأسبوع ما عدا الجمعة",
  },
  view_all_reviews: {
    en: "View All Reviews on Google Maps",
    ar: "عرض جميع التقييمات على خرائط جوجل",
  },
  more_reviews: {
    en: "See more reviews on Google Maps",
    ar: "شاهد المزيد من التقييمات على خرائط جوجل",
  },
  whatsapp_btn: {
    en: "WhatsApp",
    ar: "واتساب",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.body.className = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

