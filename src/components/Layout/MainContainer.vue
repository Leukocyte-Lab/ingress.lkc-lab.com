<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

import logo from '@/assets/images/lkc.full.logo.svg';
import AGHLogo from '@/assets/images/argushack.full.logo.svg';
import H1draLogo from '@/assets/images/h1dra-security.full.logo.svg';

import MainContent from '@/../content/MainContent.component.md';
import AGHIntro from '@/../content/AGHIntro.component.md';
import H1draIntro from '@/../content/H1draIntro.component.md';
import SalesContact from '@/../content/SalesContact.component.md';
import CareerIntro from '@/../content/CareerIntro.component.md';
import CareerProcedure from '@/../content/CareerProcedure.component.md';

import type { Step } from '@/components/Exclusive/ProcedureBar.vue';
import type { AtLeastOne } from '@/shared/types/optional';

const careerIntroRef$ = ref<HTMLElement | null>(null);
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
    hook: 'products',
  },
  {
    name: '徵才資訊',
    hook: 'careers',
  },
  {
    name: '聯絡我們',
    hook: 'contact',
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
const careerSteps = ref<Step[]>([
  {
    name: '招募',
    icon: 'fa6-solid:user-plus',
  },
  {
    name: '應徵',
    icon: 'fa6-solid:file-signature',
  },
  {
    name: '聯絡',
    icon: 'fa6-solid:envelope',
  },
  {
    name: '聯絡',
    icon: 'fa6-solid:envelope',
  },
  {
    name: '聯絡',
    icon: 'fa6-solid:envelope',
  },
]);
const mapQuery = ref(
  '!1m18!1m12!1m3!1d2284.3603220962555!2d121.46325844633562!3d25.009015175489008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90887051d09%3A0xe2910d0ee00b287d!2zTGV1a29jeXRlLUxhYiDnm6fmsKros73lv5LogqHku73mnInpmZDlhazlj7g!5e0!3m2!1sen!2stw!4v1658725099913!5m2!1sen!2stw'
);
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
      <section
        id="products"
        :class="[
          $style['container-section'],
          $style['container--column'],
          $style['center'],
          $style['full-width'],
        ]"
      >
        <SalesContact
          :class="[$style['container--column'], $style['full-width']]"
        />
        <GeneralButton
          :text="'sales@lkc-lab.com'"
          :link="'mailto:sales@lkc-lab.com'"
          :icon="'fa6-solid:envelope'"
          class="sales-button"
        />
      </section>
      <section
        id="careers"
        :class="[
          $style['container-section'],
          $style['container--column'],
          $style['center'],
          $style['full-width'],
        ]"
      >
        <CareerIntro ref="careerIntroRef$" />
        <template v-if="careerIntroRef$">
          <Teleport to="#map-inject">
            <MapBox
              :label="'地點'"
              :address="'新北市板橋區民族路 34 巷 22 號 2 樓'"
              :query="mapQuery"
            />
          </Teleport>
        </template>
      </section>
      <section
        :class="[
          $style['container-section'],
          $style['container--column'],
          $style['center'],
          $style['full-width'],
        ]"
        class="session-wrapper--frame"
      >
        <h1 class="title font-uppercase font-bold">徵才辦法</h1>
        <ProcedureBar :steps="careerSteps" />
        <CareerProcedure
          :class="[$style['container--column'], $style['full-width']]"
        />
        <GeneralButton
          :text="'查看更多徵才訊息'"
          :link="'mailto:sales@lkc-lab.com'"
          :icon="'fa6-solid:arrow-up-right-from-square'"
          :icon-position="'right'"
        />
      </section>
    </div>
    <MainFooter :contacts="contactItems" />
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

    &--frame {
      --frame-border-radius: 75px;

      padding: 32px 128px;
      border: 1px solid #{palette.$white};
      border-radius: var(--frame-border-radius);

      .button {
        margin-top: 32px;
      }
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

.sales-button {
  margin: 35px 0;
  margin-right: auto;
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
