<template>
  <section class="bluvv-gradient flex justify-between items-center py-16 text-white relative overflow-hidden">
    <div class="container flex flex-col md:flex-row md:gap-10 mt-6 mb-0 md:my-28">
      <div class="md:basis-1/2">
        <h1 v-text="'Transforming Beauty eCommerce'" />
        <p class="text-lg" v-text="'A revolutionary app where users discover, try, and review products while brands build authentic connections with their audience.'" />
        <div class="flex flex-col md:flex-row gap-4 mt-8 md:mt-0">
          <Button
            :variant="ButtonVariant.OutlineTertiary"
            :width="ButtonWidth.Auto"
            label="Join the Waitlist"
            class="shadow-lg"
            @click="isWaitlistModalVisible = true"
          />
          <Button
            :variant="ButtonVariant.Tertiary"
            :width="ButtonWidth.Auto"
            label="Get in Touch"
            href="/contact"
            class="shadow-lg"
          />
        </div>
      </div>
      <div v-if="device.mobile" class="md:hidden relative top-28 max-w-screen">
        <Mockups class="scale-[1.2] w-full h-[420px]" />
      </div>
    </div>

    <div v-if="!device.mobile" class="hidden md:block absolute -bottom-8 right-20">
      <Mockups class="scale-110" />
    </div>

    <WaitlistModal v-if="isWaitlistModalVisible" @close="isWaitlistModalVisible = false" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Button from '@/components/shared/Button.vue'
import WaitlistModal from '@/components/Modals/WaitlistModal.vue'

import Mockups from '@/assets/Mockups.svg'

import { ButtonVariant, ButtonWidth } from '@/types'

import { useDevice } from 'next-vue-device-detector'

const device = useDevice()

const isWaitlistModalVisible = ref<boolean>(false)
</script>
