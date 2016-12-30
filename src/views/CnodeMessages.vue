<template>
<div>
<ul  class="messageList">
    <li :class="message.has_read?has-read :''" v-for="message in messages">
        <router-link :to="'/user/'+message.author.loginname">{{message.author.loginname}}</router-link>在
        <router-link :to="'/topic/'+message.topic.id">{{message.topic.title}}</router-link>中@了你
    </li>
</ul>
</div>
</template>


<style lang="stylus" scoped>
.messageList
    width 100%
    li
        box-sizing border-box
        line-height 20px
        padding 4px 10px
        border-bottom 1px solid #eee
        a
            color #08c
    .has-read
        background #eff6fa
</style>

<script>
import api from '../store/api.js'
    export default{
        data(){
            return{
                mdrender:false,
                messages:[]
            }
        },
        computed:{
            accesstoken(){
                return this.$route.params.accesstoken
            }
        },
        methods:{
            fetch(){
                if(this.accesstoken){
                    api.getMessages({
                        mdrender:this.mdrender,
                        accesstoken:this.accesstoken
                    })
                    .then((res)=>{
                        let result = res.data.data;
                        let messages = result.has_read_messages;
                        let unmessages = result.hasnot_read_messages;
                        this.messages = unmessages.concat(messages);
                    })
                }
            }
        },
        watch:{
            $route(){
                this.fetch()
            }
        },
        created(){
            this.fetch()
        }
    }
</script>