import React, { useState, useRef } from 'react'
import { addRsvpResponse } from '../lib/actions'
import ThankYouModal from './ThankYouModal'
  
  const RSVP: React.FC = () => {
  const [response, setResponse] = useState<'yes' | 'no' | ''>('')
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  const formRef = useRef<HTMLFormElement>(null)
  const isNumberDisabled = response === 'no'

  const handleCloseModal = () => {
    setShowModal(false)
    setResponse('')
    formRef.current?.reset()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const res = await addRsvpResponse(response, formData)
      if (res.successMessage) {
        console.log(res.successMessage)
        setShowModal(true)
      } else {
        console.log(res.errorMessage)
      }
    } finally {
      setLoading(false)
    }
  }


  return (
    <section style={{ padding: '1.5rem', backgroundColor: 'white', color: '#1f2937', textAlign: 'center', margin: 0, border: 'none', marginBottom: '2rem' }}>
      <h2 style={{ fontFamily: 'Glass Antiqua', fontSize: '1.875rem', marginBottom: '1rem' }}>
        ¿Asistirás al evento?
      </h2>
      <p style={{fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '1.2rem'}}>Por favor confirmar para el 5 de Agosto</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
        {[
          { value: 'yes', label: 'Sí asistiré' },
          { value: 'no', label: 'No asistiré' },
        ].map(({ value, label }) => (
          <label key={value} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '1.125rem' }}>
            <input
              type="radio"
              name="rsvp"
              value={value}
              checked={response === value}
              onChange={() => setResponse(value as 'yes' | 'no')}
              style={{ display: 'none' }}
            />
            <span
              style={{
                display: 'inline-block',
                width: '1rem',
                height: '1rem',
                borderRadius: '50%',
                border: '2px solid #6b7280',
                marginRight: '0.5rem',
                backgroundColor: response === value ? '#cbc3e3' : 'transparent',
                transition: 'background-color 0.2s, border-color 0.2s',
              }}
            />
            <span style={{ color: '#333' }}>{label}</span>
          </label>
        ))}
      </div>

      <form ref={formRef} onSubmit={(e) => handleSubmit(e)} style={{ maxWidth: '28rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input name="rsvp" type="hidden" value={response} />
        <input type="hidden" name="_captcha" value="false" />

        <label htmlFor="name" style={{ textAlign: 'left', fontWeight: 'bold' }}>Nombre completo: *</label>
        <input name="name" type="text" required style={inputStyle(false)} />

        <label htmlFor="numberofpeople" style={{ textAlign: 'left', fontWeight: 'bold' }}>Cantidad de invitados confirmados: *</label>
        <input name="numberofpeople" type="number" required disabled={isNumberDisabled} style={inputStyle(isNumberDisabled)} />

        <label htmlFor="nameofpeople" style={{ textAlign: 'left', fontWeight: 'bold' }}>Nombres de los asistentes: *</label>
        <input name="nameofpeople" type="text" required style={inputStyle(false)} />

        <label htmlFor="contactnumber" style={{ textAlign: 'left', fontWeight: 'bold' }}>Número de contacto: *</label>
        <input name="contactnumber" type="text" required style={inputStyle(false)} />

        <label htmlFor="message" style={{ textAlign: 'left', fontWeight: 'bold' }}>Dedícanos unas lindas palabras: </label>
        <textarea name="message" style={inputStyle(false)} />
        <button
          type="submit"
          disabled={!response || loading}
          style={{
            backgroundColor: response ? '#cbc3e3' : '#ccc',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: response && !loading ? 'pointer' : 'not-allowed',
            transition: 'background-color 0.2s',
            opacity: loading ? 0.8 : 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem', 
          }}
        >
          {loading && (
            <span
              style={{
                width: '1rem',
                height: '1rem',
                border: '2px solid white',
                borderTop: '2px solid transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                display: 'inline-block',
              }}
            />
          )}
          Enviar Confirmación
        </button>
      </form>
      {showModal && (
        <ThankYouModal
          response={response}
          onClose={handleCloseModal}
        />
      )}
    </section>
  )
}

const inputStyle = (disabled: boolean) => ({
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  backgroundColor: disabled ? '#f5f5f5' : 'white',
  cursor: disabled ? 'not-allowed' : 'auto',
})

export default RSVP