<template>
  <div class="prenext">
    <div v-if="prenextArticle.prev._id" class="text-left prev">
      <a v-link="{ name: 'article', params:{ aid: prenextArticle.prev._id } }" class="link-title"><span>上一篇:</span>{{prenextArticle.prev.title}} </a>
    </div>
    <div v-if="prenextArticle.next._id" class="text-right next">
      <a v-link="{ name: 'article', params:{ aid: prenextArticle.next._id } }" class="link-title"><span>下一篇:</span> {{prenextArticle.next.title}}</a>
    </div>
  </div>
</template>
<script>
export default {
  props:['prenextArticle']
}
</script>