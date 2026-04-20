import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import './index.css'

// Generate particles once
const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  size: Math.random() * 2.5 + 0.5,
  left: Math.random() * 100,
  delay: Math.random() * 20,
  duration: Math.random() * 18 + 14,
}))

export default function App() {
  return (
    <>
      {/* Global animated background */}
      <div className="bg-canvas" aria-hidden="true">
        <div className="bg-orb-1" />
        <div className="bg-orb-2" />
        <div className="bg-orb-3" />
        <div className="bg-spotlight" />
        {particles.map(p => (
          <div
            key={p.id}
            className="bg-particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="noise" aria-hidden="true" />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
