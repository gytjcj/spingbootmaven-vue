import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App);
import axios from './utils/axios'

createApp(App).use(store).use(router).mount('#app')
app.config.globalProperties.$axios = axios;