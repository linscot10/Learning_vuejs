<script setup>

import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([])

const addTask = () => {
    if (newTask.value.trim() !== "") {
        tasks.value.push(newTask.value)
        newTask.value = ''
    }
}

const removeTask = (index) => {
    tasks.value.splice(index, 1)
}
</script>

<template>
    <div class="todo-app">
        <div class="task-input">

            <input v-model="newTask" @keyup.enter="addTask" placeholder="add new todo">
            <button @click="addTask">Add task</button>
        </div>

        <ul class="tas-list">
            <li v-for="(task, i) in tasks" :key="i" class="task-item">{{ task }} <button @click="removeTask"
                    class="remove-button">Remove</button></li>

        </ul>
    </div>
</template>
