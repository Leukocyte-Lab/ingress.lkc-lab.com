<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

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
    </div>
  </main>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/container.module.scss' as container;
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
    width: 580px;
    height: 350px;
    padding: 54px;
  }

  &.social-link {
    --width: 225px;
    --height: 225px;
    --icon-size: 80px;
    --font-size: 24px;

    width: var(--width);
    height: var(--height);
    color: #{palette.$white};

    a {
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: inherit;
      transition: filter 0.2s ease-in-out;

      > .icon {
        filter: url('#neon-effect');
      }

      &:hover {
        filter: drop-shadow(0 4px 6px #{rgba(palette.$white, 0.45)});
      }

      > .icon {
        font-size: var(--icon-size);
      }

      > .text {
        font-size: var(--font-size);
        margin-top: 32px;
      }
    }
  }
}

.texture {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
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
