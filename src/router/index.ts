import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

// Импортируем компоненты страниц
const Home = () => import('../pages/Home.vue');
const Catalog = () => import('../pages/Catalog.vue');
const Contacts = () => import('../pages/Contacts.vue');
const Gifts = () => import('../pages/Gifts.vue');
const Recommendations = () => import('../pages/Recommendations.vue');
const Reviews = () => import('../pages/Reviews.vue');
const Tracker = () => import('../pages/Tracker.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },  
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },  
  {
    path: '/gifts',
    name: 'Gifts',
    component: Gifts
  },  
  {
    path: '/recommendations',
    name: 'Recommendations',
    component: Recommendations
  },  
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews
  },  
  {
    path: '/tracker',
    name: 'Tracker',
    component: Tracker
  },  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router