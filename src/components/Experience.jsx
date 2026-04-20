import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Star } from 'lucide-react'
import SectionWrapper, { SectionTitle } from './SectionWrapper'

const experiences = [
  {
    title: 'Mechanical Site Engineer',
    company: 'Dhreesti Airtech Solution',
    location: 'Gurgaon, Haryana, India',
    period: 'Jan 2021 – May 2025',
    responsibilities: [
      'Heating/Cooling Load Calculation following Carrier E-20, ASHRAE/ISHRAE handbook & software; building survey and preparation of riser diagrams for multi-storey buildings',
      'Selection of indoor and outdoor units according to calculated CFM and TR',
      'Estimation, tendering & preparation of BOQ',
      'Installation, testing & commissioning of HVAC systems (Air Cooled / Water Cooled) for residential, commercial & industrial buildings',
      'Coordinate with other disciplines and ensure site clearance is available to start HVAC activities',
      'Preparing relevant documents to conduct testing inspections — Duct light testing for Ducts and Hydro test for Above ground and Underground chilled water piping systems',
      'Assist the Commissioning Team in Pre-commissioning & Commissioning stages of all HVAC equipment',
      'Oversee installation of Chilled Water systems including Primary/Secondary chilled water networks, ETS rooms, cooling manifold, and chilled water pressurization systems',
      'Oversee installation of FCUs, AHUs including valve packages and chilled water pumps',
      'Manage installation of AHU, FCU, CAV, VAV systems, Exhaust Fans, Dampers (VCD, FD, MSFD, PRD, NRD), lift/staircase pressurization fans, smoke exhaust fans and associated ductworks',
      'Lead and supervise installation of water supply systems, hot water circulation, Water Heater GRP tank, Transfer Pump, Booster Pump',
      'Lead and supervise installation of Fire Fighting systems — Fire Pumps, Sprinkler systems, Hose reel, landing valve, Extinguisher',
      'Lead and supervise installation of Drainage/storm water systems, Sump pit with pumps, Float switch, Inspection chamber, gully traps',
      'Implement robust quality control procedures, conduct regular site inspections, and address non-compliance issues promptly',
      'Supervise Mechanical construction activities including installation, testing, commissioning, and handover',
      'Prepare and manage weekly work schedules outlining tasks, timelines, and resource requirements',
      'Source, evaluate, and select Mechanical equipment, materials, and suppliers considering technical suitability and value for money',
    ],
    badge: '⚙️ 4+ Years MEP Site Engineering',
  },
  {
    title: 'Sr. Associate Portfolio Manager',
    company: 'Moneymonial Reality Pvt. Ltd',
    location: 'Dubai Investment Park, UAE',
    period: 'Jan 2024 – Apr 2025',
    responsibilities: [
      'Manage and optimize real estate portfolios across multiple asset classes (residential, commercial, industrial, retail, mixed-use)',
      'Support development and execution of portfolio strategies to maximize risk-adjusted returns',
      'Monitor asset-level and portfolio-level performance against benchmarks and investment objectives',
      'Analyse real estate markets, economic trends, and competitive dynamics to support investment decision-making',
      'Track property-level and macro-level KPIs including occupancy rates, NOI growth, rent trends, and cap rate movements',
      'Ensure compliance with internal investment policies, client mandates, and regulatory requirements',
      'Identify and mitigate risks related to asset performance, market conditions, and operational inefficiencies',
      'Assist in underwriting potential acquisitions, dispositions, and development projects',
      'Lead or contribute to investment memos and internal approvals',
      'Coordinate with legal, tax, technical, and market consultants during due diligence',
      'Prepare and present portfolio performance reports and strategic updates to clients and senior leadership',
      'Collaborate with JV partners, operators, and third-party managers to align on asset performance and business plans',
    ],
    badge: '📊 Real Estate Portfolio Management',
  },
  {
    title: 'Summer Intern — Marketing & Sales',
    company: 'LULU GROUP INTERNATIONAL & TATA MOTORS',
    location: 'Lucknow, Uttar Pradesh, India',
    period: 'Jul 2023 – Nov 2023',
    responsibilities: [
      'Gained hands-on experience in CRM and customer support operations within large corporate environments',
      'Applied digital marketing tools to support brand campaigns and outreach initiatives',
      'Conducted data analysis to support sales and marketing decisions',
      'Participated in sales presentations, sales process management, and sales management activities',
      'Developed skills in time management and team collaboration',
    ],
    badge: '🏆 Dual Internship — LULU Group & Tata Motors',
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <SectionWrapper id="experience">
      <SectionTitle
        roman="IV"
        tag="// work.history"
        title="Where I've worked 💼"
        sub="From MEP site engineering to portfolio management and marketing"
      />

      <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute', left: 28, top: 0, bottom: 0, width: 2,
          background: 'linear-gradient(180deg, #fff, #555, transparent)',
        }} />

        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              style={{ paddingLeft: 72, position: 'relative' }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute', left: 18, top: 28, width: 22, height: 22,
                borderRadius: '50%', background: idx === 0 ? '#fff' : idx === 1 ? '#aaa' : '#555',
                border: '3px solid var(--bg)',
                boxShadow: idx === 0 ? '0 0 20px rgba(255,255,255,0.35)' : 'none',
              }} />

              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: '32px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{exp.title}</h3>
                  <span style={{
                    background: idx === 0 ? '#fff' : 'rgba(255,255,255,0.12)',
                    color: idx === 0 ? '#000' : '#ccc',
                    padding: '6px 16px', borderRadius: 50,
                    fontSize: '0.78rem', fontWeight: 700, whiteSpace: 'nowrap',
                    border: idx === 0 ? 'none' : '1px solid rgba(255,255,255,0.2)',
                  }}>{exp.period}</span>
                </div>

                <div style={{ color: '#ccc', fontWeight: 700, fontSize: '0.97rem', marginBottom: 4 }}>{exp.company}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text2)', fontSize: '0.85rem', marginBottom: 24 }}>
                  <MapPin size={13} style={{ color: '#888' }} /> {exp.location}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
                  {exp.responsibilities.map((r, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.15 + i * 0.04 }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.88rem', color: 'var(--text2)', lineHeight: 1.6 }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#888', flexShrink: 0, marginTop: 9 }} />
                      {r}
                    </motion.li>
                  ))}
                </ul>

                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 50, padding: '10px 20px',
                  fontSize: '0.85rem', fontWeight: 700, color: '#fff',
                }}>
                  <Star size={14} fill="#fff" /> {exp.badge}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
