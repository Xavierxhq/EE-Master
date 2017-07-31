<template>
  <div>
    <router-view></router-view>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/home/forum">
        <span class="tab-link">论坛</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/home/teacher">
        <span class="tab-link">教师</span>
      </router-link>
     <router-link tag="div" class="tab-item" to="/cbroom">
      <span class="tab-link">直播间</span>
    </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    position: fixed;
    z-index: 999;
    background-color: #434343;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      border-top: 1px solid $color-theme
      .tab-link
        padding-bottom: 5px
        color: $color-text
      &.router-link-active
        .tab-link
          color: white
          border-bottom: 2px solid white
</style>