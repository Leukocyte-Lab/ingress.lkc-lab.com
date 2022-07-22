<script setup lang="ts">
import logo from '@/assets/images/lkc.half.logo.svg';

import type { AtLeastOne } from '@/shared/types/optional';

defineProps<{
  items: AtLeastOne<
    {
      name: string;
      path: string;
      hook: string;
    },
    'hook' | 'path'
  >[];
}>();
</script>

<template>
  <nav :class="$style['navbar-container']" class="navbar">
    <div :class="$style['navbar-logo']">
      <img :src="logo" alt="" />
    </div>
    <ul :class="$style['navbar-wrapper']">
      <template v-for="item in items" :key="item.name">
        <li :class="$style['navbar-item']">
          <a :class="$style['navbar-item-link']" :href="`#${item.hook}`">
            <span>{{ item.name }}</span>
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/navbar.module.scss' as navbar;
</style>

<style lang="scss" scoped>
.navbar {
  --nav-height: 131px;
  --nav-logo-width: 242.25px;
  --nav-item-width: 750px;
  --nav-padding-top: 24px;
  --nav-padding-right: 64px;
  --nav-padding-bottom: 23px;
  --nav-padding-left: 37px;
  --nav-radius: 5px;
  --nav-font-size: 22px;
}
</style>
