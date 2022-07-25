<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

import logo from '@/assets/images/lkc.full.logo.svg';
import AGHLogo from '@/assets/images/argushack.full.logo.svg';
import H1draLogo from '@/assets/images/h1dra-security.full.logo.svg';

import MainContent from '@/../content/MainContent.component.md';
import AGHIntro from '@/../content/AGHIntro.component.md';
import H1draIntro from '@/../content/H1draIntro.component.md';

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

const contactItems = ref<
  {
    name: string;
    icon: string;
    url: string;
  }[]
>([
  {
    name: 'Facebook',
    icon: 'fa6-brands:facebook-f',
    url: 'https://www.facebook.com/LeukocyteLab/',
  },
  {
    name: 'LinkedIn',
    icon: 'fa6-brands:linkedin-in',
    url: 'https://www.linkedin.com/company/lkc-lab',
  },
  {
    name: 'Twitter',
    icon: 'fa6-brands:twitter',
    url: 'https://twitter.com/CoLeukocyte',
  },
  {
    name: 'Medium',
    icon: 'fa6-brands:medium',
    url: 'https://medium.com/h1dra-security-team',
  },
]);
</script>

<template>
  <main :class="$style['container-main']">
    <ScreenTone />
    <NeonTexture class="texture" />
    <NavBar :items="navbarItems" />
    <div
      :class="[$style['container-content'], $style['container--column']]"
      class="session-wrapper--content"
    >
      <section
        id="about"
        :class="[
          $style['container-section'],
          $style['container--row'],
          $style['wrap'],
        ]"
      >
        <SpotlightBox
          :class="[
            $style['spotlight-box'],
            $style['container--column'],
            $style['inline'],
            $style['center'],
          ]"
          class="spotlight-box logo"
        >
          <img :src="logo" alt="Main logo for Leukocyte-Lab Co., Ltd." />
        </SpotlightBox>
        <MainContent
          :class="[
            $style['container--column'],
            $style['inline'],
            $style['center'],
          ]"
          class="main-introduction"
        />
      </section>
      <section
        id="follow-us"
        :class="[
          $style['container-section'],
          $style['container--column'],
          $style['center'],
          $style['full-width'],
        ]"
        class="session-wrapper--spotlight"
      >
        <h1 class="title font-uppercase font-bold">關注我們</h1>
        <div
          :class="[
            $style['container--row'],
            $style['wrap'],
            $style['full-width'],
          ]"
          class="session-wrapper--card"
        >
          <template
            v-for="contact in contactItems"
            :key="`contact--${contact.name}`"
          >
            <SpotlightBox
              :class="[
                $style['spotlight-box'],
                $style['container--column'],
                $style['inline'],
                $style['center'],
              ]"
              class="spotlight-box social-link"
            >
              <a
                :class="[
                  $style['container--column'],
                  $style['center'],
                  $style['spotlight-box--link'],
                ]"
                :href="contact.url"
                target="_blank"
              >
                <Icon
                  :class="$style['spotlight-box--link-icon']"
                  :icon="contact.icon"
                />
                <span
                  :class="$style['spotlight-box--link-text']"
                  class="font-bold"
                  >{{ contact.name }}</span
                >
              </a>
            </SpotlightBox>
          </template>
        </div>
      </section>
      <section
        id="products"
        :class="[
          $style['container-section'],
          $style['container--column'],
          $style['center'],
          $style['full-width'],
        ]"
        class="session-wrapper--spotlight"
      >
        <h1 class="title font-uppercase font-bold">What we do</h1>
        <div
          :class="[
            $style['container--row'],
            $style['wrap'],
            $style['full-width'],
          ]"
          class="session-wrapper--card"
        >
          <SpotlightBox
            :class="[
              $style['spotlight-box'],
              $style['container--column'],
              $style['center'],
            ]"
            class="spotlight-box card"
          >
            <img
              :src="H1draLogo"
              :class="$style['spotlight-box--image']"
              alt="Main logo for H1DRA Security"
            />
            <H1draIntro />
          </SpotlightBox>
          <SpotlightBox
            :class="[
              $style['spotlight-box'],
              $style['container--column'],
              $style['center'],
            ]"
            class="spotlight-box card"
          >
            <img
              :src="AGHLogo"
              :class="$style['spotlight-box--image']"
              alt="Main logo for ArgusHack"
            />
            <AGHIntro />
          </SpotlightBox>
        </div>
      </section>
    </div>
  </main>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/container.module.scss' as container;
@use '@/assets/styles/scss/components/spotlight.module.scss' as spotlight;
</style>

<style lang="scss" scoped>
@use '@/assets/styles/scss/components/palette.module.scss' as palette;

.session {
  &-wrapper {
    &--content {
      gap: 89px 0;
    }

    &--spotlight {
      gap: 60px 0;
    }
  }
}

.spotlight-box {
  &.logo {
    --width: 580px;
    --height: 350px;

    padding: 54px;
  }

  &.social-link {
    --width: 225px;
    --height: 225px;
    --icon-size: 80px;
    --font-size: 24px;
  }

  &.card {
    --width: calc(50% - 56px);
    --height: auto;

    padding: 56px;
  }
}

.main-introduction {
  width: 530px;
}

.texture {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
}

.title {
  --title-font-size: 24px;

  color: #{palette.$white};
  font-size: var(--title-font-size);
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
}
</style>
