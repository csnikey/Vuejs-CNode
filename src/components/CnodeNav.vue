<template>
    <ul class="nav">
        <li @click="tabListDisplay=!tabListDisplay">{{currentTab}}<i class="triangle"></i>
            <ul v-show="tabListDisplay">
                <router-link tag="li" to="/topics/all">全部</router-link>
                <router-link tag="li" to="/topics/good">精华</router-link>
                <router-link tag="li" to="/topics/share">分享</router-link>
                <router-link tag="li" to="/topics/ask">问答</router-link>
                <router-link tag="li" to="/topics/job">招聘</router-link>
            </ul>
        </li>
        <li @click="getMessage">消息<span class="message" v-if="messageCount">{{messageCount}}</span></li>
        <li @click="aboutMeDisplay=!aboutMeDisplay">我<i class="triangle"></i>
            <ul v-show="aboutMeDisplay">
                <router-link tag="li" :to="'/user/'+loginname">我的主页</router-link>
                <li @click="loginOut">退出</li> 
            </ul>
        </li>
    </ul>
</template>

<style lang="stylus" scoped>
    .nav 
        display flex
        background #f6f6f6
        width 100%
        border-bottom 1px solid #f0f0f0
        &>li 
            flex 1
            text-align center
            height 40px 
            line-height 40px
            color #80bd01
            position relative
            ul
                border-top 1px solid #f0f0f0
                li
                    color #80bd01
                    background #f6f6f6
                    border-bottom 1px solid #f0f0f0
            .message
                display block
                width 24px
                height 24px 
                background #80bd01
                color #fff
                text-align center
                border-radius 100%;
                line-height 24px
                position absolute
                right 10px
                top 8px
                font-size 12px
</style>

<script>
    import api from '../store/api.js'
    export default{
        data(){
            return {
                messageCount:0,
                loginname:'',
                tabListDisplay:false,
                aboutMeDisplay:false
            }
        },
        computed:{
            currentTab(){
                let tab = {
                    'ask':'问答',
                    'good':'精华',
                    'job':'招聘',
                    'share':'分享'
                }
                return tab[this.$route.params.tab]||'全部'
            },
            looginname(){
                api.checkAccessToken({
                    accesstoken:'1debe75e-7140-4e68-8475-48a1691fe591'
                })
                .then((res)=>{
                    return res['data']['loginname']
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        },
        methods:{
            loginOut(){
                
            },
            getMessage(){

            }
        },
        created(){
            /*storage('cnodeAccesstoken', (err,cnodeAccesstoken)=>{
                if(err) return
                api.checkAccessToken({
                    'accesstoken':cnodeAccesstoken
                })
                .then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
            });*/
            api.getUnreadMessages({
                accesstoken:'1debe75e-7140-4e68-8475-48a1691fe591'
            })
            .then((res)=>{
                let result = res['data'];
                if(result.success){
                    this.messageCount = result.data
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
</script>