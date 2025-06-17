import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JobDetails from '../views/JobDetails.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/job/:id', component: JobDetails }
]

export default createRouter({
    history:createWebHistory(),
    routes
})