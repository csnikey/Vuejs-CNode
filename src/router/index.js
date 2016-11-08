import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import CnodeTopicList from '../components/CnodeTopicList.vue'

export default new VueRouter({
  routes: [
      { 
          path: '/topic/:id', component: CnodeTopicList
      }
  ]
})