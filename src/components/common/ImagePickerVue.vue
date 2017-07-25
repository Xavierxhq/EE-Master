<template>
  <div>
    <div class="title">
      <router-link class="router-link" to="/userdetail"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></router-link>
      <span class="center">编辑头像</span>
    </div>
    <div class="buttons header">
      <span class="button-cancle">取消</span>
      <span class="button-choose">{{getChooseButtonText}}</span>
      <input id="input" type="file" accept="image/png,image/jpg,image/jpeg" hidden>
    </div>
    <div class="content">
      <canvas class="content-cavas"></canvas>
    </div>
  </div>
</template>

<style scoped>
  .buttons {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .button-cancle,.button-choose {
    display: inline-block;
    margin: 0;
    padding: 8px 12px;
  }

  .button-cancle {
    color: #999999;
  }

  .button-choose {
    color: #0276FF;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .content-cavas {
    flex: 1;
    margin: 8px 4px;
    padding: 0;
    width: 100%;
    border: .5px solid #999999;
  }
</style>

<script>
export default {
  name: 'ImagePickerVue',
  props: [],
  data() {
    return {
    }
  },
  mounted () {
    document.getElementById('input').click()
  },
  methods: {
    
  },
  computed: {
    getChooseButtonText() {
      return '选择照片'
    }
  }
}
</script>