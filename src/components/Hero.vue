<template>
  <section class="bluvv-gradient flex justify-between items-center py-32 text-white">
    <div class="container flex flex-col md:flex-row gap-10">
      <div class="basis-1/2">
        <h1 v-text="'Transforming Beauty eCommerce'"></h1>
        <p class="text-lg" v-text="'A revolutionary platform where users discover, try, and review products while brands build authentic connections with their audience.'"></p>
        <div class="space-x-4">
          <Button
            :variant="ButtonVariant.OutlineTertiary"
            :width="ButtonWidth.Auto"
            label="Join the Waitlist"
            class="shadow-lg"
            @click="handleJoinClick"
          />
          <Button
            :variant="ButtonVariant.Tertiary"
            :width="ButtonWidth.Auto"
            label="Get In Touch"
            class="shadow-lg"
            @click="handleContactClick"
          />
        </div>
      </div>

      <div class="basis-1/2">
        <div class="relative">
          <img
            src="https://via.placeholder.com/600x400"
            alt="App Mockup"
            class="rounded-xl shadow-2xl"
          />
          <div class="absolute inset-0 bg-gradient-to-br from-secondary to-lavender-gray opacity-30 rounded-xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/shared/Button.vue'

import { ButtonVariant, ButtonWidth } from '@/types'

const handleContactClick = () => {
  console.log('Contact button clicked')
}

const handleJoinClick = () => {
  console.log('Join Waitlist button clicked')
}
</script>
