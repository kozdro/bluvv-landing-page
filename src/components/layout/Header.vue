<template>
  <header class="sticky top-0 z-50 transition-all duration-300" :class="scrolled ? 'bg-white' : 'bluvv-gradient'">
    <div class="container flex md:hidden h-[70px] justify-between items-center">
      <RouterLink to="/">
        <Logo class="text-lavender-deep h-[120px] w-40" />
      </RouterLink>

      <button @click="emit('showMobileMenu')">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80005 8C4.80005 7.11635 5.51639 6.4 6.40005 6.4H25.6C26.4837 6.4 27.2 7.11635 27.2 8C27.2 8.88366 26.4837 9.6 25.6 9.6H6.40005C5.51639 9.6 4.80005 8.88366 4.80005 8Z" fill="#212022"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80005 16C4.80005 15.1163 5.51639 14.4 6.40005 14.4H16C16.8837 14.4 17.6 15.1163 17.6 16C17.6 16.8837 16.8837 17.6 16 17.6H6.40005C5.51639 17.6 4.80005 16.8837 4.80005 16Z" fill="#212022"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.80005 24C4.80005 23.1163 5.51639 22.4 6.40005 22.4H25.6C26.4837 22.4 27.2 23.1163 27.2 24C27.2 24.8837 26.4837 25.6 25.6 25.6H6.40005C5.51639 25.6 4.80005 24.8837 4.80005 24Z" fill="#212022"/>
        </svg>
      </button>
    </div>

    <div class="container hidden md:flex items-center h-[120px]">
      <RouterLink to="/" class="flex mr-40">
        <Logo class="text-lavender-deep h-[120px] w-40" />
      </RouterLink>

      <nav class="flex items-center gap-12">
        <RouterLink
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="text-black hover:underline"
          v-text="link.text"
        />
      </nav>

      <!-- <Button
        href="/"
        label="Sign Up"
        :width="ButtonWidth.Auto"
        class="ml-auto"
      /> -->
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import Logo from '@/components/shared/Logo.vue'
import Button from '@/components/shared/Button.vue'

import { ButtonWidth } from '@/types'

const emit = defineEmits(['showMobileMenu'])

const scrolled = ref<boolean>(false)

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

const handleScroll = () => (scrolled.value = window.scrollY > 130)

onMounted(() => window.addEventListener('scroll', handleScroll))
</script>
