<script setup lang="ts"></script>

<template>
  <main :class="$style['container-main']">
    <ScreenTone />
    <NavBar />
  </main>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/container.module.scss' as container;
</style>
