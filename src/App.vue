<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a,
a:active,
a:hover,
a:visited,
a:link {
  text-decoration: none;
}

.title {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 1rem 0 1rem .8rem;
  width: 100%;
  font-size: 1.8rem;
  background-color: #434343;
  box-shadow: 0px 1px 4px #828282;
  color: #FFFFFF;
  z-index: 10;
}

.router-link,
.router-link:active,
.router-link:hover,
.router-link:visited,
.router-link:link {
  color: #FFFFFF;
  text-decoration: none;
}

.center {
  flex: 1;
  margin-left: .8rem;
}

.title .glyphicon {
  display: inline-block;
  top: 0;
  padding: 0 1.6rem 0 0;
}

.header {
  margin: 5rem 0 0 0;
}

/*定义动画效果*/

/*right*/

.slide-right-enter-active {
  transition: all .3s ease;
}

.slide-right-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-right-enter,
.slide-right-leave-active {
  transform: translateX(-100%);
  opacity: 0;
}


/*left*/

.slide-left-enter-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-left-leave-active {
  transition: all .6s ease;
}

.slide-left-enter,
.slide-left-leave-active {
  transform: translateX(100%);
  opacity: 0;
}

/*fade*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>