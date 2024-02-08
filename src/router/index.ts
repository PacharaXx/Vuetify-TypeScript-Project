/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

// Routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/index.vue'),
  },
]

// Router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.addRoute({
  path: '/toon/:id',
  name: 'Toon',
  component: () => import('@/pages/toon/_id.vue'),
})

export default router
