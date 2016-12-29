<template>
<div>
<h1>个人主页</h1>
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
</style>


<script>
    export default{
        data(){
            return{
                
            }
        },
        watch:{
            $router(){
                this.$router.push({
                    path : '/login'
                })
            }
        }
    }
</script>