<template>
	<modal :show.sync="showLoginModal" effect="fade" width="400">
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
	import store from '../../store'
	const { getSnsLogins } = store.actions
	import { modal } from 'vue-strap'

	export default {
		components:{
			modal,
			snsloginbtns
		},
		data(){
			return {
				showLoginModal:false
			}
		},
		computed: {
			logins (){
				return store.state.logins
			}
		},
		created () {
		  getSnsLogins()
		},
		methods: {
			showModal(){
				this.showLoginModal = true
			}
		}
	}
</script>