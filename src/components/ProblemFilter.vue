<template>
  <el-row>
    <div style="margin-top: 20px">
      <el-checkbox
          v-for="name in tagList"
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
      tagList: ["贪心", "排序","tt"],
      tags: new Set(),
    }
  },
  methods: {
    updateProblems : function (value, e){
      let name = e.target.value
      if(value === false){
        this.tags.delete(name)
      }else{
        this.tags.add(name)
      }
      this.updateFilter()
    },updateFilter : function (){
      // 组件间通信
      this.$emit('tagFilter', this.tags)
    }
  },

}
</script>

<style scoped>
.el-tag{
  margin: 10px;
}


</style>