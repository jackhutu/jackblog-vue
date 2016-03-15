<template>
	<vue-toastr v-ref:toastr></vue-toastr>
</template>

<script>
import vueToastr from 'vue-toastr'
import { showMsg,hideMsg } from '../../vuex/actions'

export default {
	components: { vueToastr },
	vuex:{
		getters:{
			msg: ({showmsg}) => showmsg.message
		},
		actions:{
			showMsg,hideMsg
		}
	},
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