<template>
  <div>
    <div v-for="(item,index) in formartData"  :key="index" >
      <div class="title">{{ item[0] }}</div>
    </div>
    <json-editor ref="JsonEditor" :schema="schema" />
<!--    &lt;!&ndash; 编辑 start &ndash;&gt;-->
<!--    <div v-for="(item,index) in formartData"  :key="index" >-->
<!--      <div class="title">{{ item[0] }}</div>-->
<!--      <el-table-->
<!--        :data="item[1]"-->
<!--        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"-->
<!--        :default-expand-all="true"-->
<!--        row-key="id"-->
<!--        border-->
<!--      >-->
<!--        <el-table-column prop="key" label="名称"> </el-table-column>-->
<!--        <el-table-column prop="type" label="类型"> </el-table-column>-->
<!--        <el-table-column prop="defaultValue" label="默认值">-->
<!--          <template v-slot="{ $index, row }">-->
<!--            <el-input v-model="row['defaultValue']" size="small" />-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--        <el-table-column prop="desc" label="说明"> </el-table-column>-->
<!--      </el-table>-->
<!--      &lt;!&ndash; 编辑 end &ndash;&gt;-->
<!--    </div>-->

    <el-button style="margin-top: 12px;" @click="pre">重新上传</el-button>
    <el-button style="margin-top: 12px;" @click="next">提交</el-button>
  </div>
</template>

<script>
import JsonEditor from 'vue-json-ui-editor';
import { json, soure, schema } from "./data";
// const SCHEMA = {
//   type: 'object',
//   title: 'vue-json-editor demo',
//   properties: {
//     name: {
//       type: 'string',
//     },
//     email: {
//       type: 'string',
//     },
//   },
// };
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
    next() {
      this.$emit("edit-success");
    },
    pre() {
      this.$emit("pre-upload");
    },
    isObject(key) {
      return key === 'object' || key === 'array';
    },
    /**
     * 将json格式转换成table格式
     */
    jsonToTable(data, isArray = false) {
      const body = [];
      const key = Object.keys(data);
      for (let i = 0; i < key.length; i++) {
        let obj = {};
        if (typeof (data[key[i]]) === 'object') {
          obj = {
            key: !isArray ? key[i] : '',
            type: data[key[i]].constructor === Object ? 'object' : 'array',
            defaultValue: '',
            id: Math.round(Math.random() * 10000),
            children: [],
            parentType: isArray ? 'array' : '',
          };
          body.push(obj);
          const isArr = data[key[i]].constructor === 'array';
          this.jsonToTable(data[key[i]], isArr);
        } else {
          obj = {
            key: !isArray ? key[i] : '',
            defaultValue: data[key[i]],
            type: typeof (data[key[i]]),
            id: Math.round(Math.random() * 10000),
            parentType: isArray ? 'array' : '',
          };
          body.push(obj);
        }
      }
      console.log(body,'3333')
      return body;
    },
    //
    async jsonDataToTreeData(list) {
      let index = -1;
      for (const item of list) {
        // 修改默认值 为数组
        if (!Array.isArray(item.defaultValue)) {
          item.defaultValue = [item.defaultValue];
        }
        if (this.isObject(item.type)) {
          await this.jsonDataToTreeData(item.children);
        }
        index++;
        // if (RequestParamsEditorUtils.isObject(item.type)) {
        //     await RequestParamsEditorUtils.jsonDataToTreeData(item.children, value[item.key]);
        //     continue;
        // }
        // // gp. 全局参数操作符
        // // com. 组件操作符
        // // op. 手动配置操作符
        // const valueItem = String(item.key === '' ? value[index] : value[item.key]);
        // item['paramsSetting'] = await RequestParamsEditorUtils.getParamsStringToObject(valueItem);
        // if (valueItem.startsWith('op.')) {
        //     const { day, formatType, mini, max } = item['paramsSetting'];
        //     const values = valueItem.replace('op.', '').split(';');
        //     const type = values[0];
        //
        //     // 设置默认值
        //     if (type === ParamsType.RANDOM_INT) {
        //         item['defaultValue'] = [`${type};Min(${mini});Max(${max})`];
        //     } else if (type === ParamsType.TIMESTAMP) {
        //         item['defaultValue'] = [`${type}`];
        //     } else if (type === ParamsType.FORMAT_TIME) {
        //         item['defaultValue'] = [`${type};Diff(${day});Format(${formatType})`];
        //     } else {
        //         item['defaultValue'] = [type];
        //     }
        // } else if (valueItem.startsWith('gp.')) {
        //     const { id } = item['paramsSetting'];
        //     // 获取全局参数的名称
        //     const { data } = await getGlobalParamsDetail(Number(id));
        //     item['defaultValue'] = ['${' + data.param_name + '}'];
        // } else if (valueItem.startsWith('com.')) {
        //     const { selectSetup } = item['paramsSetting'];
        //     item['defaultValue'] = [selectSetup];
        // } else {
        //     item['defaultValue'] =
        //         (typeof value[item.key] !== 'undefined' && value[item.key] !== '')
        //             ? [value[item.key]] : [];
        // }
      }
      return list;
    },
    // 将表格的数据 转换为JSON格式的数据
    toPreviewJsonData(data, isArray = false) {
      const json = isArray ? [] : {};
      for (const item of data) {
        if (this.isObject(item.type)) {
          const itemData = this.toPreviewJsonData(
            item.children,
            item.type === "array"
          );
          if (isArray) {
            json.push(itemData);
          } else {
            json[item.key] = itemData;
          }
          continue;
        }
        let value = null;
        if (this.paramsSetAllConfig[item.id]) {
          value = String(item.defaultValue);
        } else {
          if (item.type === NUMBER && item.defaultValue) {
            value = Number(item.defaultValue);
          } else if (item.type === BOOLEAN) {
            value = String(item.defaultValue) === "true";
          } else {
            value = String(item.defaultValue);
          }
        }
        if (!isArray) {
          json[item.key] = value;
        } else {
          json.push(value);
        }
      }
      return json;
    }
  }
};
</script>

<style scoped lang="scss">
  .title{
    text-align: left;
    padding: 10px 0;
  }
</style>
