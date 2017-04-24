<template>
	<modal v-model="showLoginModal" effect="fade" width="400">
	  <div slot="modal-header" class="modal-header">
	  	<h4 class="modal-title text-center">请用以下方式登录</h4>
	  </div>
	  <div slot="modal-body" class="modal-body">
	  	<div class="portlet-body">
	  			<snsloginbtns :logins="logins"></snsloginbtns>
	  	</div>
	  </div>
	  <div slot="modal-footer">
	  </div>
	</modal>
</template>

<script>
import snsloginbtns from './snsLogin'
import { mapState,mapActions } from 'vuex'
import { modal } from 'vue-strap'

export default {
  components:{
    modal,
    snsloginbtns
  },
  computed: {
    ...mapState({
      logins: ({logins}) => logins.items     
    })
  },
  data(){
    return {
      showLoginModal:false
    }
  },
  created () {
    if(this.logins.length < 1){
      this.getSnsLogins()
    }
  },
  methods: {
    ...mapActions([
      'getSnsLogins'
    ]),    
    showModal(){
      this.showLoginModal = true
    }
  }
}
</script>