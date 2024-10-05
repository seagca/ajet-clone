import { createRouter, createWebHashHistory } from 'vue-router';
import AppHome from '@/views/Home.vue'; // Assuming you have a Home component
import NotFound from '@/views/NotFound.vue'; // The custom 404 component you'll create




export const router = createRouter({
  history: createWebHashHistory(), // Using hash mode for routing
  routes: [
    
    {
      path: '/ajet-clone', 
      name: 'AppHome',
      component: AppHome // Main route for '/ajet-clone'
    },
    {
      path: '/ajet-clone/:catchAll(.*)', // Catch-all for undefined paths under '/ajet-clone'
      name: 'NotFound',
      component: NotFound // Custom 404 component
    },
    {
      path: '/:catchAll(.*)', // Global catch-all route for undefined paths
      name: 'GlobalNotFound',
      component: NotFound // Redirect to a custom 404 page for all other routes
    },
  ],
  scrollBehavior() {
      return { top : 0 }; // Scroll to the top for new route navigation
  }
});