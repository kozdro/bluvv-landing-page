<template>
  <section class="container py-6 md:py-10">
    <h2 class="text-primary" v-text="'Send Us a messege'" />
    <p
      v-if="successMessage"
      class="text-lg text-green font-medium mt-8 !mb-0"
      v-text="successMessage"
    />
    <form @submit.prevent="submitForm" class="md:w-1/2 flex flex-col gap-4 mt-10">
      <Input
        v-model="form.name"
        label="Name"
        id="name"
        name="name"
        required
        :error-message="v$.name.$error ? nameError : ''"
      />
      <Input
        v-model="form.email"
        label="Email"
        id="email"
        name="email"
        type="email"
        required
        autocomplete="email"
        :error-message="getEmailErrorMessage"
      />
      <div>
        <label
          for="message"
          class="block text-sm text-lavender-old pl-2 pb-1"
          v-text="'Message*'"
        />
        <textarea
          v-model="form.message"
          id="message"
          name="message"
          rows="6"
          placeholder="Your message"
          class="w-full border border-gray rounded-lg transition duration-200 ease-in-out pl-3 p-2 text-lavender-old focus:border-primary focus-within:border-primary focus:outline-0 focus-visible:outline-none placeholder:text-lavender-old disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{ '!border-red': v$.message.$error }"
        />
        <span
          v-if="v$.message.$error"
          class="text-red text-sm block -mt-1.5"
          v-text="messageError"
        />
      </div>
      <Button
        type="submit"
        label="Send message"
        :loading="isLoading"
      />
      <p
        v-if="errorMessage"
        class="text-red"
        v-text="errorMessage"
      />
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import Button from '@/components/shared/Button.vue'
import Input from '@/components/shared/Input.vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})
const isLoading = ref<boolean>(false)
const successMessage = ref<string>('')
const errorMessage = ref<string>('')

const rules = {
  name: { required },
  email: { required, email },
  message: { required }
}
const formspreeAction = import.meta.env.VITE_FORMSPREE_ACTION

const v$ = useVuelidate(rules, form)

const nameError = 'Name is required'
const messageError = 'Message is required'

const getEmailErrorMessage = computed(() => {
  if (!v$.value?.email?.$error) return ''

  if (!v$.value.email.required.$pending && !v$.value.email.required.$response) {
    return 'Email is required'
  } else if (!v$.value.email.email.$pending && !v$.value.email.email.$response) {
    return 'Invalid email address'
  }
})

const submitForm = async() => {
  v$.value.$touch()

  if (v$.value.$invalid) return

  try {
    isLoading.value = true
    successMessage.value = ''
    errorMessage.value = ''

    const formData = new FormData()
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('message', form.value.message)

    const response = await fetch(formspreeAction, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })

    if (response.ok) {
      successMessage.value = 'Thank you! Your message has been sent.'
      form.value.name = ''
      form.value.email = ''
      form.value.message = ''
      v$.value.$reset()
    } else {
      errorMessage.value = 'Something went wrong. Please try again.'
    }
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Failed to send the message. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>
