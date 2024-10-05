import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '@/views/Home.vue'; // Assuming you have a Home component
import NotFound from '@/views/NotFound.vue'; // The custom 404 component you'll create




export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
    path: '/',
    redirect: '/ajet-clone' // The default route to your Home component
      },
      {
    path: '/en',
    redirect: '/ajet-clone' // The default route to your Home component
      },
  {
    path: '/ajet-clone',
    name: 'AppHome',
    component: AppHome // The default route to your Home component
      },
  {
    path: '/ajet-clone:catchAll(.*)', // Catch-all route for undefined paths
    name: 'NotFound',
    component: NotFound // This points to the custom 404 page
      },
  {
    path: '/:catchAll(.*)', // Catch-all route for undefined paths
    name: 'NotFound',
    component: NotFound // This points to the custom 404 page
  },
],
});
