<template>
  <div class="cta bluvv-gradient py-10 md:py-16">
    <div class="container text-center my-16">
      <h2 class="text-white" v-text="'Be part of the Future'" />
      <p class="text-lg mb-8" v-text="'Join our waitlist today and experience the next generation of beauty eCommerce.'" />
      <Button
        :width="ButtonWidth.Auto"
        :variant="ButtonVariant.OutlineTertiary"
        label="Join the Waitlist"
        class="shadow-lg"
        @click="isWaitlistModalVisible = true"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/components/shared/Button.vue'

import { ButtonVariant, ButtonWidth } from '@/types'
import useWaitlist from '@/composables/useWaitlist'

const { isWaitlistModalVisible } = useWaitlist()
</script>
