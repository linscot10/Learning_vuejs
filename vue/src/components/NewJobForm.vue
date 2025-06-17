<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import jobs from '../data/jobs'

const router = useRouter()
const title=ref('')
const company = ref('')
const location = ref('')
const type=ref('Full-time')
const description = ref("")

function submitJob() {
    const newJob={
        id:Date.now(),
        title:title.value,
        company:company.value,
        location: location.value,
    type: type.value,
    description: description.value,
    }

    jobs.unshift(newJob)
    router.push("/")
    
}
</script>

<template>
    <form @submit.prevent="submitJob">
        <input v-model="title" placeholder="job title" required>
        <input v-model="company" placeholder="company name" required>
        <input v-model="location" placeholder="Location" required>
        <select v-model="type">
            <option>Full-time</option>
            <option>Contract</option>
            <option>Part-time</option>
        </select>
        <textarea v-model="description" placeholder="job description"></textarea>
        <button type="submit">Post Job</button>
    </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px;
}
</style>