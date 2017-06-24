<template>
		<div class="navbar-box navbar-skin">
		  <div class="navbar-menu">
      		<router-link :to="{ path: '/' }" class="navbar-item logo" :class="{'active':$route.name !== 'apps'}" title="首页">
						Hu
					</router-link>
      		<router-link :to="{ path: '/apps',activeClass: 'active'}" class="navbar-item mobile" active-class="active" title="移动应用">
						<i class="fa fa-mobile"></i>
					</router-link>
		  </div>   

		  <div class="navbar-expanded">
		      <div>
			      <a class="expanded-var angular2" href="//angular2.jackhu.top" title="angular2.x版">
			      </a>
			      <a class="expanded-var vue" href="//vue.jackhu.top" title="Vue版">
			      </a>
			      <a class="expanded-var react" href="//react.jackhu.top" title="React版">
			      </a>
			      <a class="expanded-var angular1" href="//angular.jackhu.top" title="Angular1.x版">
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
						<router-link :to="{ path: '/settings' }" class="navbar-item expanded-avatar" v-bind:title="auth.user.nickname">
							<img :src="auth.user.avatar || defaultAvatar"></img>
						</router-link>
		      </div>
	      	<div v-else>
						<router-link :to="{ path: '/login',activeClass:'active' }" class="navbar-item" title="登录">
							<i class="fa fa-sign-in"></i>
						</router-link>   
	      	</div>
		  </div>

		  <div class="navbar-shrink">
		  	<div v-if="auth.token && auth.user" class="pull-right">
					<a href="javascript:;" class="shrink-avatar" @click="dropdown()">
						<img :src="auth.user.avatar || defaultAvatar"></img>
					</a>							
					<ul class="dropdown-menu pull-right" id="dropdownMenu">
						<li>
							<router-link :to="{ path: '/settings' }">
								<i class="fa fa-cog"></i> 设置
							</router-link>
						</li>
						<li role="separator" class="divider"></li>
						<li>					
							<a href="javascript:;" class="shrink-logout" @click="logout()">
									<i class="fa fa-sign-out"></i> 登出
							</a>  
						</li>
					</ul>
		  	</div>
		  	<div v-else class="pull-right">
					<router-link :to="{ path: '/login' }" class="shrink-login" title="登录">
						<i class="fa fa-sign-in"></i> 登录
					</router-link>
		  	</div>
  	  	  <a class="pull-right navbar-item change-mode" href="javascript:;" @click="changeMode()">
  		  	  <i v-if="styleMode === 'day-mode'" class="fa fa-moon-o"></i>
  		  	  <i v-else class="fa fa-sun-o"></i>
  	  	  </a>
          <a class="pull-right expanded-var angular1" href="//angular.jackhu.top" title="Angular1.x版">
          </a>
          <a class="pull-right expanded-var react" href="//react.jackhu.top" title="React版">
          </a>
          <a class="pull-right expanded-var vue" href="//vue.jackhu.top" title="Vue版">
          </a>
          <a class="pull-right expanded-var angular2" href="//angular2.jackhu.top" title="Agnular2.x版">
          </a>
		  </div>
		</div>
</template>

<script>
import defaultAvatar from '../assets/images/avatar.png'
import { mapState,mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      auth: state => state.auth,
      styleMode: state => state.globalVal.styleMode     
    }),
    defaultAvatar() {
      return defaultAvatar
    }		
  }, 
  created (){
		document.body.className = this.styleMode
    if(this.auth.token){
      this.getUserInfo()
    }
  },
  methods: {
    ...mapActions([
      'changeStyleMode',
      'logout',
      'getUserInfo'
    ]),		
    changeMode(){
      this.changeStyleMode()
      document.body.className = this.styleMode
    },
		dropdown(){
			const dropdownMenu = document.getElementById('dropdownMenu')
			const isShow = dropdownMenu.style.display!=='block'?'block':'none'
			dropdownMenu.style.display = isShow
		}
  }
}
</script>