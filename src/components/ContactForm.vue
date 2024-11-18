<template>
  <section class="container py-6 md:py-10">
    <h2 class="text-primary">Send us a message</h2>
    <form @submit.prevent="handleSubmit" class="md:w-1/2 flex flex-col gap-4 mt-10">
      <Input
        v-model="form.name"
        label="Name"
        required
        :error-message="v$.name.$error ? nameError : ''"
      />
      <Input
        v-model="form.email"
        label="Email"
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
          id="message"
          v-model="form.message"
          rows="6"
          placeholder="Your message"
          class="w-full border border-gray rounded-lg transition duration-200 ease-in-out pl-3 p-2 focus:border-primary focus-within:border-primary focus:outline-0 focus-visible:outline-none placeholder:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{ '!border-red': v$.message.$error }"
        />
        <span
          v-if="v$.message.$error"
          class="text-red text-sm block -mt-1.5"
          v-text="messageError"
        />
      </div>
      <Button type="submit" label="Send message" />
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

const rules = {
  name: { required },
  email: { required, email },
  message: { required }
}

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

const handleSubmit = () => {
  v$.value.$touch()
  if (!v$.value.$invalid) {
    console.log('Form submitted with values:', form.value)
  }
}
</script>
