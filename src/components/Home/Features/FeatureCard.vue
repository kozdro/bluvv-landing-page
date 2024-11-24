<template>
  <div
    :data-aos="reverse ? 'fade-right' : 'fade-left'"
    :data-aos-offset="offset"
    :data-aos-delay="delay"
    class="flex flex-col-reverse md:flex-row items-center md:gap-10"
    :class="{ 'md:flex-row-reverse': !reverse }"
  >
    <div class="md:basis-1/2" :class="reverse ? 'text-right': 'text-left'">
      <h3 class="text-primary" v-text="title" />
      <p class="text-lg" v-text="description" />
    </div>
    <div class="md:basis-1/2 flex items-center justify-center max-w-screen">
      <component :is="iconComponent" class="h-[280px] md:h-[400px] w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import getIcon from '@/helpers/getIcon'
import { Icon } from '@/types'

interface Props {
  title: string
  description: string
  icon: Icon
  reverse?: boolean
  offset?: number
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  reverse: true,
  offset: 300,
  delay: 200,
})

const iconComponent = computed(() => getIcon(props.icon))
</script>
