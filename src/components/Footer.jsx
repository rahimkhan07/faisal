import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Wind } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--bg)', borderTop: '1px solid var(--border)',
      padding: '60px 24px 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginBottom: 48 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1rem', color: '#fff',
                boxShadow: '0 0 20px rgba(124,58,237,0.4)',
              }}>MF</div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>Mohammad Faisal</span>
            </div>
            <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: 260 }}>
              HVAC Project Design Engineer crafting energy-efficient systems for smart buildings in the UAE. 🌬️
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: '0.9rem', color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: 1 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  style={{ color: 'var(--text2)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#a855f7'}
                  onMouseLeave={e => e.target.style.color = 'var(--text2)'}
                >{link}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: '0.9rem', color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: 1 }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <Mail size={14} />, text: 'er.mmdfaisal@gmail.com', href: 'mailto:er.mmdfaisal@gmail.com' },
                { icon: <Phone size={14} />, text: '+971 507 746 248', href: 'tel:+971507746248' },
                { icon: <Linkedin size={14} />, text: 'LinkedIn Profile', href: 'https://linkedin.com/in/mohammad-faisal' },
              ].map((item, i) => (
                <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener"
                  style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text2)', fontSize: '0.88rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#a855f7'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text2)'}
                >
                  <span style={{ color: '#a855f7' }}>{item.icon}</span> {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ color: 'var(--text3)', fontSize: '0.85rem' }}>
            © {year} Mohammad Faisal. All rights reserved. Built with React ⚛️ + Framer Motion 🎞️
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { icon: <Linkedin size={16} />, href: 'https://linkedin.com/in/mohammad-faisal', color: '#3b82f6' },
              { icon: <Mail size={16} />, href: 'mailto:er.mmdfaisal@gmail.com', color: '#a855f7' },
              { icon: <Phone size={16} />, href: 'tel:+971507746248', color: '#06b6d4' },
            ].map((s, i) => (
              <motion.a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener"
                whileHover={{ y: -3, scale: 1.1 }}
                style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'var(--card)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text2)', transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color + '44' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >{s.icon}</motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
