<script setup>

</script>
<template>
   
  <div id="app">
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/post'>Post a Job</router-link>
    </nav>
    <router-view />
  </div>

</template>

<style>
nav {
  display: flex;
  gap: 15px;
  padding: 10px;
}
</style>