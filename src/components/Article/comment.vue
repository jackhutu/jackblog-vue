<template>
  <div class="comment-container clearfix">
    <div class="comment-head clearfix">
      {{ commentList.length || 0 }}条评论
        <a href="javascript:;" @click.prevent="goComment" class="goto-comment pull-right"><i class="fa fa-pencil"></i>添加新评论</a>
    </div>
    <div id="comment_list">
        <div class="comment-item" v-for="(i, comment) in commentList">
          <div class="content">
            <div class="meta-top">
              <a class="avatar">
                <img :src="comment.user_id.avatar || defaultAvatar" alt="comment.user_id.nickname" />
              </a>        
              <a class="author-name link-light">{{comment.user_id.nickname}}</a>
              <span class="reply-time">
                {{comment.created | formatDate}}
              </span>
            </div>
            <p class="comment-content">{{comment.content}}</p>
            <div class="comment-footer text-right">
              <a class="reply" href="javascript:;" @click.prevent="showReply(i, comment.user_id.nickname )">回复</a>
            </div>

            <Reply v-show="comment.replys.length > 0" :replys="comment.replys" :k="i"></Reply>

             <form id="replyForm{{i}}" class="new-reply hide" @submit.prevent="submitReply(i,comment._id)"> 
               <div class="comment-text"> 
                  <textarea id="replyContent{{i}}"
                      required 
                      maxLength="2000" 
                      placeholder="写下你的回复…">
                  </textarea> 
                  <div> 
                    <input type="submit" value="发 表" class="btn btn-sm btn-info" />
                  </div> 
               </div>
             </form>

          </div>
        </div>               
   
    </div>

      <form v-if="user" class="new_comment" @submit.prevent="submitComment">
        <div class="comment-text">
          <textarea 
            maxLength="2000" 
            required
            v-model="newCommentContent" 
            placeholder="写下你的评论…" 
            id="comment_content"></textarea>
          <div>
            <input type="submit" id="comment_submit_btn" value="发 表" class="btn btn-info" />
          </div>
        </div>
      </form>
      <div v-else>
        <p class="comment-signin">
            <button class="btn btn-info" @click.prevent="openLoginModal()">登录后发表评论</button>  
        </p>
      </div>
  </div>
</template>
<script>
import defaultAvatar from '../../assets/images/avatar.png'
import Reply from './reply.vue'

export default {
  props:['commentList','user'],
  components:{ Reply },
  data(){
    return {
      defaultAvatar: defaultAvatar,
      isReply: false,
      newCommentContent:''
    }
  },
  methods:{
    openLoginModal(){
      this.$parent.openLoginModal()
    },
    submitComment(e){
      this.$parent.handleSubmitComment(this.newCommentContent)
      this.newCommentContent = ''
    },
    submitReply(i,cid){
      const eleForm = document.getElementById('replyForm' + i)
      const eleTextarea = eleForm.getElementsByTagName('textarea')[0]
      const content = eleTextarea.value 
      this.$parent.handleSubmitReply(cid,content)
      eleTextarea.value = ''
      eleForm.className += ' hide'
    },
    showReply(i,nickname){
      //判断是否登录.未登录则弹出登录框.
      if(this.user){
        const eleForm = document.getElementById('replyForm' + i)
        const eleTextarea = eleForm.getElementsByTagName('textarea')[0]
        if(eleForm.className.indexOf('hide') != -1){
          eleForm.className = 'new-reply'
          eleTextarea.focus()
          eleTextarea.value = '@' + nickname + ' '
        }else{
          eleForm.className += ' hide'
        }
      }else{
        this.$parent.openLoginModal()
      }
    },
    goComment(){
      const eleForm = document.getElementById('comment_content')
      if(this.user){
        eleForm.focus()
      }else{
        this.$parent.openLoginModal()
      }
    }
  }
}
</script>