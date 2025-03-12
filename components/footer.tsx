"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-01%20at%209.09.40%20PM-seyf8PBv7EBsg3jN2KGOQGopRZ81XF.jpeg"
              alt="Dr. Mousa Abdulnasser Dental Clinic"
              width={180}
              height={60}
              className="h-16 w-auto"
            />
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://wa.me/+201500604440"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors"
            >
              <FaWhatsapp className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/dr.mousaabdulnasser?igsh=MWRqYm92bXQ5aDEwNg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.facebook.com/share/1E5TJJh1mc/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.tiktok.com/@dr.mousaabdulnasser?_t=ZS-8twBuo9GsSN&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors"
            >
              <FaTiktok className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}

