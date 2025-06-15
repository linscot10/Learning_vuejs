<script setup>
defineProps({
    job: Object

})


</script>
<template>
    <div class="job-card">
        <h2>{{ job.title }}</h2>
        <p>{{ job.company }}-{{ job.location }}</p>
        <router-link :to="'/job/' + job.id">View Details</router-link>
    </div>
</template>

<style scoped>
.job-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
}
</style>