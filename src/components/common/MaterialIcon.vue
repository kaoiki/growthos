<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  fill?: boolean
  wght?: number
  size?: number
}>(), {
  fill: false,
  wght: 400,
  size: 24,
})
</script>

<template>
  <span
    class="material-symbols-outlined select-none"
    :style="{
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${wght}, 'GRAD' 0, 'opsz' ${size}`,
      fontSize: `${size}px`,
    }"
  >
    {{ name }}
  </span>
</template>
