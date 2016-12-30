<template>
<div>
   <div v-if="loading">
       <div class="userinfo">
           <div>
               <img :src="user.avatar_url" alt="loginname">
           </div>
           <div>
               <p>{{user.loginname}}</p>
               <p>注册时间{{user.create_at | timeAgo}}</p>
               <p>{{user.score}} 积分</p>
           </div>
       </div>
       <div class="">

       </div>
   </div>
   <div v-else class="load">
        <img src="../assets/progress.gif">
   </div>
</div>
</template>


<style lang="stylus" scoped>
h1
    width 100px
    height 200px
ul
    width 100%
    background red
    box-sizing border-box
.load
    width 100%
    line-height 100px
    text-align center
    img
        width 40px
        margin 40px auto
.userinfo
    width 100%
    display flex
    div
        flex 3
        &:first-child
            flex 1
            text-align center
            display flex
            justify-content center
            align-items center
        p
            font-size 14px
            margin-bottom 20px
            margin-top 10px
            &:first-child
                font-weight bold

</style>


<script>
    import api from '../store/api.js'
    import filters from '../filters'
    export default{
        data(){
            return {
                loading:false,
                user:{}
            }
        },
        computed:{
            accesstoken(){
                return this.$store.state.accesstoken
            }
        },
        methods:{
            fetch(){
                api.getUser({
                    loginname:this.$route.params.loginname
                })
                .then((res)=>{
                    let result = res.data;
                    if(result.success){
                        this.loading = true;
                        this.user = result.data;
                    }else{
                        this.fetch();
                    }
                    console.log(res);
                })
            }
        },
        filters:{
            timeAgo(val){
                return filters.timeAgo(val)
            }
        },
        watch:{
            $router(){
                if(this.accesstoken){
                    this.fetch();
                }else{
                    this.$router.push({
                        path : '/login'
                    })
                }
            }
        },
        created(){
            this.fetch();
        }
    }
</script>