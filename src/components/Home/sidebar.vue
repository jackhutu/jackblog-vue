<template>
	<div class="col-sm-3 sidebar-box">
	  <div class="cover-img" :style="{ backgroundImage: 'url(' + indexImg + ')' }"></div>
	  <div class="bottom-block">
	    <h1>Jack Hu</h1>
	    <h3>有朋自远方来</h3>
	    <h3>不亦乐乎</h3>
	  </div>
	</div>
</template>
<script>
export default {
  props: ['indexImg']
}
</script>