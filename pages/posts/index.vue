<script setup lang="ts">
  import type { Post } from '@prisma/client';
  const {data: posts} = await useFetch<Post[]>("/api/posts")
</script>

<template>
  <main class="container mx-auto px-3 py-6">
    <h1 class="text-3xl font-bold">Posts</h1>

    <div v-if="posts">
      <div v-for="post in posts" :key="post.id" class="border rounded p-5 my-3">
        <h3 class="font-bold">{{ post.title }}</h3>
        <p>{{ post.content }}</p>
      </div>
    </div>
  </main>
</template>