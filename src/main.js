import { createApp } from 'vue'
import App from './App.vue'
// router setting javascript file
import router from './router'

import './assets/main.css'

const app = createApp(App)
// javascript file use
app.use(router)

app.mount('#app')
