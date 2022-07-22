<script setup lang="ts">
import { ref } from 'vue';

import type { AtLeastOne } from '@/shared/types/optional';

const navbarItems = ref<
  AtLeastOne<
    {
      name: string;
      path: string;
      hook: string;
    },
    'hook' | 'path'
  >[]
>([
  {
    name: '關於 LKC',
    hook: 'about',
  },
  {
    name: '產品與服務',
    path: 'products',
  },
  {
    name: '徵才資訊',
    path: 'careers',
  },
  {
    name: '聯絡我們',
    path: 'contact',
  },
]);
</script>

<template>
  <main :class="$style['container-main']">
    <ScreenTone />
    <NavBar :items="navbarItems" />
  </main>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/container.module.scss' as container;
</style>
