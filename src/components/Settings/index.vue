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
              <input placeholder="2-15字符，中英文、数字和下划线" type="text" v-model="newNickname" v-validate="'required|nickname|min:4|max:30'" class="form-control">
            </div>
            <button type="submit" class="btn btn-block btn-lg btn-primary" :disabled="!fields.valid()">保 存</button>
          </form>
        </div>
      </div>
      <!-- content 结束 -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Validator } from 'vee-validate'

export default {
  data() {
    return {
      mdNickname: null
    }
  },
  computed: {
    ...mapState({
      nickname: ({auth}) => auth.user && auth.user.nickname || '',
    }),
    newNickname: {
      get () {
        return this.mdNickname === null?this.nickname:this.mdNickname
      },
      set (value) {
        this.mdNickname = value || ''
      }
    }    
  },
  created(){
    if(!this.nickname){
      this.getUserInfo()
    }
  },
  methods: {
    ...mapActions([
      'updateUser',
      'getUserInfo'
    ]),  
    mdUser() {
      if(this.newNickname){
        this.updateUser({ nickname: this.newNickname })
      }
    }
  }
}
</script>

