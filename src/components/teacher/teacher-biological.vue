<template>
	<div style="width: 100%;">
		<loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadMore" :auto-fill="autoFill">
			<div class="teacher-item" v-for="ne in biological" @click="showDetail(ne.id, ne.name)">
			    <img class="teacher-headimg" :src="ne.headimg">
          <div class="text">
          <h4 class="name">{{ne.name}}</h4>
          <p class="intro">{{ne.intro}}</p>
          </div>
			</div>
		</loadmore>
  </div>
</template>


<script>
import types from '@/store/types'
import { mapGetters } from 'vuex'
import { Toast, Loadmore } from 'mint-ui'
import Logo from '@/assets/logo.png'

export default {
	name: 'biological',
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
	  if(this.biological.length<1) {
	  	this.fetchTeacher()
	  }
	},
	methods: {
		loadTop() {
      this.fetchTeacher()
    },
    loadBottom() {
      this.fetchTeacher()
    },
    showDetail(id, name) {
      this.$router.push({
        path: '/biologicaldetail/' + id + '/name/' + name
      })
    },
	  fetchTeacher() {
	  	let params = new URLSearchParams()
      params.append('submark', 6)
      params.append('index', this.biological.length)
    	this.$common.http.post(this.$common.api.TeacherList, params)
    	  .then(response => {
          if (this.$common.jsonUtil.jsonLength(response.data) < 5) {
            Toast({
              message: '数据已全部加载 :)',
              position: 'bottom',
              duration: 2000
            })
          	this.allLoaded = true
          }
          this.$store.commit(types.ADD_TEACHER_BIOLOGICAL, {biological: response.data})
          this.$refs.loadMore.onTopLoaded()
          this.$refs.loadMore.onBottomLoaded()
        })
    	  .catch(error => {
    	    //测试数据
    	    let biological = [{
                id: 3,
                headimg: Logo,
                name: '谢浩钦',
                intro: '讲课简单易懂，平易近人。'
              }, {
                id: 4,
                headimg: Logo,
                name: '郭颖',
                intro: '讲课简单易懂，平易近人。'
              }, {
                id: 6,
                headimg: Logo,
                name: '吴竹仙',
                intro: '讲课简单易懂，平易近人。'
              }]
    	    this.$store.commit(types.ADD_TEACHER_BIOLOGICAL, {biological: biological})
    	  });
	  },
    biologicalDetail(biologicalid) {
      this.$router.push('/biologicaldetail/'+biologicalid)
    }
	},
	computed: {
	  ...mapGetters([
	  	'biological'
		])
	}
}
</script>

<style lang="css" >
.teacher-item {
  display: flex;
  align-items: center;
  padding-top: 10px;
  margin: 0;
  width: 100%;
  border-bottom: .5px solid #BBB;
  overflow-x: hidden;
}

  .teacher-headimg {
  padding: 0;
  margin: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.teacher-username {
  flex: 1;
  margin: 0 0 0 4px;
  padding: 0 0 0 4px;
  color: #424242;
  font-size: 14px;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  line-height: 20px;
  overflow: hidden;
  font-size: 14px;
}

.name {
  margin-bottom: 10px;
  color: black;
}

.intro {
  color: #0000FF;
}

  ul {
    border-bottom: 1px solid black ;
    overflow: hidden;  
    width: 80%;  
    margin: 0 auto;  
    text-align: center;  
  }

  li {
    list-style-type: none;
    display: inline;
    width:33.33%; 
    float: left;
    font-size: 14px;
  }
</style>