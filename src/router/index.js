import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import CnodeTopicList from '../views/CnodeTopicList'

const CnodeDetail = resolve => {
  require.ensure(['../views/CnodeDetail'], () => {
    resolve(require('../views/CnodeDetail'))
  })
}
const Cnode404 = resolve => {
  require.ensure(['../views/Cnode404'], () => {
    resolve(require('../views/Cnode404'))
  })
}
const CnodeUser = resolve => {
  require.ensure(['../views/CnodeUser'], () => {
    resolve(require('../views/CnodeUser'))
  })
}
const CnodeMessages = resolve => {
  require.ensure(['../views/CnodeMessages'], () => {
    resolve(require('../views/CnodeMessages'))
  })
}
const CnodeLogin = resolve => {
  require.ensure(['../views/CnodeLogin'], () => {
    resolve(require('../views/CnodeLogin'))
  })
}
const CnodeSend = resolve => {
  require.ensure(['../views/CnodeSend'], () => {
    resolve(require('../views/CnodeSend'))
  })
}
const CnodeCollection = resolve => {
  require.ensure(['../views/CnodeCollection'], () => {
    resolve(require('../views/CnodeCollection'))
  })
}

export default new VueRouter({
  mode: 'history',
  routes: [
      {
          path: '/(index.html)?',redirect: '/topics/all'
      },
      {
          path: '/topics/:tab',component: CnodeTopicList
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
          path:'/send',component:CnodeSend
      },
      {
          path:'/collection/:loginname',component:CnodeCollection
      },
      {
          path: '/error',component:Cnode404
      },
      {
          path: '*',component:Cnode404
      }
  ]
})
