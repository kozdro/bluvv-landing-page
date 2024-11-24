<template>
  <div class="flex flex-col min-h-screen">
    <Header @showMobileMenu="showMobileMenu = true" />
    <main>
      <RouterView />
    </main>
    <Footer />
    <MobileMenu v-if="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
    <WaitlistModal v-if="isWaitlistModalVisible" @close="isWaitlistModalVisible = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import MobileMenu from '@/components/layout/MobileMenu.vue'
import WaitlistModal from '@/components/Modals/WaitlistModal.vue'

import useWaitlist from '@/composables/useWaitlist'

const route = useRoute()
const { isWaitlistModalVisible } = useWaitlist()

const showMobileMenu = ref<boolean>(false)

const blockBodyScrolling = (isBlocked: boolean) => document?.body.style.setProperty('overflow', isBlocked ? 'hidden' : null)

watch(() => route.fullPath, () => (showMobileMenu.value = false))
watch(showMobileMenu, (newVal: boolean) => blockBodyScrolling(newVal))
</script>
