import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './pages/Home.vue';
import AboutView from './pages/About.vue';
import ContactView from './pages/Contact.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;