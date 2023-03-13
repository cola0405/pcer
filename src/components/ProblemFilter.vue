<template>
  <el-row>
    <div style="margin-top: 20px">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <p id="tagFilter">题目分类</p>
          </template>
          <el-row>
            <el-col :span="16">
              <div id="tags">
                <el-checkbox
                    v-for="name in tagList"
                    :key="name"
                    :label="name"
                    border
                    size="medium"
                    @change="updateProblems"></el-checkbox>
              </div>
            </el-col>

            <el-col :span="8" >
                <el-button id="tagManage" size="medium" type="primary" plain @click="dialogFormVisible = true">标签管理</el-button>
                <el-dialog title="标签管理" :visible.sync="dialogFormVisible">
                    <TagManageDialog v-bind:tagList="tagList"></TagManageDialog>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="updateTags">确 定</el-button>
                  </div>
                </el-dialog>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-row>

</template>

<script>
import TagManageDialog from "@/components/TagManageDialog.vue";
import {getTagList, updateTags} from "@/api/tag";

export default {
  name: "ProblemFilter",
  components: {TagManageDialog},
  data : function (){
    return {
      greedy: false,
      sort:false,
      tagList: ["贪心", "排序","tt",],
      tags: new Set(),
      dialogFormVisible: false,
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
    },
    updateFilter : function (){
      // 组件间通信
      this.$emit('tagFilter', this.tags)
    },
    updateTags : function (){
      // 更新数据库
      this.dialogFormVisible = false
      updateTags(this.tagList)
    }

  },
  beforeCreate() {
    getTagList().then((res) =>{
      console.log(res.data)
    })
  }

}
</script>

<style scoped>
.el-tag{
  margin: 10px;
}

#tagFilter{
  margin-left: 20px;
  font-size: 15px;
}
#tags{
  display: flex;
  flex-wrap: wrap;
}
#tagManage{
  margin-left: 10px;
}

.el-checkbox{
  margin: 10px;
}
.el-collapse-item{
  padding: 10px;
}

</style>