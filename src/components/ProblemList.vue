<template>
  <el-container>
    <el-main>
      <el-header align="left">
        <el-button id="new-problem">
          录入题目
        </el-button>
      </el-header>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="id"
            label="id"
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="name"
            label="题目">
        </el-table-column>
        <el-table-column
            id="difficulty"
            :filters="[{ text:'简单', value: '简单'}, { text:'中等', value: '中等'}, { text:'困难', value: '困难'}]"
            :filter-method="filter_difficulty"
            align="right"
            prop="difficulty"
            label="难度">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "ProblemList",
  data: function (){
    return {
      names: ["Cola", "Amy", "Coco"],
      content : "Cola",
      tableData: [{
        id: '1',
        name: '硬币',
        difficulty: '简单'
      }, {
        id: '2',
        name: '开关灯',
        difficulty: '中等'
      }, {
        id: '3',
        name: '装箱',
        difficulty: '困难'
      }, {
        id: '4',
        name: '吃冰棍',
        difficulty: '困难'
      }],
      options: [{
        value: '简单',
        label: '简单'
      }, {
        value: '中等',
        label: '中等'
      }, {
        value: '困难',
        label: '困难'
      }],
      value: '简单'
    }
  },
  methods :{
    filter_difficulty : function (value, row){
      return row.difficulty === value;
    }
  }
}
</script>

<style scoped>
html, body{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  margin: 0px;
  padding: 0px;
}

.el-header{
  background-color: #007fa8;
}

#difficulty {
  text-align: left;
}

#new-problem{
  margin: 10px;
}
</style>