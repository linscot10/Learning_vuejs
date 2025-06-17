import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JobDetails from '../views/JobDetails.vue'
import AddJob from '../views/AddJob.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/job/:id', component: JobDetails },
    { path: '/post', component: AddJob },

]

export default createRouter({
    history:createWebHistory(),
    routes
})