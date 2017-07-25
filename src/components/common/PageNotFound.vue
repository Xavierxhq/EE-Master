<template>
	<div class="wrap">
		<img :src="img" class="wrap-img">
		<div class="wrap-buttons">
			<span class="wrap-button back" @click="backward">返回</span>
			<router-link class="wrap-button home" to="/home" replace>首页</router-link>
		</div>
	</div>
</template>

<style scoped>
	.wrap {
		width: 100%;
		margin: 0;
		padding: 0;
	}

	.wrap-img {
		display: block;
	  margin: 12px 0;
	  padding: 0;
		width: 100%;
		height: auto;
		box-shadow: 0px 1px 4px #AAAAAA;
	}

	.wrap-buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
	}

	.wrap-button {
		display: inline-block;
		margin: 0 8px;
		padding: 8px 18px;
		box-shadow: 0px 1px 4px #BBBBBB;
		border-radius: 8px;
	}

	.back {
		background-color: #FFFFFF;
		color: #AAAAAA;
		border: 1px solid #AAAAAA;
	}

	.home {
		background-color: #2276FF;
		color: #FFFFFF;
	}
</style>

<script>
import img from '@/assets/notfound.jpg'

export default {
  name: 'PageNotFound',
  data() {
  	return {
  		img: img
  	}
  },
  methods: {
  	backward() {
  		this.$router.back()
  	}
  }
}
</script>