<template>
  <div class="article-box">
    <ArtickeContent :article-detail="articleDetail"></ArtickeContent>
    <Like :like-count="articleDetail.like_count" :is-like="articleDetail.isLike"></Like>
    <Prenext :prev-article="prevArticle" :next-article="nextArticle"></Prenext>
    <Comment :comment-list="commentList" :user="user"></Comment>
    <Loginmodal ref='modal'></Loginmodal>
    <Scrolltop></Scrolltop>
  </div>
</template>
<script>
import ArtickeContent from './content.vue'
import Comment from './comment.vue'
import Prenext from './prenext.vue'
import Like from './like.vue'
import Loginmodal from '../Login/modal.vue'
import Scrolltop from '../Scrolltop/index.vue'
import { mapState,mapActions } from 'vuex'

export default {
  components: { ArtickeContent,Like,Prenext,Comment,Scrolltop,Loginmodal },
  computed: {
    ...mapState({
      articleDetail: ({articleDetail}) => articleDetail.item,
      user: ({auth}) => auth.user,
      nextArticle: ({prenextArticle}) => prenextArticle.next,
      prevArticle: ({prenextArticle}) => prenextArticle.prev,
      commentList: ({commentList}) => commentList.items,
      options: ({options}) => options.item,
      aid: ({route}) => route.params.aid    
    })
  },
  created () {
    this.initData()
  },
  watch: {
    '$route': 'initData'
  },  
  methods:{
    ...mapActions([
      'getArticleDetail',
      'getPrenext',
      'getCommentList',
      'toggleLike',
      'addComment',
      'addReply'
    ]),
    initData(){
      const aid = this.$route.params.aid
      this.getPrenext(aid)
      this.getCommentList(aid)
      this.getArticleDetail(aid, this.user)
    }, 
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
        this.addReply({cid:cid,data:{content:content}})
      }else{
        this.openLoginModal()
      }
    }
  }
}
</script>