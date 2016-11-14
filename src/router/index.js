import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import CnodeMain from '../views/CnodeMain.vue'
import CnodeDetail from '../views/CnodeDetail.vue'
import Cnode404 from '../views/Cnode404.vue'
import CnodeUser from '../views/CnodeUser.vue'
import CnodeMessages from '../views/CnodeMessages.vue'
import CnodeLogin from '../views/CnodeLogin.vue'

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
          path: '/user/:loginname',component: CnodeUser
      },
      {
          path: '/login' , component: CnodeLogin
      },
      {
          path: '/message/:accesstoken',component:CnodeMessages
      },
      {
          path: '*',component:Cnode404
      }
  ]
})