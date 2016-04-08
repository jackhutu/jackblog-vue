<template>
<div class="article-share clearfix">
  <a href="javascript:;" class="like-btn" :class=" isLike ? 'note-liked' :'' " @click.prevent="toggleLike()">
      <span class="like-content">
        <i class="fa" :class="isLike ? 'fa-heart' : 'fa-heart-o'"></i>  喜欢
      </span>
      <span class="like-count">{{ likeCount }}</span>        
  </a>
</div>
</template>
<script>
export default {
  props:['likeCount','isLike'],
  methods:{
    toggleLike(){
      this.$parent.handleToggleLike()
    }
  }
}
</script>