<template>
  <transition name="fade">
    <div>
      <div class="title">
        <router-link class="router-link" to="/home/teacher/teacher-physical"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></router-link>
        <span>{{$route.params.physicalname}}</span>
      </div>
<!-- 详细内容 -->
      <div class="headimg-div"><img class="headimg" :src="detail.headimg"></div>
      <div style="height: 10px;"></div>
      <div class="line-div">
      <h4>&emsp;&emsp;<span class="glyphicon glyphicon-bookmark">&nbsp简介：{{detail.intro}}</span></h4>
      </div>
      <div class="line-div">
      <h4>&emsp;&emsp;<span class="glyphicon glyphicon-tags">&nbsp科目：{{detail.submarkname}}</span></h4>
      </div>
      <div class="line-div">
      <h4>&emsp;&emsp;<span class="glyphicon glyphicon-star" v-for="items in detail.evaluations">&nbsp评价：{{items.evaluation}}</span></h4>
      </div>
      <div class="line-div">
      <h4>&emsp;&emsp;<span class="glyphicon glyphicon-user">&nbsp性别：{{detail.gender}}</span></h4>
      </div>
      <div class="line-div">
      <h4>&emsp;&emsp;<span class="glyphicon glyphicon-earphone">&nbsp手机：{{detail.phone}}</span></h4>
      </div>
      <div class="line-div">
      <h4>&emsp;&emsp;<span class="glyphicon glyphicon-map-marker">&nbsp地址：{{detail.address}}</span></h4>
      </div>
      <div class="lines-div">
      <h4 style="height: 20px;">&emsp;&emsp;<span class="glyphicon glyphicon-th-list">&nbsp获得证书：</span></br></h4>
      <h5 v-for="items in detail.certifications">
        <p style="font-size:17px;">&emsp;&emsp;&emsp;&emsp; {{items.title}}</p>
      </h5>
      </div>
      <div class="lines-div">
      <h4 style="height: 20px;">&emsp;&emsp;<span class="glyphicon glyphicon-th-large">&nbsp教学经历：</span></h4>
      <h5 v-for="items in detail.careers">
        <p style="font-size:17px;">&emsp;&emsp;&emsp;&emsp; {{items.start}}至{{items.end}}：</br></br>&emsp;&emsp;&emsp;&emsp; {{items.content}}</br></p></br>
      </h5>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.line-div {
  display: flex;
  align-items: center;
  padding: 12px 8px 0px 8px;
  margin: 0;
  font-size: 15px;
  box-shadow: 0px 1px 4px #EEE;
}
.lines-div {
  align-items: center;
  padding: 12px 8px 8px 8px;
  margin: 0;
  font-size: 15px;
  box-shadow: 0px 1px 4px #EEE;
}

.headimg-div {
  margin: 0 0 44px 0;
  padding: 0;
  width: 100%;
  height: 150px;
  background-color: #02A8F3;
  box-shadow: 0px 2px 8px #BBBBBB;
}

.headimg {
  position: absolute;
  top: 100px;
  left: 50px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #FFFFFF;
  border-radius: 50%;
  box-shadow: 1px 2px 8px #AAA;
}
</style>

<script>
import router from '@/router/index'
import types from '@/store/types'
import atypes from '@/store/action-types'
import { mapGetters } from 'vuex'
import Convert from '@/common/util/convert.js'
import Logo from '@/assets/logo.png'

export default {
  data() {
    return {
      detail: {
        address: '',
        careers: [],
        certifications: [],
        evaluations: [],
        intro: '',
        phone: '',
        id: 0,
        submark: '',
        teacher_id: 0,
        teachername: '',
        submarkname: '',
        gender: '',
        headimg: ''
      }
    }
  },
  mounted() {
    this.fetchphysicalDetail()
  },
  methods: {
    fetchphysicalDetail() {
      this.$common.http.get(this.$common.api.TeacherInfo+'?teacher_id='+this.$route.params.physicalid)
        .then(response => {
          this.detail.address = response.data.address
          this.detail.careers = response.data.careers
          this.detail.certifications = response.data.certifications
          this.detail.evaluations = response.data.evaluations
          this.detail.headimg = response.data.headimg
          this.detail.intro = response.data.intro
          this.detail.phone = response.data.phone
          this.detail.submark = response.data.submark
          this.detail.intro = response.data.intro
          this.detail.submark_name = Convert.convertSubNumber(response.data.submark)
          this.detail.gender = response.data.gender
        })
        .catch(error => {
          //测试数据
          let physicalDetail = {
            address: '广州市天河区中山大道17号',
            careers: [{
              content: '教高一物理两个学期',
              end: '2016-07-21',
              id: 1,
              start: '2015-09-07'
            },{ 
              content: '教高一物理三个学期',
              end: '2016-07-20',
              id: 2,
              start: '2015-02-03'
            }],
            certifications: [{
              id: 1,
              title: '中级教师资格证'
            }, {
              id: 2,
              title: '高级教师资格证'
            }],
            evaluations: [{
              content: '课程讲解详细，通俗易懂',
              evaluation: 3.5
            }],
            headimg: Logo,
            intro: '讲课简单易懂，平易近人',
            phone: '13456859523',
            submark: 4,
            gender: '女'
          }
          this.detail.address = physicalDetail.address
          this.detail.careers = physicalDetail.careers
          this.detail.certifications = physicalDetail.certifications
          this.detail.evaluations = physicalDetail.evaluations
          this.detail.headimg = physicalDetail.headimg
          this.detail.intro = physicalDetail.intro
          this.detail.phone = physicalDetail.phone
          this.detail.submark = physicalDetail.submark
          this.detail.intro = physicalDetail.intro
          this.detail.submarkname = Convert.convertSubNumber(physicalDetail.submark)
          this.detail.gender = physicalDetail.gender

        });
    },

  },
  computed: {
    ...mapGetters([
      'physical',
    ])
  }
}
</script>
