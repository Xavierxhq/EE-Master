<template>
  <div>
    <div style="height: 4rem;"></div>
    <div class="teacher">
      <router-link class="teacher-item" to="/home/teacher/teacher-china">
        <span class="teacher-link">语 文</span>
      </router-link> 
      <router-link tag="div" class="teacher-item" to="/home/teacher/teacher-math">
        <span class="teacher-link">数 学</span>
      </router-link>
      <router-link tag="div" class="teacher-item" to="/home/teacher/teacher-english">
        <span class="teacher-link">英 语</span>
      </router-link>
      <router-link tag="div" class="teacher-item" to="/home/teacher/teacher-physical">
        <span class="teacher-link">物 理</span>
      </router-link>
      <router-link tag="div" class="teacher-item" to="/home/teacher/teacher-chemistry">
        <span class="teacher-link">化 学</span>
      </router-link>
      <router-link tag="div" class="teacher-item" to="/home/teacher/teacher-biological">
        <span class="teacher-link">生 物</span>
      </router-link>
      <router-link tag="div" class="teacher-item" to="/home/teacher/teacher-political">
        <span class="teacher-link">政 治</span>
      </router-link>
      <router-link tag="div" class="teacher-item" to="/home/teacher/teacher-history">
        <span class="teacher-link">历 史</span>
      </router-link>
      <router-link tag="div" class="teacher-item" to="/home/teacher/teacher-geography">
        <span class="teacher-link">地 理</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted() {
      setTimeout(()=> {
        this.$router.replace('/home/teacher/teacher-china')
      },1)
  }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .teacher
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .teacher-item
      flex: 1
      text-align: center
      font-size:13px
      .teacher-link
        padding-bottom: 5px
        padding-left: 5px
        color: black
        text-align: center
      &.router-link-active
        .teacher-link
          color: #0000FF
          font-size:13px
</style>