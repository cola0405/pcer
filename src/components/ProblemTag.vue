<template>
  <div id="tags">
    <el-checkbox
        v-for="tag in tagList"
        :key="tag.name"
        :label="tag.name"
        border
        size="medium"
        @change="updateProblems"></el-checkbox>
  </div>
</template>

<script>
export default {
  name: "ProblemTag",
  data: function (){
    return {}
  },
  methods: {

  },

}
</script>

<style scoped>
#tags{
  display: flex;
  flex-wrap: wrap;
}
</style>