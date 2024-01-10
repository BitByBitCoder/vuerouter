<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/photo">Photo</RouterLink>
      <RouterLink :to="{ name: jobs }">job</RouterLink>
      <RouterLink :to="{ name: jobsdetails }">JobDetails</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>
