<template>
  <div class="mobile-menu bg-white fixed w-full inset-0 z-50">
    <div class="bluvv-gradient">
      <div class="container h-[70px] flex justify-between items-center">
        <button @click="emit('closeMobileMenu')">
          <Logo class="text-lavender-deep w-40" />
        </button>
        <button @click="emit('closeMobileMenu')">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M8 24L24 8M8 8L24 24" stroke="#212022" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <nav class="container flex flex-col gap-[60px] mt-8">
      <RouterLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="text-black hover:underline text-lg"
        v-text="link.text"
      />
      <Button
        :variant="ButtonVariant.Secondary"
        label="See Prototype"
        href="https://kozdro.github.io/bluvv-app-mvp/#/"
        target="_blank"
      />
    </nav>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/shared/Logo.vue'
import Button from '@/components/shared/Button.vue'

import { ButtonVariant } from '@/types'

const emit = defineEmits(['closeMobileMenu'])

const links = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/about-us',
    text: 'About Us',
  },
  {
    to: '/contact',
    text: 'Contact',
  },
]
</script>
