<template>
  <div class="article-box">
    <Content :article-detail="articleDetail"></Content>
    <Like :like-count="articleDetail.like_count" :is-like="articleDetail.isLike"></Like>
    <Prenext :prev-article="prevArticle" :next-article="nextArticle"></Prenext>
    <Comment :comment-list="commentList" :user="user"></Comment>
    <Loginmodal v-ref:modal></Loginmodal>
    <Scrolltop></Scrolltop>
  </div>
</template>
<script>
import { getArticleDetail,getPrenext,getCommentList,toggleLike,addComment,addReply } from '../../vuex/actions'
import Content from './content.vue'
import Comment from './comment.vue'
import Prenext from './prenext.vue'
import Like from './like.vue'
import Loginmodal from '../Login/modal.vue'
import Scrolltop from '../Scrolltop/index.vue'

export default {
  components: { Content,Like,Prenext,Comment,Loginmodal,Scrolltop },
  vuex:{
    getters:{
      articleDetail: ({articleDetail}) => articleDetail.item,
      user: ({auth}) => auth.user,
      nextArticle: ({prenextArticle}) => prenextArticle.next,
      prevArticle: ({prenextArticle}) => prenextArticle.prev,
      commentList: ({commentList}) => commentList.items,
      options: ({options}) => options.item,
      aid: ({route}) => route.params.aid
    },
    actions:{
      getArticleDetail,getPrenext,getCommentList,toggleLike,addComment,addReply
    }
  },
  route:{
    data ({ to: { params: { aid }}}) {
      this.getPrenext(aid)
      this.getCommentList(aid)
      this.getArticleDetail(aid, this.user)
    }
  },
  methods:{
    openLoginModal(){
      this.$refs.modal.showModal()
    },
    handleToggleLike(){
      if(this.user){
        this.toggleLike(this.$route.params.aid)
      }
    },
    handleSubmitComment(content){
      if(this.user && content.trim() !== ''){
        this.addComment({aid:this.$route.params.aid, content: content})
      }else{
        this.openLoginModal()
      }
    },
    handleShowReply(content){
      //判断是否登录.未登录则弹出登录框.
      if(this.user && content.trim() !== ''){
        this.addComment({aid:this.$route.params.aid, content: content})
      }else{
        this.openLoginModal()
      }
    },
    handleSubmitReply(cid,content){
      if(this.user && content.trim() !== ''){
        this.addReply(cid,{content:content})
      }else{
        this.openLoginModal()
      }
    }
  }
}
</script>