"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import { MapPin, Clock, AlertCircle } from "lucide-react"

// Updated business hours - 24/7 for all days except Friday (closed)
const businessHours = {
  monday: { open: "24 Hours", close: "", is24Hours: true, isClosed: false },
  tuesday: { open: "24 Hours", close: "", is24Hours: true, isClosed: false },
  wednesday: { open: "24 Hours", close: "", is24Hours: true, isClosed: false },
  thursday: { open: "24 Hours", close: "", is24Hours: true, isClosed: false },
  friday: { open: "", close: "", is24Hours: false, isClosed: true },
  saturday: { open: "24 Hours", close: "", is24Hours: true, isClosed: false },
  sunday: { open: "24 Hours", close: "", is24Hours: true, isClosed: false },
}

export default function LocationStatus() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(true)
  const [currentDay, setCurrentDay] = useState<string>("monday")
  const [currentTime, setCurrentTime] = useState("")
  const [popularTimes, setPopularTimes] = useState<{ hour: string; busy: number }[]>([])

  useEffect(() => {
    // Get current day and time
    const now = new Date()
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    const day = days[now.getDay()]
    setCurrentDay(day)

    // Format time
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`
    setCurrentTime(formattedTime)

    // Check if clinic is open based on day
    if (day === "friday") {
      // Closed on Friday
      setIsOpen(false)
    } else {
      // All other days are 24/7
      setIsOpen(true)
    }

    // Generate mock popular times data
    const mockPopularTimes = []
    for (let i = 12; i <= 22; i++) {
      const hour = i <= 12 ? `${i} PM` : `${i - 12} PM`
      const busy = Math.floor(Math.random() * 100)
      mockPopularTimes.push({ hour, busy })
    }
    setPopularTimes(mockPopularTimes)
  }, [])

  return (
    <div className="bg-black p-6 rounded-lg border border-gold/20 hover:border-gold transition-all duration-300 fancy-border">
      <div className="flex items-center mb-4">
        <MapPin className="w-6 h-6 text-gold mr-2" />
        <h3 className="text-xl font-semibold text-gold">{t("location_status") || "Location Status"}</h3>
      </div>

      <div className="flex items-center mb-4">
        <div className={`w-3 h-3 rounded-full mr-2 ${isOpen ? "bg-green-500" : "bg-red-500"}`}></div>
        <span className="text-gray-300">
          {isOpen ? t("currently_open") || "Currently Open" : t("currently_closed") || "Currently Closed"}
        </span>
      </div>

      <div className="mb-4">
        <h4 className="text-gold font-semibold mb-2">{t("today_hours") || "Today's Hours"}</h4>
        <p className="text-gray-300">
          {currentDay && businessHours[currentDay as keyof typeof businessHours]
            ? businessHours[currentDay as keyof typeof businessHours].isClosed
              ? t("closed") || "Closed"
              : businessHours[currentDay as keyof typeof businessHours].is24Hours
                ? "24/7"
                : `${businessHours[currentDay as keyof typeof businessHours].open} - ${businessHours[currentDay as keyof typeof businessHours].close}`
            : "24/7"}
        </p>
      </div>

      <div className="mb-4">
        <h4 className="text-gold font-semibold mb-2">{t("weekly_hours") || "Weekly Hours"}</h4>
        <div className="text-gray-300 text-sm">
          <div className="grid grid-cols-2 gap-2">
            <div className="font-semibold">Monday - Thursday:</div>
            <div>24/7</div>
            <div className="font-semibold">Friday:</div>
            <div className="flex items-center">
              <AlertCircle className="w-3 h-3 text-red-500 mr-1" />
              <span>{t("closed") || "Closed"}</span>
            </div>
            <div className="font-semibold">Saturday - Sunday:</div>
            <div>24/7</div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-gold font-semibold mb-2 flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {t("popular_times") || "Popular Times"}
        </h4>
        <div className="flex items-end h-20 space-x-1">
          {popularTimes.map((time, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-6 bg-gold/70 rounded-t ${
                  currentTime.startsWith(time.hour.split(" ")[0]) ? "bg-gold" : ""
                }`}
                style={{ height: `${time.busy}%` }}
              ></div>
              <span className="text-xs text-gray-400 mt-1">{time.hour}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

