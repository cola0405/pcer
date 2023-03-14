<template>
  <div>
    <el-page-header @back="headerGoBack" content="标签管理"></el-page-header>
    <div class="tags">
      <template v-for="(tag, i) in tagList">
          <el-input
              class="input-new-tag"
              :key="i"
              :ref="'input'+i"
              v-if="editTag[i]"
              v-model="tagList[i].name"
              @blur="exitTagEdit(i)"
              size="small"></el-input>

          <el-tag
              :key="tag.name"
              v-else
              closable
              :disable-transitions="true"
              @click="editTagContent(i)"
              @close="deleteTag(tag)">
            {{tag.name}}
          </el-tag>
      </template>

      <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="newTagConfirm"
          @blur="newTagConfirm"></el-input>
      <el-button v-else class="button-new-tag" size="small" @click="newTag">+ New Tag</el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: "TagManageDialog",
  data() {
    return {
      inputVisible: false,
      inputValue: '',
      editTag: [],
      saveTagEdit: "saveTagEdit"
    };
  },
  props : {
    tagList:{
      type: Array,
      required:true
    }
  },
  methods:{
    headerGoBack(){
      this.$router.back()
    },
    deleteTag(tag) {
      this.tagList.splice(this.tagList.indexOf(tag.name), 1);
    },
    editTagContent(i) {
      this.editTag[i] = true;
      // 强制刷新
      this.$forceUpdate()
      //
      this.$nextTick(() => {
        this.$refs['input'+i][0].$refs.input.focus()
      });
    },
    newTag() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    newTagConfirm() {
      let inputValue = this.inputValue;
      let item = {"id": 0, "name":inputValue}
      if (inputValue) {
        this.tagList.push(item);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    exitTagEdit(i){
      this.editTag[i] = false
      // 强制刷新
      this.$forceUpdate()
    }
  },
  created() {
    this.editTag = new Array(this.tagList.length).fill(false)
  },
}
</script>

<style scoped>
.el-page-header{
  margin-bottom: 30px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
}
.input-new-tag {
  width: 90px;
  height: 35px;
}

tags{
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}

.el-tag{
  margin: 10px;
}
.el-input{
  margin: 10px;
}
</style>