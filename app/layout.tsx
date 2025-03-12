import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat, Noto_Kufi_Arabic } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi",
})

export const metadata: Metadata = {
  title: "Dr. Mousa Abdulnasser Dental Clinic",
  description: "Professional dental care services in a state-of-the-art clinic",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} ${notoKufiArabic.variable} bg-black text-white font-sans`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'