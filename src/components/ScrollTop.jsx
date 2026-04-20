import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, Download } from 'lucide-react'

export default function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Download Resume FAB */}
      <motion.a
        href="#"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.25)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed', bottom: 90, right: 24, zIndex: 999,
          background: '#fff',
          color: '#000', padding: '12px 20px', borderRadius: 50,
          fontWeight: 700, fontSize: '0.85rem',
          display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: '0 0 30px rgba(255,255,255,0.15)',
          textDecoration: 'none',
        }}
      >
        <Download size={16} /> Resume
      </motion.a>

      {/* Scroll to top */}
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed', bottom: 24, right: 24, zIndex: 999,
              width: 48, height: 48, borderRadius: '50%',
              background: 'var(--card)', border: '1px solid var(--border)',
              color: 'var(--text)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
