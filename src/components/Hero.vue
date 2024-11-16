<template>
  <section class="bluvv-gradient flex justify-between items-center py-16 text-white relative">
    <div class="container flex flex-col md:flex-row gap-10 my-28">
      <div class="basis-1/2">
        <h1 v-text="'Transforming Beauty eCommerce'"></h1>
        <p class="text-lg" v-text="'A revolutionary app where users discover, try, and review products while brands build authentic connections with their audience.'"></p>
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
    </div>

    <div class="absolute -bottom-8 right-20">
      <img
        :src="Mockups"
        alt="App Mockups"
        class="scale-110"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/shared/Button.vue'
import Mockups from '@/assets/Mockups.svg'

import { ButtonVariant, ButtonWidth } from '@/types'

const handleContactClick = () => {
  console.log('Contact button clicked')
}

const handleJoinClick = () => {
  console.log('Join Waitlist button clicked')
}
</script>
