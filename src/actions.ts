const googleScriptURL = "https://script.google.com/macros/s/AKfycbyXhLMZlIwwbeMfqcowcaS4cWAuSe8XqyuvPfXOI4cv5RKiFGiuMexT5aveuv3c4NYT/exec"

export const addRsvpResponse = async (attending: string, formData: FormData) => {
    const name = formData.get("name")
    const numberOfPeople = formData.get("numberofpeople")
    const nameOfPeople = formData.get("nameofpeople")
    const contactNumber = formData.get("contactnumber")
    const message = formData.get("message")

    try{
        const res = await fetch(googleScriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                attending,
                name,
                numberOfPeople,
                nameOfPeople,
                contactNumber,
                message
            })
        })
        if(!res.ok){
            throw new Error("Failed to add registration to google spreadsheet")
        }
        return {successMessage: 'Success! You have sucessfully rsvpd to the wedding'

        } 
    } catch (error){
        return {errorMessage: 'Oops! There was a problem with your rsvp.'}
    }
}