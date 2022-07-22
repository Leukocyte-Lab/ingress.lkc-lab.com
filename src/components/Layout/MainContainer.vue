<script setup lang="ts">
import ScreenTone from '@/components/Layout/ScreenTone.vue';
</script>

<template>
  <main :class="$style['container-main']">
    <ScreenTone />
    <Navbar />
  </main>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/container.module.scss' as container;
</style>