import { createRouter, createWebHistory } from 'vue-router';
import AboutView from "../Pages/AboutView.vue";
import HomeView from "../Pages/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/about',
            component: AboutView
        }
    ]
})

export default router;
