<template>
  <section class="features container py-10 md:py-16 relative z-10 bg-white">
    <h2 class="mb-6 md:mb-12 text-black block md:flex justify-center text-center">
      What makes
      <Logo class="inline-block w-40 h-16 text-lavender-deep relative bottom-2 md:bottom-4" />
      unique?
    </h2>
    <div class="flex flex-col gap-6 md:gap-10 overflow-hidden">
      <FeatureCard
        v-for="(feature, index) in features"
        :key="index"
        :title="feature.title"
        :description="feature.description"
        :icon="feature.image"
        :reverse="index % 2 !== 0"
        :offset="device.mobile ? 300 : 300 + (index * 200)"
        :delay="device.mobile ? 100 : index * 200"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDevice } from 'next-vue-device-detector'

import Logo from '@/components/shared/Logo.vue'
import FeatureCard from '@/components/Home/Features/FeatureCard.vue'

import { Icon } from '@/types'

const device = useDevice()

const features = [
  {
    title: 'Authentic video reviews',
    description: 'Discover real opinions and share your own through engaging and trustworthy video reviews.',
    image: Icon.VideoReview,
  },
  {
    title: 'Earn money from videos and lives',
    description: 'Monetize your reviews by earning cash for published videos and live-streaming sessions. Your opinions matter!',
    image: Icon.EarnMoney,
  },
  {
    title: 'AR Try-Ons',
    description: 'Experience products in real-time with advanced augmented reality technology — no guesswork, just confidence!',
    image: Icon.AR,
  },
  {
    title: 'Find products with a Voice Assistant',
    description: 'Simplify your shopping journey with our AI-powered voice assistant. Say what you need, and we\'ll find it for you!',
    image: Icon.VoiceAssistant,
  },
  {
    title: 'Earn while you shop',
    description: 'Actively engage with the app, collect in-app currency, and redeem it with every order. Turn your activity into savings!',
    image: Icon.Earn,
  },
  {
    title: 'Personalized recommendations just for you',
    description: 'Receive suggestions tailored to your unique preferences, powered by cutting-edge artificial intelligence.',
    image: Icon.AI,
  },
  {
    title: 'Be part of a thriving Community',
    description: 'Connect with like-minded users, share experiences, and help shape a vibrant, engaged community.',
    image: Icon.Community,
  },
]
</script>
