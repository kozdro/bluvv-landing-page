<template>
  <div class="bluvv-gradient py-10 md:py-16 text-white">
    <div class="container text-center my-10">
      <h2 class="mb-6 md:mb-12 md:flex justify-center">
        Partner with
        <Logo class="inline-block w-40 h-16 text-lavender-deep relative bottom-2 md:bottom-4" />
      </h2>
      <p class="text-lg mb-8" v-text="'Join us in revolutionizing social eCommerce. Whether you\'re an investor or a D2C company, Bluvv offers unparalleled opportunities to connect with a conscious audience.'" />
      <div class="flex flex-col md:flex-row justify-center gap-4">
        <Button
          :width="ButtonWidth.Auto"
          :variant="ButtonVariant.Tertiary"
          href="/contact"
          label="Contact Us"
          class="shadow-lg"
        />
        <Button
          :width="ButtonWidth.Auto"
          :variant="ButtonVariant.OutlineTertiary"
          href="/about-us"
          label="Learn More"
          class="shadow-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/shared/Logo.vue'
import Button from '@/components/shared/Button.vue'

import { ButtonWidth, ButtonVariant } from '@/types'
</script>
