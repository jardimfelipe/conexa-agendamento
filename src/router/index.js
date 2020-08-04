import Vue from 'vue';
import VueRouter from 'vue-router';
import { getSavedState } from '@/utils/localStorage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      rule: 'isPublic',
      layout: 'not-logged',
    },
    component: () => import('./views/login/login.vue'),
  },
  {
    path: '/',
    name: 'Minhas consultas',
    meta: {
      rule: 'isLogged',
    },
    component: () => import('./views/home/home.vue'),
  },
  {
    path: '/nova-consulta',
    name: 'Nova Consulta',
    meta: {
      rule: 'isLogged',
      backButton: true,
    },
    component: () => import('./views/new-appointment/new-appointment.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!getSavedState('auth.currentUser');

  // route not found
  if (!to.meta.rule) {
    return next('/');
  }

  // not logged in
  if (!isLoggedIn && to.meta.rule !== 'isPublic') {
    return next('/login');
  }

  // logged in
  if (isLoggedIn && to.meta.rule === 'isPublic') {
    return next('/');
  }

  return next();
});

export default router;
