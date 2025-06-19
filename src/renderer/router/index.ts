import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/home',
    //   component: () => import('@/renderer/views/home/index.vue'),
    // },
    // {
    //   path: '/demo',
    //   component: () => import('@/renderer/views/demo/index.vue'),
    // },
  ],
});