<template>
  <div>
    <el-page-header @back="goBack" content="题目信息"></el-page-header>
    <mavon-editor
        :toolbars="false"
        :subfield="false"
        default-open="preview"
        v-model="this.content"></mavon-editor>
  </div>
</template>

<script>
export default {
  name: "ProblemPage",
  data : function (){
    return {
      content : null
    }
  },methods:{
    goBack(){
      this.$router.back()
    }
  },
  created() {
    this.content = this.$route.query.problemData.content
    console.log(this.$route.query.problemData.content)
  }
}
</script>

<style scoped>
.el-page-header{
  margin-bottom: 30px;
}
</style>