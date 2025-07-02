// import React, { useState } from 'react'

// const RSVP: React.FC = () => {
//   const [response, setResponse] = useState<'yes' | 'no' | ''>('')

//   const isDisabled = response === 'no'
//   // const submitted = false // optional state if needed

//   return (
//     <section style={{ padding: '1.5rem', backgroundColor: 'white', color: '#1f2937', textAlign: 'center', margin: 0 ,border: 'none',  marginBottom: '2rem'}}>
//       <h2 style={{ fontFamily: 'Glass Antiqua', fontSize: '1.875rem', marginBottom: '1rem' }}>
//         ¿Asistirás al evento?
//       </h2>

//       {/* Circle radio options */}
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
//         {[
//           { value: 'yes', label: 'Sí asistiré' },
//           { value: 'no', label: 'No asistiré' },
//         ].map(({ value, label }) => (
//           <label key={value} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '1.125rem' }}>
//             <input
//               type="radio"
//               name="rsvp"
//               value={value}
//               checked={response === value}
//               onChange={() => setResponse(value as 'yes' | 'no')}
//               style={{ display: 'none' }}
//             />
//             <span
//               style={{
//                 display: 'inline-block',
//                 width: '1rem',
//                 height: '1rem',
//                 borderRadius: '50%',
//                 border: '2px solid #6b7280',
//                 marginRight: '0.5rem',
//                 backgroundColor: response === value ? '#cbc3e3' : 'transparent',
//                 transition: 'background-color 0.2s, border-color 0.2s',
//               }}
//             />
//             <span style={{ color: '#333' }}>{label}</span>
//           </label>
//         ))}
//       </div>

//       {/* Form always visible */}
//       <form
//         action="https://formsubmit.co/3d10ba49cf94c74c8fd24cfeff00904f"
//         method="POST"
//         style={{ maxWidth: '28rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
//       >
//         <input name="rsvp" type="hidden" value={response} />
//         <input type="hidden" name="_captcha" value="false" />
//         <label htmlFor="name" style={{ textAlign: 'left', fontWeight: 'bold' }}>Nombre completo</label>
//         <input
//           name="name"
//           type="text"
//           required
//           disabled={isDisabled}
//           style={{
//             padding: '0.5rem',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//             backgroundColor: isDisabled ? '#f5f5f5' : 'white',
//             cursor: isDisabled ? 'not-allowed' : 'auto',
//           }}
//         />
//         <label htmlFor="numberofpeople" style={{ textAlign: 'left', fontWeight: 'bold' }}>Cantidad de invitados confirmados</label>
//         <input
//           id="numberofpeople"
//           name="numberofpeople"
//           type="number" // changed from "text" to "number"
//           required
//           // min="1" // optional: prevents values below 1
//           disabled={isDisabled}
//           style={{
//             padding: '0.5rem',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//             backgroundColor: isDisabled ? '#f5f5f5' : 'white',
//             cursor: isDisabled ? 'not-allowed' : 'auto',
//           }}
//         />
//         <label htmlFor="nameofpeople" style={{ textAlign: 'left', fontWeight: 'bold' }}>Nombres de los asistentes</label>
//         <input
//           name="nameofpeople"
//           type="text"
//           required
//           disabled={isDisabled}
//           style={{
//             padding: '0.5rem',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//             backgroundColor: isDisabled ? '#f5f5f5' : 'white',
//             cursor: isDisabled ? 'not-allowed' : 'auto',
//           }}
//         />
//         <label htmlFor="contactnumber" style={{ textAlign: 'left', fontWeight: 'bold' }}>Número de contacto</label>
//         <input
//           name="contactnumber"
//           type="text"
//           required
//           disabled={isDisabled}
//           style={{
//             padding: '0.5rem',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//             backgroundColor: isDisabled ? '#f5f5f5' : 'white',
//             cursor: isDisabled ? 'not-allowed' : 'auto',
//           }}
//         />
//         <label htmlFor="message" style={{ textAlign: 'left', fontWeight: 'bold' }}>Dedicanos unas lindas palabras</label>
//         <textarea
//           name="message"
//           disabled={isDisabled}
//           style={{
//             padding: '0.5rem',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//             backgroundColor: isDisabled ? '#f5f5f5' : 'white',
//             cursor: isDisabled ? 'not-allowed' : 'auto',
//           }}
//         />
//         <button
//           type="submit"
//           disabled={!response}
//           style={{
//             backgroundColor: response ? '#cbc3e3' : '#ccc',
//             color: 'white',
//             padding: '0.5rem 0',
//             borderRadius: '4px',
//             fontWeight: 'bold',
//             cursor: response ? 'pointer' : 'not-allowed',
//             transition: 'background-color 0.2s',
//           }}
//         >
//           Enviar Confirmación
//         </button>
//       </form>
//     </section>
//   )
// }

