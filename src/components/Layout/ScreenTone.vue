<script setup lang="ts">
import { onMounted, ref } from 'vue';

import Math$ from '@/shared/common/math';

import type { Vector } from '@/shared/types/vector';

const props = withDefaults(
  defineProps<{
    radius?: number;
    increment?: Vector<'x' | 'y'>;
  }>(),
  {
    increment: () => ({
      x: 24,
      y: 24,
    }),
    radius: 1.27,
  }
);


const wrapperRef$ = ref<HTMLElement>();
const width = ref(0);
const height = ref(0);
const rows = ref(0);
const columns = ref(0);
const dots = ref<Vector<'x' | 'y'>[]>([]);
const tonePath = ref('');

const calcVariables = () => {
  width.value = wrapperRef$.value?.offsetWidth || 0;
  height.value = wrapperRef$.value?.offsetHeight || 0;
  rows.value = Math.ceil(height.value / props.increment.y);
  columns.value = Math.ceil(width.value / props.increment.x);
  dots.value = Array.from({ length: rows.value * columns.value }, (_, i) => ({
      x: (i % columns.value) * props.increment.x + props.increment.x / 2,
      y:
        Math.floor(i / columns.value) * props.increment.y + props.increment.y / 2,
    }));
  tonePath.value = dots.value.map((dot) => `
  M ${dot.x} ${dot.y - props.radius}
  C ${dot.x - props.radius * Math$.ARC_BASE} ${dot.y} ,
    ${dot.x - props.radius} ${dot.y - props.radius * Math$.ARC_BASE},
    ${dot.x - props.radius} ${dot.y}
  S ${dot.x - props.radius * Math$.ARC_BASE} ${dot.y + props.radius},
    ${dot.x} ${dot.y + props.radius}
  S ${dot.x + props.radius} ${dot.y + props.radius * Math$.ARC_BASE}
    ${dot.x + props.radius} ${dot.y}
  S ${dot.x + props.radius * Math$.ARC_BASE} ${dot.y - props.radius},
    ${dot.x} ${dot.y - props.radius}
  S ${dot.x - props.radius} ${dot.y - props.radius * Math$.ARC_BASE},
    ${dot.x - props.radius} ${dot.y}
  S ${dot.x - props.radius * Math$.ARC_BASE} ${dot.y + props.radius},
    ${dot.x} ${dot.y + props.radius}
  Z
  `).join('\n');
}

const watchWrapperSizeChange = () => {
  const wrapper = wrapperRef$.value;
  if (wrapper) {
    new ResizeObserver(() => {
      calcVariables();
    }).observe(wrapper);
  }
};

onMounted(() => {
  calcVariables();
  watchWrapperSizeChange();
});
</script>

<template>
  <div
    ref="wrapperRef$"
    :class="[
      $style['screen-fullscreen'],
      $style['screen-clip'],
      $style['layer-overlapped'],
    ]"
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
      <path
        :d="tonePath"
        class="dot"
      />
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
