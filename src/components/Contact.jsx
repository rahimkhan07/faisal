import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Link, Send, CheckCircle } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const contactItems = [
  { icon: <Mail size={20} />, label: 'Email', value: 'er.mmdfaisal@gmail.com', href: 'mailto:er.mmdfaisal@gmail.com', color: '#a855f7' },
  { icon: <Phone size={20} />, label: 'Phone', value: '+971 507 746 248', href: 'tel:+971507746248', color: '#06b6d4' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Abu Dhabi, UAE', href: null, color: '#10b981' },
  { icon: <Link size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/mohammad-faisal', href: 'https://linkedin.com/in/mohammad-faisal', color: '#3b82f6' },
]

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:er.mmdfaisal@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <SectionWrapper id="contact" style={{ background: 'var(--bg2)' }}>
      <SectionTitle
        tag="// contact.init()"
        title="Let's build something 🤝"
        sub="Got a project? Let's talk HVAC, energy efficiency, or just say hi."
      />

      <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }} className="contact-grid">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: 8 }}>Hit me up 📩</h3>
          <p style={{ color: 'var(--text2)', marginBottom: 32, lineHeight: 1.7, fontSize: '0.95rem' }}>
            Open to project inquiries, collaborations, and full-time opportunities in UAE and beyond.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  background: item.color + '15', border: `1px solid ${item.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: item.color,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener"
                      style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.92rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = item.color}
                      onMouseLeave={e => e.target.style.color = 'var(--text)'}
                    >{item.value}</a>
                  ) : (
                    <span style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.92rem' }}>{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 20, padding: '36px',
          }}
        >
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 28 }}>Send a message 💌</h3>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="form-row">
              {[
                { id: 'name', label: 'Full Name', placeholder: 'Your name', type: 'text' },
                { id: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' },
              ].map(field => (
                <div key={field.id}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text2)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{field.label}</label>
                  <input
                    type={field.type} required placeholder={field.placeholder}
                    value={form[field.id]}
                    onChange={e => setForm({ ...form, [field.id]: e.target.value })}
                    style={{
                      width: '100%', padding: '12px 14px', borderRadius: 10,
                      background: 'var(--bg)', border: '1px solid var(--border)',
                      color: 'var(--text)', fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.3s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(168,85,247,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text2)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Subject</label>
              <input
                type="text" required placeholder="Project inquiry / Collaboration"
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                style={{
                  width: '100%', padding: '12px 14px', borderRadius: 10,
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  color: 'var(--text)', fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.3s',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(168,85,247,0.5)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text2)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Message</label>
              <textarea
                required placeholder="Tell me about your project..."
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{
                  width: '100%', padding: '12px 14px', borderRadius: 10,
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  color: 'var(--text)', fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.9rem', outline: 'none', resize: 'vertical',
                  transition: 'border-color 0.3s',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(168,85,247,0.5)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%', padding: '14px', borderRadius: 12, border: 'none',
                background: sent ? 'linear-gradient(135deg, #10b981, #06b6d4)' : 'linear-gradient(135deg, #7c3aed, #ec4899)',
                color: '#fff', fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                boxShadow: sent ? '0 0 30px rgba(16,185,129,0.4)' : '0 0 30px rgba(124,58,237,0.4)',
                transition: 'all 0.3s',
              }}
            >
              {sent ? <><CheckCircle size={18} /> Message Sent! 🎉</> : <><Send size={18} /> Send Message 🚀</>}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  )
}
