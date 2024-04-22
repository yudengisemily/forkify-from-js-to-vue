import { createRouter, createWebHistory } from 'vue-router';
import TheRecipe from './layout/TheRecipe.vue';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/:id', component: App },
    ]
});
export default router;