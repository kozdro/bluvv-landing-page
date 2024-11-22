<template>
  <Header @showMobileMenu="showMobileMenu = !showMobileMenu" />
  <main>
    <RouterView />
  </main>
  <Footer />
  <MobileMenu v-if="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import MobileMenu from '@/components/layout/MobileMenu.vue'

const route = useRoute()

const showMobileMenu = ref<boolean>(false)

const blockBodyScrolling = (isBlocked: boolean) => document?.body.style.setProperty('overflow', isBlocked ? 'hidden' : null)

watch(() => route.fullPath, () => (showMobileMenu.value = false))
watch(showMobileMenu, (newVal: boolean) => blockBodyScrolling(newVal))
</script>
