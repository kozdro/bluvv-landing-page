<template>
  <footer class="bg-peach pt-10 md:pt-16 pb-4">
    <div class="container flex flex-col gap-6 md:gap-8">
      <div class="flex flex-col md:block">
        <h3 class="text-lavender-old mb-6 md:mb-12" v-text="'Ready to join the revolution?'" />
        <Button
          v-if="$route.path !== '/contact'"
          :width="ButtonWidth.Auto"
          :variant="ButtonVariant.Secondary"
          href="/contact"
          label="Contact Us"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-40 mt-4">
        <div>
          <h4 v-if="!device.mobile" class="hidden md:block text-lavender-old" v-text="'About Us'" />
          <p>
            Bluvv is revolutionizing social eCommerce by combining video reviews, earnings by using the app, and our modern technologies (AI, AR). Our application empowers users with authentic insights and smarter purchasing decisions while fostering a thriving community of conscious shoppers and brands.
          </p>
        </div>

        <div class="mt-6 md:mt-0 md:ml-20">
          <h4 class="text-lavender-old" v-text="'Quick Links'" />
          <ul class="flex flex-col gap-2">
            <li>
              <RouterLink
                to="/"
                class="text-lavender-old font-secondary hover:underline"
                v-text="'Home'"
              />
            </li>
            <li>
              <RouterLink
                to="/about-us"
                class="text-lavender-old font-secondary hover:underline"
                v-text="'About Us'"
              />
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="text-lavender-old font-secondary hover:underline"
                v-text="'Contact'"
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col text-center text-lavender-old font-secondary text-sm mt-6">
        <div class="flex justify-center items-center">
          © {{ new Date().getFullYear() }}
          <Logo class="w-24 h-10 text-lavender-deep" />
        </div>
        <span v-text="'All rights reserved.'" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useDevice } from 'next-vue-device-detector'

import Button from '@/components/shared/Button.vue'
import Logo from '@/components/shared/Logo.vue'

import { ButtonWidth, ButtonVariant } from '@/types'

const device = useDevice()
</script>
