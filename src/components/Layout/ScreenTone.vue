<script setup lang="ts">
import { computed, ref } from 'vue';

import type { ComputedRef } from 'vue';

import type { Vector } from '@/shared/types/vector';

const props = withDefaults(defineProps<{
  radius?: number;
  increment?: Vector<'x' | 'y'>;
}>(), {
  increment: () => ({
    x: 24,
    y: 24,
  }),
  radius: 1.27,
});

const wrapperRef$ = ref<HTMLElement>();
const width = computed(() => wrapperRef$.value?.offsetWidth || 0);
const height = computed(() => wrapperRef$.value?.offsetHeight || 0);
const rows = computed(() => Math.ceil(height.value / props.increment.y));
const columns = computed(() => Math.ceil(width.value / props.increment.x));
const dots: ComputedRef<Vector<'x' | 'y'>[]> = computed(() => Array.from({ length: rows.value * columns.value }, (_, i) => ({
  x: (i % columns.value) * props.increment.x + props.increment.x / 2,
  y: Math.floor(i / columns.value) * props.increment.y + props.increment.y / 2,
})));
</script>

<template>
  <div
    ref="wrapperRef$"
    :class="[$style['screen-fullscreen'], $style['screen-clip'], $style['layer-overlapped']]"
    class="screen-tone"
  >
    <svg
      :width="width"
      :height="height"
      preserveAspectRatio="xMinYMin"
      color-profile="sRGB"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
      <template v-for="dot in dots">
        <circle
          :r="radius"
          :cx="dot.x"
          :cy="dot.y"
          class="dot"
        ></circle>
      </template>
    </svg>
  </div>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/layer.module.scss' as layer;
@use '@/assets/styles/scss/components/screen.module.scss' as screen;
</style>

<style lang="scss" scoped>
@use '@/assets/styles/scss/components/palette.module.scss' as palette;

.screen-tone {
  position: absolute;
  z-index: 0;

  .dot {
    fill: #{palette.$white};
    opacity: 0.25;
  }
}
</style>
