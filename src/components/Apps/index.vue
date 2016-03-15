<template>
<div class="settings-box">
  <div class="settings-container">
    <h2 class="title">App 下载</h2>
    <hr />
      <div v-for="items in apps" class="row mobile-apps">
          <p class="version">{{items.name}}版 
            <a :href="items.gitUrl" target="_blank"><i class="fa fa-github"></i></a>
          </p>
          <ul class="col-sm-7 downloads">
            <li>
              <a :href="items.downloadUrl.android || 'javascript:;'" class="btn btn-large btn-success">
                <i class="fa fa-android"></i> 
                <span>Android版</span>
              </a>
            </li>
            <li>
              <a :href="items.downloadUrl.ios || 'javascript:;'" class="btn btn-large btn-info">
                <i class="fa fa-mobile"></i> 
                <span>iPhone版</span>
              </a>
            </li>
          </ul>
        <div class="hidden-xs qrcode">
          <img :src="items.qrcode" alt="Download app qrcode" />
        </div>
      </div>
  </div>
</div>
</template>
<script>
import { getApps } from '../../vuex/actions'

export default {
  vuex:{
    getters:{
      apps: ({apps}) => apps.items
    },
    actions:{
      getApps
    }
  },
  route:{
    activate ({ next }) {
      this.getApps()
      next()
    }
  }
}
</script>