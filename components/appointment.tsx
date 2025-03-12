"use client"

import { useLanguage } from "./language-provider"
import { Calendar, Clock, Phone, AlertCircle } from "lucide-react"

export default function Appointment() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gold-gradient">{t("book_appointment")}</h2>
          <p className="text-xl text-gray-300 mb-8">{t("appointment_description")}</p>
          <div className="bg-black p-8 rounded-lg border border-gold/20 hover:border-gold transition-all duration-300 fancy-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Calendar className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-gold mb-2">{t("working_days")}</h3>
                <div className="text-gray-300 text-center">
                  <p>{t("all_week_except_friday") || "All Week Except Friday"}</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-gold mb-2">{t("working_hours")}</h3>
                <div className="text-gray-300 text-center">
                  <p>24/7</p>
                  <div className="flex items-center justify-center mt-1 text-sm text-red-400">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    <span>{t("friday_closed") || "Friday: Closed"}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-gold mb-2">{t("contact_number")}</h3>
                <p className="text-gray-300">01555661521</p>
              </div>
            </div>
            <a
              href="tel:+201555661521"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-black font-bold py-4 px-8 rounded-full transition-colors text-lg"
            >
              {t("call_now")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

