<template>
	<div>
		发布开发ing
	</div>
</template>

<style lang="scss" scoped>

</style>

<script>
	export default{
		data(){
			return {

			}
		},
		created(){
			if(!this.$store.state.accesstoken){
				this.$router.push({
					path:'/login'
				})
			}
		}
	}
</script>
