<script setup lang="ts">
withDefaults(
  defineProps<{
    wrapperComponent?: typeof import('*.vue') | string;
  }>(),
  {
    wrapperComponent: 'div',
  }
);
</script>

<template>
  <component :is="wrapperComponent" :class="[$style['spotlight']]">
    <slot></slot>
  </component>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/spotlight.module.scss' as spotlight;
@use '@/assets/styles/scss/components/container.module.scss' as container;
</style>
