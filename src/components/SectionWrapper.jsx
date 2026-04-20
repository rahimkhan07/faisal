import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionWrapper({ children, id, style = {} }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id={id} ref={ref} style={{ padding: '100px 0', position: 'relative', ...style }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionTitle({ tag, title, sub, roman }) {
  return (
    <div style={{ marginBottom: 64, textAlign: 'center' }}>
      {roman && (
        <div style={{
          fontSize: '0.7rem', color: 'var(--text3)', letterSpacing: 6,
          textTransform: 'uppercase', marginBottom: 8, fontWeight: 700,
        }}>{roman}</div>
      )}
      <div style={{
        display: 'inline-block',
        fontSize: '0.78rem', color: '#aaa', letterSpacing: 3,
        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 50, padding: '5px 16px', marginBottom: 16, textTransform: 'uppercase',
      }}>{tag}</div>
      <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
        {title}
      </h2>
      {sub && <p style={{ color: 'var(--text2)', fontSize: '1rem', maxWidth: 520, margin: '0 auto' }}>{sub}</p>}
      <div style={{
        width: 60, height: 3, borderRadius: 2,
        background: 'linear-gradient(90deg, #fff, #555)',
        margin: '20px auto 0',
      }} />
    </div>
  )
}
