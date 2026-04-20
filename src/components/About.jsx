import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wrench, BarChart2, TrendingUp, Settings } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const strengths = [
  {
    icon: <Wrench size={22} />,
    title: 'MEP Project Management',
    desc: 'End-to-end MEP project planning, execution, quality control, and commissioning for commercial & residential buildings.',
    color: '#fff', bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.15)',
  },
  {
    icon: <Settings size={22} />,
    title: 'HVAC Design & Execution',
    desc: 'Heating/cooling load calculations, equipment selection, BOQ preparation, and full HVAC system installation & commissioning.',
    color: '#ccc', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.12)',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Digital Marketing & CRM',
    desc: 'Skilled in digital marketing tools, CRM, data analysis, and sales management from MBA training and internships.',
    color: '#fff', bg: 'rgba(255,255,255,0.06)', border: 'rgba(255,255,255,0.15)',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'Portfolio Management',
    desc: 'Real estate portfolio optimization, KPI tracking, risk mitigation, and investment performance reporting.',
    color: '#ccc', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.12)',
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
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(255,255,255,0.05)' }}
      style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 16, padding: '24px 20px', cursor: 'default',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'}
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
      <SectionTitle roman="I" tag="// about me" title="Who am I? 👋" sub="Engineer by profession, marketer by education" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }} className="about-grid">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 8, padding: '6px 14px', marginBottom: 20,
            fontSize: '0.82rem', color: '#ccc', fontWeight: 600,
          }}>
            🏗️ Dhreesti Airtech Solution · Moneymonial Reality · Dubai, UAE
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>
            Mechanical Engineer &{' '}
            <span style={{ background: 'linear-gradient(135deg, #fff, #888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              MEP Specialist
            </span>
          </h3>

          <p style={{ color: 'var(--text2)', lineHeight: 1.85, marginBottom: 20, fontSize: '0.97rem' }}>
            Motivated and collaborative Mechanical Engineer with <span style={{ color: '#fff', fontWeight: 600 }}>5+ years of experience</span> in MEP works for commercial & residential projects. Expertise in HVAC system design, site execution, commissioning, and quality control.
          </p>
          <p style={{ color: 'var(--text2)', lineHeight: 1.85, fontSize: '0.97rem' }}>
            Additionally holds an <span style={{ color: '#ccc', fontWeight: 600 }}>MBA in Marketing</span> from Integral University and has worked as a <span style={{ color: '#ccc', fontWeight: 600 }}>Sr. Associate Portfolio Manager</span> at Moneymonial Reality, Dubai — bringing a rare combination of engineering depth and business acumen. 🎓
          </p>

          <div style={{ display: 'flex', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
            {[
              { num: 'V+', label: 'Years Exp.' },
              { num: 'MEP', label: 'Specialist' },
              { num: 'MBA', label: 'Marketing' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2rem', fontWeight: 800,
                  background: 'linear-gradient(135deg, #fff, #888)',
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
