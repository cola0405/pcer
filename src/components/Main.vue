<template>
  <el-container>
    <el-aside width="180px">
      <el-menu>
        <el-menu-item index="1" v-on:click="toProblemList">题目列表</el-menu-item>

        <el-submenu index="2">
          <span slot="title">题目管理</span>
          <el-menu-item-group>
            <el-menu-item index="2-1" v-on:click="toNewProblem">新增题目</el-menu-item>
            <el-menu-item index="2-2" v-on:click="toTagManage">标签管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <span slot="title">标签管理</span>
          <el-menu-item-group>
            <el-menu-item index="3-1" v-on:click="toNewProblem">新增标签</el-menu-item>
            <el-menu-item index="3-2" v-on:click="toTagManage">修改标签</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Main",
  components : {
  },
  methods : {
    toProblemList : function (){
      this.$router.push('/')
    },
    toNewProblem : function (){
      this.$router.push('/problem/form')
    },
    toTagManage: function (){
      this.$router.push('/tag/manage')
    }
  }
}
</script>

<style scoped>
.el-container{
  height: 100%;
}

.el-main{
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

.el-table-column{
}

</style>