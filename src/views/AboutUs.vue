<template>
  <section class="about-us">
    <div class="bluvv-gradient text-white py-10 md:py-16">
      <div class="container md:my-10">
        <h1 class="md:w-3/5" v-text="'Empowering conscious Beauty choices'" />
        <p class="md:w-1/2 text-lg" v-text="'Discover how Bluvv bridges technology and community to revolutionize the way we shop for beauty products.'" />
      </div>
    </div>
    <MissionVisionGoal />
    <Story />
    <HowItWorks />
    <CTA />
    <Team />
  </section>
</template>

<script setup lang="ts">
import MissionVisionGoal from '@/components/AboutUs/MissionVisionGoal.vue'
import Story from '@/components/AboutUs/Story.vue'
import HowItWorks from '@/components/AboutUs/HowItWorks.vue'
import CTA from '@/components/AboutUs/CTA.vue'
import Team from '@/components/AboutUs/Team.vue'
</script>
