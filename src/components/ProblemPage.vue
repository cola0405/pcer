<template>
  <div>
    <el-page-header @back="goBack" content="题目信息"></el-page-header>
    <mavon-editor
        :toolbars="toolbars"
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
      content : null,
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
        imagelink: false, // 图片链接
        code: false, // code
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
        subfield: false, // 单双栏模式
        preview: true // 预览
      }
    }
  },methods:{
    goBack(){
      this.$router.back()
    }
  },
  created() {
    this.content = this.$route.query.problemData.content
  }
}
</script>

<style scoped>
.el-page-header{
  margin-bottom: 30px;
}
</style>