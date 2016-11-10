import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import CnodeMain from '../views/CnodeMain.vue'
import CnodeDetail from '../views/CnodeDetail.vue'
import Cnode404 from '../views/Cnode404.vue'
import CnodeDUser from '../views/CnodeUser.vue'


export default new VueRouter({
  routes: [
      {
          path: '/',redirect: '/topics/all'
      },
      {
          path: '/topics/:tab',component: CnodeMain
      },
      { 
          path: '/topic/:topicId', component: CnodeDetail
      },
      {
          path: '*',components:Cnode404
      },
      {
          path: '/user/:userId'
      }
  ]
})