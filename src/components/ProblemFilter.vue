<template>
  <el-row>
    <div style="margin-top: 20px">
      <el-checkbox
          v-for="name in tags"
          :key="name"
          :label="name"
          border
          size="medium"
          @change="updateProblems"></el-checkbox>
    </div>
  </el-row>

</template>

<script>
export default {
  name: "ProblemFilter",
  data : function (){
    return {
      greedy: false,
      sort:false,
      tags: ["贪心", "排序"],
      problemTypes: new Set(),
    }
  },
  methods: {
    updateProblems : function (value, e){
      let name = e.target.value
      if(value === false){
        this.problemTypes.delete(name)
      }else{
        this.problemTypes.add(name)
      }
      this.updateFilter()
    },updateFilter : function (){
      // 组件间通信
      this.$emit('typeFilter', this.problemTypes)
    }
  },

}
</script>

<style scoped>
.el-tag{
  margin: 10px;
}


</style>