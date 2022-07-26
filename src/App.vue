<script setup lang="ts">
import { provide } from 'vue';
import { useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints({
  mobile: 768.1,
  tablet: 1024.1,
  desktop: 1440.1,
  large: 1920.1,
});
const isMobile = breakpoints.smaller('mobile');

provide('isMobile', isMobile);
</script>

<template>
  <MainContainer />
</template>