// export default RSVP


  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()

  //   const formData = new FormData(e.currentTarget)

  //   try {
  //     const res = await fetch('https://script.google.com/macros/s/AKfycbypTL17s5V6ZUjyNjE0lEXHgb8Quxls6k7_LHyB1uW3iz27Qulfs-hT60eWLNqCmHTt/exec', {
  //       method: 'POST',
  //       body: formData,
  //     })

  //     if (res.ok) {
  //       e.currentTarget.reset()
  //       setSubmitted(true)
  //       setResponse('')
  //     } else {
  //       alert('Hubo un error. Intenta de nuevo más tarde.')
  //     }
  //   } catch (err) {
  //     alert('Error al enviar el formulario.')
  //     console.error(err)
  //   }
  // }

import React, { useState } from 'react'

const RSVP: React.FC = () => {
  const [response, setResponse] = useState<'yes' | 'no' | ''>('')
  const [submitted, setSubmitted] = useState(false)

  const isDisabled = response === 'no'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    const form = e.currentTarget
    // const formElements = form.elements as HTMLFormControlsCollection

    // const formData = {
    //   rsvp: response,
    //   name: (formElements.namedItem('name') as HTMLInputElement).value,
    //   numberofpeople: (formElements.namedItem('numberofpeople') as HTMLInputElement).value,
    //   nameofpeople: (formElements.namedItem('nameofpeople') as HTMLInputElement).value,
    //   contactnumber: (formElements.namedItem('contactnumber') as HTMLInputElement).value,
    //   message: (formElements.namedItem('message') as HTMLTextAreaElement).value,
    // }
  
    try {
      // const response = await fetch("https://script.google.com/macros/s/AKfycbwCeWIwKVbZODAdEXOdObWolRkMk-ViQSn3UCH6kwGzEKoQG1LTlr7YFQ9CqkY_p6Ng/exec", {
      //   method: "POST",
      //   body: JSON.stringify(formData),
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // })

      const formData = new FormData(form)

      const response = await fetch("https://script.google.com/macros/s/AKfycbwCeWIwKVbZODAdEXOdObWolRkMk-ViQSn3UCH6kwGzEKoQG1LTlr7YFQ9CqkY_p6Ng/exec", {
        method: "POST",
        body: formData,
      })
  
      const result = await response.json()
      console.log(result)
  
      if (result.status === "success") {
        setSubmitted(true)
        form.reset()
        setResponse("") // reset radio buttons
      } else {
        alert("Hubo un error al enviar. Por favor, intenta de nuevo.")
      }
    } catch (error) {
      console.error("Submission failed:", error)
      alert("Hubo un error al enviar. Por favor, intenta de nuevo.")
    }
  }

  return (
    <section style={{ padding: '1.5rem', backgroundColor: 'white', color: '#1f2937', textAlign: 'center', margin: 0, border: 'none', marginBottom: '2rem' }}>
      <h2 style={{ fontFamily: 'Glass Antiqua', fontSize: '1.875rem', marginBottom: '1rem' }}>
        ¿Asistirás al evento?
      </h2>

      {/* Circle radio options */}
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

      <form onSubmit={handleSubmit} style={{ maxWidth: '28rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input name="rsvp" type="hidden" value={response} />
        <input type="hidden" name="_captcha" value="false" />

        <label htmlFor="name" style={{ textAlign: 'left', fontWeight: 'bold' }}>Nombre completo</label>
        <input name="name" type="text" required disabled={isDisabled} style={inputStyle(isDisabled)} />

        <label htmlFor="numberofpeople" style={{ textAlign: 'left', fontWeight: 'bold' }}>Cantidad de invitados confirmados</label>
        <input name="numberofpeople" type="number" required disabled={isDisabled} style={inputStyle(isDisabled)} />

        <label htmlFor="nameofpeople" style={{ textAlign: 'left', fontWeight: 'bold' }}>Nombres de los asistentes</label>
        <input name="nameofpeople" type="text" required disabled={isDisabled} style={inputStyle(isDisabled)} />

        <label htmlFor="contactnumber" style={{ textAlign: 'left', fontWeight: 'bold' }}>Número de contacto</label>
        <input name="contactnumber" type="text" required disabled={isDisabled} style={inputStyle(isDisabled)} />

        <label htmlFor="message" style={{ textAlign: 'left', fontWeight: 'bold' }}>Dedícanos unas lindas palabras</label>
        <textarea name="message" disabled={isDisabled} style={inputStyle(isDisabled)} />

        <button
          type="submit"
          disabled={!response}
          style={{
            backgroundColor: response ? '#cbc3e3' : '#ccc',
            color: 'white',
            padding: '0.5rem 0',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: response ? 'pointer' : 'not-allowed',
            transition: 'background-color 0.2s',
          }}
        >
          Enviar Confirmación
        </button>

        {submitted && (
          <p style={{ marginTop: '1rem', fontWeight: 'bold', color: '#4CAF50' }}>
            ¡Gracias por confirmar tu asistencia!
          </p>
        )}
      </form>
    </section>
  )
}

// Reusable input styling
const inputStyle = (disabled: boolean) => ({
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  backgroundColor: disabled ? '#f5f5f5' : 'white',
  cursor: disabled ? 'not-allowed' : 'auto',
})

export default RSVP