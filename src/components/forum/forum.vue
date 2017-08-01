<template>
  <div>
    <div style="height: 4rem;"></div>
    <div class="forum">
      <router-link tag="div" class="forum-item" to="/home/forum/forum-news">
        <span class="forum-link">资 讯</span>
      </router-link>
      <router-link tag="div" class="forum-item" to="/home/forum/forum-say">
        <span class="forum-link">我想说</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted() {
      setTimeout(()=> {
        this.$router.replace('/home/forum/forum-news')
      },1)
  }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .forum
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .forum-item
      flex: 1
      text-align: center
      .forum-link
        display: inline-block
        width: 100%
        padding-bottom: 5px
        color: $color-text
      &.router-link-active
        .forum-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>