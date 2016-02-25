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
// import store from '../../store'
// const { getSnsLogins,getCaptchaUrl,localLogin } = store.actions

export default {
  components: { Navbar,vueToastr },
  methods:{
    showToastr(content,type='error',position='toast-top-right'){
      this.$refs.toastr.Add({
        msg: content,
        title: "",
        clickClose: true,
        timeout: 3000,
        type: type,
        position: position
      })
    }
  },
  // created (){
  // 	console.log('created');
  // },
  // beforeCompile(){
  // 	console.log('beforeComplie');
  // },
  // compiled(){
  // 	console.log('compiled');
  // },
  // ready(){
  // 	console.log('ready');
  // },
  // beforeDestory(){
  // 	console.log('beforeDestory');
  // },
  // destroyed(){
  // 	console.log('destroyed');
  // }
}
</script>
