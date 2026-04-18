import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Leaf, BookOpen, ClipboardList, PenTool } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const strengths = [
  {
    icon: <Leaf size={22} />,
    title: 'Energy Efficiency',
    desc: 'Delivering 15–25% energy savings through optimized system design and smart controls.',
    color: '#10b981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'ASHRAE Standards',
    desc: 'Full compliance with ASHRAE 90.1, 62.1, and 55 across all project types.',
    color: '#a855f7', bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.25)',
  },
  {
    icon: <ClipboardList size={22} />,
    title: 'Project Management',
    desc: 'End-to-end lifecycle management from initial design through commissioning.',
    color: '#06b6d4', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.25)',
  },
  {
    icon: <PenTool size={22} />,
    title: 'AutoCAD Design',
    desc: 'Precision HVAC drawings, submittals, and BOQs using AutoCAD and Revit MEP.',
    color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)',
  },
]

function StrengthCard({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: `0 20px 40px ${item.bg}` }}
      style={{
        background: 'var(--card)', border: `1px solid var(--border)`,
        borderRadius: 16, padding: '24px 20px', cursor: 'default',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = item.border}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: item.bg, border: `1px solid ${item.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: item.color, marginBottom: 16,
      }}>{item.icon}</div>
      <h4 style={{ fontWeight: 700, marginBottom: 8, fontSize: '1rem' }}>{item.title}</h4>
      <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</p>
    </motion.div>
  )
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <SectionWrapper id="about" style={{ background: 'var(--bg2)' }}>
      <SectionTitle tag="// about me" title="Who am I? 👋" sub="Engineer by day, problem-solver by nature" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }} className="about-grid">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
            borderRadius: 8, padding: '6px 14px', marginBottom: 20,
            fontSize: '0.82rem', color: '#10b981', fontWeight: 600,
          }}>
            🏢 YORKS Air Conditioning & Refrigeration LLC
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>
            HVAC Design Engineer &{' '}
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Energy Specialist
            </span>
          </h3>

          <p style={{ color: 'var(--text2)', lineHeight: 1.85, marginBottom: 20, fontSize: '0.97rem' }}>
            I'm an HVAC Project Design Engineer specializing in energy-efficient and high-performance indoor environments. I design HVAC systems that reduce energy consumption by <span style={{ color: '#a855f7', fontWeight: 600 }}>15–25%</span> while maintaining optimal comfort and air quality.
          </p>
          <p style={{ color: 'var(--text2)', lineHeight: 1.85, fontSize: '0.97rem' }}>
            With hands-on experience in thermal load calculations, duct and piping design, equipment selection, and AutoCAD drafting, I deliver end-to-end HVAC solutions. I also hold an <span style={{ color: '#06b6d4', fontWeight: 600 }}>MBA in Marketing</span> — giving me a unique edge in client communication and project delivery. No cap. 🎓
          </p>

          <div style={{ display: 'flex', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
            {[
              { num: '4+', label: 'Years Exp.' },
              { num: '20+', label: 'Projects' },
              { num: '25%', label: 'Max Energy Saved' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2rem', fontWeight: 800, fontFamily: 'Syne, sans-serif',
                  background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>{stat.num}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text3)', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {strengths.map((item, i) => <StrengthCard key={i} item={item} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  )
}
