import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSections from "./hero";
import About from "./about";
import Features from "./features";

function MainLayout() {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const scrollId = params.get('scroll')
    if (scrollId) {
      const el = document.getElementById(scrollId)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 200) // timeout untuk memastikan elemen sudah ter-render
      }
    }
  }, [location])

  return (
    <div className="MainLayout">
      <section id="home">
        <HeroSections />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
    </div>
  )
}

export default MainLayout
