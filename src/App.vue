<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navigation/Navbar.vue';
import Footer from './components/navigation/Footer.vue';
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped lang="scss">
main {
  width: 80vw;
  margin: 0 auto;
  margin-top: calc(80px + 10%);
}
</style>
