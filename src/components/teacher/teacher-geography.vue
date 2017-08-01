<template>
	<div style="width: 100%;">
		<loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadMore" :auto-fill="autoFill">
			<div class="teacher-item" v-for="ne in geography" @click="showDetail(ne.id, ne.name)">
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
	name: 'geography',
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
	  if(this.geography.length<1) {
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
        path: '/geographydetail/' + id + '/name/' + name
      })
    },
	  fetchTeacher() {
	  	let params = new URLSearchParams()
      params.append('submark', 9)
      params.append('index', this.geography.length)
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
          this.$store.commit(types.ADD_TEACHER_GEOGRAPHY, {geography: response.data})
          this.$refs.loadMore.onTopLoaded()
          this.$refs.loadMore.onBottomLoaded()
        })
    	  .catch(error => {
    	    //测试数据
    	    let geography = [{
                id: 1,
                headimg: Logo,
                name: '张建新',
                intro: '讲课简单易懂，平易近人。'
              }, {
                id: 2,
                headimg: Logo,
                name: '胡荣玲',
                intro: '讲课简单易懂，平易近人。'
              }, {
                id: 5,
                headimg: Logo,
                name: '蔡红',
                intro: '讲课简单易懂，平易近人。'
              }]
    	    this.$store.commit(types.ADD_TEACHER_GEOGRAPHY, {geography: geography})
    	  });
	  },
    geographyDetail(geographyid) {
      this.$router.push('/geographydetail/'+geographyid)
    }
	},
	computed: {
	  ...mapGetters([
	  	'geography'
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