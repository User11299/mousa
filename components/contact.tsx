"use client"

import { useLanguage } from "./language-provider"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"
import LocationStatus from "./location-status"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">{t("contact_title")}</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black p-8 rounded-lg border border-gold/20 hover:border-gold transition-all duration-300 flex flex-col items-center text-center fancy-border">
            <MapPin className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gold">{t("address")}</h3>
            <Link
              href="https://maps.app.goo.gl/wC4VGd5oXyQKr6Di7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gold transition-colors"
            >
              <p>Dr. Mousa Abdulnasser Dental Clinic</p>
              <p className="mt-2">Click to view on Google Maps</p>
            </Link>
            <div className="mt-4 w-full">
              <LocationStatus />
            </div>
          </div>

          <div className="bg-black p-8 rounded-lg border border-gold/20 hover:border-gold transition-all duration-300 flex flex-col items-center text-center fancy-border">
            <Phone className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gold">{t("phone")}</h3>
            <a href="tel:01555661521" className="text-gray-300 hover:text-gold transition-colors">
              01555661521
            </a>
            <Link
              href="https://wa.me/+201500604440"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-gray-300 hover:text-gold transition-colors flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" /> +201500604440
            </Link>
          </div>

          <div className="bg-black p-8 rounded-lg border border-gold/20 hover:border-gold transition-all duration-300 flex flex-col items-center text-center fancy-border">
            <Mail className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gold">{t("social_media")}</h3>
            <div className="flex justify-between w-64 mt-2">
              <Link
                href="https://wa.me/+201500604440"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/dr.mousaabdulnasser?igsh=MWRqYm92bXQ5aDEwNg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.facebook.com/share/1E5TJJh1mc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.tiktok.com/@dr.mousaabdulnasser?_t=ZS-8twBuo9GsSN&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                <FaTiktok className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d30.968028!3d30.008389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzMwLjIiTiAzMMKwNTgnMDQuOSJF!5e0!3m2!1sen!2seg!4v1709330558954!5m2!1sen!2seg"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

