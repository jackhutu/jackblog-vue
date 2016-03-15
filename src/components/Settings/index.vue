<template>
	<div class="settings-box">
		<div class="settings-container">
		  <h2 class="title">设置</h2>
			<hr />
		  <div class="profile">
				<!-- 呢称邮件-->
		    <div class="control-group" id="settingsForm">
		    	<validator name="settingsValidation">
		        <form class="settings-form" @submit.prevent="mdUser" novalidate>
		          <div class="form-group">
		        		<label class="control-label">昵称</label>
		        		<input 
		        			placeholder="2-15字符，中英文、数字和下划线" 
		        			type="text" 
		        			:value="nickname"
		        			@input="updateNickname"
		        			v-validate:nickname="{ required: true, minlength: 2, maxlength: 15, nickname:true }"
		        			class="form-control"
		        			v-bind:class="[$settingsValidation.nickname.invalid ? 'ng-invalid' : 'ng-valid', $settingsValidation.nickname.dirty ? 'ng-dirty' : '']" >
		          </div>
							<button type="submit" class="btn btn-block btn-lg btn-primary" :disabled="$settingsValidation.invalid">保 存</button>
		        </form>
		      </validator>
		    </div>

			</div>
			<!-- content 结束 -->
		</div>
	</div>
</template>

<script>
import { updateUser,getUserInfo } from '../../store/actions'

export default {
	el(){
		return "settingsForm"
	},
	vuex:{
		getters:{
			nickname: ({auth}) => auth.user.nickname,
			auth: state => state.auth,
			errMsg: ({auth}) => auth.errMsg
		},
		actions:{
			updateUser,getUserInfo
		}
	},
	data(){
		return {
			newNickname: ''
		}
	},
	route:{
	  activate ({ next }) {
	  	!this.auth.token?transition.redirect('/'):transition.next()
	  }
	},
	validators: { 
	  nickname: function (val) {
	    return /^[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+$/.test(val)
	  }
	},
	// watch:{
	// 	'auth':{
	// 		handler: function (val, oldVal) {
	// 			if(val.errMsg){
	// 				this.$root.showToastr(val.errMsg)
	// 			}else if(val.user.nickname !== oldVal.user.nickname){
	// 				this.$root.showToastr('修改成功.','success')
	// 	    }
	// 		 },
	// 		deep: true
	// 	}
	// },
	methods:{
		updateNickname(e){
			this.newNickname = e.target.value
		},
		mdUser(){
			if(this.newNickname){
				this.updateUser({ nickname: this.newNickname })
			}
		}
	}
}
</script>