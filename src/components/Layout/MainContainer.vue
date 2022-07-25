<script setup lang="ts">
import { ref } from 'vue';

import logo from '@/assets/images/lkc.full.logo.svg';
import MainContent from '@/../content/MainContent.component.md';

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
    <div :class="[$style['container-content'], $style['container--column']]">
      <section
        :class="[
          $style['container-section'],
          $style['container--row'],
          $style['wrap'],
        ]"
      >
        <SpotlightBox class="logo-spotlight-box">
          <img :src="logo" alt="Main logo for Leukocyte-Lab Co., Ltd." />
        </SpotlightBox>
        <MainContent
          :class="[
            $style['container--column'],
            $style['inline'],
            $style['center'],
          ]"
        />
      </section>
    </div>
  </main>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/container.module.scss' as container;
</style>

<style lang="scss" scoped>
.logo-spotlight-box {
  width: 580px;
  height: 350px;
  padding: 54px;
}
</style>

<style lang="scss">
@use '@/assets/styles/scss/components/palette.module.scss' as palette;
@use '@/assets/styles/scss/components/article.module.scss' as article;

.article {
  @include article.use(
    $title-font-size: 24px,
    $font-size: 18px,
    $palette-text: palette.$white,
    $palette-text-link: palette.$white,
    $palette-text-link-hover: palette.$white,
    $palette-code-bg-color: palette.$gray-7
  );

  width: 530px;
}
</style>
