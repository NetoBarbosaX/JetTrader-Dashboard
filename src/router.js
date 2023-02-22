import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: Dashboard,
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
        component: () => import('./pages/EditProfile.vue'),
    },
    {
        path: '/riskProfile',
        name: 'riskProfile',
        component: () => import('./pages/RiskProfile.vue'),
    },
    {
        path: '/registerMT4',
        name: 'registerMT4',
        component: () => import('./pages/RegisterMT4.vue'),
    },
    {
        path: '/payments',
        name: 'payments',
        component: () => import('./pages/Payments.vue'),
    },
    {
        path: '/tickets',
        name: 'tickets',
        component: () => import('./pages/Tickets.vue'),
    },
    {
        path: '/dashboardAdmin',
        name: 'dashboardAdmin',
        component: () => import('./PagesAdmin/DashboardAdmin.vue'),
    },
    {
        path: '/usersAdmin',
        name: 'usersAdmin',
        component: () => import('./PagesAdmin/UsersAdmin.vue'),
    },
    {
        path: '/finance',
        name: 'finance',
        component: () => import('./PagesAdmin/Finance.vue'),
    },
    {
        path: '/activatePlan',
        name: 'activatePlan',
        component: () => import('./PagesAdmin/ActivatePlan.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
