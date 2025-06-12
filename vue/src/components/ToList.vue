<script setup>
import {ref} from 'vue'
const newTask = ref('')
const tasks = ref([])

const addTask = ()=>{
if(newTask.value.trim()!==""){
    tasks.value.push(newTask.value)
    newTask.value=''
    console.log(tasks.value);
}
}

const removeTask=(index)=>{
    tasks.value.splice(index,1)
    
    
}

</script>

<template>
<div class='todo-app'>
<div class='input'>
<input v-model='newTask' @keyup.enter='addTask'/>
<button  @click='addTask'>+</button>
</div>

<div>
   <ul>
    <li v-for="(task,i) in tasks" :key='i'>{{task}}
<button @click='removeTask'> delete</button>
     </li>
   </ul>
   
</div>
</div>
</template>