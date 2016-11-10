import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import CnodeTopicList from '../components/CnodeTopicList.vue'
import CnodeDetail from '../views/CnodeDetail.vue'

export default new VueRouter({
  routes: [
      { 
          path: '/topic/:id', component: CnodeDetail
      },
      {
          path: '/topic/:tab',component: CnodeTopicList
      }
  ]
})