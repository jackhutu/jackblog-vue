<template>
  <div class="article-box">
    <Content :article-detail="articleDetail"></Content>
    <Like :like-count="articleDetail.like_count" :is-like="articleDetail.isLike"></Like>
    <Prenext :prenext-article="prenextArticle"></Prenext>
    <Comment :comment-list="commentList.items" :user="user"></Comment>
    <Loginmodal v-ref:modal></Loginmodal>
    <Scrolltop></Scrolltop>
  </div>
</template>
<script>
import store from '../../store'
const { getArticleDetail,getPrenext,getCommentList,toggleLike,addComment,addReply } = store.actions
import Content from './content.vue'
import Comment from './comment.vue'
import Prenext from './prenext.vue'
import Like from './like.vue'
import Loginmodal from '../Login/modal.vue'
import Scrolltop from '../Scrolltop/index.vue'

export default {
  components: { Content,Like,Prenext,Comment,Loginmodal,Scrolltop },
  computed: {
    articleDetail(){
      return store.state.articleDetail
    },
    user(){
      return store.state.auth.user
    },
    prenextArticle(){
      return store.state.prenextArticle
    },
    commentList(){
      return store.state.commentList
    },
    options(){
      return store.state.options
    }
  },
  route: {  
    data ({ to: { params: { aid }}}) {
      getArticleDetail(aid, this.user)
      getPrenext(aid,this.options)
      getCommentList(aid)
    }
  },
  methods:{
    openLoginModal(){
      this.$refs.modal.showModal()
    },
  	toggleLike(){
      if(this.user){
        toggleLike(this.$route.params.aid)
      }
  	},
    handleSubmitComment(content){
      if(this.user && content.trim() !== ''){
        addComment({aid:this.$route.params.aid, content: content})
      }else{
        this.openLoginModal()
      }
    },
    handleShowReply(content){
      //判断是否登录.未登录则弹出登录框.
      if(this.user && content.trim() !== ''){
        addComment({aid:this.$route.params.aid, content: content})
      }else{
        this.openLoginModal()
      }
    },
    handleSubmitReply(cid,content){
      if(this.user && content.trim() !== ''){
        addReply(cid,{content:content})
      }else{
        this.openLoginModal()
      }
    }
  }
}
</script>