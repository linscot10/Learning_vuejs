<script setup>
import {ref,computed} from 'vue'
import jobs from '../data/jobs'
import JobCard from './JobCard.vue';
import JobFilters from '../components/JobFilters.vue'


const search = ref("")
const filterType = ref("")
const page = ref(1)
const perPage = 2


const filteredJobs=computed(()=>{
   return jobs.filter(job=>{
        const matchTitle= job.title.toLowerCase().includes(search.value.toLowerCase())
        const matchType=filterType.value?job.type===filterType.value : true

        return matchTitle && matchType
    })
})

const totalPages =computed(()=>
Math.ceil(filteredJobs.value.length/perPage)
)

const paginatedJobs=computed(()=>{
    const start=(page.value-1)*perPage
    return filteredJobs.value.slice(start, start + perPage)
})

function nextPage() {
  if (page.value < totalPages.value) page.value++
}
function prevPage() {
  if (page.value > 1) page.value--
}


</script>
<template>
<div>
      <JobFilters
      v-model:search="search"
      v-model:filterType="filterType"
    />

    <div v-for="job in paginatedJobs" :key="job.id">
        <JobCard :job='job' />
    </div>

     <div class="pagination">
      <button @click="prevPage" :disabled="page === 1">Prev</button>
      <span>Page {{ page }}</span>
      <button @click="nextPage" :disabled="page === totalPages">Next</button>
    </div>
    
</div>
   

</template>
<style scoped>
.pagination {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  align-items: center;
}
</style>