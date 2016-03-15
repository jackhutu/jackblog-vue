<template>
  <div class="top-box">
    <Navbar></Navbar>
    <router-view></router-view>
    <vue-toastr v-ref:toastr></vue-toastr>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import vueToastr from 'vue-toastr'
import store from '../store'

export default {
  store,
  components: { Navbar,vueToastr },
  methods:{
    showToastr(content,type='error',position='toast-top-right'){
      this.$refs.toastr.Add({
        msg: content,
        title: '',
        clickClose: true,
        timeout: 3000,
        type: type,
        position: position
      })
    }
  }
}
</script>
