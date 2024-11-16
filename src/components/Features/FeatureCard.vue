<template>
  <div
    class="flex flex-col-reverse md:flex-row items-center md:gap-10"
    :class="{ 'md:flex-row-reverse': reverse }"
    :data-aos-delay="delay"
  >
    <div class="md:basis-1/2" :class="reverse ? 'text-left': 'text-right'">
      <h3 class="text-primary" v-text="title" />
      <p class="text-lg" v-text="description" />
    </div>
    <div class="md:basis-1/2 flex items-center justify-center">
      <img
        :src="image"
        :alt="title"
        class="h-[280px] md:h-[400px]"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  image: string
  reverse: boolean
  delay: number
}

defineProps<Props>()
</script>
