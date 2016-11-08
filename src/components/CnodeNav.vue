<template>
    <div>
        <ul class="nav">
            <li class="active">全部 <i class="triangle"></i></li>
            <li>消息<span class="message">{{messageNum}}</span></li>
            <li>我<i class="triangle"></i></li>
        </ul>
    </div>
</template>

<style lang="stylus" scoped>
    .nav 
        display flex
        background #f6f6f6
        li 
            flex 1
            text-align center
            height 40px 
            line-height 40px
            color #80bd01
            position relative
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
    export default{
        data(){
            return {
                messageNum:10
            }
        }
    }
</script>