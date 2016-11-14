<template>
    <ul class="nav">
        <li @click="tabListDisplay=!tabListDisplay">
            {{currentTab}}<i class="triangle"></i>
            <ul v-show="tabListDisplay">
                <router-link tag="li" to="/topics/all">全部</router-link>
                <router-link tag="li" to="/topics/good">精华</router-link>
                <router-link tag="li" to="/topics/share">分享</router-link>
                <router-link tag="li" to="/topics/ask">问答</router-link>
                <router-link tag="li" to="/topics/job">招聘</router-link>
            </ul>
        </li>

        <router-link tag="li" :to="'/message/'+accesstoken" v-if="accesstoken">消息<span class="message" v-if="messageCount">{{messageCount}}</span></router-link>
        <router-link tag="li" to="/login" v-else>消息</router-link>
        
        <li @click="aboutMeDisplay=!aboutMeDisplay" v-if="loginname">我<i class="triangle"></i>
            <ul v-show="aboutMeDisplay">
                <router-link tag="li" :to="'/user/'+loginname">我的主页</router-link>
                <li @click="loginOut">退出</li> 
            </ul>
        </li>
        <router-link tag="li" to="/login" v-else>我</router-link>
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
                width 20px
                height 20px 
                background #80bd01
                color #fff
                text-align center
                border-radius 100%;
                line-height 20px
                position absolute
                right 10px
                top 10px
                font-size 12px
</style>

<script>
    import api from '../store/api.js'
    import user from '../store/user.js'
    export default{
        data(){
            return {
                messageCount:0,
                tabListDisplay:false,
                aboutMeDisplay:false,
                loginname :'',
                accesstoken :''
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
            }
        },
        methods:{
            loginOut(){
                user.clearUserInfo();
                this.loginname = '';
                this.accesstoken = '';
                this.$router.push({
                    path :'/login'
                })
            },
            fetch(){
               if(user.getUserInfo()){
                    this.accesstoken = user.getUserInfo().accesstoken || ''
                    this.loginname = user.getUserInfo().loginname || ''
                    if(this.accesstoken){
                        api.getUnreadMessages({
                            accesstoken:this.accesstoken
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
            }
        },
        watch:{
            $route(){
                this.fetch();
            }
        },
        created(){
            this.fetch();
        }
    }
</script>