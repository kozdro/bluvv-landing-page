import { createApp } from 'vue'

import '@/assets/scss/style.scss'

import App from '@/App.vue'
import router from '@/router'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { createDeviceDetector } from 'next-vue-device-detector'

const device = createDeviceDetector()

AOS.init({
  once: true,
})

createApp(App)
  .use(device)
  .use(router)
  .mount('#app')

