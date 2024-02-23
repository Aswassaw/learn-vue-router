<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'homePage' }">Home</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'aboutPage' }">About</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'moviesPage' }">Movies</RouterLink>
      </li>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped>
nav ul {
  display: flex;
  background-color: rgb(63, 62, 62);
}

nav ul li {
  list-style-type: none;
  padding: 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
