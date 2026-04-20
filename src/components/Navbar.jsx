import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      sections.forEach(s => {
        if (!s) return
        const rect = s.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 24px',
        background: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#000',
            boxShadow: '0 0 20px rgba(255,255,255,0.2)',
          }}>MF</div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: 1 }}>
            Mohammad<span style={{ color: '#888' }}>.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: 4, listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{
                  padding: '8px 14px', borderRadius: 8, fontSize: '0.88rem', fontWeight: 500,
                  color: active === link.toLowerCase() ? '#fff' : 'rgba(255,255,255,0.55)',
                  background: active === link.toLowerCase() ? 'rgba(255,255,255,0.1)' : 'transparent',
                  transition: 'all 0.2s', display: 'block',
                  border: active === link.toLowerCase() ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
                }}
                onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.background = 'rgba(255,255,255,0.07)' }}
                onMouseLeave={e => {
                  e.target.style.color = active === link.toLowerCase() ? '#fff' : 'rgba(255,255,255,0.55)'
                  e.target.style.background = active === link.toLowerCase() ? 'rgba(255,255,255,0.1)' : 'transparent'
                }}
              >{link}</a>
            </li>
          ))}
          <li>
            <a href="mailto:er.mmdfaisal@gmail.com" style={{
              marginLeft: 8, padding: '9px 20px', borderRadius: 8,
              background: '#fff',
              color: '#000', fontSize: '0.88rem', fontWeight: 700,
              boxShadow: '0 0 20px rgba(255,255,255,0.15)',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255,255,255,0.15)' }}
            >Hire Me ✨</a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#fff' }}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: 24, height: 2, background: open ? 'transparent' : '#fff', transition: 'all 0.3s', position: 'relative' }}>
            <span style={{
              position: 'absolute', width: 24, height: 2, background: '#fff', borderRadius: 2,
              top: open ? 0 : -8, transform: open ? 'rotate(45deg)' : 'none', transition: 'all 0.3s',
            }} />
            <span style={{
              position: 'absolute', width: 24, height: 2, background: '#fff', borderRadius: 2,
              top: open ? 0 : 8, transform: open ? 'rotate(-45deg)' : 'none', transition: 'all 0.3s',
            }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(0,0,0,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '16px 24px 24px',
            }}
          >
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block', padding: '12px 0', color: 'rgba(255,255,255,0.8)',
                  fontSize: '1rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >{link}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
