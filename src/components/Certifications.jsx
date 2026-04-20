import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Wind, TrendingUp, Monitor } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const certs = [
  {
    icon: <Wind size={26} />,
    title: 'HVAC Design & Drafting',
    org: 'Dhanush Engineering Pvt Ltd · Dec 2020 – Jan 2021 · New Delhi, India',
    color: '#fff', bg: 'rgba(255,255,255,0.07)', border: 'rgba(255,255,255,0.15)',
    emoji: '🌬️',
  },
  {
    icon: <Award size={26} />,
    title: 'Summer Training — LULU GROUP INTERNATIONAL',
    org: 'Marketing & CRM Internship · Oct 2023 – Nov 2023 · Lucknow, India',
    color: '#ccc', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.12)',
    emoji: '🏆',
  },
  {
    icon: <TrendingUp size={26} />,
    title: 'Summer Training — TATA MOTORS',
    org: 'Sales & Digital Marketing Internship · Jul 2023 – Aug 2023 · Lucknow, India',
    color: '#aaa', bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.1)',
    emoji: '🚗',
  },
  {
    icon: <Monitor size={26} />,
    title: 'AutoCAD · HAP · Power BI · MS Office · MS Project',
    org: 'IT Skills — Marketing / Information Technology & Engineering Tools',
    color: '#ccc', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.12)',
    emoji: '💻',
  },
]

function CertCard({ cert, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 20, padding: '28px 24px',
        display: 'flex', alignItems: 'flex-start', gap: 20,
        transition: 'border-color 0.3s, box-shadow 0.3s', cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,255,255,0.05)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={{
        width: 60, height: 60, borderRadius: 16, flexShrink: 0,
        background: cert.bg, border: `1px solid ${cert.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: cert.color,
      }}>{cert.icon}</div>
      <div>
        <div style={{ fontSize: '1.2rem', marginBottom: 4 }}>{cert.emoji}</div>
        <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 6, lineHeight: 1.4 }}>{cert.title}</h4>
        <p style={{ color: 'var(--text2)', fontSize: '0.82rem', lineHeight: 1.5 }}>{cert.org}</p>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle
        roman="VI"
        tag="// certs.verified"
        title="Training & Certifications 🎖️"
        sub="Hands-on training from industry-leading organizations"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
        {certs.map((cert, i) => <CertCard key={i} cert={cert} index={i} />)}
      </div>
    </SectionWrapper>
  )
}
