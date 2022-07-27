import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    component: function () {
      return import(/* webpackChunkName: "opiniones" */ '../views/Opiniones.vue');
    }
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: function () {
      return import(/* webpackChunkName: "administracion" */ '../views/Administracion.vue');
    }
  },
  {
    path: '/edicion/:id',
    name: 'edicion',
    props: true,
    component: function () {
      return import(/* webpackChunkName: "edicion" */ '../views/EdicionOpinion.vue');
    }
  },
  {
    path: '*',
    name: 'notfound',
    component: function () {
      return import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue');
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
