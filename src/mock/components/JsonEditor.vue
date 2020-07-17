<template>
  <div class="_json-editor">
    <div ref="jsonEditor" :style="editorStyle" />

    <el-button style="margin-top: 12px;" @click="pre">上一步</el-button>
    <el-button style="margin-top: 12px;" @click="next">重新上传</el-button>
  </div>
</template>

<script>
import "jsoneditor/dist/jsoneditor.min.css";
import {jsonData} from './data'
export default {
  props: {
    // jsonData: {
    //   type: Object,
    //   default: () => {}
    // },
    mode: {
      // 有效值 'view', 'form', 'code', 'text', 'preview'
      type: String,
      default: "code"
    },
    isEdit: {
      type: Boolean,
      default: true
    },
    editorStyle: {
      type: Object,
      default: () => ({ width: "100%", height: "300px" })
    }
  },
  data() {
    return {
      codeEditor: null,
      jsonData: jsonData,
      // eslint-disable-next-line no-undef
      JsonEditor: require("jsoneditor")
    };
  },
  watch: {
    jsonData() {
      this.init();
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.init();
  },
  methods: {
    pre() {
      this.$emit('pre-edit');
    },
    next() {
      this.$emit('pre-upload')
    },
    async init() {
      if (this.JsonEditor === null) {
        return;
      }
      const container = this.$refs.jsonEditor;
      const _this = this;
      const options = {
        mode: this.mode,
        onEditable() {
          return true; // json不可编辑
          // return _this.isEdit;
        }
      };
      this.codeEditor = this.codeEditor
        ? this.codeEditor
        : new this.JsonEditor(container, options);
      this.codeEditor.set(this.jsonData);
    },
    getEditorValue() {
      return this.codeEditor ? this.codeEditor.get() : null;
    }
  }
};
</script>
<style>
._json-editor {
  margin-top: 45px;
}
._json-editor .jsoneditor-mode-code,
.jsoneditor {
  border: none;
}
._json-editor .jsoneditor-statusbar {
  display: none;
}
._json-editor .jsoneditor-menu {
  display: none;
}
._json-editor div.jsoneditor-outer.has-main-menu-bar {
  padding-top: 0;
}
</style>
