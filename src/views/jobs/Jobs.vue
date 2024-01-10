<template>
  <div v-for="job in job">
    <span>name:{{ job.name }}</span>
  </div>
</template>

<script setup>
let job = [
  { name: "hruaia", rollno: "25" },
  { name: "hruaia", rollno: "25" },
  { name: "hruaia", rollno: "25" },
];
</script>

<style></style>
