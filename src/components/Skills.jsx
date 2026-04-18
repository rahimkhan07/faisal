import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wind, Calculator, PenTool, Pipette, Settings, BarChart2, Cpu, BookOpen, Users, Zap } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const skills = [
  { icon: <Wind size={20} />, name: 'HVAC System Design', pct: 95, color: '#a855f7' },
  { icon: <Calculator size={20} />, name: 'Thermal Load Calc (HAP)', pct: 90, color: '#06b6d4' },
  { icon: <PenTool size={20} />, name: 'AutoCAD Drafting', pct: 88, color: '#ec4899' },
  { icon: <Pipette size={20} />, name: 'Duct & Pipe Sizing', pct: 92, color: '#10b981' },
  { icon: <Settings size={20} />, name: 'Equipment Selection', pct: 90, color: '#f59e0b' },
  { icon: <BarChart2 size={20} />, name: 'Project Management', pct: 85, color: '#3b82f6' },
  { icon: <Cpu size={20} />, name: 'Smart HVAC Systems', pct: 80, color: '#a855f7' },
  { icon: <BookOpen size={20} />, name: 'ASHRAE Standards', pct: 93, color: '#06b6d4' },
  { icon: <Users size={20} />, name: 'CRM / MS Dynamics', pct: 70, color: '#ec4899' },
  { icon: <Zap size={20} />, name: 'Energy Efficiency Design', pct: 95, color: '#10b981' },
]

function SkillBar({ skill, index }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ scale: 1.02 }}
      style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 16, padding: '22px 20px',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = skill.color + '44'
        e.currentTarget.style.boxShadow = `0 0 30px ${skill.color}22`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: skill.color + '18', border: `1px solid ${skill.color}33`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: skill.color,
          }}>{skill.icon}</div>
          <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{skill.name}</span>
        </div>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem',
          color: skill.color, fontWeight: 700,
        }}>{skill.pct}%</span>
      </div>
      <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.pct}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.07 + 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{
            height: '100%', borderRadius: 3,
            background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`,
            boxShadow: `0 0 10px ${skill.color}66`,
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        tag="// skills.exe"
        title="What I bring to the table 🛠️"
        sub="Core competencies built through years of hands-on engineering"
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 20,
      }}>
        {skills.map((skill, i) => <SkillBar key={i} skill={skill} index={i} />)}
      </div>
    </SectionWrapper>
  )
}
