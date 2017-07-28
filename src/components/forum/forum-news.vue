<template>
	<div style="width: 100%;">
		<loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadMore" :auto-fill="autoFill">
			<div v-for="ne in news" >
			    <p>{{ne.title}}</p>
			    <ul>
			      <li>发布者：{{ne.sender_name}}</li>
			      <li>发布时间：{{ne.send_time}}</li>
			    </ul>
			</div>
		</loadmore>
  </div>
</template>

<script>
import types from '@/store/types'
import { mapGetters } from 'vuex'
import { Toast, Loadmore } from 'mint-ui'

export default {
	name: 'news',
	data() {
	  return {
	  	allLoaded: false,
			autoFill: false,
			unlike: true,
			liked: false
	  }
	},
  components: {
    Loadmore
  },
	mounted() {
	  if(this.news.length<1) {
	  	this.fetchNews()
	  }
	},
	methods: {
		loadTop() {
      this.fetchNews()
    },
    loadBottom() {
      this.fetchNews()
    },
	  fetchNews() {
	  	let params = new URLSearchParams()
      params.append('message_mark', 1)
      params.append('index', this.news.length)
    	this.$common.http.post(this.$common.api.MessageList, params)
    	  .then(response => {
          if (this.$common.jsonUtil.jsonLength(response.data) < 5) {
            Toast({
              message: '数据已全部加载 :)',
              position: 'bottom',
              duration: 2000
            })
          	this.allLoaded = true
          }
          this.$store.commit(types.ADD_FORUM_NEWS, {news: response.data})
          this.$refs.loadMore.onTopLoaded()
          this.$refs.loadMore.onBottomLoaded()
        })
    	  .catch(error => {
    	    //测试数据
    	    let news = [{
    	      id: 1,
    	      mark: 1,
    	      message_like: 2,
    	      send_time: '2017-7-26',
    	      sender_name: '尤雨溪',
    	      sender_mark: 2,
    	      title: '60分钟vue快速入门'
    	    },{
    	      id: 1,
    	      mark: 1,
    	      message_like: 2,
    	      send_time: '2017-7-26',
    	      sender_name: '大神',
    	      sender_mark: 2,
    	      title: '你不知道的node.js'
    	    },{
    	      id: 1,
    	      mark: 1,
    	      message_like: 2,
    	      send_time: '2017-7-26',
    	      sender_name: '大神',
    	      sender_mark: 2,
    	      title: '8天node.js快速入门'
    	     },{
    	      id: 1,
    	      mark: 1,
    	      message_like: 2,
    	      send_time: '2017-7-26',
    	      sender_name: '大神',
    	      sender_mark: 2,
    	      title: '8天node.js快速入门'
    	     },{
    	      id: 1,
    	      mark: 1,
    	      message_like: 2,
    	      send_time: '2017-7-26',
    	      sender_name: '大神',
    	      sender_mark: 2,
    	      title: '8天node.js快速入门'
    	    },{
    	      id: 1,
    	      mark: 1,
    	      message_like: 2,
    	      send_time: '2017-7-26',
    	      sender_name: '阮一峰',
    	      sender_mark: 2,
    	      title: '7天es6快速入门'
    	    }]
    	    this.$store.commit(types.ADD_FORUM_NEWS, {news: news})
    	  });
	  },
    likeIt(){

    },
		newsDetail(newsid) {
			this.$router.push('/newsdetail/'+newsid)
		}
	},
	computed: {
	  ...mapGetters([
	  	'news',
      'user',
		])
	}
}
</script>

<style lang="css" scoped>

</style>