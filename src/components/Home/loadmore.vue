<template>
	<div class="load-more">
		  <button class="ladda-button" @click.prevent="addData()">
		  	<span v-if="isFetching" class="ladda-spinner">
		  		<i class="fa fa-spinner fa-spin"></i>
		  	</span>
		  	<span v-else class="ladda-label">点击查看更多</span>
		  </button>
	</div>
</template>

<script>
export default {
  props:['isFetching','isMore','options'],
  methods:{
    addData(){
      let currentPage = this.options.currentPage
      this.$parent.handleChange({currentPage:++currentPage},true)
    }
  }
}
</script>