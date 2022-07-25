<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue';
import { Icon } from '@iconify/vue';

import type { Vector } from '@/shared/types/vector';

export type Step = {
  name: string;
  icon: string;
};

defineProps<{
  steps: Step[];
}>();

const stepWrapperRef$ = ref<HTMLElement | null>(null);
const stepsElementRef$ = ref<HTMLElement[] | null>(null);
const stepArrows = ref<
  {
    from: Vector<'x' | 'y'>;
    to: Vector<'x' | 'y'>;
  }[]
>([]);
const arrowPath = ref('');

const calcStepArrows = () => {
  if (stepsElementRef$.value) {
    stepsElementRef$.value.forEach((element, index) => {
      if (index > 0) {
        const currentBoundingRect = element.getBoundingClientRect();
        const rootBoundingRect =
          stepsElementRef$.value![0].getBoundingClientRect();
        const previousBoundingRect =
          stepsElementRef$.value![index - 1].getBoundingClientRect();

        stepArrows.value[index - 1] = {
          from: {
            x: previousBoundingRect.right - rootBoundingRect.right,
            y: previousBoundingRect.bottom - rootBoundingRect.bottom,
          },
          to: {
            x: currentBoundingRect.left - rootBoundingRect.left,
            y: currentBoundingRect.top - rootBoundingRect.top,
          },
        };
      }
    });

    calcArrowPath();
  }
};

const calcArrowPath = () => {
  if (stepArrows.value && stepArrows.value.length > 0) {
    arrowPath.value = stepArrows.value
      .map(
        ({ from, to }) => `
M ${from.x + 76 * Number(Boolean(to.x)) + (56 / 2) * Number(Boolean(to.y))} ${
          from.y + (76 / 2) * Number(Boolean(to.y))
        }
L ${to.x - 4 * 2 * Number(Boolean(to.x)) + (56 / 2) * Number(Boolean(to.y))} ${
          to.y - (4 * 2 + 56 / 2) * Number(Boolean(to.y))
        }
l ${Math.SQRT2 * -4} ${Math.SQRT2 * -4}
L ${to.x - 4 * 2 * Number(Boolean(to.x)) + (56 / 2) * Number(Boolean(to.y))} ${
          to.y - (4 * 2 + 56 / 2) * Number(Boolean(to.y))
        }
l ${
          Math.SQRT2 * -4 * Number(Boolean(to.x)) +
          Math.SQRT2 * 4 * Number(Boolean(to.y))
        } ${
          Math.SQRT2 * 4 * Number(Boolean(to.x)) +
          Math.SQRT2 * -4 * Number(Boolean(to.y))
        }`
      )
      .join('\n');
  }
};

watchEffect(() => {
  calcStepArrows();
});

onMounted(() => {
  new ResizeObserver(() => {
    calcStepArrows();
  }).observe(stepWrapperRef$.value!);
});
</script>

<template>
  <div ref="stepWrapperRef$" :class="$style['procedure-container']">
    <template v-if="stepWrapperRef$">
      <svg
        :width="stepWrapperRef$.clientWidth"
        :height="stepWrapperRef$.clientHeight"
        :class="$style['procedure-arrow']"
        overflow="visible"
      >
        <path :d="arrowPath" />
      </svg>
    </template>
    <template v-for="(step, index) in steps" :key="index">
      <div ref="stepsElementRef$" :class="$style['procedure-item']">
        <div :class="$style['procedure-item-icon']">
          <Icon :icon="step.icon" :size="'24px'" />
        </div>
        <div :class="$style['procedure-item-text']">
          <span>{{ step.name }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/procedure.module.scss' as procedure;
</style>
