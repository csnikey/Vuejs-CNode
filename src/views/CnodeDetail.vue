<template>
    <div>
        <div v-if="isLoading">
            <h1 class="title">
                <div>
                    <span v-if="detail.good||detail.top" class="good">{{detail.tab | tab(detail.top,detail.good)}}</span>
                    <span v-else class="tab">{{detail.tab | tab(detail.top,detail.good)}}</span>
                </div>
                <div>{{detail.title}}</div>
            </h1>
            <div class="info" >
                <span>发布于{{detail.create_at | timeAgo}}</span>
                <span>作者:{{detail.author.loginname}}</span>
                <span>{{detail.visit_count}}次浏览</span>
            </div>
            <div v-html="contenthtml"  class="content"></div>
            <div class="collect"><span>收藏</span></div>
            <div class="reply-num"><span>{{detail.reply_count}}</span>个回复</div>
            <div class="reply-lists" v-for="(reply,index) in detail.replies" v-if="detail.reply_count">
                <div class="reply-list">
                    <ul>
                        <li><img v-bind:src="reply.author.avatar_url"></li>
                        <li>{{reply.author.loginname}} <span class="time">{{index+1}}楼 {{reply.create_at | timeAgo}}</span></li>
                        <li><img src="../assets/like.svg" class="like"><span v-if="reply.ups.length">{{reply.ups.length}}</span>顶</li>
                    </ul>
                    <div v-html="reply.content"></div>
                </div>
            </div>
        </div>
        <div class="msg" v-else>
            {{loadingMsg}}
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .msg
        width 100%
        margin 30px auto
        text-align center
    .title
        line-height 30px
        padding  10px
        display flex
        div
            flex 7
            font-size 20px
        div:first-child
            flex 1
        span
            padding 4px
            border-radius 4px
            text-align center
            background #e5e5e5
            color #999
            font-weight bold
            font-size 14px
        .good
            padding 4px
            border-radius 4px
            background #80bd01
            color #fff
            text-align center
            font-weight bold
    .info
        display inline-flex
        width 100%
        padding 0 10px
        span
            flex 1
            text-align center
            color #aaa
            font-size 12px
    .collect 
        width 100%
        height 40px
        text-align right
        line-height 40px
        span
            padding 10px 20px
            border-radius 4px
            background #80bd01
            color #fff
            text-align center
            font-weight bold
            margin-right 10px
    .reply-num
        width 100%
        padding 0 10px
        line-height 40px
        height 40px
        color #aaa
        span
            margin-right 4px
    .reply-lists
        width 100%
        padding 10px
        .reply-list
            border-top 1px solid #eee
        ul
            display flex
            li
                flex  1
                display flex
                height 40px 
                line-height 40px
                justify-content center
                align-items center
            li:nth-child(2)
                flex  6
                justify-content flex-start
            img 
                width 50%
            img.like
                width 14px
                margin-right 4px
        div
            line-height 20px
    .time
        color #08c
        margin-left 10px

</style>


<script>
import api from '../store/api.js'
import filters from  '../filters'

export default {
    data(){
        return {
            detail:null,
            isLoading:false,
            loadingMsg:'加载中..'
        }
    },
    computed:{
        contenthtml(){
            return filters.mdToHtml(this.detail.content)
        }
    },
    filters:{
        tab(val,isTop,isGood){
            return filters.tab(val,isTop,isGood)
        },
        timeAgo(val){
            return filters.timeAgo(val)
        },
        mdToHtml(val){
            return filters.mdToHtml(val)
        }
    },
    methods:{
        fetch(){
            api.getTopic({
                'accesstoken':this.$route.params.topicId,
                'mdrender':false
            })
            .then((res)=>{
                let result = res.data;
                this.isLoading = true;
                this.loadingMsg = '';
                if(result.success){
                    this.detail=result.data;
                }
            })
            .catch((err)=>{
                this.isLoading = false;
                this.fetch()
            })
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