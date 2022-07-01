import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'loginView',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'registerView',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboardView',
    component: () => import(/* webpackChunkName: "about" */ '../views/DashboardView.vue')
  },
  {
    path: '/data-peserta',
    name: 'dataPeserta',
    component: () => import(/* webpackChunkName: "about" */ '../views/Peserta/DataPeserta.vue')
  },
  {
    path: '/tambah-data-peserta',
    name: 'tambahdataPeserta',
    component: () => import(/* webpackChunkName: "about" */ '../views/Peserta/TambahPeserta.vue')
  },
  {
    path: '/edit-data-peserta/:id',
    name: 'editdataPeserta',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Peserta/EditPeserta.vue')
  },
  {
    path: '/view-data-peserta/:id?',
    name: 'viewdataPeserta',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Peserta/ViewPeserta.vue')
  },
  {
    path: '/data-penilaian',
    name: 'dataPenilaian',
    component: () => import(/* webpackChunkName: "about" */ '../views/Penilaian/DataPenilaian.vue')
  },
  {
    path: '/tambah-data-penilaian',
    name: 'tambahdataPenilaian',
    component: () => import(/* webpackChunkName: "about" */ '../views/Penilaian/TambahPenilaian.vue')
  },
  {
    path: '/edit-data-penilaian/:id',
    name: 'editdataPenilaian',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Penilaian/EditPenilaian.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
