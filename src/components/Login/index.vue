<template>
  <div class="signin-box">
    <div class="signin-container">
      <h4 class="title">登 录</h4>
      <div id="signinForm">
        <form class="signin-form form-horizontal" @submit.prevent="login()" novalidate>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-envelope-o"></i>
              </div>
              <input type="text" name="email" v-model="user.email" v-validate="'required|email|min:3'" data-vv-delay="100" class="form-control" placeholder="邮箱"></input>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-unlock-alt"></i></div>
              <input type="password" name="password" v-model="user.password" v-validate="'required|min:5'" class="form-control" placeholder="密码"></input>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-6 captcha-code">
              <input type="text" name="captcha" v-model="user.captcha" v-validate="'required|min:5|max:6'" maxlength="6" class="form-control" placeholder="验证码"></input>
            </div>
            <div class="col-xs-6 captcha-img">
              <a href="javascript:;" @click.prevent="getCaptchaUrl()">
                <img :src="captchaUrl"></img>
              </a>
            </div>
  
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-lg btn-block" type="submit" id="signin_btn">登 录</button>
          </div>
        </form>
      </div>
      <div class="login-sns">
        <p>您还可以通过以下方式直接登录</p>
        <snsloginbtns :logins="logins"></snsloginbtns>
      </div>
    </div>
  </div>
</template>

<script>
import { Validator } from 'vee-validate'
import snsloginbtns from './snsLogin'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    snsloginbtns
  },
  computed: {
    ...mapState({
      captchaUrl: ({ globalVal }) => globalVal.captchaUrl,
      logins: ({ logins }) => logins.items,
      token: ({ auth }) => auth.token
    })
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
        captcha: ''
      }
    }
  },
  created() {
    this.getCaptchaUrl()
    this.getSnsLogins()
  },
  methods: {
    ...mapActions([
      'getSnsLogins',
      'getCaptchaUrl',
      'localLogin'
    ]),
    login() {  
      this.$validator.validateAll().then(result => {
        if(result){
          this.localLogin(this.user)
        }
      }).catch(() => {
        //提示错误
      })
    }
  }
}
//:disabled="!fields.valid()"
</script>