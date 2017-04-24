<template>
  <div class="prenext">
    <div v-if="prevArticle._id" class="text-left prev">
      <router-link :to="{ name: 'article', params: { aid: prevArticle._id }}" class="link-title"><span>上一篇:</span> {{prevArticle.title}}</router-link>
    </div>
    <div v-if="nextArticle._id" class="text-right next">
      <router-link :to="{ name: 'article', params: { aid: nextArticle._id }}" class="link-title"><span>下一篇:</span> {{nextArticle.title}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props:['prevArticle','nextArticle']
}
</script>