import { createRouter, createWebHashHistory } from 'vue-router';
import AppHome from '@/views/Home.vue'; // Assuming you have a Home component
import NotFound from '@/views/NotFound.vue'; // The custom 404 component you'll create




export const router = createRouter({
  history: createWebHashHistory('/ajet-clone'), // Using hash mode for routing
  routes: [
    {
      path: '/', 
      redirect: '/en'
    },
    {
      path: '/en',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
    ],
  scrollBehavior() {
      return { top : 0 }; // Scroll to the top for new route navigation
  }
});