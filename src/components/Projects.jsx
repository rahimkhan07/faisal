import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Wrench, Trophy } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const projects = [
  {
    id: 1, category: 'substation',
    emoji: '⚡',
    title: 'ADNOC Substation HVAC Design',
    desc: 'Designed precision cooling for an electrical substation ensuring full equipment protection and operational continuity in harsh UAE climate conditions.',
    role: 'Lead Design Engineer',
    tools: 'HAP, AutoCAD, ASHRAE',
    outcome: '20% energy reduction — zero equipment downtime',
  },
  {
    id: 2, category: 'commercial',
    emoji: '🏢',
    title: 'Commercial Office Tower — Abu Dhabi',
    desc: 'Full HVAC design for a 15-floor commercial tower including VRF and AHU systems, coordinated with MEP consultants and government authorities.',
    role: 'HVAC Design Engineer',
    tools: 'AutoCAD, HAP, Revit MEP',
    outcome: 'LEED-aligned design — 18% energy savings',
  },
  {
    id: 3, category: 'industrial',
    emoji: '🏭',
    title: 'Industrial Warehouse Ventilation',
    desc: 'Designed industrial ventilation and spot cooling for an 8,000 sqm warehouse, ensuring safe working temperatures and regulatory compliance.',
    role: 'Design & Project Engineer',
    tools: 'AutoCAD, Manual Calculations',
    outcome: 'Safe working temps maintained — on-time delivery',
  },
  {
    id: 4, category: 'commercial',
    emoji: '🛍️',
    title: 'Retail Mall HVAC Upgrade',
    desc: 'Retrofitted an aging HVAC system with smart controls and high-efficiency chillers, integrating BMS for centralized monitoring.',
    role: 'Project Design Engineer',
    tools: 'HAP, AutoCAD, BMS Integration',
    outcome: '25% energy cost reduction achieved',
  },
  {
    id: 5, category: 'substation',
    emoji: '🔌',
    title: 'Power Substation Control Room',
    desc: 'Precision air conditioning for a sensitive control room environment requiring strict temperature and humidity control year-round.',
    role: 'Design Engineer',
    tools: 'ASHRAE Guidelines, AutoCAD',
    outcome: 'Maintained 22°C ±1°C year-round',
  },
]

const filters = ['all', 'substation', 'commercial', 'industrial']

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 20, overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(255,255,255,0.05)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div style={{
        background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '28px 24px 20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <span style={{
              display: 'inline-block', fontSize: '0.72rem', fontWeight: 700,
              color: '#aaa', background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 50, padding: '3px 12px', letterSpacing: 1.5,
              textTransform: 'uppercase', marginBottom: 10,
              fontFamily: 'JetBrains Mono, monospace',
            }}>{project.category}</span>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.4 }}>{project.title}</h3>
          </div>
          <span style={{ fontSize: '2rem', flexShrink: 0 }}>{project.emoji}</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '20px 24px 24px' }}>
        <p style={{ color: 'var(--text2)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: 18 }}>{project.desc}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.84rem' }}>
            <User size={13} style={{ color: '#888', flexShrink: 0 }} />
            <span style={{ color: 'var(--text2)' }}><strong style={{ color: 'var(--text)' }}>Role:</strong> {project.role}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.84rem' }}>
            <Wrench size={13} style={{ color: '#888', flexShrink: 0 }} />
            <span style={{ color: 'var(--text2)' }}><strong style={{ color: 'var(--text)' }}>Tools:</strong> {project.tools}</span>
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 10, padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Trophy size={14} style={{ color: '#fff', flexShrink: 0 }} />
          <span style={{ fontSize: '0.83rem', color: '#ccc', fontWeight: 600 }}>{project.outcome}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active)

  return (
    <SectionWrapper id="projects" style={{ background: 'var(--bg2)' }}>
      <SectionTitle
        tag="// projects.showcase"
        title="Things I've built 🔧"
        sub="Real-world HVAC projects across substations, commercial, and industrial sectors"
      />

      {/* Filter buttons */}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
        {filters.map(f => (
          <motion.button
            key={f}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActive(f)}
            style={{
              padding: '9px 22px', borderRadius: 50, cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.88rem',
              transition: 'all 0.3s',
              background: active === f ? '#fff' : 'var(--card)',
              color: active === f ? '#000' : 'var(--text2)',
              border: active === f ? '1px solid #fff' : '1px solid var(--border)',
              boxShadow: active === f ? '0 0 20px rgba(255,255,255,0.2)' : 'none',
            }}
          >
            {f === 'all' ? '✨ All' : f === 'substation' ? '⚡ Substation' : f === 'commercial' ? '🏢 Commercial' : '🏭 Industrial'}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}
        >
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  )
}
