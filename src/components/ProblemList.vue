<template>
  <div>
    <!--      题目类型filter    -->
    <ProblemFilter @tagFilter="doTagFilter"></ProblemFilter>
    <br>
    <el-table
        :data="showData"
        @filter-change="doDifficultyFilter"
        style="width: 100%">
      <el-table-column
          prop="id"
          label="ID">
      </el-table-column>


      <el-table-column
          align="center"
          prop="name"
          label="题目名称">
        <template slot-scope="scope">
<!--          v-on:click="toProblemPage(scope.row.id)"-->
          <router-link  :to="{path:'/problem/page', query:{problemData: scope.row}}">{{scope.row.name}}</router-link>
        </template>
      </el-table-column>

      <!--  题目标签    -->
      <el-table-column
          align="center"
          prop="tags"
          label="标签">
        <template slot-scope="scope">
          <el-tag v-for="tag in scope.row.tags" :key="tag">
            {{ tag }}
          </el-tag>
        </template>
      </el-table-column>

      <!--  题目难度筛选    -->
      <el-table-column
          id="difficulty"
          :column-key="'difficulty'"
          :filters="[{ text:'简单', value: '简单'}, { text:'中等', value: '中等'}, { text:'困难', value: '困难'}]"
          align="center"
          prop="difficulty"
          label="难度">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button v-on:click="editProblem(scope.row.id)" size="mini" type="primary">编辑</el-button>
          <el-button v-on:click="deleteProblem(scope.row.id)" size="mini" type="danger">删除</el-button>
        </template>

      </el-table-column>
    </el-table>

    <!--  分页  -->
    <el-pagination
        @current-change="updatePage"
        :current-page.sync="curPage"
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="this.tableData.length">
    </el-pagination>
  </div>
</template>

<script>
import ProblemFilter from "@/components/ProblemFilter.vue";
import {getProblemList} from "@/api/problem";

export default {
  name: "ProblemList",
  components : {
    ProblemFilter
  },
  data: function (){
    return {
      tableData: null,
      originData: null,
      showData : null,
      pageSize : 10,
      curPage : 1
    }
  },
  methods:{
    // 分页核心算法
    updatePage : function (targetPage){
      this.showData = []

      for(let i=(targetPage-1)*this.pageSize;i<this.tableData.length;i++){
        this.showData.push(this.tableData[i]);
        if(this.showData.length===this.pageSize) break;
      }
    },
    // 筛选算法类型
    doTagFilter : function (tags){
      // 无筛选
      if(tags.size === 0){
        this.resetTableData()
      }else{
        this.tableData = []

        // 包含problemTypes的problems都放入tableData
        for(let i=0;i<this.originData.length;i++){
          let curTags = this.originData[i].tags
          let intersect = curTags.filter(x => tags.has(x))
          if(intersect.length === tags.size){
            this.tableData.push(this.originData[i]);
          }
        }
      }

      this.adjustPagination()
    },
    // 筛选题目难度
    doDifficultyFilter : function (columns){
      let difficultySet = new Set(columns['difficulty'])

      // 无筛选
      if(difficultySet.size === 0){
        this.resetTableData()
      }else{
        this.tableData = []

        // 符合difficultySet内的problems都放入tableData
        for(let i=0;i<this.originData.length;i++){
          let curDifficulty = this.originData[i].difficulty
          if(difficultySet.has(curDifficulty)){
            this.tableData.push(this.originData[i]);
          }
        }
      }
      this.adjustPagination()
    },
    resetTableData(){
      this.tableData = []

      for(let i=0; i<this.originData.length; i++){
        this.tableData.push(this.originData[i]);
      }
    },
    // 更新分页数据，翻回第一页
    adjustPagination(){
      // 更新分页数据
      this.updatePage(1)

      // to page 1
      this.curPage = 1
    },
    editProblem(id){
      for(let i=0; i<this.originData.length; i++){
        if(this.originData[i].id === id){
          this.$router.push({
            path: '/problem/form',
            query:{
              type : 'update',
              problemData : this.originData[i]
            }
          })
          break;
        }
      }
    },
    deleteProblem(id){
      console.log(id)
    },
    toProblemPage(id){
      for(let i=0; i<this.originData.length; i++){
        if(this.originData[i].id === id){
          this.$router.push({
            path: '/problem/page',
            query:{
              problemData : this.originData[i]
            }
          })
          break;
        }
      }
    }
  },
  beforeMount() {
    getProblemList().then((res) => {
      this.originData = res.data

      // init table data
      this.resetTableData()

      // init page 1
      this.updatePage(1)
    })
  },
}
</script>

<style scoped>
.el-tag{
  margin: 10px;
}

.el-pagination{
  margin: 10px;
}
</style>