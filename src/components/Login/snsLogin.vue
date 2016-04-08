<template>
	<div class="login-sns">
	  <ul>
	  	<li v-for="item in logins" @click.stop.prevent="snsLogin(item)">
	  		<a class="{{item}}" href="#"><i class="fa fa-{{item}}"></i></a>
	  	</li>
	  </ul>
	</div>
</template>

<script>
import {API_ROOT} from '../../config'
import {getCookie} from '../../utils/authService'

export default {
  props: {
    logins:{
      type: Array
    }
  },
  methods: {
    snsLogin(provider){
      let search = API_ROOT + 'auth/' + provider + '?redirectUrl=' + window.location.origin
      const token = getCookie('token')
      if (token) {
        search += '&access_token=' + token.replace(/(^\")|(\"$)/g, '')
      }
      window.location.href = search
    }
  }
}
</script>