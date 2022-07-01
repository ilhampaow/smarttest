import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'
import './assets/assets/css/data-karyawan.css'
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import VueSimpleAlert from "vue3-simple-alert-next";



// createApp(App).use(router).mount('#app')

// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/'

const app = createApp(App);

const store = createPinia();

app.use(store).use(router).use(moshaToast).use(VueSimpleAlert).mount('#app');