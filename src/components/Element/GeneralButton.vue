<script setup lang="ts">
import { Icon } from '@iconify/vue';

withDefaults(
  defineProps<{
    text: string;
    link: string;
    icon: string;
    iconPosition?: 'left' | 'right';
  }>(),
  {
    iconPosition: 'left',
  }
);
</script>

<template>
  <a :class="{ flip: iconPosition === 'right' }" class="button" :href="link">
    <Icon class="icon" :icon="icon" />
    <span class="text">{{ text }}</span>
  </a>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/scss/components/palette.module.scss' as palette;
@use '@/assets/styles/scss/components/button.module.scss' as button;

.button {
  @include button.use(
    $font-size: 18px,
    $palette-text: palette.$white,
    $palette-text-link-hover: palette.$white,
    $palette-bg: palette.$purple-0
  );
}
</style>
