<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  label: string;
  address: string;
  query: string;
}>();
</script>

<template>
  <div :class="$style['map-container']">
    <div :class="$style['map-header']">
      <label :class="$style['map-label']">{{ label }}</label>
      <p :class="$style['map-icon']">
        <Icon :icon="'fa6-solid:map-location-dot'" />
      </p>
      <address :class="$style['map-address']" class="font-bold">
        {{ address }}
      </address>
    </div>
    <client-only>
      <iframe
        :class="$style['map-entity']"
        :src="`https://www.google.com/maps/embed?pb=${query}`"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </client-only>
  </div>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/components/map.module.scss' as map;
</style>
