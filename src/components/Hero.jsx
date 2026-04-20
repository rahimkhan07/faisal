import { motion } from 'framer-motion'
import { Wind, MapPin, Zap, ArrowDown } from 'lucide-react'
import profileImg from '../assets/profile.jpg'

const floatAnim = {
  animate: { y: [0, -12, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }
}

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,255,255,0.05) 0%, transparent 70%), var(--bg)',
      position: 'relative', overflow: 'hidden', paddingTop: 80,
    }}>
      {/* Animated grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', filter: 'blur(80px)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', filter: 'blur(80px)', zIndex: 0 }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="hero-grid">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 50, padding: '6px 16px', marginBottom: 24,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', boxShadow: '0 0 8px #fff', display: 'inline-block' }} />
              <span style={{ fontSize: '0.82rem', color: '#ccc', fontWeight: 600, letterSpacing: 1 }}>AVAILABLE FOR WORK</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}
            >
              Hey, I'm{' '}
              <span style={{
                background: 'linear-gradient(135deg, #fff, #888)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Mohammad</span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #ccc, #fff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Faisal</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'inline-block', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 8, padding: '6px 14px', marginBottom: 20,
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: '#ccc',
              }}
            >
              &lt;HVAC Project Design Engineer /&gt;
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontSize: '1.1rem', color: 'var(--text2)', lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}
            >
              Designing <span style={{ color: '#fff', fontWeight: 600 }}>energy-efficient HVAC systems</span> for smart buildings in the UAE. Saving 15–25% energy while keeping it 🔥 cool inside.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}
            >
              <a href="#projects" style={{
                padding: '14px 28px', borderRadius: 12,
                background: '#fff',
                color: '#000', fontWeight: 700, fontSize: '0.95rem',
                boxShadow: '0 0 30px rgba(255,255,255,0.2)',
                transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: 8,
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(255,255,255,0.35)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.2)' }}
              >
                View Projects 🚀
              </a>
              <a href="#contact" style={{
                padding: '14px 28px', borderRadius: 12,
                background: 'transparent', color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                border: '1px solid rgba(255,255,255,0.25)',
                transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: 8,
                backdropFilter: 'blur(10px)',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'transparent' }}
              >
                Let's Talk 💬
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
            >
              {[
                { icon: <Zap size={14} />, text: '15–25% Energy Savings' },
                { icon: <MapPin size={14} />, text: 'Abu Dhabi, UAE' },
                { icon: <Wind size={14} />, text: 'ASHRAE Certified' },
              ].map((badge, i) => (
                <span key={i} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 50, padding: '6px 14px', fontSize: '0.8rem', color: '#aaa',
                  fontWeight: 500,
                }}>
                  {badge.icon} {badge.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', width: 360, height: 360 }}>
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: -16, borderRadius: '50%',
                  border: '2px dashed rgba(255,255,255,0.2)',
                }}
              />
              {/* Glow ring */}
              <div style={{
                position: 'absolute', inset: -8, borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #fff, #555, #aaa, #fff)',
                padding: 3,
              }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg)' }} />
              </div>
              {/* Photo */}
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="Mohammad Faisal"
                  style={{
                    position: 'absolute', inset: 4, width: 'calc(100% - 8px)', height: 'calc(100% - 8px)',
                    borderRadius: '50%', objectFit: 'cover', objectPosition: 'top',
                  }}
                />
              ) : (
                <div style={{
                  position: 'absolute', inset: 4, width: 'calc(100% - 8px)', height: 'calc(100% - 8px)',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #111, #222)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: 8,
                }}>
                  <div style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '4rem',
                    background: 'linear-gradient(135deg, #fff, #888)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>MF</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center', padding: '0 20px' }}>
                    Add profile.jpg to src/assets/
                  </div>
                </div>
              )}
              {/* Floating badges */}
              <motion.div {...floatAnim} style={{
                position: 'absolute', top: 10, right: -30,
                background: 'rgba(30,30,30,0.95)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 12, padding: '10px 14px',
                fontSize: '0.78rem', fontWeight: 700, color: '#fff',
                boxShadow: '0 0 20px rgba(255,255,255,0.08)',
                whiteSpace: 'nowrap',
              }}>
                ⚡ ASHRAE Standards
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{
                  position: 'absolute', bottom: 20, left: -40,
                  background: 'rgba(30,30,30,0.95)', backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 12, padding: '10px 14px',
                  fontSize: '0.78rem', fontWeight: 700, color: '#fff',
                  boxShadow: '0 0 20px rgba(255,255,255,0.08)',
                  whiteSpace: 'nowrap',
                }}
              >
                🌿 25% Energy Saved
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: 60 }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: 'var(--text3)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, fontSize: '0.75rem', letterSpacing: 2 }}
          >
            SCROLL <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:last-child { order: -1; }
          .hero-grid > div:last-child > div { width: 260px !important; height: 260px !important; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
