"use client"

import { useLanguage } from "./language-provider"
import { SmileIcon as Tooth, Sparkles, Syringe, Baby, Stethoscope, Crown } from "lucide-react"

export default function Services() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: <Crown className="w-12 h-12" />,
      title: "orthodontics",
      description: {
        en: "Straighten your teeth with our advanced orthodontic treatments including traditional braces and clear aligners.",
        ar: "قوّم أسنانك مع علاجات تقويم الأسنان المتقدمة لدينا بما في ذلك التقويم التقليدي والتقويم الشفاف.",
      },
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "cosmetic_dentistry",
      description: {
        en: "Transform your smile with veneers, bonding, and other cosmetic procedures for a perfect look.",
        ar: "حوّل ابتسامتك مع قشور الأسنان والترابط وإجراءات التجميل الأخرى للحصول على مظهر مثالي.",
      },
    },
    {
      icon: <Syringe className="w-12 h-12" />,
      title: "dental_implants",
      description: {
        en: "Replace missing teeth with dental implants that look, feel, and function like natural teeth.",
        ar: "استبدل الأسنان المفقودة بزراعة أسنان تبدو وتشعر وتعمل مثل الأسنان الطبيعية.",
      },
    },
    {
      icon: <Tooth className="w-12 h-12" />,
      title: "teeth_whitening",
      description: {
        en: "Brighten your smile with our professional teeth whitening treatments for a dazzling appearance.",
        ar: "أضئ ابتسامتك مع علاجات تبييض الأسنان المهنية لدينا للحصول على مظهر مبهر.",
      },
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      title: "general_dentistry",
      description: {
        en: "Maintain your oral health with regular check-ups, cleanings, fillings, and preventive care.",
        ar: "حافظ على صحة فمك مع الفحوصات المنتظمة والتنظيف والحشوات والرعاية الوقائية.",
      },
    },
    {
      icon: <Baby className="w-12 h-12" />,
      title: "pediatric_dentistry",
      description: {
        en: "Specialized dental care for children in a friendly and comfortable environment.",
        ar: "رعاية الأسنان المتخصصة للأطفال في بيئة ودية ومريحة.",
      },
    },
  ]

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 gold-gradient">{t("services_title")}</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black p-8 rounded-lg border border-gold/20 hover:border-gold transition-all duration-300 slide-in group fancy-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 w-20 h-20 rounded-full flex items-center justify-center bg-black border-2 border-gold group-hover:border-gold/50 transition-colors">
                  <div className="text-gold group-hover:scale-110 transition-transform">{service.icon}</div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gold">{t(service.title)}</h3>
                <p className="text-gray-300">{language === "en" ? service.description.en : service.description.ar}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

