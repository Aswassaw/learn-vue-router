<script setup lang="ts">
import { ref } from "vue";

const movies = ref([
  {
    id: "ef3f8f80-7eef-468e-944c-a372ae42dabf",
    name: "The Godfather",
  },
  {
    id: "54e7a543-a0a9-47ed-b795-4f6964fcb2c1",
    name: "Harry Potter",
  },
  {
    id: "187441a5-b148-4025-a59c-742313dcd44f",
    name: "Not Ruto",
  },
  {
    id: "35903616-d356-4bf4-8ffa-bc400a80e9da",
    name: "Sassy K",
  },
  {
    id: "a7a134ae-4bd0-4d66-8448-82ca5f9ae843",
    name: "Eye Touchy",
  },
]);
</script>

<template>
  <main>
    <h1>Halaman Movies</h1>
    <div class="movie-item" v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.name }}</h2>
      <RouterLink
        :to="{
          name: 'movieDetailPage',
          params: { id: movie.id },
          query: { title: movie.name },
        }"
        >See Detail</RouterLink
      >
    </div>
  </main>
</template>

<style scoped>
.movie-item {
  padding: 20px;
}

.movie-item h2 {
  text-align: center;
}

.movie-item a {
  text-align: center;
  display: block;
}
</style>
