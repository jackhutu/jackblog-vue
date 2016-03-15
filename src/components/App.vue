<template>
  <div class="top-box">
    <Navbar></Navbar>
    <router-view></router-view>
    <Toaster></Toaster>
  </div>
</template>

<script>
import store from '../vuex/store'
import Navbar from './Navbar'
import Toaster from './Toaster'

export default {
  store,
  components: { Navbar,Toaster }
}
</script>
