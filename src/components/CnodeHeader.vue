<template>
    <ul class="header">
        <li class="logo"><img src="../assets/logo.svg" alt="cnode"></li>
        <li class="search"><input type="text"></li>
        <li class="send"><a href="javascript:;">发布</a></li>
    </ul>
</template>

<style lang="sass" scoped>
.header {
  background: #444;
  display: flex;
  height: 50px;
  line-height: 50px;
  width: 100%;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    flex: 3;
    img {
      width: 80%;
    }
  }
  .search {
    flex: 5;
    input {
      width: 100%;
      display: block;
      border: none;
      outline: none;
      background: #666;
      color: #888;
      height: 30px;
      line-height: 30px;
      text-indent: 10px;
      border-radius: 4px;
      &:before {
        content: '';
        display: block;
        background: url("../assets/search.png") no-repeat;
        background-position: center;
      }
    }
  }
  .send {
    flex: 2;
    a {
      display: block;
      width: 80%;
      background: #80bd01;
      text-align: center;
      height: 30px;
      line-height: 30px;
      color: #fff;
      border-radius: 4px;
    }
  }
}
</style>

<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>