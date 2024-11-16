<template>
  <section class="newsletter py-24 text-black bluvv-gradient">
    <div class="container flex items-center gap-20">
      <div class="basis-1/3">
        <h2 class="mt-6" v-text="'Stay in the Loop'" />
        <p class="subheading" v-text="'Sign up for our newsletter to get the latest updates and be the first to know when we launch.'" />
      </div>
      <div class="newsletter-form flex-1 flex flex-col md:flex-row gap-4 h-12">
        <input
          type="email"
          placeholder="Enter your email address"
          class="p-3 rounded-lg flex-grow border-2 border-primary focus:outline-none focus:border-secondary"
        />
        <Button
          label="Sign Up"
          :variant="ButtonVariant.Secondary"
          :width="ButtonWidth.Auto"
          class=""
          @click="signupNewsletter"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/shared/Button.vue'

import { ButtonVariant, ButtonWidth } from '@/types'

const signupNewsletter = () => {
  window.alert('Thank you for signing up!')
}
</script>
