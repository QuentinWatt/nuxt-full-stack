<script setup lang="ts">
  import MainHeader from '~/components/layout/MainHeader.vue';
  import MainFooter from '~/components/layout/MainFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-800">
    <MainHeader />
    <div class="bg-white"><slot /></div>

    <MainFooter />
  </div>
</template>