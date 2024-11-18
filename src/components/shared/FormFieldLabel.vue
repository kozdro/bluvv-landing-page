<template>
  <label
    class="absolute transition -translate-y-1/2 pl-3 flex items-center text-lavender-old"
    :class="{
      '-translate-y-[40px] bg-white z-label text-sm pb-0 !px-1 ml-2 cursor-default': selected,
      '!text-primary': focused,
      '!text-error': invalid,
      'pointer-events-none': disabled
    }"
  >
    <slot name="label">
      <span v-if="label" v-text="label" />
    </slot>
    <span v-if="required" v-text="'*'" />
  </label>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  disabled?: boolean
  invalid?: boolean
  required?: boolean
  selected?: boolean
  focused?: boolean
}

withDefaults(defineProps<Props>(), {
  label: '',
  disabled: false,
  invalid: false,
  required: false,
  selected: false,
  focused: false,
})
</script>
