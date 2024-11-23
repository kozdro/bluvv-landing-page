<template>
  <div class="bg-white rounded-lg font-secondary shadow">
    <div class="flex items-center font-semibold text-sm p-5 cursor-pointer" @click="toggle">
      <slot name="title" />
      <svg
        class="ml-auto transition-transform duration-300"
        :class="{ 'rotate-180': isOpened }"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
          fill="#212022"
        />
      </svg>
    </div>
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="isOpened" class="px-5 pb-5 text-secondary text-sm overflow-hidden">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { inject, computed, Ref, onBeforeMount } from 'vue'

const { activeItem, toggleItem } = inject('accordion') as {
  activeItem: Ref<string | null>
  toggleItem: (item: string) => void
}

interface Props {
  id?: string
  initiallyOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  id: () => `ai-${Math.random().toString(36).substr(2, 9)}`,
  initiallyOpen: false,
})

const isOpened = computed(() => activeItem.value === props.id)

const toggle = () => toggleItem(props.id)

onBeforeMount(() => props.initiallyOpen && toggle())
</script>
