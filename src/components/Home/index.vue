<template>
	<div class="container-fluid main-box">
	  <div class="row">
	    <Sidebar :index-img="indexImg"></Sidebar>
	    <div class="col-sm-7 col-sm-offset-3 main-content">
				<Tags :tag-list="tagList" :options="options" :is-fetching="articleList.isFetching"></Tags>
        <Articles :article-list="articleList.items"></Articles>
        <Loadmore v-if="articleList.items.length > 0 && articleList.isMore" :options="options" :is-more="articleList.isMore" :is-fetching="articleList.isFetching"></Loadmore>
	    </div>
	  </div>
	</div>
  <Footerbar></Footerbar>
</template>
<script>
import Sidebar from './sidebar.vue'
import Tags from './tags.vue'
import Articles from './articles.vue'
import Loadmore from './loadmore.vue'
import Footerbar from './footer.vue'
import store from '../../store'
const { getIndexImage,getTagList,changeOptions,getArticleList } = store.actions

export default {
	components:{ Sidebar,Tags,Articles,Loadmore,Footerbar },
  created(){
    if(this.indexImg === ''){
      getIndexImage()
    }
    if(this.tagList.length < 1){
      getTagList()
    }
    if(this.articleList.items.length < 1){
      getArticleList(this.options)
    }
  },
  computed:{
  	indexImg(){
  		return store.state.globalVal.indexImg
  	},
  	tagList(){
  		return store.state.tagList
  	},
  	options(){
  		return store.state.options
  	},
    articleList(){
      return store.state.articleList
    }
  },
  methods:{
  	handleChange(options,isAdd=false){
      changeOptions(options)
      getArticleList(store.state.options,isAdd)
  	}
  }
}
</script>