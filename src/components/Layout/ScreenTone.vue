<script setup lang="ts">
import { onMounted, reactive, ref, watchEffect } from 'vue';
import { useMouse, useWindowScroll } from '@vueuse/core';

import Math$ from '@/shared/common/math';

import type { Vector } from '@/shared/types/vector';
import { vec2 } from '@/shared/common/vector';

export type Dot = Vector<'x' | 'y'> & {
  radius: number;
  acc: Vector<'x' | 'y'>;
};

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
const tonePath = ref('');

// TODO: Enable interactive screen tone effect after speed and performance be optimized
const $mouse = reactive(
  // useMouse({
  //   type: 'client',
  //   resetOnTouchEnds: true,
  // })
  {
    x: 0,
    y: 0,
  }
);

// TODO: Enable interactive screen tone effect after speed and performance be optimized
const $scroll = reactive(
  // useWindowScroll()
  {
    x: 0,
    y: 0,
  }
);

const calcVariables = () => {
  width.value = wrapperRef$.value?.offsetWidth || 0;
  height.value = wrapperRef$.value?.offsetHeight || 0;
  rows.value = Math.floor(height.value / props.increment.y) + 2;
  columns.value = Math.floor(width.value / props.increment.x) + 2;
};

const calcDotPath = () => {
  tonePath.value = Array.from(
    { length: rows.value * columns.value },
    (_, i) => ({
      x: (i % columns.value) * props.increment.x - props.increment.x / 2,
      y:
        Math.floor(i / columns.value) * props.increment.y -
        props.increment.y / 2,
      radius: props.radius,
      acc: {
        x: 0,
        y: 0,
      },
    })
  )
    .map((dot) => ({
      ...dot,
      acc: {
        x:
          vec2.delta(vec2.minus(dot, $scroll), $mouse) <= props.increment.x * 5
            ? 1 -
              vec2.delta(vec2.minus(dot, $scroll), $mouse) /
                (props.increment.x * 5)
            : 0,
        y:
          vec2.delta(vec2.minus(dot, $scroll), $mouse) <= props.increment.y * 5
            ? 1 -
              vec2.delta(vec2.minus(dot, $scroll), $mouse) /
                (props.increment.y * 5)
            : 0,
      },
    }))
    .map((dot) => ({
      ...dot,
      x: dot.x + dot.acc.x * Math.sqrt(props.increment.x) * Math$.PI,
      y: dot.y + dot.acc.y * Math.sqrt(props.increment.y) * Math$.PI,
    }))
    .map(
      (dot) => `
  M ${dot.x} ${dot.y - dot.radius}
  C ${dot.x - dot.radius * Math$.ARC_BASE} ${dot.y} ,
    ${dot.x - dot.radius} ${dot.y - dot.radius * Math$.ARC_BASE},
    ${dot.x - dot.radius} ${dot.y}
  S ${dot.x - dot.radius * Math$.ARC_BASE} ${dot.y + dot.radius},
    ${dot.x} ${dot.y + dot.radius}
  S ${dot.x + dot.radius} ${dot.y + dot.radius * Math$.ARC_BASE}
    ${dot.x + dot.radius} ${dot.y}
  S ${dot.x + dot.radius * Math$.ARC_BASE} ${dot.y - dot.radius},
    ${dot.x} ${dot.y - dot.radius}
  S ${dot.x - dot.radius} ${dot.y - dot.radius * Math$.ARC_BASE},
    ${dot.x - dot.radius} ${dot.y}
  S ${dot.x - dot.radius * Math$.ARC_BASE} ${dot.y + dot.radius},
    ${dot.x} ${dot.y + dot.radius}
  Z
  `
    )
    .join('\n');
};

const watchWrapperSizeChange = () => {
  const wrapper = wrapperRef$.value;
  if (wrapper) {
    new ResizeObserver(() => {
      calcVariables();
      calcDotPath();
    }).observe(wrapper);
  }
};

watchEffect(() => {
  calcDotPath();
});

onMounted(() => {
  calcVariables();
  calcDotPath();
  watchWrapperSizeChange();
});
</script>

<template>
  <div
    ref="wrapperRef$"
    :class="[
      $style['screen-adoptive'],
      $style['screen-clip'],
      $style['layer-overlapped'],
    ]"
    class="screen-tone-wrapper"
  >
    <svg
      :width="width"
      :height="height"
      preserveAspectRatio="xMinYMin"
      color-profile="sRGB"
      class="screen-tone"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
      <path :d="tonePath" class="dot" />
    </svg>
  </div>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/screen.module.scss' as screen;
</style>

<style lang="scss" scoped>
@use '@/assets/styles/scss/components/palette.module.scss' as palette;

@use '@/assets/styles/scss/components/effect.module.scss' as animate;

.screen-tone {
  shape-rendering: optimizespeed;
  image-rendering: optimizespeed;

  &-wrapper {
    @include animate.expanding($start: 0, $end: 100%);

    position: absolute;
    z-index: 0;

    // TODO: Enable screen tone animation after speed and performance be optimized
    // animation: expand-width 1s cubic-bezier(0.65, 0.028, 0.235, 0.55) 1s
    //   forwards;
    // will-change: width;
  }

  .dot {
    fill: #{palette.$white};
    opacity: 0.25;
  }
}
</style>
