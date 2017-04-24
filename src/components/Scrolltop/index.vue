<template>
  <div v-show="isShowTop" class="gotop" @click.prevent="gotop">
      <i class="fa fa-arrow-up"></i>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isShowTop:false
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll(){
      if (window.scrollY > 200) {
        this.isShowTop = true
      } else {
        this.isShowTop = false
      }
    },
    gotop(){
      window.scrollTo(0,0)
    }
  }
}
</script>