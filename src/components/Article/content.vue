<template>
  <div class="article-container">
    <h1 class="title">{{ articleDetail.title }}</h1>
    <div class="counts">
      <span class="views-count">阅读{{articleDetail.visit_count}}</span>
      <span class="comments-count">评论{{articleDetail.comment_count}}</span>
      <span class="likes-count">喜欢{{articleDetail.like_count}}</span>
    </div> 
    <div class="markdown-content">{{{ articleDetail.content }}}</div>
  </div>
</template>
<script>
export default {
  props:['articleDetail']
}
</script>