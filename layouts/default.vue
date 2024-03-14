<script setup lang="ts">
  import MainHeader from '~/components/layout/MainHeader.vue';
  import MainFooter from '~/components/layout/MainFooter.vue';
</script>

<template>
  <div>
    <MainHeader />
    <slot />

    <MainFooter />
  </div>
</template>