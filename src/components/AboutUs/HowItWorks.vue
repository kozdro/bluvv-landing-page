<template>
  <div class="container py-10 md:py-16">
    <h2 class="text-black mb-6 md:mb-12 md:flex items-center">
      How
      <Logo class="inline-block w-40 h-16 text-lavender-deep relative bottom-1" />
      works
    </h2>
    <div class="how-it-works relative">
      <div class="flex flex-col items-center gap-12 text-center">
        <div class="relative w-full">
          <div data-aos="fade-up">
            <h3 class="h1" v-text="'Discover'" />   
          </div>
          <div
            class="absolute top-6 left-[56%] flex items-center gap-2 h-min w-min"
            data-aos="fade-left"
            data-aos-offset="450"
          >
            <CurvedArrowIcon class="h-32 w-32 rotate-[150deg] text-blue-blizzard" />
            <p class="w-36 text-left mb-0" v-text="'Personalized video reviews especially for you.'" />
          </div>
        </div>
        <div
          class="arrow"
          data-aos="fade-down"
          data-aos-offset="250"
        >
          <ChevronDoubleDownIcon />
        </div>

        <div class="relative w-full">
          <div data-aos="fade-up">
            <h3 class="h1" v-text="'Collect'" />
          </div>
          <div
            class="absolute -bottom-10 left-28 flex items-center gap-2 h-min w-min"
            data-aos="fade-right"
            data-aos-offset="450"
          >
            <p class="w-44 text-right mb-0" v-text="'Currency for each activity while discovering new things.'" />
            <CurvedArrowSecondIcon class="h-52 w-52 rotate-[150deg] text-blue-blizzard" />
          </div>
        </div>
        <div
          class="arrow"
          data-aos="fade-down"
          data-aos-offset="250"
        >
          <ChevronDoubleDownIcon />
        </div>

        <div class="relative w-full">
          <div data-aos="fade-up">
            <h3 class="h1" v-text="'Buy'" />
          </div>
          <div
            class="absolute -top-16 left-[56%] flex items-center gap-2 h-min w-min"
            data-aos="fade-left"
            data-aos-offset="450"
          >
            <CurvedArrowThirdIcon class="h-44 w-44 rotate-45 text-blue-blizzard" />
            <p class="w-44 text-left mb-0" v-text="'“Buy” button on every screen.'" />
          </div>
        </div>
        <div
          class="arrow"
          data-aos="fade-down"
          data-aos-offset="250"
        >
          <ChevronDoubleDownIcon />
        </div>

        <div data-aos="fade-up" >
          <h3 class="h1" v-text="'Try'" />
        </div>
        <div
          class="arrow"
          data-aos="fade-down"
          data-aos-offset="250"
        >
          <ChevronDoubleDownIcon />
        </div>

        <div class="relative w-full">
          <div data-aos="fade-up" >
            <h3 class="h1" v-text="'Review and record'" />
          </div>
          <div
            class="absolute bottom-14 left-36 flex items-start gap-2 h-min w-min"
            data-aos="fade-right"
            data-aos-offset="450"
          >
            <p class="w-44 text-right mb-0" v-text="'Video editor inside the application.'" />
            <CurvedArrowSecondIcon class="h-52 w-52 rotate-[190deg] text-blue-blizzard" />
          </div>
        </div>
        <div
          class="arrow"
          data-aos="fade-down"
          data-aos-offset="250"
        >
          <ChevronDoubleDownIcon />
        </div>

        <div class="relative w-full">
          <div data-aos="fade-up" >
            <h3 class="h1" v-text="'Earn'" />
          </div>
          <div
            class="absolute top-4 left-[53%] flex items-center gap-2 h-min w-min"
            data-aos="fade-left"
            data-aos-offset="450"
          >
            <CurvedArrowIcon class="h-40 w-40 rotate-[150deg] text-blue-blizzard" />
            <p class="w-36 text-left mb-0" v-text="'Get a % of every product sold from your video.'" />
          </div>
          <div
            class="absolute bottom-4 left-52 flex items-center gap-2 h-min w-min"
            data-aos="fade-right"
            data-aos-offset="450"
          >
            <p class="w-36 text-right mb-0" v-text="'Live broadcasts'" />
            <CurvedArrowThirdIcon class="h-40 w-40 scale-x-[-1] rotate-[-30deg] text-blue-blizzard" />
          </div>
        </div>
        <div
          class="arrow"
          data-aos="fade-down"
          data-aos-offset="250"
        >
          <ChevronDoubleDownIcon />
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h3 class="h1" v-text="'Build community'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/shared/Logo.vue'

import ChevronDoubleDownIcon from '@/assets/icons/ChevronDoubleDown.svg?skipsvgo'
import CurvedArrowIcon from '@/assets/icons/CurvedArrow.svg?skipsvgo'
import CurvedArrowSecondIcon from '@/assets/icons/CurvedArrowSecond.svg?skipsvgo'
import CurvedArrowThirdIcon from '@/assets/icons/CurvedArrowThird.svg?skipsvgo'
</script>

<style lang="scss" scoped>
.arrow {
  @apply flex items-center justify-center h-24 w-24 drop-shadow-[0_0_20px_#D17AB3];
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0px);
  }
}
</style>
