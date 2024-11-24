import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import AboutUs from '@/views/AboutUs.vue'

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
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
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
