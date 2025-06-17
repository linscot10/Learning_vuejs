<script setup>

const props = defineProps(["search","filterType"])
const emit = defineEmits(["update:search","update:filterType"])

const search =defineModel('search')
const filterType=defineModel('filterType')
</script>

<template>
    <div class="filters">
    <input v-model="search" placeholder="Search by title..." />
    <select v-model="filterType">
      <option value="">All</option>
      <option>Full-time</option>
      <option>Part-time</option>
      <option>Contract</option>
    </select>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
</style>