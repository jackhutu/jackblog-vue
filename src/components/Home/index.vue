<template>
	<div class="container-fluid main-box">
	  <div class="row">
	    <Sidebar :index-img="indexImg"></Sidebar>
	    <div class="col-sm-7 col-sm-offset-3 main-content">
				<Tags :tag-list="tagList" :options="options" :is-fetching="isFetching"></Tags>
        <Articles :article-list="articleList"></Articles>
        <Loadmore v-if="articleList.length > 0 && isMore" :options="options" :is-more="isMore" :is-fetching="isFetching"></Loadmore>
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
import { getIndexImage,getTagList,changeOptions,getArticleList } from '../../vuex/actions'

export default {
  components:{ Sidebar,Tags,Articles,Loadmore,Footerbar },
  vuex:{
    getters:{
      indexImg: ({globalVal}) => globalVal.indexImg,
      tagList: ({tagList}) => tagList.items,
      options: ({options}) => options.item,
      articleList: ({articleList}) => articleList.items,
      isMore: ({articleList}) => articleList.isMore,
      isFetching: ({articleList}) => articleList.isFetching
    },
    actions:{
      getIndexImage,
      getTagList,
      changeOptions,
      getArticleList
    }
  },
  created(){
    if(this.indexImg === ''){
      this.getIndexImage()
    }
    if(this.tagList.length < 1){
      this.getTagList()
    }
    if(this.articleList.length < 1){
      this.getArticleList(this.options)
    }
  },
  methods:{
    handleChange(options,isAdd=false){
      this.changeOptions(options)
      this.getArticleList(this.options,isAdd)
    }
  }
}
</script>