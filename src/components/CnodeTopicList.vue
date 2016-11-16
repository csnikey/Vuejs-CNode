<template>
<div>
    <div class="list" v-if="isSuccess">
        <router-link :to="'/topic/'+list.id"  v-for="list in lists">
            <div class="avatar">
                <img v-bind:src="list.author.avatar_url">
            </div>
            <ul class="main">
                <li>
                <span v-if="list.good||list.top" class="good">{{list.tab | tab(list.top,list.good)}}</span>
                <span v-else class="tab">{{list.tab | tab(list.top,list.good)}}</span>
                <span class="loginname">{{list.author.loginname}}</span>
                </li>
                <li>{{list.title}}</li>
                <li>{{list.last_reply_at | timeAgo}}</li>
            </ul>
            <div class="tips">
            <span><span class="reply-tips">{{list.reply_count}}</span>/<span class="visit-tips">{{list.visit_count}}</span></span>
            </div>
        </router-link>
    </div>
    <div class="error" v-else>
        {{errorMsg}}
    </div>
</div>
</template>


<style lang="stylus" scoped>
   .list 
        a
            display flex 
            border-bottom 1px solid #f0f0f0
            &:visited
                color #888
            .avatar 
                flex 1
                display flex
                align-items center
                justify-content center
                img 
                    width 50%
            .main
                flex 4
                color #333
                li 
                    line-height 20px
                    margin 8px 0
                .good
                    padding 4px 
                    border-radius 4px 
                    background #80bd01
                    color #fff
                    text-align center
                    font-weight bold
                .tab
                    padding 4px 
                    border-radius 4px 
                    text-align center
                    background #e5e5e5
                    color #999
                    font-weight bold
            .tips
                flex 1
                display flex
                justify-content center
                align-items center
                color #333
                .reply-tips
                    color #9e78c0
                .visit-tips
                    color #b4b4b4
    .error
        width 100%
        line-height 100px
        text-align center
</style>

<script>
    import api from '../store/api.js'
    import filters from '../filters'

    export default{
        data(){
            return {
                listData:[],
                isSuccess:false,
                errorMsg:'加载中...',
                page:1,
                limit:10,
                mdrender:true
            }
        },
        filters:{
            tab(val,isTop,isGood){
               return filters.tab(val,isTop,isGood)
            },
            timeAgo(val){
                return filters.timeAgo(val)
            }
        },
        computed:{
            lists(){
                let data=this.listData;
                let topList = [];
                let noTopList = [];
                data.forEach((item,index)=>{
                    if(item.top){
                        topList.push(item)
                    }else{
                        noTopList.push(item)
                    }
                })
                return topList.concat(noTopList)
            }
        },
        methods:{
            fetch(page){
                api.getTopics({
                    tab:this.$route.params.tab,
                    page:page,
                    limit:this.limit,
                    mdrender:this.mdrender
                })
                .then((res)=>{
                    this.listData=res.data.data;
                    this.isSuccess=res.data.success;
                    this.errorMsg = '';
                })
                .catch((err)=>{
                    this.isSuccess = false;
                    this.fetch(this.page)
                })
            }
        },
        watch:{
            $route(){
                this.isSuccess = false;
                this.errorMsg = '加载中...'
                this.fetch(this.page);
            }
        },
        created(){
            this.isSuccess = false;
            this.errorMsg = '加载中...'
            this.fetch(this.page)
        }
    }
</script>