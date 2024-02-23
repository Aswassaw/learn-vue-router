<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <main>
    <h1>Halaman Movie Detail</h1>
    <p>{{ route.name }}</p>
    <p>{{ $route.params.id }}</p>
    <p>{{ $route.query.title }}</p>
    <button @click="$router.push({ name: 'homePage' })">
      Kembali Ke Home Page
    </button>
    <button @click="router.push({ name: 'homePage' })">
      Kembali Ke About Page
    </button>
  </main>
</template>
