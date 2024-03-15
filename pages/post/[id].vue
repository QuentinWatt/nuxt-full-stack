<script setup lang="ts">
import type { Post } from '@prisma/client';

  const route = useRoute()
  
  const {data: post} = useFetch<Post>(`/api/posts/${route.params.id}`);
</script>

<template>
  <main v-if="post" class="container mx-auto px-3 py-6">
    <h1 class="font-bold">{{post.title}}</h1>

    <div>
      {{ post.content }}
    </div>
  </main>
</template>