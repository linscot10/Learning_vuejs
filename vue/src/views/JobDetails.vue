<script setup>
import { ref, onMounted } from 'vue'
import jobs from '../data/jobs'
import { useRoute } from 'vue-router'


const route = useRoute()
const job = ref(null)

onMounted(() => {
   const id = route.params.id
   job.value = jobs.find(j => j.id == id)
})
</script>

<template>
   <div v-if="job">
      <h1>{{ job.title }}</h1>
      <p>{{ job.company }}</p>
      <p>{{ job.location }}</p>
      <p>{{ job.description }}</p>
   </div>
</template>