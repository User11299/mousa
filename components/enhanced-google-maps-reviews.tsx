"use client"

import { useLanguage } from "./language-provider"
import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import Image from "next/image"

// Note: This is a demonstration component that shows how you would implement
// direct Google Maps reviews integration if you had the proper API keys.
// In a production environment, you would need to:
// 1. Set up a Google Cloud account
// 2. Enable the Places API
// 3. Create API credentials
// 4. Make server-side requests to fetch reviews

interface GoogleReview {
  author_name: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
  time: number
  language?: string
}

export default function EnhancedGoogleMapsReviews() {
  const { t, language } = useLanguage()
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // In a real implementation, this would be a fetch request to your server
    // which would then use the Google Places API to get reviews
    const fetchReviews = async () => {
      try {
        setLoading(true)

        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // This is where you would normally fetch from your server
        // const response = await fetch('/api/google-reviews?placeId=YOUR_PLACE_ID');
        // const data = await response.json();

        // For demo purposes, we'll use mock data
        const mockReviews: GoogleReview[] = [
          {
            author_name: "Sarah Ahmed",
            profile_photo_url: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            relative_time_description: "2 months ago",
            text: "Dr. Mousa is an exceptional dentist! I had severe dental anxiety before visiting his clinic, but his gentle approach and the calm atmosphere of the clinic made me feel at ease. The results of my treatment exceeded my expectations.",
            time: 1709042400000,
            language: "en",
          },
          {
            author_name: "Mohamed Khalid",
            profile_photo_url: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            relative_time_description: "1 month ago",
            text: "I've been to many dental clinics, but Dr. Mousa's clinic stands out for its professionalism and state-of-the-art equipment. The staff is friendly, and the clinic is immaculately clean.",
            time: 1711720800000,
            language: "en",
          },
          {
            author_name: "Nour El-Din",
            profile_photo_url: "https://randomuser.me/api/portraits/men/22.jpg",
            rating: 5,
            relative_time_description: "2 weeks ago",
            text: "عيادة ممتازة! الدكتور موسى محترف للغاية وودود. قام بعلاج تسوس الأسنان لدي بدون ألم تقريبًا. العيادة نظيفة جدًا ومجهزة بأحدث التقنيات.",
            time: 1713535200000,
            language: "ar",
          },
          {
            author_name: "Fatima Zahra",
            profile_photo_url: "https://randomuser.me/api/portraits/women/90.jpg",
            rating: 4,
            relative_time_description: "3 months ago",
            text: "تجربة رائعة في عيادة الدكتور موسى. قمت بإجراء تبييض للأسنان والنتائج مذهلة. الطاقم ودود والعيادة مريحة.",
            time: 1706450400000,
            language: "ar",
          },
        ]

        setReviews(mockReviews)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching Google reviews:", err)
        setError("Failed to load reviews. Please try again later.")
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  // Filter reviews based on language preference
  const filteredReviews = reviews.filter((review) => !review.language || review.language === language)

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

        <div className="max-w-5xl mx-auto">
          {loading ? (
            <div className="flex justify-center">
              <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 mb-8">{error}</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {filteredReviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-black p-6 rounded-lg border border-gold/20 hover:border-gold transition-all duration-300 fancy-border"
                  >
                    <div className="flex items-start mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 border border-gold">
                        <Image
                          src={review.profile_photo_url || "/placeholder.svg"}
                          alt={review.author_name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gold">{review.author_name}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < review.rating ? "text-gold fill-gold" : "text-gray-500"}`}
                            />
                          ))}
                          <span className="text-sm text-gray-400 ml-2">{review.relative_time_description}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{review.text}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-400 mb-4">{t("more_reviews") || "See more reviews on Google Maps"}</p>
                <a
                  href="https://maps.app.goo.gl/wC4VGd5oXyQKr6Di7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-black font-bold py-3 px-6 rounded-full transition-colors"
                >
                  {t("view_all_reviews") || "View All Reviews on Google Maps"}
                </a>
              </div>
            </>
          )}

          <div className="mt-12 bg-black p-4 rounded-lg border border-gold/20 hover:border-gold transition-all duration-300 fancy-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d30.968028!3d30.008389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzMwLjIiTiAzMMKwNTgnMDQuOSJF!5e0!3m2!1sen!2seg!4v1709330558954!5m2!1sen!2seg&q=Dr.+Mousa+Abdulnasser+Dental+Clinic&t=&z=15&iwloc=A&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

