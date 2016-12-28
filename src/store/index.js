import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import api from './api.js'

export default new Vuex.Store({
    state:{
        loginname:'',
        messageCount:'',
        accesstoken:'',
        tab:'全部'
    },
    mutations:{
 		loginOut(state,payload){
            localStorage.removeItem('cnodeUser');
            state.loginname = '';
            state.accesstoken = '';
            state.messageCount = '';
        },
        loginIn(state,payload){
            localStorage.setItem('cnodeUser',JSON.stringify(payload));
            state.loginname =payload.loginname;
            state.accesstoken = payload.accesstoken;
        },
        updateMessage(state,payload){
            state.messageCount = payload.messageCount;
        },
        currentTab(state,payload){
            let tab = {
                'ask':'问答',
                'good':'精华',
                'job':'招聘',
                'share':'分享',
                'all':'全部'
            }
            if(payload.tab in tab){
                state.tab = tab[payload.tab]
            }
        }
    },
    getters:{

    },
    actions:{
        getUnreadMessages({commit,state},payload){
            api.getUnreadMessages({
                accesstoken:payload.accesstoken
            })
            .then((res)=>{
                let result = res['data'];
                if(result.success){
                    commit('updateMessage',{messageCount:result.data})
                }
            })
        }
    }
})