import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Star } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const responsibilities = [
  'Design HVAC systems for substation, commercial, and industrial projects across Abu Dhabi and UAE',
  'Perform thermal load calculations using HAP (Hourly Analysis Program) software',
  'Prepare AutoCAD drawings, technical submittals, and Bills of Quantities (BOQs)',
  'Coordinate with clients, MEP consultants, and government authorities for approvals',
  'Manage full project lifecycle from initial design through installation and commissioning',
  'Apply ASHRAE standards and energy-efficient design practices across all projects',
  'Oversee installation teams and ensure quality compliance with specifications',
]

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <SectionWrapper id="experience">
      <SectionTitle
        tag="// work.history"
        title="Where I've worked 💼"
        sub="Professional journey in HVAC engineering and project design"
      />

      <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute', left: 28, top: 0, bottom: 0, width: 2,
          background: 'linear-gradient(180deg, #7c3aed, #ec4899, transparent)',
        }} />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ paddingLeft: 72, position: 'relative' }}
        >
          {/* Dot */}
          <div style={{
            position: 'absolute', left: 18, top: 28, width: 22, height: 22,
            borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            border: '3px solid var(--bg)', boxShadow: '0 0 20px rgba(124,58,237,0.6)',
          }} />

          <div style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 20, padding: '32px',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>HVAC Project Design Engineer</h3>
              <span style={{
                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                color: '#fff', padding: '6px 16px', borderRadius: 50,
                fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap',
                fontFamily: 'JetBrains Mono, monospace',
              }}>2021 – Present</span>
            </div>

            <div style={{ color: '#a855f7', fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>
              YORKS Air Conditioning & Refrigeration LLC
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text2)', fontSize: '0.85rem', marginBottom: 28 }}>
              <MapPin size={13} style={{ color: '#06b6d4' }} /> Abu Dhabi, UAE
            </div>

            {/* Responsibilities */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              {responsibilities.map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.6 }}
                >
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                    flexShrink: 0, marginTop: 8,
                  }} />
                  {r}
                </motion.li>
              ))}
            </ul>

            {/* Achievement badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                borderRadius: 50, padding: '10px 20px',
                fontSize: '0.88rem', fontWeight: 700, color: '#f59e0b',
              }}
            >
              <Star size={16} fill="#f59e0b" /> 15–25% avg energy savings across all projects
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
