import { createRouter, createWebHistory } from 'vue-router';
import AboutView from "../Pages/AboutView.vue";
import HomeView from "../Pages/HomeView.vue";
import AddMovieView from "../Pages/AddMovieView.vue";
import MoviesView from "../Pages/MoviesView.vue";
import LoginView from "../Pages/LoginView.vue";
import Logout from "../Pages/Logout.vue";
 

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/about',
            component: AboutView
        },
        {
            path: '/movies/create',
            component: AddMovieView
        },
        {
            path: '/movies',
            component: MoviesView
        },

        {
            path: '/login',
            component: LoginView
        },    

        {
            path: '/logout',
            component: Logout
        }
    ]
})

export default router;
