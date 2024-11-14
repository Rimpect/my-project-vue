import { createRouter, createWebHistory } from 'vue-router';
import MyHome from '../views/MyHome.vue';
import MyAbout from '../views/MyAbout.vue';
import MyContact from '../views/MyContact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MyHome,
  },
  {
    path: '/about',
    name: 'About',
    component: MyAbout,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: MyContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;