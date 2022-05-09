import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'

// createApp(App).use(router).mount('#app')

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/'

const app = createApp(App);
const store = createPinia();

app.use(store).use(router).mount('#app');