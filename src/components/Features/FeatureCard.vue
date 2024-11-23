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
    <div class="md:basis-1/2 flex items-center justify-center max-w-screen">
      <component :is="iconComponent" class="h-[280px] md:h-[400px] w-full" filled />
    </div>
  </div>
</template>

<script setup lang="ts">
import getIcon from '@/helpers/getIcon'

import { Icon } from '@/types'

interface Props {
  title: string
  description: string
  icon: Icon
  reverse: boolean
  delay: number
}

const props = defineProps<Props>()

const iconComponent = getIcon(props.icon)
</script>
