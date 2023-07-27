import { RouteRecordRaw } from 'vue-router'
import QtimPostDetails from '../pages/QtimPostDetails.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'posts',
    component: () => import('../pages/QtimFeed.vue')
  },
  {
    path: '/:id',
    name: 'post',
    component: QtimPostDetails
  }

  // Always leave this as last one,
  // but you can also remove it
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/QtimFeed.vue')
//   }
]

export default routes
