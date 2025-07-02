import React from 'react'

const DressCode: React.FC = () => {
  return (
    <section style={{ padding: '1.5rem', textAlign: 'center', backgroundColor: 'white', color: '#1f2937', margin: 0 ,border: 'none', }}>
      <img src="/assets/icons/vestimenta.WEBP" alt="Dress Icon" style={{ width: '40px', height: '40px'}} />
      <h2 style={{ fontSize: '1.875rem', marginBottom: '1rem', fontFamily: 'Glass Antiqua', fontWeight: 'bold'}}>Código de Vestimenta</h2>
      {/* <div style={{
        width: '120px', // adjust width as needed
        height: '1px',
        backgroundColor: '#1f2937',
        margin: '0 auto 1rem' // center it and add bottom margin
      }} /> */}
      <p><strong>Mujeres:</strong> Vestido Largo Formal</p>
      <p><strong>Hombres:</strong> Traje Completo Formal</p>
    </section>
  )
}

export default DressCode