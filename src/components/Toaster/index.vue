<template>
  <vue-toast ref="toast"></vue-toast>
</template>

<script>
import vueToast from 'vue-toast'
import { mapState,mapActions } from 'vuex'

export default {
  components: { vueToast },
  computed: {
    ...mapState({
      msg: ({showmsg}) => showmsg.message 
    })
  },  
  // vuex:{
  //   getters:{
  //     msg: ({showmsg}) => showmsg.message
  //   },
  //   actions:{
  //     showMsg,hideMsg
  //   }
  // },
  watch:{
    'msg':{
      handler: function (val, oldVal) {
        if(val.content !== ''){
          this.showToastr(val.content,val.type)
          this.hideMsg()
        }
      },
      deep: true
    }
  },
  methods:{
    ...mapActions([
      'showMsg',
      'hideMsg'
    ]),     
    showToastr(content,type='error',position='top right'){
      this.$refs.toast.setOptions({ maxToasts:3, position: position })
      this.$refs.toast.showToast(content, {
        theme: type,
        timeLife: 2000,
        closeBtn: false
      })
    }
  }
}
</script>