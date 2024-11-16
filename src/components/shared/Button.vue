<template>
  <component
    :is="el"
    ref="buttonRef"
    v-bind="{
      ...(el === 'a' ? { href } : {})
    }"
    :to="href"
    :disabled="disabled || loading"
    :type="href ? null : (type === 'submit' ? 'submit' : 'button')"
    class="button transition duration-200 ease-out inline-flex items-center justify-center shrink-0 px-8 py-3 rounded-full text-lg font-semibold focus:outline-none disabled:pointer-events-none disabled:opacity-50"
    :class="[
      ButtonWidthClasses[width],
      ButtonVariantClasses[variant],
    ]"
    style="wordBreak: break-word;"
    @click="handleClick"
    @touchstart="addActiveClass"
    @touchend="removeActiveClass"
  >
    <slot>
      <component
        :is="leftIconComponent"
        v-if="leftIcon"
        class="mr-2.5"
      />
      <span
        v-if="label"
        :class="{ 'blur-sm': loading }"
        v-text="label"
      />
      <component
        :is="rightIconComponent"
        v-if="rightIcon"
        class="ml-2.5"
      />
    </slot>
  </component>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

import { Icon, getIcon } from '@/helpers/getIcon'

import { ButtonVariant, ButtonWidth } from '@/types'

const ButtonVariantClasses = {
  [ButtonVariant.Primary]: 'bg-primary text-white hover:bg-primary/80 focus:ring-2 focus:ring-primary/50 active:bg-primary/70',
  [ButtonVariant.Secondary]: 'bg-secondary text-black hover:bg-secondary/80 focus:ring-2 focus:ring-secondary/50 active:bg-secondary/70',
  [ButtonVariant.Tertiary]: 'bg-white text-primary hover:bg-white/80 focus:ring-2 focus:ring-secondary/50 active:bg-primary active:text-white',
  [ButtonVariant.OutlinePrimary]: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary/50 active:bg-primary/70',
  [ButtonVariant.OutlineSecondary]: 'border-2 border-secondary text-secondary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary/50 active:bg-primary/70',
  [ButtonVariant.OutlineTertiary]: 'border-2 border-white text-white hover:opacity-70 focus:ring-2 focus:ring-primary active:bg-white active:text-primary active:opacity-100',
}

const ButtonWidthClasses = {
  [ButtonWidth.Auto]: '',
  [ButtonWidth.Default]: 'w-full lg:w-[392px]',
}

const mobileActiveClasses = {
  [ButtonVariant.Primary]: ['bg-lavender-old'],
  [ButtonVariant.Secondary]: ['bg-lavender-old', 'border-lavender-old', 'text-white'],
  [ButtonVariant.Outline]: ['text-primary'],
}

interface Props {
  disabled?: boolean
  loading?: boolean
  href?: any
  type?: string
  width?: ButtonWidth
  variant?: ButtonVariant
  label?: string
  rightIcon?: Icon
  leftIcon?: Icon
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  loading: false,
  href: '',
  type: '',
  width: ButtonWidth.Default,
  variant: ButtonVariant.Primary,
  label: '',
  rightIcon: null,
  leftIcon: null,
})

const emit = defineEmits(['click'])

const buttonRef = ref()

const isInternal = computed(() => {
  const isObject = props.href instanceof Object
  const isUrl = `${props.href}`.startsWith('http') || `${props.href}`.startsWith('www')
  const isContactUrl = `${props.href}`.startsWith('mailto:') || `${props.href}`.startsWith('tel:')

  return isObject || (!!props.href && !isUrl && !isContactUrl)
})

const el = computed(() => props.href && !props.disabled ? (isInternal.value ? 'RouterLink' : 'a') : 'button')

const handleClick = () => {
  emit('click')
  buttonRef.value.blur()
}

const addActiveClass = (event: MouseEvent) => {
  const classes = mobileActiveClasses[props.variant]

  if (classes) {
    (event.currentTarget as HTMLElement).classList.add(...classes)
  }
}
const removeActiveClass = (event: MouseEvent) => {
  const classes = mobileActiveClasses[props.variant]

  if (classes) {
    (event.currentTarget as HTMLElement).classList.remove(...classes)
  }
}

const leftIconComponent = getIcon(props.leftIcon)
const rightIconComponent = getIcon(props.rightIcon)
</script>
