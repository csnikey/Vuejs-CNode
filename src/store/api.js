import Vue from 'vue'
import axios from 'axios'

const baseUrl = 'https://cnodejs.org/api/v1'
export default { 
    getTopics(params){
        return axios.get(`${baseUrl}/topics?tab=${params.tab}&page=${params.page}&limit=${params.limit}&mdrender=${params.mdrender}`)
    },
    getTopic(params){
        return axios.get(`${baseUrl}/topic/${params.accesstoken}?mdrender=${params.mdrender}`)
    },
    createTopic(params){
        return axios.post(`${baseUrl}/topics`,params)
    },
    updateTopic(params){
        return axios.post(`${baseUrl}/topics/update`,params)
    },
    collectTopic(params){
        return axios.post(`${baseUrl}/topic_collect/collect`,params)
    },
    deCollectTopic(params){
        return axios.post(`${baseUrl}/topic_collect/de_collect`,params)
    },
    getCollectTopics(params){
        return axios.get(`${baseUrl}/topic_collect/${params.loginname}`)
    },
    createReply(params){
        return axios.post(`${baseUrl}/topic/${params.topic_id}/replies`,params)
    },
    upReply(params){
        return axios.post(`${baseUrl}/reply/${params.reply_id}/ups`,params)
    },
    getUser(params){
        return axios.get(`${baseUrl}/user/${params.loginname}`)
    },
    checkAccessToken(params){
        return axios.post(`${baseUrl}/accesstoken`,params)
    },
    getUnreadMessages(params){
        return axios.get(`${baseUrl}/message/count?accesstoken=${params.accesstoken}`)
    },
    getMessages(params){
        return axios.get(`${baseUrl}/messages?accesstoken=${params.accesstoken}&mdrender=${params.mdrender}`)
    },
    remarkTopic(params){
        return axios.post(`${baseUrl}/message/mark_all`,params)
    }  
}  