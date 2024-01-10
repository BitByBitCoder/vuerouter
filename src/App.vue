<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import router from "./router";
function back() {
  router.back(-1);
}
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/photo">Photo</RouterLink>
      <RouterLink :to="{ name: 'jobs' }">job</RouterLink>
    </nav>
  </div>
  <br />
  <button @click="back">back</button>

  <RouterView />
</template>
