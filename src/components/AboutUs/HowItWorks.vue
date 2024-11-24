<template>
  <div class="how-it-works container py-10 md:py-16">
    <h2 class="text-black mb-12 md:flex items-center">
      How
      <Logo class="inline-block w-40 h-16 text-lavender-deep relative bottom-1.5 md:bottom-1" />
      works
    </h2>

    <div class="flex flex-col items-center gap-12 text-center overflow-hidden">
      <div class="relative w-full">
        <div data-aos="fade-up">
          <h3 :class="{ 'h1': !device.mobile }" v-text="'Discover'" />   
        </div>
        <div
          class="absolute top-8 md:top-6 left-[50%] md:left-[56%] flex items-center gap-2 h-min w-min"
          data-aos="fade-left"
          data-aos-offset="450"
        >
          <CurvedArrowIcon class="h-20 w-20 md:h-32 md:w-32 rotate-180 md:rotate-[150deg] text-blue-blizzard" />
          <p class="w-24 md:w-36 text-left text-sm md:text-base mb-0" v-text="'Personalized video reviews especially for you'" />
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
          <h3 :class="{ 'h1': !device.mobile }" v-text="'Collect'" />
        </div>
        <div
          class="absolute bottom-10 md:-bottom-10 right-[45%] md:right-[60%] flex items-center gap-2 h-min w-min"
          data-aos="fade-right"
          data-aos-offset="450"
        >
          <p class="w-24 md:w-44 text-right text-sm md:text-base mb-0" v-text="'Currency for each activity while discovering new things'" />
          <CurvedArrowSecondIcon class="w-24 h-24 md:h-52 md:w-52 rotate-[190deg] md:rotate-[150deg] text-blue-blizzard" />
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
          <h3 :class="{ 'h1': !device.mobile }" v-text="'Buy'" />
        </div>
        <div
          class="absolute -top-14 left-[50%] md:-top-16 md:left-[56%] flex items-center gap-2 h-min w-min"
          data-aos="fade-left"
          data-aos-offset="450"
        >
          <CurvedArrowThirdIcon class="w-20 h-20 md:h-44 md:w-44 rotate-45 text-blue-blizzard" />
          <p class="w-20 md:w-44 text-left text-sm md:text-base mb-0" v-text="'“Buy” button on every screen'" />
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
        <h3 :class="{ 'h1': !device.mobile }" v-text="'Try'" />
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
          <h3 :class="{ 'h1': !device.mobile }" v-text="'Review and record'" />
        </div>
        <div
          class="absolute bottom-14 right-[58%] flex flex-col md:flex-row md:items-start gap-2 h-min w-min"
          data-aos="fade-right"
          data-aos-offset="450"
        >
          <p class="w-24 md:w-44 text-left md:text-right text-sm md:text-base mb-0" v-text="'Video editor inside the application'" />
          <CurvedArrowSecondIcon class="w-24 h-24 md:h-52 md:w-52 rotate-[220deg] md:rotate-[190deg] text-blue-blizzard" />
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
          <h3 :class="{ 'h1': !device.mobile }" v-text="'Earn'" />
        </div>
        <div
          class="absolute top-4 left-[50%] md:left-[53%] flex items-center gap-2 h-min w-min"
          data-aos="fade-left"
          data-aos-offset="450"
        >
          <CurvedArrowIcon class="w-20 h-20 md:h-40 md:w-40 rotate-[150deg] text-blue-blizzard" />
          <p class="w-20 md:w-36 text-left text-sm md:text-base mb-0" v-text="'Live broadcasts'" />
        </div>
        <div
          class="absolute bottom-6 md:bottom-4 right-[52%] md:right-[55%] flex items-center gap-2 h-min w-min"
          data-aos="fade-right"
          data-aos-offset="450"
        >
          <p class="w-20 md:w-36 text-right text-sm md:text-base mb-0" v-text="'Get a % of every product sold from your video'" />
          <CurvedArrowThirdIcon class="w-20 h-20 md:h-40 md:w-40 scale-x-[-1] rotate-[-30deg] text-blue-blizzard" />
        </div>
      </div>
      <div
        class="arrow"
        data-aos="fade-down"
        data-aos-offset="250"
      >
        <ChevronDoubleDownIcon />
      </div>

      <div data-aos="fade-up">
        <h3 :class="{ 'h1': !device.mobile }" v-text="'Build community'" />
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

import { useDevice } from 'next-vue-device-detector'

const device = useDevice()
</script>

<style lang="scss" scoped>
.arrow {
  @apply flex items-center justify-center h-16 w-16 md:h-24 md:w-24 drop-shadow-[0_0_20px_#D17AB3];
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
