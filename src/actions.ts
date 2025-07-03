export const addRsvpResponse = async (attending: string, formData: FormData) => {
    const name = formData.get("name")
    const numberOfPeople = formData.get("numberofpeople")
    const nameOfPeople = formData.get("nameofpeople")
    const contactNumber = formData.get("contactnumber")
    const message = formData.get("message")

    const payload = {
        attending,
        name,
        numberOfPeople,
        nameOfPeople,
        contactNumber,
        message
      }

    console.log("Sending payload to Google Script:", payload)

    try {
        const res = await fetch('/api/rsvp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
    
        if (!res.ok) {
          throw new Error(`Status ${res.status}`)
        }
    
        return { successMessage: 'Success! You have RSVP’d.' }
      } catch (error) {
        console.error('RSVP error:', error)
        return { errorMessage: 'Oops! Something went wrong.' }
      }
    }