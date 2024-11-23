<template>
  <div class="modal fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 container">
    <div class="bg-white p-[var(--modal-outer-padding)] rounded-lg shadow-lg max-w-2xl w-full relative max-h-[var(--mobile-modal-max-height)] lg:max-h-[var(--modal-max-height)]">
      <button class="absolute top-0 right-0 p-2 text-black" @click="$emit('close')">
        <CloseIcon class="w-4 h-4" />
      </button>
      <div v-if="!isSubmitted" class="flex flex-col">
        <h3 class="text-primary" v-text="'Thank You!'" />
        <p>
          You've successfully joined the waitlist.<br />
          We'll notify you as soon as the application is live!
        </p>
        <Button
          :width="ButtonWidth.Auto"
          label="Close"
          class="mt-4 self-end w-1/3"
          @click="$emit('close')"
        />
      </div>

      <div v-else>
        <h3 class="text-primary" v-text="'Join the Waitlist'" />
        <p>
          Sign up to be the first to know when the Bluvv application goes live.<br />
          We'll send you an email with exclusive updates and an invitation to explore our platform as soon as it's ready.
        </p>
        <form class="flex flex-col mt-6" @submit.prevent="submitForm(email)">
          <div class="flex gap-4 items-center">
            <Input
              v-model="email"
              type="email"
              name="EMAIL"
              label="Email"
              required
              class=""
            />
            <Button
              type="submit"
              :loading="isLoading"
              :width="ButtonWidth.Auto"
              label="Submit"
              class="basis-2/5"
            />
          </div>
          <p
            v-if="errorMessage"
            class="text-red text-sm"
            v-text="errorMessage"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import Button from '@/components/shared/Button.vue'
import Input from '@/components/shared/Input.vue'

import CloseIcon from '@/assets/icons/Close.svg'

import useWaitlist from '@/composables/useWaitlist'
import { ButtonWidth } from '@/types'

const { isLoading, errorMessage, isSubmitted, submitForm } = useWaitlist()

const email = ref<string>('')
</script>

<style lang="scss" scoped>
.modal {
  --modal-outer-padding: 2rem;
  --mobile-modal-outer-padding: 1rem;
  --modal-max-height: calc(100vh - var(--modal-outer-padding) * 2);
  --mobile-modal-max-height: calc(100vh - var(--mobile-modal-outer-padding) * 6);
}
</style>
