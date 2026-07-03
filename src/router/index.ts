import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../pages/DashboardPage.vue'),
    },
    {
      path: '/inbox',
      name: 'inbox',
      component: () => import('../pages/PlaceholderPage.vue'),
    },
    {
      path: '/pipeline',
      name: 'pipeline',
      component: () => import('../pages/PlaceholderPage.vue'),
    },
    {
      path: '/plan',
      name: 'plan',
      component: () => import('../pages/PlaceholderPage.vue'),
    },
    {
      path: '/insights',
      name: 'insights',
      component: () => import('../pages/PlaceholderPage.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/PlaceholderPage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginPage.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/RegisterPage.vue'),
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: () => import('../pages/ForgotPasswordPage.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../pages/PrivacyPage.vue'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../pages/TermsPage.vue'),
    },
  ],
})

export default router
