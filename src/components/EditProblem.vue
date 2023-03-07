<template>
  <div>
    <el-page-header @back="goBack" content="题目详情"></el-page-header>
    <p>edit</p>
  </div>
</template>

<script>
export default {
  name: "EditProblem",
  methods : {
    goBack(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>