<script setup lang="ts">
import { inject } from 'vue';
import { Icon } from '@iconify/vue';

import logo from '@/assets/images/lkc.mixed.logo.svg';

defineProps<{
  contacts: {
    name: string;
    icon: string;
    url: string;
  }[];
}>();

const isMobile = inject('isMobile');
</script>

<template>
  <footer :class="$style['footer-container']" class="footer">
    <div
      :class="[
        $style['footer-wrapper'],
        isMobile ? $style['container--column'] : $style['container--row'],
        $style['full-width'],
        $style['center'],
      ]"
    >
      <div :class="$style['footer-logo']">
        <img :src="logo" alt="Leukocyte-Lab Co., Ltd." />
      </div>
      <div
        :class="[$style['footer-info-wrapper'], $style['container--column']]"
      >
        <div
          :class="[
            $style['footer-content-wrapper'],
            isMobile ? $style['container--column'] : $style['container--row'],
          ]"
        >
          <div :class="$style['footer-content']">
            <h3 :class="$style['footer-title']" class="font-bold">
              Contact Us
            </h3>
            <p :class="$style['footer-text']">
              <a
                :class="[$style['footer-link'], $style['container--row']]"
                href="tel:+886-2-2950-0110"
              >
                <Icon
                  :class="$style['footer-icon']"
                  :icon="'fa6-solid:phone'"
                />
                <span class="font-mono">+886 2-2950-0110</span>
              </a>
            </p>
            <p :class="$style['footer-text']">
              <a
                :class="[$style['footer-link'], $style['container--row']]"
                href="mailto:sales@lkc-lab.com"
              >
                <Icon
                  :class="$style['footer-icon']"
                  :icon="'fa6-solid:envelope'"
                />
                <span class="font-mono">sales@lkc-lab.com</span>
              </a>
            </p>
            <p :class="$style['footer-text']">
              <a
                :class="[$style['footer-link'], $style['container--row']]"
                href="https://g.page/LKC-Lab"
                title="Address 地址"
                aria-label="Address 地址"
                target="_blank"
                rel="noopener noreferrer"
                class="addr"
              >
                <Icon
                  :class="$style['footer-icon']"
                  :icon="'fa6-solid:location-dot'"
                />
                <span
                  >220854<br />新北市板橋區<br />民族路 34 巷 22 號 2 樓</span
                >
              </a>
            </p>
          </div>
          <div :class="$style['footer-content']">
            <h3 :class="$style['footer-title']" class="font-bold">Follow Us</h3>
            <div
              :class="[
                $style['footer-item-wrapper'],
                $style['container--row'],
                $style['full-width'],
              ]"
            >
              <template v-for="contact in contacts" :key="contact.name">
                <div :class="$style['footer-item']">
                  <a :class="$style['footer-link']" :href="contact.url">
                    <Icon :icon="contact.icon" />
                  </a>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div
          :class="[$style['footer-content-wrapper'], $style['container--row']]"
        >
          <p :class="[$style['footer-text'], $style['copyright']]">
            &copy;2022｜盧氪賽忒股份有限公司｜Leukocyte-Lab Co., Ltd.｜All right
            reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/footer.module.scss' as footer;
@use '@/assets/styles/scss/components/container.module.scss' as container;
</style>

<style lang="scss" scoped>
.footer {
  --footer-height: 320px;
  --footer-logo-height: 136px;
  --footer-content-width: 700px;
  --footer-padding-top: 24px;
  --footer-padding-right: 64px;
  --footer-padding-bottom: 23px;
  --footer-padding-left: 37px;
  --footer-radius: 5px;
  --footer-title-font-size: 24px;
  --footer-font-size: 18px;

  @media screen and (max-width: 1280px) {
    --footer-logo-height: 108px;
    --footer-content-width: calc(100% - 24px * 2);
    --footer-title-font-size: 22px;
    --footer-font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    --footer-height: auto;
    --footer-logo-height: auto;
    --footer-content-width: 100%;
    --footer-padding-top: 24px;
    --footer-padding-right: 24px;
    --footer-padding-bottom: 23px;
    --footer-padding-left: 24px;
    --footer-radius: 5px;
    --footer-title-font-size: 20px;
    --footer-font-size: 14px;
  }
}
</style>
