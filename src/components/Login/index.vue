<template>
<div class="signin-box">
	<div class="signin-container">
	    <h4 class="title">登 录</h4>
	    <div id="signinForm">
		    <validator name="signinValidation">
		      <form class="signin-form form-horizontal" @submit.prevent="login($signinValidation)" novalidate>
		    	    <div class="form-group">
		    	  		<div class="input-group">
		    	        <div class="input-group-addon">
		    	        	<i class="fa fa-envelope-o"></i>
		    	        </div>
		    	        <input type="text" 
		    	        	v-model="user.email" 
		    	        	v-validate:email="{ required: true, minlength: 3, maxlength: 30, email:true }"
		    	        	class="form-control" 
		    	        	:class="[$signinValidation.email.invalid ? 'ng-invalid' : 'ng-valid', $signinValidation.email.dirty ? 'ng-dirty' : '']"
		    	        	placeholder="邮箱" />
		    	      </div>
		    	    </div>
		          <div class="form-group">
		        		<div class="input-group">
		              <div class="input-group-addon"><i class="fa fa-unlock-alt"></i></div>
		              <input type="password" 
		              	v-model="user.password" 
		              	v-validate:password="{ required: true }"
		              	class="form-control" 
		              	:class="[$signinValidation.password.invalid ? 'ng-invalid' : 'ng-valid', $signinValidation.password.dirty ? 'ng-dirty' : '']"
		              	placeholder="密码" />
		            </div>
		          </div>
		          <div class="form-group" >
		          	<div class="col-xs-6 captcha-code">
		          		<input class="form-control"
			          		v-model="user.captcha"
			          		v-validate:captcha="{ required: true, maxlength: 6 }"
			          		:class="[$signinValidation.captcha.invalid ? 'ng-invalid' : 'ng-valid', $signinValidation.captcha.dirty ? 'ng-dirty' : '']"
		          			type="text"
		          			maxlength="6"
		          			placeholder="验证码" />
		          	</div>
		          	<div class="col-xs-6 captcha-img">
		          		<a href="javascript:;" @click.prevent="getCaptchaUrl()">
		          			<img :src="captchaUrl" />
		          		</a>
		          	</div>

		          </div>
		          <div class="form-group">
		          	<button class="btn btn-primary btn-lg btn-block" type="submit" id="signin_btn" :disabled="$signinValidation.invalid">登 录</button>
		          </div>
		    	</form>

		    </validator>

	    </div>
			<div class="login-sns">
		      <p>您还可以通过以下方式直接登录</p>
		      <snsloginbtns :logins="logins"></snsloginbtns>
		  </div>
	</div>
</div>
</template>

<script>
import { getSnsLogins,getCaptchaUrl,localLogin } from '../../vuex/actions'
import snsloginbtns from './snsLogin'

export default {
  el (){
    return '#signinForm'
  },
  components:{
    snsloginbtns
  },
  vuex:{
    getters:{
      captchaUrl: ({globalVal}) => globalVal.captchaUrl,
      logins: ({logins}) => logins.items,
      token: ({auth}) => auth.token
    },
    actions:{
      getSnsLogins,getCaptchaUrl,localLogin
    }
  },
  validators: { 
    email: function (val) {
      return /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(val)
    }
  },
  data (){
    return {
      user:{
        email:'',
        password:'',
        captcha:''
      }
    }
  },
  route: {
    activate:function (transition) {
      this.token?transition.redirect('/'):transition.next()
    }
  },
  created () {
    this.getCaptchaUrl()
    this.getSnsLogins()
  },
  methods: {
    login(signinValidation){
      if(signinValidation.valid){
        this.localLogin(this.user)
      }
    }
  }
}
</script>