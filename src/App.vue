<script setup lang="ts">
import { provide } from 'vue';
import { useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints({
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
  large: 1920,
});
const isMobile = breakpoints.smaller('mobile');

provide('isMobile', isMobile);
</script>

<template>
  <MainContainer />
</template>
