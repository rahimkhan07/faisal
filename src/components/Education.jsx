import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Cog, Calendar } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const edu = [
  {
    icon: <Briefcase size={24} />,
    degree: 'MBA in Marketing',
    school: 'University (Available on Request)',
    year: '2019 – 2021',
    color: '#fff', bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.15)',
    tag: 'Business',
    emoji: '🎓',
  },
  {
    icon: <Cog size={24} />,
    degree: 'Bachelor of Engineering',
    school: 'Mechanical / HVAC Engineering',
    year: '2015 – 2019',
    color: '#ccc', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.12)',
    tag: 'Engineering',
    emoji: '⚙️',
  },
]

function EduCard({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 20, padding: '32px', position: 'relative', overflow: 'hidden',
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
      {/* Background emoji */}
      <div style={{
        position: 'absolute', right: 20, top: 20,
        fontSize: '4rem', opacity: 0.06, userSelect: 'none',
      }}>{item.emoji}</div>

      <div style={{
        width: 56, height: 56, borderRadius: 14,
        background: item.bg, border: `1px solid ${item.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: item.color, marginBottom: 20,
      }}>{item.icon}</div>

      <span style={{
        display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
        color: '#aaa', background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 50, padding: '3px 12px', letterSpacing: 1.5,
        textTransform: 'uppercase', marginBottom: 12,
        fontFamily: 'JetBrains Mono, monospace',
      }}>{item.tag}</span>

      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 6 }}>{item.degree}</h3>
      <p style={{ color: '#aaa', fontWeight: 600, fontSize: '0.9rem', marginBottom: 12 }}>{item.school}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text2)', fontSize: '0.85rem' }}>
        <Calendar size={13} style={{ color: '#888' }} /> {item.year}
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <SectionWrapper id="education" style={{ background: 'var(--bg2)' }}>
      <SectionTitle
        tag="// education.log"
        title="My academic journey 📚"
        sub="Engineering expertise meets business acumen"
      />
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 24, maxWidth: 760, margin: '0 auto',
      }}>
        {edu.map((item, i) => <EduCard key={i} item={item} index={i} />)}
      </div>
    </SectionWrapper>
  )
}
