<template>
  <div>
    <el-upload
      ref="upload"
      class="upload-demo"
      drag
      multiple
      accept=".proto"
      :action="uploadUrl"
      :limit="3"
      :before-upload="onBeforeUpload"
      :on-success="onSuccessUpload"
      :on-error="onErrorUpload"
      :http-request="customUpload"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传.proto文件
      </div>
    </el-upload>
    <el-button style="margin-top: 12px;" @click="submitUpload">提交</el-button>
  </div>
</template>

<script>
import { uploadfile } from "@/api";
export default {
  name: "upload",
  data() {
    return {
      fileList: [],
      fileData: new FormData(),
      uploadUrl: "",
      uploadRate: 0,
      uploadStyle: {
        width: 0
      },
      nextStepV: false,
      uploadHeaders: { "content-type": "multipart/form-data" } // 请求头
    };
  },
  methods: {
    next() {
      this.$emit("upload-success");
    },
    onBeforeUpload(file) {
      const size = file.size / 1024 < 1024 * 3;
      if (!size) {
        this.$message.error("文件不能超过3m!");
        return;
      }
      const index = file.name.lastIndexOf(".");
      const ext = file.name.substr(index + 1);
      if (ext != "proto") {
        this.$message.error("请上传正确格式的文件!");
        return false;
      }
      return size;
    },
    onSuccessUpload(response, file, fileList) {
      this.fileList = [];
      this.fileList.push(file);
    },
    onErrorUpload() {
      this.$message.error("上传失败!");
    },
    customUpload({ file }) {
      const index = file.name.lastIndexOf(".");
      const ext = file.name.substr(index + 1);
      if (ext != "proto") {
        this.$message.error("请上传正确格式的文件!");
        return false;
      }
      this.fileData.append("file", file);
      return false;
    },
    async submitUpload() {
      this.$refs.upload.submit();
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const _this = this;
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: function(e) {
          /*console.log("进度：");
                        console.log(e);*/
          //属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
          //如果lengthComputable为false，就获取不到e.total和e.loaded
          if (e.lengthComputable) {
            const rate = (_this.uploadRate = e.loaded / e.total); //已上传的比例
            if (rate < 1) {
              //这里的进度只能表明文件已经上传到后台，但是后台有没有处理完还不知道
              //因此不能直接显示为100%，不然用户会误以为已经上传完毕，关掉浏览器的话就可能导致上传失败
              //等响应回来时，再将进度设为100%
              _this.uploadRate = rate;
              _this.uploadStyle.width = (rate * 100).toFixed(2);
            }
          }
        }
      };
      const formData = this.fileData;
      const res = await uploadfile(formData, config);
      if (res.ret === 0) {
        const data = res.data;

        this.fileData = new FormData();
      }
    },

  }
};
</script>

<style scoped></style>
