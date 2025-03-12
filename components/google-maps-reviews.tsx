"use client"

import { useLanguage } from "./language-provider"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Review {
  id: number
  author_name: string
  rating: number
  text: {
    en: string
    ar: string
  }
}

const reviews: Review[] = [
  {
    id: 1,
    author_name: "Ettehad Farrah",
    rating: 5,
    text: {
      ar: "عيادة رائعة واطباء في منتهى المهنية يتمتعون بخبرة عالية ويضعون مصلحة المريض في المقام الاول",
      en: "A wonderful clinic and highly professional doctors who are highly skilled and put the patient's interests first",
    },
  },
  {
    id: 2,
    author_name: "El Sayed Abdel Hadi",
    rating: 5,
    text: {
      ar: "بجد دكتور محترم و بيفهم المريض كل حاجه بيعملها و ليه بيعملها و شطار جداً في شغله ما شاءالله عليه",
      en: "Really a respectful doctor who explains everything to the patient, what he's doing and why he's doing it. He's very skilled at his work, mashallah",
    },
  },
  {
    id: 3,
    author_name: "Ahmed Magdy",
    rating: 5,
    text: {
      en: "Great experience at this clinic! Professional staff, great care, and the latest technology to ensure patient comfort. Perfect cleanliness, high-end treatment, and attention to the smallest details. Thank you very much",
      ar: "تجربة رائعة في هذه العيادة! طاقم محترف، رعاية رائعة، وأحدث التقنيات لضمان راحة المريض. نظافة مثالية، علاج راقي، واهتمام بأدق التفاصيل. شكراً جزيلاً",
    },
  },
  {
    id: 4,
    author_name: "Samar Ettehad",
    rating: 5,
    text: {
      en: "Professional dentists there, great results in no time, and comfortable clinic. Thank you Dr. Mousa and Dr. Nour ❤️",
      ar: "أطباء أسنان محترفون، نتائج رائعة في وقت قصير، وعيادة مريحة. شكراً دكتور موسى ودكتور نور ❤️",
    },
  },
  {
    id: 5,
    author_name: "Saeed Elmasry",
    rating: 5,
    text: {
      ar: "بجد من اشطر الدكاتره دكتور موسي عبدالناصر والمكان مريح في التعامل جدا",
      en: "Truly one of the best doctors, Dr. Mousa Abdulnasser, and the place is very comfortable to deal with",
    },
  },
  {
    id: 6,
    author_name: "lamiaa farrah",
    rating: 5,
    text: {
      en: "The clinic is so beautiful and so clean, the doctor was very helpful, my teeth has become so beautiful and bright, I highly recommend it",
      ar: "العيادة جميلة جداً ونظيفة جداً، الدكتور كان متعاون جداً، أسناني أصبحت جميلة ومشرقة، أنصح بها بشدة",
    },
  },
  {
    id: 7,
    author_name: "Mahmoud Abdelgany",
    rating: 5,
    text: {
      en: "I was treated with respect and the doctors had a professional attitude. I would recommend Well-Key to anyone who is looking for an Urgent dental Care and already have. Everyone was great!",
      ar: "تم معاملتي باحترام وكان لدى الأطباء موقف احترافي. أوصي بالعيادة لأي شخص يبحث عن رعاية أسنان عاجلة. الجميع كان رائعاً!",
    },
  },
  {
    id: 8,
    author_name: "nowara farrah",
    rating: 5,
    text: {
      en: "The clinic was so clean and luxury, the doctor is so so comfortable and a good listener. I highly recommend it",
      ar: "العيادة كانت نظيفة جداً وفخمة، الدكتور مريح جداً ومستمع جيد. أنصح بها بشدة",
    },
  },
  {
    id: 9,
    author_name: "do studio",
    rating: 5,
    text: {
      ar: "ما شاء الله دكتور ممتاز وعيادة نضيفة ومعاملة لطيفة",
      en: "Mashallah, excellent doctor, clean clinic, and kind treatment",
    },
  },
  {
    id: 10,
    author_name: "mohamed raafat",
    rating: 5,
    text: {
      en: "The best experience ever ❤️ Thanks dr for all things you've done me And it will never be the last visit... Thanks again ❤️",
      ar: "أفضل تجربة على الإطلاق ❤️ شكراً دكتور على كل ما قمت به لي ولن تكون هذه الزيارة الأخيرة... شكراً مرة أخرى ❤️",
    },
  },
  {
    id: 11,
    author_name: "Muhammad Mamdouh",
    rating: 5,
    text: {
      ar: "تعامل راقى والعيادة اكتر من ممتازة والدكتور والاستاف اللى معاه شاطرين جدا ❤️ ماشاء الله",
      en: "Sophisticated treatment and the clinic is more than excellent, and the doctor and his staff are very skilled ❤️ Mashallah",
    },
  },
]

export default function GoogleMapsReviews() {
  const { t, language } = useLanguage()
  const [currentReview, setCurrentReview] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="reviews" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">
            {t("reviews_title") || "Patient Reviews"}
          </h2>
          <p className="text-xl text-gray-300 mb-4">{t("reviews_subtitle") || "What our patients say about us"}</p>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black p-8 rounded-lg border border-gold/20 hover:border-gold transition-all duration-300 fancy-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-gold fill-gold" />
                  ))}
                </div>
                <h4 className="font-semibold text-gold text-xl mb-4">{reviews[currentReview].author_name}</h4>
              </div>
              <p className="text-gray-300 italic text-lg leading-relaxed">
                {`"${reviews[currentReview].text[language]}"`}
              </p>
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  index === currentReview ? "bg-gold w-6" : "bg-white/50"
                }`}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentReview(index)
                }}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.app.goo.gl/wC4VGd5oXyQKr6Di7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-black font-bold py-3 px-6 rounded-full transition-colors"
            >
              {t("view_all_reviews") || "View All Reviews on Google Maps"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

