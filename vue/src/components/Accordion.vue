<script setup>
import { ref } from 'vue'

const items = ref([
    {
        title: "Section 1",
        content: "Content for section 1 goes here.",
        open: false
    },
    {
        title: "Section 2",
        content: "Content for section 2 goes here.",
        open: false
    },
    {
        title: "Section 3",
        content: "Content for section 3 goes here.",
        open: false
    }])

const toggleAccordion = (index) => {
    items.value = items.value.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : false
    }))
}
</script>

<template>
    <div class='accordion-container'>
        <div v-for="(item, index) in items" :key="index" class='accordion'>
            <div class='accordion-header' @click="toggleAccordion(index)">
                {{ item.title }}
                <span>{{ item.open?'🔽':'🔽' }}</span>
            </div>
            <div class="accordion-content" v-show="item.open">{{ item.content }}</div>
        </div>
    </div>
</template>