<template>
	<div class="fake">
    <img class="fake-img" :src="icon">
    <h4 class="fake-h6">Excellent Education</h4>
    <p class="fake-p">选好教师，优质学习</p>
	</div>
</template>

<style lang="css" scoped>
.fake {
	margin: 24px 0;
	padding: 0;
  width: 100%;
  background: #ffffff;
  text-align: center;
}

.fake .fake-img {
  width: auto;
  max-width: 40%;
  margin: 0 auto 12px auto;
}

.fake .fake-p,
.fake .fake-h6 {
  margin: 8px 0px;
}

.fake .fake-p {
	color: #999999;
}
</style>

<script>
import { mapGetters } from 'vuex'
import icon from '@/assets/icon.png'
import Rongyun from '@/common/util/rongyun'

export default {
	name: 'Fake',
	data() {
		return {
			icon: icon
		}
	},
	mounted() {
		//进行融云的初始化
		if(this.user.userid!==0) {
			Rongyun.setListenAndconnectRongyun()
		}
		setTimeout(()=> {
			this.$router.replace('/home/forum/forum-news')
		},1000)
	},
	computed: {
		...mapGetters([
			'user'
		])
	}
}
</script>