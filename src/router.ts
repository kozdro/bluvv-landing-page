import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory('/bluvv-landing-page/'),
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) return savedPosition

    return {
      top: 0,
    }
  },
})

export default router
