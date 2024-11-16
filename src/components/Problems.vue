<template>
  <section class="container py-10 md:py-16">
    <h2 class="mb-6 md:mb-12 text-center" v-text="'Solving what’s missing in Beauty eCommerce'" />
    <div ref="flipRef" class="flex flex-col md:flex-row gap-6 md:gap-8">
      <div
        v-for="(problem, index) in problems"
        :key="index"
        class="flip-card md:basis-1/4 h-80 md:h-96 cursor-pointer"
        @click="toggleFlip(index)"
      >
        <div class="flip-card-inner relative w-full h-full transition-transform duration-700" :class="{ 'rotate-y': flippedStates[index] }">
          <div class="flip-card-front">
            <img
              :src="problem.icon"
              :alt="problem.title"
              class="w-20 h-20 mb-4"
            >
            <h3 class="h-[108px]" v-text="problem.title" />
            <p class="mb-0" v-text="problem.description" />
          </div>
          <div class="flip-card-back">
            <img
              :src="solutions[index]?.icon"
              :alt="solutions[index]?.title"
              class="w-20 h-20 mb-6"
            >
            <h3
              class="h-[108px]"
              :style="{ color: headingColors[index] }"
              v-text="solutions[index]?.title"
            />
            <p class="mb-0" v-text="solutions[index]?.description" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

import FakeIcon from '@/assets/icons/Fake.svg'
import DecisionIcon from '@/assets/icons/Decision.svg'
import StoreIcon from '@/assets/icons/Store.svg'
import TrashIcon from '@/assets/icons/Trash.svg'
import AuthenticIcon from '@/assets/icons/Authentic.svg'
import VideoIcon from '@/assets/icons/Video.svg'
import PersonalizationIcon from '@/assets/icons/Personalization.svg'
import ConsciousIcon from '@/assets/icons/Conscious.svg'

const problems = [
  {
    title: 'Manipulated reviews and sponsored ads',
    description: 'Traditional reviews are often unreliable, manipulated, or incomplete, making it difficult to trust opinions online.',
    icon: FakeIcon,
  },
  {
    title: 'Difficulty making decisions',
    description: 'The inability to test products online contributes to decision-making challenges for customers.',
    icon: DecisionIcon,
  },
  {
    title: 'Need to visit a stationary store',
    description: 'In the beauty sector, finding personalized products often requires visiting physical stores, which is inconvenient for many customers.',
    icon: StoreIcon,
  },
  {
    title: 'Wasting cosmetics',
    description: 'Unsuccessful purchases increase cosmetic waste and harm the environment due to poor decision-making.',
    icon: TrashIcon,
  },
]

const solutions = [
  {
    title: 'Verification and authenticity',
    description: 'Reviews from verified users and real consumers ensure reliable and trustworthy opinions.',
    icon: AuthenticIcon,
  },
  {
    title: 'Short video reviews',
    description: 'Tested products reviewed by individuals with similar skin types provide credible insights.',
    icon: VideoIcon,
  },
  {
    title: 'Personalization',
    description: 'Filtered video reviews and personalized product recommendations make online shopping seamless without the need to visit physical stores.',
    icon: PersonalizationIcon,
  },
  {
    title: 'Conscious choices',
    description: 'Products that have already been tested allow for informed purchases without the risk of blind ordering.',
    icon: ConsciousIcon,
  },
]

const fullConfig = resolveConfig(tailwindConfig)
const themeColors = fullConfig.theme?.colors

const headingColors = [
  themeColors.primary,
  themeColors.secondary,
  themeColors.lavender.gray,
  themeColors.blue.blizzard
]

const flipRef = ref<HTMLElement | null>(null)
const flippedStates = ref<boolean[]>(problems.map(() => false))
const isFirstCardFlipped = ref<boolean>(false)

let observer: IntersectionObserver | null = null

const toggleFlip = (index: number) => (flippedStates.value[index] = !flippedStates.value[index])

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!isFirstCardFlipped.value && entry.isIntersecting) {
        // NOTE: Flip the first card
        toggleFlip(0)
        
        setTimeout(() => {
          toggleFlip(0)
          isFirstCardFlipped.value = true
        }, 1200)
      }
    },
    // NOTE: Trigger when 50% of the section is visible
    { threshold: 0.5 }
  )

  if (flipRef.value) {
    observer.observe(flipRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer && flipRef.value) {
    observer.unobserve(flipRef.value)
  }
})
</script>

<style lang="scss" scoped>
.flip-card {
  perspective: 1000px;

  &-inner {
    transform-style: preserve-3d;
  }

  &-front,
  &-back {
    @apply absolute w-full h-full bg-white flex flex-col items-center text-center p-4 rounded-lg;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  &-front {
    @apply shadow-inner;
  }

  &-back {
    @apply shadow-md;
    transform: rotateY(180deg);
  }
}
</style>