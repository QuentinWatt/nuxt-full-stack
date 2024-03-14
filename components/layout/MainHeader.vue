<template>
  <header class="bg-white border-b">
    <div class="container mx-auto px-3 h-16 flex items-center justify-between">
      <span class="font-bold text-3xl">MyLogo</span>
      <nav>
        <ul class="flex items-center">
          <li><NuxtLink to="/" class="mr-2">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>