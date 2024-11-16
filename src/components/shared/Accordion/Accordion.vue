<template>
  <div class="grid gap-y-[10px]">
    <slot :toggleItem="toggleItem" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'

const activeItem = ref(null)

const toggleItem = (item) => {
  if (activeItem.value === item) {
    activeItem.value = null
  } else {
    activeItem.value = item
  }
}

provide('accordion', {
  activeItem,
  toggleItem
})
</script>
