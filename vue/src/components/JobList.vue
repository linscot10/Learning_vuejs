<script setup>
import jobs from '../data/jobs'
import JobCard from './JobCard.vue';

</script>
<template>

    <h1>Available Jobs</h1>
    <JobCard v-for="job in jobs" :key="job" :job='job' />

</template>
<style scoped></style>