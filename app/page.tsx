import Navbar from "@/components/navbar"
import HeroSlider from "@/components/hero-slider"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import GoogleMapsReviews from "@/components/google-maps-reviews"
import Contact from "@/components/contact"
import Appointment from "@/components/appointment"
import Footer from "@/components/footer"
import FloatingActionButtons from "@/components/floating-action-buttons"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <Services />
      <Gallery />
      <GoogleMapsReviews />
      <Contact />
      <Appointment />
      <Footer />
      <FloatingActionButtons />
    </main>
  )
}

