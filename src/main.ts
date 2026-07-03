import { createApp } from 'vue'
import ui from '@nuxt/ui/vue-plugin'
import router from './router'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)

app.use(ui)
app.use(router)

app.mount('#app')
