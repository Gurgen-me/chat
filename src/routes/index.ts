import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'ГЛАВНАЯ',
        component: () => import('@/views/HomeView.vue')
    },
    {
        path: '/chat',
        name: 'ЧАТ',
        component: () => import('@/views/ChatView.vue')
    },
    {
        path: '/login',
        name: 'ВХОД',
        component: () => import('@/views/LoginView.vue')
    },
    {
        path: '/profile',
        name: 'ПРОФИЛЬ',
        component: () => import('@/views/ProfileView.vue')
    },
    {
        path: '/help',
        name: 'ПОМОЩЬ',
        component: () => import('@/views/HelpView.vue')
    },
    { path: '/:pathMatch(.*)*',
     name: 'NotFound', 
     component: () => import('@/views/NotFoundView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;