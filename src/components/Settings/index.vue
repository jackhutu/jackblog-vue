<template>
  <div class="settings-box">
    <div class="settings-container">
      <h2 class="title">设置</h2>
      <hr />
      <div class="profile">
        <!-- 呢称邮件-->
        <div class="control-group" id="settingsForm">
          <form class="settings-form" @submit.prevent="mdUser()" novalidate>
            <div class="form-group">
              <label class="control-label">昵称</label>
              <input placeholder="2-15字符，中英文、数字和下划线" type="text" :value="nickname" v-validate="'required|nickname|min:2|max:15'" @input="updateNickname"  class="form-control">
            </div>
            <button type="submit" class="btn btn-block btn-lg btn-primary">保 存</button>
          </form>
        </div>
      </div>
      <!-- content 结束 -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      nickname: ({ auth }) => auth.user.nickname,
      auth: state => state.auth
    })
  },
  data() {
    return {
      newNickname: ''
    }
  },
  methods: {
    ...mapActions([
      'updateUser',
      'getUserInfo'
    ]),
    updateNickname(e) {
      this.newNickname = e.target.value
    },
    mdUser() {
      // if(this.newNickname){
      //   this.updateUser({ nickname: this.newNickname })
      // }
    }
  }
}
//v-validate="{ required: true, minlength: 2, maxlength: 15, nickname:true }"
  //created() {
    // Validator.extend('nickname', {
    //   getMessage: (field) => `The ${field} is not a valid coupon.`,
    //   validate: (value) => new Promise(resolve => {
    //     const validCoupons = ['SUMMER2016', 'WINTER2016', 'FALL2016'];

    //     setTimeout(() => {
    //       resolve({
    //         valid: value && !! ~validCoupons.indexOf(value.toUpperCase())
    //       });
    //     }, 500);
    //   })
    // });
    // this.$validator.attach('coupon', 'required|verify_coupon');
  //},
  // route:{
  //   beforeRouteEnter (transition) {
  //     !this.auth.token?transition.redirect('/'):transition.next()
  //   }
  // },
</script>

