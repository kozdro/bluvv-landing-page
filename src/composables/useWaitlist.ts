import { ref } from 'vue'

// import axios from 'axios'
const mailchimpAction = import.meta.env.VITE_MAILCHIMP_ACTION
const isWaitlistModalVisible = ref<boolean>(false)

export default () => {
  const isLoading = ref<boolean>(false)
  const errorMessage = ref<string | null>(null)
  const isSubmitted = ref<boolean>(false)

  const submitForm = async(email: string) => {
    if (!email) {
      errorMessage.value = 'Please enter a valid email.'
      return
    }
  
    isLoading.value = true
    errorMessage.value = null
  
    try {
      const formData = new FormData()
      formData.append('EMAIL', email)
  
      await fetch(mailchimpAction, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })
  
      isSubmitted.value = true
      email = ''
    } catch (error) {
      console.error('Error submitting form:', error)
      errorMessage.value = 'Something went wrong. Please try again.'
    } finally {
      isLoading.value = false
    }
  }

  // const signup = async (email: string) => {
  //   if (!email) {
  //     errorMessage.value = 'Please enter a valid email.'
  //     return
  //   }

  //   isLoading.value = true
  //   errorMessage.value = null

  //   try {
  //     const response = await axios.post(
  //       `https://${DC}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
  //       {
  //         email_address: email,
  //         status: 'subscribed',
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
  //         },
  //       }
  //     )

  //     if (response.status === 200) {
  //       alert('Thank you for joining the waitlist!')
  //       email = ''
  //     }
  //   } catch (error) {
  //     console.error('Mailchimp API Error:', error.response?.data || error)
  //     errorMessage.value = 'Something went wrong. Please try again later.'
  //   } finally {
  //     isLoading.value = false
  //   }
  // }

  return {
    isWaitlistModalVisible,
    isLoading,
    errorMessage,
    isSubmitted,
    submitForm,
  }
}
