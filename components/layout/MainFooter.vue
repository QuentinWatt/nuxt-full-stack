<script setup lang="ts">
  const date = new Date();
</script>

<template>
  <footer class="bg-gray-800 py-6">
    <div class="container mx-auto px-3">
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-white h-12">MyLogo</span>
        <span class="text-sm text-gray-300">&copy; {{ date.getFullYear() }}</span>
      </div>
    </div>
  </footer>
</template>