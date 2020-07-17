<template>
  <div>
    <div v-for="(item,index) in formartData"  :key="index" >
      <div class="title">{{ item[0] }}</div>
<!--      <json-editor ref="JsonEditor" :schema="item[1]" >-->
<!--        <div></div>-->
<!--      </json-editor>-->
    </div>
    <json-editor ref="JsonEditor" :schema="schema" >
      <button @click="submit">submit</button>
      <button @click="reset">Reset</button>
    </json-editor>

    <el-button style="margin-top: 12px;" @click="pre">重新上传</el-button>
    <el-button style="margin-top: 12px;" @click="next">提交</el-button>
  </div>
</template>

<script>
import JsonEditor from 'vue-json-ui-editor';
import { json, soure, schema } from "./data";
// import { Option } from 'element-ui';
// JsonEditor.setComponent('form', 'el-form', ({ vm }) => {
//   // vm is the JsonEditor VM
//
//   const labelWidth = '120px';
//   const model = vm.data;
//   const rules = {};
//
//   function parseField(fields) {
//     Object.keys(fields).forEach(key => {
//       if (key.indexOf('$') === 0 && key !== '$sub') return;
//       const field = fields[key];
//       if (field.$sub) {
//         return parseField(field);
//       }
//       if (!field.name) return;
//       rules[field.name] = [];
//       // http://element.eleme.io/#/en-US/component/form#validation
//       const type = field.schemaType === 'array' && field.type === 'radio' ? 'string' : field.schemaType;
//       const required = field.required;
//       const message = field.title;
//       const trigger = ['radio', 'checkbox', 'select'].includes(field.type) ? 'change' : 'blur';
//       rules[field.name].push({ type, required, message, trigger });
//
//       if (field.minlength !== undefined || field.maxlength !== undefined) {
//         const max = field.maxlength || 255;
//         const min = field.minlength || 0;
//         const msg = `Length must between ${ min } and ${ max }`;
//         rules[field.name].push({ min, max, message: msg, trigger });
//       }
//     });
//   }
//
//   parseField(vm.fields);
//
//   // returning the form props
//   return { labelWidth, rules, model };
// });
// JsonEditor.setComponent('label', 'el-form-item');
// // JsonEditor.setComponent('label', 'el-form-item', ({ field }) => ({
// //   prop: field.name,
// // }));
// JsonEditor.setComponent('email', 'el-input');
// JsonEditor.setComponent('url', 'el-input');
// JsonEditor.setComponent('number', 'el-input-number');
// JsonEditor.setComponent('text', 'el-input');
// JsonEditor.setComponent('textarea', 'el-input');
// JsonEditor.setComponent('checkbox', 'el-checkbox');
// JsonEditor.setComponent('checkboxgroup', 'el-checkbox-group');
// JsonEditor.setComponent('radio', 'el-radio');
// JsonEditor.setComponent('select', 'el-select');
// JsonEditor.setComponent('switch', 'el-switch');
// JsonEditor.setComponent('color', 'el-color-picker');
// JsonEditor.setComponent('rate', 'el-rate');
//
// // You can also use the component object
// JsonEditor.setComponent('option', Option);
//
// // By default `<h1/>` is used to render the form title.
// // To override this, use the `title` type:
// JsonEditor.setComponent('title', 'h2');
//
// // By default `<p/>` is used to render the form title.
// // To override this, use the `description` type:
// JsonEditor.setComponent('description', 'small');
//
// // By default `<div/>` is used to render the message error.
// // To override this, use the `error` type:
// JsonEditor.setComponent('error', 'el-alert', ({ vm }) => ({
//   type: 'error',
//   title: vm.error,
// }));
export default {
  name: "edit-json",
  components: { JsonEditor },
  data() {
    return {
      bodyData: json,
      soureData: soure,
      formartData: [],
      schema: schema
    };
  },
  computed: {
    jsonString() {
      return JSON.stringify(this.model, null, 2).trim();
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const arr = [];
      const soureData = this.soureData;
      for (const i in soureData) {
        const item = soureData[i];
        const result = [];
        for (const j in item){
          // const treeData = await this.jsonDataToTreeData(JSON.parse(item[j]))
          arr.push([j, JSON.parse(item[j]) ]);
        }
        // arr.push(result);
      }
      this.formartData = arr;
      console.log(arr,'2222')
    },
    submit(_e) {
      this.$refs.JsonEditor.form().validate(valid => {
        if (valid) {
          // this.model contains the valid data according your JSON Schema.
          // You can submit your model to the server here

          // eslint-disable-next-line no-console
          console.log('model', JSON.stringify(this.model));
          this.$refs.JsonEditor.clearErrorMessage();
        } else {
          this.$refs.JsonEditor.setErrorMessage('Please fill out the required fields');
          return false;
        }
      });
    },
    reset() {
      this.$refs.JsonEditor.reset();
    },


    next() {
      this.$emit("edit-success");
    },
    pre() {
      this.$emit("pre-upload");
    },
    isObject(key) {
      return key === 'object' || key === 'array';
    },
  }
};
</script>

<style lang="scss">
  .title{
    text-align: left;
    padding: 10px 0;
  }
  .form {
    text-align: left;
    width: 90%;
    margin: auto;
  }

  h2 {
    font-size: 1.7em;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0.2em;
  }

  h2 + small {
    display: block;
    text-align: center;
    margin-bottom: 1.2em;
  }

  small {
    line-height: 20px;
    display: block;
  }

  .el-alert {
    margin-bottom: 15px;
  }

  .el-form .sub {
    margin-left: 10%;
  }

  .json {
    text-align: left;
  }
</style>
