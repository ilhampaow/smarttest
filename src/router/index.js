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
    path: '/parameter',
    name: 'parameterView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ParameterView.vue')
  },
  {
    path: '/absensi-karyawan',
    name: 'absensiKaryawan',
    component: () => import(/* webpackChunkName: "about" */ '../views/TingkatAbsensiKaryawan/AbsensiKaryawan.vue')
  },
  {
    path: '/tambah-absensi-karyawan',
    name: 'tambahabsensiKaryawan',
    component: () => import(/* webpackChunkName: "about" */ '../views/TingkatAbsensiKaryawan/TambahAbsensiKaryawan.vue')
  },
  {
    path: '/edit-absensi-karyawan',
    name: 'editabsensiKaryawan',
    component: () => import(/* webpackChunkName: "about" */ '../views/TingkatAbsensiKaryawan/EditAbsensiKaryawan.vue')
  },
  {
    path: '/data-karyawan',
    name: 'dataKaryawan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Karyawan/DataKaryawan.vue')
  },
  {
    path: '/tambah-data-karyawan',
    name: 'tambahdataKaryawan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Karyawan/TambahKaryawan.vue')
  },
  {
    path: '/edit-data-karyawan',
    name: 'editdataKaryawan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Karyawan/EditKaryawan.vue')
  },
  {
    path: '/sales-revenue',
    name: 'salesRevenue',
    component: () => import(/* webpackChunkName: "about" */ '../views/SalesRevenue/SalesRevenue.vue')
  },
  {
    path: '/tambah-sales-revenue',
    name: 'tambahSalesRevenue',
    component: () => import(/* webpackChunkName: "about" */ '../views/SalesRevenue/TambahSalesRevenue.vue')
  },
  {
    path: '/edit-sales-revenue',
    name: 'editSalesRevenue',
    component: () => import(/* webpackChunkName: "about" */ '../views/SalesRevenue/EditSalesRevenue.vue')
  },
  {
    path: '/profit',
    name: 'profitView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profit/ProfitView.vue')
  },
  {
    path: '/tambah-profit',
    name: 'tambahProfitView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profit/TambahProfitView.vue')
  },
  {
    path: '/edit-profit',
    name: 'editProfitView',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profit/EditProfitView.vue')
  },
  {
    path: '/biaya-pegawai',
    name: 'biayaPegawai',
    component: () => import(/* webpackChunkName: "about" */ '../views/BiayaPegawai/BiayaPegawai.vue')
  },
  {
    path: '/tambah-biaya-pegawai',
    name: 'tambahBiayaPegawai',
    component: () => import(/* webpackChunkName: "about" */ '../views/BiayaPegawai/TambahBiayaPegawai.vue')
  },
  {
    path: '/edit-biaya-pegawai',
    name: 'editBiayaPegawai',
    component: () => import(/* webpackChunkName: "about" */ '../views/BiayaPegawai/EditBiayaPegawai.vue')
  },
  {
    path: '/career-path',
    name: 'careerPath',
    component: () => import(/* webpackChunkName: "about" */ '../views/CareerPath/CareerPath.vue')
  },
  {
    path: '/tambah-career-path',
    name: 'tambahCareerPath',
    component: () => import(/* webpackChunkName: "about" */ '../views/CareerPath/TambahCareerPath.vue')
  },
  {
    path: '/edit-career-path',
    name: 'editCareerPath',
    component: () => import(/* webpackChunkName: "about" */ '../views/CareerPath/EditCareerPath.vue')
  },
  {
    path: '/kepuasan-user',
    name: 'kepuasanUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/KepuasanUser/KepuasanUser.vue')
  },
  {
    path: '/tambah-kepuasan-user',
    name: 'tambahKepuasanUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/KepuasanUser/TambahKepuasanUser.vue')
  },
  {
    path: '/edit-kepuasan-user',
    name: 'editKepuasanUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/KepuasanUser/EditKepuasanUser.vue')
  },
  {
    path: '/laporan-kehadiran',
    name: 'laporanKehadiran',
    component: () => import(/* webpackChunkName: "about" */ '../views/Laporan/LaporanKehadiran.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
