<script setup lang="ts"></script>

<template>
  <main>
    <h1>404 Page Not Found</h1>
    <button @click="$router.push({ name: 'homePage' })">Kembali Ke Home</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
}
</style>
