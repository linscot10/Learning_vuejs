<script setup>
import {ref ,onMounted } from 'vue'
const quotes= ref([
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "Do not watch the clock. Do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
])
const currentQuote=ref({text:'',author:''})
const getRandomQuote=()=>{
    const randomindex=Math.floor(Math.random()*quotes.value.length)
    currentQuote.value=quotes.value[randomindex]
}

onMounted(getRandomQuote)
</script>

<template>
    <div class='quote-generator'>

        <h1 class='app-title'>Quote Generator</h1>
        
                <blockquote class="quote-container">
                    <p>{{currentQuote.text}}</p>                    
                        <cite >{{currentQuote.author}}</cite>
              
                </blockquote>

                <button @click='getRandomQuote'>generate Quote</button>
         
        
    </div>
</template>