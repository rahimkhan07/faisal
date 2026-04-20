import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wind, Settings, Wrench, ClipboardList, CheckSquare, Users, TrendingUp, BarChart2, Monitor, Database } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

// Convert integer to Roman numeral
function toRoman(num) {
  const vals = [100,90,50,40,10,9,5,4,1]
  const syms = ['C','XC','L','XL','X','IX','V','IV','I']
  let result = ''
  for (let i = 0; i < vals.length; i++) {
    while (num >= vals[i]) { result += syms[i]; num -= vals[i] }
  }
  return result
}

const skills = [
  { icon: <Wind size={20} />, name: 'HVAC Design & Load Calculation', pct: 92 },
  { icon: <Settings size={20} />, name: 'MEP Project Management', pct: 90 },
  { icon: <Wrench size={20} />, name: 'Installation, Testing & Commissioning', pct: 93 },
  { icon: <ClipboardList size={20} />, name: 'Project Planning & Execution', pct: 88 },
  { icon: <CheckSquare size={20} />, name: 'Quality Control & Compliance', pct: 87 },
  { icon: <Users size={20} />, name: 'CRM & Customer Support', pct: 83 },
  { icon: <TrendingUp size={20} />, name: 'Digital Marketing Tools', pct: 82 },
  { icon: <BarChart2 size={20} />, name: 'Data Analysis & Reporting', pct: 80 },
  { icon: <Monitor size={20} />, name: 'AutoCAD / HAP / Power BI', pct: 88 },
  { icon: <Database size={20} />, name: 'MS Office & MS Project', pct: 90 },
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
        transition: 'border-color 0.3s, box-shadow 0.3s', cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
        e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.05)'
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
            background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc',
          }}>{skill.icon}</div>
          <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{skill.name}</span>
        </div>
        {/* Roman numeral percentage */}
        <span style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 700, letterSpacing: 1 }}>
          {toRoman(skill.pct)}
        </span>
      </div>
      <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.pct}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.07 + 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{ height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #555, #fff)', boxShadow: '0 0 10px rgba(255,255,255,0.2)' }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        roman="II"
        tag="// skills.exe"
        title="What I bring to the table 🛠️"
        sub="Technical engineering skills combined with business and marketing expertise"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {skills.map((skill, i) => <SkillBar key={i} skill={skill} index={i} />)}
      </div>
    </SectionWrapper>
  )
}
