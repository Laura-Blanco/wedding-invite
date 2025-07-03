import React from 'react'

interface ThankYouModalProps {
  response: 'yes' | 'no' | ''
  onClose: () => void
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ response, onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '90%',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          {response === 'yes'
            ? '¡Gracias por confirmar tu asistencia! Nos vemos en la boda.'
            : 'Te extrañaremos. Gracias por haber confirmado.'}
        </p>
        <button
          onClick={onClose}
          style={{
            backgroundColor: '#cbc3e3',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Gracias
        </button>
      </div>
    </div>
  )
}

export default ThankYouModal