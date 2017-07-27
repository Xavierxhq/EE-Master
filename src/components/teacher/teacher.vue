<template>
 <div>
    <div style="height: 5rem;"></div>
    <div class="teacher-item" v-for="china in getTeachers">
      <img class="teacher-headimg" :src="china.teacher_headimg">
      <p class="teacher-username">{{china.teacher_name}}</p>
    </div>
  </div>
</div>
</template>

<script>
import types from '@/store/types'
import { mapGetters } from 'vuex'
import Logo from '@/assets/logo.png'
import { Toast,Badge } from 'mint-ui'

export default {
	name: 'Teacher',
	data() {
	  return {
	    teacher: []
	  }
	},
	components: {
		Badge
	},
	created() {
	  if(this.teachers.length<1) {
	  	this.fetchTeachers(1)
	  }
	},
	methods: {
	  fetchTeachers(submark) {
    	this.$common.http.get(this.$common.api.TeacherList+'?submark='+submark)
    	  .then(response => {
    	    this.$store.commit(types.ADD_TEACHER_TEACHERS, {
    	      teacher: response.data,
    	      submark: submark
    	    })
    	  })
    	  .catch(error => {
    	    //测试数据
    	    let teacher = [{
    	      submark: 1,
    	      submarkname: '语文',
    	      teacher_id: 1,
    	      teacher_headimg: Logo,
    	      teacher_name: '张建新',
              intro: '讲课简单易懂，平易近人。'
    	    }, {
    	      submark: 1,
    	      submarkname: '语文',
    	      teacher_id: 2,
    	      teacher_headimg: Logo,
    	      teacher_name: '胡荣玲',
    	      intro: '讲课简单易懂，平易近人。'
    	    }, {
    	      submark: 1,
    	      submarkname: '语文',
    	      teacher_id: 5,
    	      teacher_headimg: Logo,
    	      teacher_name: '蔡红',
    	      intro: '讲课简单易懂，平易近人。'
    	    }]
    	    this.$store.commit(types.ADD_TEACHER_TEACHERS, {teacher: teacher, submark: submark})
    	  });
	  },
	  goBack() {
	    this.$router.back()
	  }		
	},
	computed: {
	  ...mapGetters([
	  	'teachers',
			'user'
		]),
		getTeachers() {
		  return this.teachers[1]
		}
	}
}
</script>

<style lang="css" scoped>
.teacher-item {
	display: flex;
	align-items: center;
	padding: 8px;
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

.teacher-hint-text {
	margin: 0;
	padding: 12px 0;
	width: 100%;
	text-align: center;
	color: #A0A0A0;
}
</style>
