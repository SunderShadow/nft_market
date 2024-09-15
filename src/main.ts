import "@/styles/global.scss"

import { createApp } from 'vue'

import App from './App.vue'
import router from './plugins/router'
import pinia from './plugins/pinia'

const app = createApp(App)

// Plugins
app.use(pinia)
app.use(router)

// Mount
app.mount('#app')
