import { createRouter, createWebHistory } from 'vue-router';
import ShowOverview from '../views/ShowOverview.vue';
import ShowDetail from '../views/ShowDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'show-overview',
      component: ShowOverview,
    },
    {
      path: '/shows/:id',
      name: 'show-detail',
      component: ShowDetail,
    },
  ],
});

export default router;
