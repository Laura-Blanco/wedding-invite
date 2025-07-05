import React from 'react'
import { motion } from 'framer-motion'

const ClosingMessage: React.FC = () => {
  const images = [
    '/assets/djb.webp',
    '/assets/djw.webp',
  ]

  return (
    <section
      style={{
        padding: '1.8rem 1rem',
        textAlign: 'center',
        backgroundColor: '#fdfdfd',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {images.map((src, index) => (
            <motion.img
                key={index}
                src={src}
                alt={`Closing ${index}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                    delay: index * 0.2,        // slight stagger between images
                    duration: 0.6,             // fast but not too fast
                    ease: 'easeInOut',
                }}
                style={{
                width: '100%',
                maxWidth: '90%',
                margin: '0 auto 1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                display: 'block',
                }}
            />
        ))}
        <div
        style={{
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            fontFamily: 'Glass Antiqua',
            gap: '1rem',
        }}
        >
        <svg
            width="40"
            height="12"
            viewBox="0 0 40 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(180deg)' }}
        >
            <path
            d="M0 6 C10 0, 30 12, 40 6"
            stroke="#1f2937"
            strokeWidth="2"
            fill="transparent"
            />
        </svg>
        <h2
            style={{
            fontSize: '2.5rem',
            fontFamily: 'Parisienne',
            color: '#1f2937',
            fontWeight: 500,
            margin: 0,
            }}
        >
            Te esperamos
        </h2>
        <svg
            width="40"
            height="12"
            viewBox="0 0 40 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M0 6 C10 0, 30 12, 40 6"
            stroke="#1f2937"
            strokeWidth="2"
            fill="transparent"
            />
        </svg>
        </div>
      </div>
    </section>
  )
}

export default ClosingMessage
