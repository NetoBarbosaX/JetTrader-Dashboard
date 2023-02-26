import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import authenticated from './utilities/authenticated';

const routes = [
    {
        path: '/',
        name: 'app',
        component: Dashboard,
        beforeEnter: authenticated(),
        meta: {},
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./components/Dashboard.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./pages/Register.vue'),
    },
    {
        path: '/verification',
        name: 'verification',
        beforeEnter: authenticated({ skipEmail: true }),
        component: () => import('./pages/Verification.vue'),
    },
    {
        path: '/trueCheck',
        name: 'trueCheck',
        component: () => import('./pages/TrueCheck.vue'),
    },
    {
        path: '/forgotPassword',
        name: 'forgotPassword',
        component: () => import('./pages/ForgotPassword.vue'),
    },
    {
        path: '/editProfile',
        name: 'editProfile',
        beforeEnter: authenticated(),
        component: () => import('./pages/EditProfile.vue'),
    },
    {
        path: '/riskProfile',
        name: 'riskProfile',
        beforeEnter: authenticated(),
        component: () => import('./pages/RiskProfile.vue'),
    },
    {
        path: '/registerMT4',
        name: 'registerMT4',
        beforeEnter: authenticated(),
        component: () => import('./pages/RegisterMT4.vue'),
    },
    {
        path: '/payments',
        name: 'payments',
        beforeEnter: authenticated(),
        component: () => import('./pages/Payments.vue'),
    },
    {
        path: '/tickets',
        name: 'tickets',
        beforeEnter: authenticated(),
        component: () => import('./pages/Tickets.vue'),
    },
    {
        path: '/dashboardAdmin',
        name: 'dashboardAdmin',
        beforeEnter: authenticated(),
        component: () => import('./PagesAdmin/DashboardAdmin.vue'),
    },
    {
        path: '/usersAdmin',
        name: 'usersAdmin',
        beforeEnter: authenticated(),
        component: () => import('./PagesAdmin/UsersAdmin.vue'),
    },
    {
        path: '/finance',
        name: 'finance',
        beforeEnter: authenticated(),
        component: () => import('./PagesAdmin/Finance.vue'),
    },
    {
        path: '/activatePlan',
        name: 'activatePlan',
        beforeEnter: authenticated(),
        component: () => import('./PagesAdmin/ActivatePlan.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
