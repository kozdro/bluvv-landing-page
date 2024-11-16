<template>
  <section class="features container py-16">
    <h2 data-aos="fade-up" class="mb-12 text-black flex justify-center">
      What makes
      <Logo class="w-min h-16 text-lavender-deep relative bottom-4" />
      unique?
    </h2>
    <div class="flex flex-col gap-10">
      <FeatureCard
        v-for="(feature, index) in features"
        :key="feature.title"
        :title="feature.title"
        :description="feature.description"
        :image="feature.image"
        :reverse="index % 2 !== 0"
        :delay="(index + 1) * 100"
        data-aos="fade-up"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Logo from '@/components/shared/Logo.vue'
import FeatureCard from '@/components/Features/FeatureCard.vue'

import VideoReviewIcon from '@/assets/icons/VideoReview.svg'
import EarnMoneyIcon from '@/assets/icons/EarnMoney.svg'
import ARIcon from '@/assets/icons/AR.png'
import VoiceAssistantIcon from '@/assets/icons/VoiceAssistant.svg'
import EarnIcon from '@/assets/icons/Earn.svg'
import AIIcon from '@/assets/icons/AI.svg'
import CommunityIcon from '@/assets/icons/Community.svg'

const features = [
  {
    title: 'Authentic video reviews',
    description: 'Discover real opinions and share your own through engaging and trustworthy video reviews.',
    image: VideoReviewIcon,
  },
  {
    title: 'Earn money from videos and lives',
    description: 'Monetize your reviews by earning cash for published videos and live-streaming sessions. Your opinions matter!',
    image: EarnMoneyIcon,
  },
  {
    title: 'AR Try-Ons',
    description: 'Experience products in real-time with advanced augmented reality technology — no guesswork, just confidence!',
    image: ARIcon,
  },
  {
    title: 'Find products with a Voice Assistant',
    description: 'Simplify your shopping journey with our AI-powered voice assistant. Say what you need, and we’ll find it for you!',
    image: VoiceAssistantIcon,
  },
  {
    title: 'Earn while you shop',
    description: 'Actively engage with the app, collect in-app currency, and redeem it with every order. Turn your activity into savings!',
    image: EarnIcon,
  },
  {
    title: 'Personalized recommendations just for you',
    description: 'Receive suggestions tailored to your unique preferences, powered by cutting-edge artificial intelligence.',
    image: AIIcon,
  },
  {
    title: 'Be part of a thriving Community',
    description: 'Connect with like-minded users, share experiences, and help shape a vibrant, engaged community.',
    image: CommunityIcon,
  },
]
</script>
