import { createApp } from 'vue'

import '@/assets/scss/style.scss'

import App from '@/App.vue'
import router from '@/router'

import 'aos/dist/aos.css'
import AOS from 'aos'

createApp(App).use(router).mount('#app')

AOS.init({
  duration: 800,
  once: true,
})
