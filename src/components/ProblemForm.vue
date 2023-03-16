<template>
  <div>
    <el-page-header @back="goBack" content="题目信息"></el-page-header>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row type="flex" justify="start">
        <el-col :span="5">
          <el-form-item label="题目名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="7" align="left" :offset="3">
          <el-form-item label="题目难度">
            <el-select v-model="form.difficulty" placeholder="题目难度">
              <el-option label="简单" value="简单"></el-option>
              <el-option label="中等" value="中等"></el-option>
              <el-option label="困难" value="困难"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <br>

      <el-row>
        <div id="tags">
          <el-checkbox
              v-for="tag in tagList"
              :key="tag.name"
              :label="tag.name"
              v-model="form.selectedTags"
              border
              size="medium"
              @change="updateTags"></el-checkbox>
        </div>
      </el-row>

      <br>

      <el-row type="flex">
        <el-col :span="20">
          <el-form-item label="题目内容">
            <mavon-editor
                placeholder="请输入题目内容..."
                :toolbars="toolbars"
                v-model="form.content"/>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="20">
          <el-form-item>
            <el-button type="primary" @click="onCreate" v-if="$route.query.type !== 'update'">提交</el-button>
            <el-button type="primary" @click="onUpdate" v-else>提交</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>

</template>

<script>
import {newProblem} from "@/api/problem";
import {getTagList} from "@/api/tag";
export default {
  name: "ProblemForm",
  data() {
    return {
      form: {
        name: null,
        difficulty: null,
        content: null,
        selectedTags: [],
      },
      toolbars: {
        bold: false, // 粗体
        italic: false, // 斜体
        header: false, // 标题
        underline: false, // 下划线
        strikethrough: false, // 中划线
        mark: false, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: false, // 引用
        ol: false, // 有序列表
        ul: false, // 无序列表
        link: false, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: false, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: false, // 帮助
        /* 1.3.5 */
        undo: false, // 上一步
        redo: false, // 下一步
        trash: false, // 清空
        save: false, // 保存（触发events中的save事件）
        navigation: false, // 导航目录
        alignleft: false, // 左对齐
        aligncenter: false, // 居中
        alignright: false, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      tagList:[]
    }
  },
  methods: {
    onCreate() {
      newProblem(this.form)
    },
    onUpdate(){
    },
    goBack(){
      this.$router.back()
    },
    updateTags : function (value, e){
      // 更新checked tag
      let name = e.target.value
      if(value === false){
        this.tags.delete(name)
      }else{
        this.tags.add(name)
      }

      // 组件间通信
      this.$emit('tagFilter', this.tags)
    }
  },
  created() {
    if(this.$route.query.type === 'update'){
      this.form.name = this.$route.query.problemData.name
      this.form.difficulty = this.$route.query.problemData.difficulty;
      this.form.content = this.$route.query.problemData.content
      this.tagList = this.$route.query.tagList
      let tags = this.$route.query.problemData.tags

      // check tag list
      for (let i=0; i<this.tagList.length;i++){
        if (tags.find((tag) => tag.id === this.tagList[i].id)){
            this.form.selectedTags.push(this.tagList[i].name)
        }
      }
  }else{
      getTagList().then((res) =>{
        this.tagList = res.data.data.tagList
      })
    }
  }
}
</script>

<style scoped>
.mavon-editor {
  width: 100%;
  height: 100%;
}

.el-page-header{
  margin-bottom: 30px;
}

#tags{
  display: flex;
  flex-wrap: wrap;
}
</style>