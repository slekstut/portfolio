<script setup lang="ts">
defineProps<{
  name: string;
  size?: string;
  color?: string;
}>();
</script>

<template>
  <img
    :src="`/icons/${name}.svg`"
    :width="size || '24'"
    :height="size || '24'"
    :style="{ fill: color || 'currentColor' }"
    alt="Icon"
  >
</template>
