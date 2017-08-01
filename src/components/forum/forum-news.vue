<template>
	<div style="width: 100%;">
		<loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadMore" :auto-fill="autoFill">
			<div v-for="ne in news" @click="showDetail(ne.id, ne.title)" :key="ne.id">
			    <p class="news-title">{{ne.title}}</p>
			    <ul class="wrap-ul">
			      <li class="wrap-li">{{ne.sender_name}}</li>
            <li class="wrap-li" style="flex: 1;color: #999999;">{{ne.send_time}}</li>
			      <li class="glyphicon wrap-li" :class="getFavoriteIcon(ne)">收藏</li>
			    </ul>
			</div>
		</loadmore>
  </div>
</template>

<script>
import types from '@/store/types'
import atypes from '@/store/action-types'
import { mapGetters } from 'vuex'
import { Toast, Loadmore } from 'mint-ui'

export default {
	name: 'news',
	data() {
	  return {
	  	allLoaded: false,
			autoFill: false
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
    getFavoriteIcon(detail) {
      if (this.isFavorite(detail)) {
        return 'glyphicon-heart'
      }
      return 'glyphicon-heart-empty'
    },
    isFavorite(detail) {
      const index = this.favoriteList.findIndex((item) => {
        return item.id == detail.id && item.mark == detail.mark
      })
      return index > -1
    },
		loadTop() {
      this.fetchNews()
    },
    loadBottom() {
      this.fetchNews()
    },
    showDetail(id, title) {
      this.$router.push({
        path: '/newsdetail/' + id + '/title/' + title
      })
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
    	      id: 2,
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
    	      id: 3,
    	      mark: 1,
    	      message_like: 2,
    	      send_time: '2017-7-26',
    	      sender_name: '大神',
    	      sender_mark: 2,
    	      title: '8天node.js快速入门'
    	     },{
    	      id: 4,
    	      mark: 1,
    	      message_like: 2,
    	      send_time: '2017-7-26',
    	      sender_name: '大神',
    	      sender_mark: 2,
    	      title: '8天node.js快速入门'
    	     },{
    	      id: 5,
    	      mark: 1,
    	      message_like: 2,
    	      send_time: '2017-7-26',
    	      sender_name: '阮一峰',
    	      sender_mark: 2,
    	      title: '7天es6快速入门'
    	    }]
    	    this.$store.commit(types.ADD_FORUM_NEWS, {news: news})
    	  });
	  }
	},
	computed: {
	  ...mapGetters([
	  	'news',
      'user',
      'favoriteList'
		])
	}
}
</script>

<style lang="css" scoped>
  .news-title {
    margin-top: 5%;
		padding: 0 8px 8px 8px;
    font-size: 18px;
  }

  .wrap-ul {
		display: flex;
    margin: 0 auto;
		padding: 0 8px 4px 8px;
    width: 100%;  
    border-bottom: 1px solid #AAAAAA;
    overflow: hidden;  
  }

  .wrap-li {
    display: inline-block;
		padding: 0 4px;
    font-size: 13px;
		text-align: left;
		text-overflow: ellipsis;
    list-style-type: none;
  }
</style>