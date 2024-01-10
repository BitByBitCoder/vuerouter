<template>
  <div v-for="job in job" :key="job.id">
    <RouterLink :to="{ name: 'jobsdetails', params: { id: job.id } }">
      <span>name:{{ job.name }}</span>
    </RouterLink>
  </div>
</template>

<script setup>
let job = [
  { name: "hruaia", rollno: "25", id: 1 },
  { name: "hruaia", rollno: "25", id: 2 },
  { name: "hruaia", rollno: "25", id: 3 },
];
</script>

<style></style>
