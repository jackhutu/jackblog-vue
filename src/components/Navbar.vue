<template>
		<div class="navbar-box navbar-skin">
		  <div class="navbar-menu">
		      <a v-link="{ path: '/' }" class="navbar-item logo" :class="{'active':$route.name !== 'apps'}" title="首页">
		        Hu
		      </a>
		      <a v-link="{ path: '/apps',activeClass: 'active'}" class="navbar-item mobile" title="移动应用">
		      	<i class="fa fa-mobile"></i>
		      </a>
		  </div>   

		  <div class="navbar-expanded">
		      <div>
			      <a class="expanded-var angular2" href="http://angular2.jackhu.top" title="angular2.x版">
			      </a>
			      <a class="expanded-var vue" href="http://vue.jackhu.top" title="Vue版">
			      </a>
			      <a class="expanded-var react" href="http://react.jackhu.top" title="React版">
			      </a>
			      <a class="expanded-var angular1" href="http://angular1.jackhu.top" title="Angular1.x版">
			      </a>
		        <a class="navbar-item change-mode" href="javascript:;" @click="changeMode()">
		        	<i v-if="styleMode === 'day-mode'" class="fa fa-moon-o"></i>
		        	<i v-else class="fa fa-sun-o"></i>
		        </a>
		      </div>
	        
		      <div v-if="auth.token && auth.user">
		        <a href="javascript:;" class="navbar-item expanded-logout" @click="logout()" title="登出">
		            <i class="fa fa-sign-out"></i>
		        </a>
		        <a v-link="{ path: '/settings' }" href="javascript:;" class="navbar-item expanded-avatar" title="{{auth.user.nickname}}">          
		          <img :src="auth.user.avatar || defaultAvatar" /> 
		        </a>  
		      </div>
	      	<div v-else>
	      	  <a v-link="{ path: '/login',activeClass:'active' }" class="navbar-item" title="登录">
	      	    <i class="fa fa-sign-in"></i>
	      	  </a>    
	      	</div>
		  </div>

		  <div class="navbar-shrink">
		  	<div v-if="auth.token && auth.user" class="pull-right">
			  	<dropdown>
			  	  <a href="javascript:;" class="shrink-avatar" data-toggle="dropdown">
			  	    <img :src="auth.user.avatar || defaultAvatar" /> 
			  	  </a>
			  	  <ul name="dropdown-menu" class="dropdown-menu pull-right">
				  	  <li>
				  	    <a v-link="{ path: '/settings' }"><i class="fa fa-cog"></i> 设置</a>
				  	  </li>
				  	  <li role="separator" class="divider"></li>
				  	  <li>
				  	    <a href="javascript:;" class="shrink-logout" @click="logout()">
				  	        <i class="fa fa-sign-out"></i> 登出
				  	    </a>  
				  	  </li>
			  	  </ul>
			  	</dropdown>
		  	</div>
		  	<div v-else class="pull-right">
			  	<a v-link="{ path: '/login' }" class="shrink-login" title="登录">
			  	    <i class="fa fa-sign-in"></i> 登录
			  	</a>
		  	</div>
  	  	  <a class="pull-right navbar-item change-mode" href="javascript:;" @click="changeMode()">
  		  	  <i v-if="styleMode === 'day-mode'" class="fa fa-moon-o"></i>
  		  	  <i v-else class="fa fa-sun-o"></i>
  	  	  </a>
          <a class="pull-right expanded-var angular1" href="http://angular1.jackhu.top" title="Angular1.x版">
          </a>
          <a class="pull-right expanded-var react" href="http://react.jackhu.top" title="React版">
          </a>
          <a class="pull-right expanded-var vue" href="http://vue.jackhu.top" title="Vue版">
          </a>
          <a class="pull-right expanded-var angular2" href="http://angular2.jackhu.top" title="Agnular2.x版">
          </a>
		  </div>
		</div>
</template>

<script>
import { changeStyleMode,logout,getUserInfo } from '../vuex/actions'
import defaultAvatar from '../assets/images/avatar.png'
import { dropdown } from 'vue-strap'

export default {
  components:{
    dropdown
  },
  vuex:{
    getters:{
      auth: state => state.auth,
      styleMode: state => state.globalVal.styleMode
    },
    actions:{
      changeStyleMode,
      logout,
      getUserInfo
    }
  },
  computed: {
    defaultAvatar() {
      return defaultAvatar
    }
  },
  beforeCompile(){
    document.body.className = this.styleMode
  },
  created (){
    if(this.auth.token){
      this.getUserInfo()
    }
  },
  methods: {
    changeMode(){
      this.changeStyleMode()
      document.body.className = this.styleMode
    }
  }
}
</script>