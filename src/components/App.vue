<template>
  <div class="top-box">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import store from 'store'
import Navbar from './Navbar'
// import Toaster from './Toaster'

export default {
  store,
  components:{Navbar}
}
</script>
