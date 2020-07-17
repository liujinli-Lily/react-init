export const json = [
  {
    id: 1,
    key: "root",
    type: "object",
    defaultValue: "defaultValue",
    desc: "",
    children: [
      {
        id: 1594001745633,
        key: "user",
        type: "string",
        defaultValue: "123456",
        desc: ""
      },
      {
        id: 1594001761009,
        key: "password",
        type: "string",
        defaultValue: "1111111",
        desc: ""
      }
    ]
  }
];
export const jsons = {
  type: "object",
  properties: {
    Book: {
      type: "array",
      items: {
        type: "object",
        properties: {
          Title: {
            type: "string"
          },
          Price: {
            type: "number"
          },
          ISBN: {
            type: "string"
          },
          Genre: {
            type: "string"
          },
          Author: {
            type: "array",
            items: {
              type: "object",
              properties: {
                FirstName: {
                  type: "string"
                },
                Surname: {
                  type: "string"
                }
              },
              additionalProperties: false,
              required: ["FirstName", "Surname"]
            },
            additionalItems: false
          }
        },
        additionalProperties: false,
        required: ["Title", "Price", "ISBN", "Genre", "Author"]
      },
      additionalItems: false
    }
  },
  additionalProperties: false,
  required: ["Book"]
};

export const jsonData = [
  {
    env_id: 49,
    env_name: "2222222222222222222222-\u526f\u672c-\u526f\u672c-\u526f\u672c",
    host: "123",
    info: "",
    create_user: "gonghao.feng@broadfun.cn",
    modify_user: "gonghao.feng@broadfun.cn",
    modify_time: "2020-07-09 11:46:26",
    create_time: "2020-07-09 11:46:26"
  },
  {
    env_id: 48,
    env_name: "22222222222222222",
    host: "123",
    info: "",
    create_user: "yibo.shen@broadfun.cn",
    modify_user: "gonghao.feng@broadfun.cn",
    modify_time: "2020-07-09 11:45:34",
    create_time: "2020-07-09 11:43:05"
  },
  {
    env_id: 47,
    env_name: "2222222222222222222222-\u526f\u672c-\u526f\u672c",
    host: "123",
    info: "",
    create_user: "gonghao.feng@broadfun.cn",
    modify_user: "yibo.shen@broadfun.cn",
    modify_time: "2020-07-09 11:42:36",
    create_time: "2020-07-09 11:34:43"
  }
];

// export const soure = {
//     "0": {
//         "LoginStatus": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"enum\":[\"success\",0,\"failed\",1,\"error\",3],\"oneOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]}"
//     },
//     "1": {
//         "HelloRequest": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"properties\":{\"name\":{\"type\":\"string\"}},\"additionalProperties\":true,\"type\":\"object\"}"
//     },
//     "2": {
//         "HelloReply": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"properties\":{\"message\":{\"type\":\"string\"}},\"additionalProperties\":true,\"type\":\"object\"}"
//     },
//     "3": {
//         "UserLoginRequest": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"properties\":{\"user_name\":{\"type\":\"string\",\"description\":\"\u7528\u6237\u540d\"},\"user_pwd\":{\"type\":\"string\",\"description\":\"\u7528\u6237\u5bc6\u7801\"}},\"additionalProperties\":true,\"type\":\"object\",\"description\":\"\u7528\u6237\u767b\u5f55\u8bf7\u6c42\"}"
//     },
//     "4": {
//         "UserLoginResponse": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"properties\":{\"user_id\":{\"oneOf\":[{\"type\":\"integer\"},{\"type\":\"string\"}],\"description\":\"\u7528\u6237\u7f16\u53f7 int64\"},\"user_name\":{\"type\":\"string\",\"description\":\"\u7528\u6237\u540d\"},\"user_nickname\":{\"type\":\"string\",\"description\":\"\u7528\u6237\u6635\u79f0\"},\"user_country\":{\"type\":\"string\",\"description\":\"\u7528\u6237\u56fd\u7c4d\"},\"user_gender\":{\"type\":\"integer\",\"description\":\"\u7528\u6237\u6027\u522b int32\"},\"user_credits\":{\"type\":\"number\",\"description\":\"\u7528\u6237\u79ef\u5206 double\"},\"is_admin\":{\"type\":\"boolean\",\"description\":\"\u662f\u5426\u662f\u7ba1\u7406\u5458 bool\"},\"auth_code\":{\"type\":\"string\",\"description\":\"\u6388\u6743\u7801 bytes\"},\"user_balance\":{\"type\":\"number\",\"description\":\"\u7528\u6237\u4f59\u989d float\"},\"user_hobby\":{\"enum\":[\"music\",0,\"basketball\",1,\"tour\",2],\"oneOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}],\"description\":\"\u7528\u6237\u7231\u597d  enum\"},\"lucky_numbers\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\",\"description\":\"\u5e78\u8fd0\u6570\u5b57  repeated\"},\"user_email\":{\"additionalProperties\":{\"type\":\"string\"},\"type\":\"object\",\"description\":\"\u7528\u6237email   map\"},\"user_weight\":{\"additionalProperties\":{\"type\":\"integer\"},\"type\":\"object\",\"description\":\"\u7528\u6237\u4f53\u91cd     map\"},\"user_num\":{\"additionalProperties\":{\"$ref\":\"services.UserLoginResponse.PhoneNumber\",\"additionalProperties\":true,\"type\":\"object\"},\"type\":\"object\",\"description\":\"\u6d4b\u8bd5map\"},\"login_status\":{\"oneOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}],\"description\":\"\u767b\u5f55\u72b6\u6001\"},\"phones\":{\"items\":{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"$ref\":\"services.UserLoginResponse.PhoneNumber\"},\"type\":\"array\",\"description\":\"\u624b\u673a\u53f7\u7801\"},\"last_update_date\":{\"properties\":{\"seconds\":{\"oneOf\":[{\"type\":\"integer\"},{\"type\":\"string\"}],\"description\":\"Represents seconds of UTC time since Unix epoch\\n 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to\\n 9999-12-31T23:59:59Z inclusive.\"},\"nanos\":{\"type\":\"integer\",\"description\":\"Non-negative fractions of a second at nanosecond resolution. Negative\\n second values with fractions must still have non-negative nanos values\\n that count forward in time. Must be from 0 to 999,999,999\\n inclusive.\"}},\"additionalProperties\":true,\"type\":\"object\",\"description\":\"\u6700\u540e\u66f4\u65b0\u65e5\u671f\"}},\"additionalProperties\":true,\"type\":\"object\",\"description\":\"\u7528\u6237\u767b\u5f55\u54cd\u5e94\",\"definitions\":{\"services.UserLoginResponse.PhoneNumber\":{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"properties\":{\"number\":{\"type\":\"string\",\"description\":\"\u624b\u673a\u53f7\u7801\"},\"type\":{\"oneOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}],\"description\":\"\u624b\u673a\u53f7\u7801\u7c7b\u578b\"}},\"additionalProperties\":true,\"type\":\"object\",\"description\":\"\u624b\u673a\u53f7\u7801\u7c7b\u578b\",\"id\":\"services.UserLoginResponse.PhoneNumber\"}}}"
//     }
// }

export const soure = {
  // "0": {
  //     "LoginStatus": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"enum\":[\"success\",0,\"failed\",1,\"error\",3],\"oneOf\":[{\"type\":\"string\"},{\"type\":\"integer\"}]}"
  // },
  // "1": {
  //     "HelloRequest": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"properties\":{\"name\":{\"type\":\"string\"}},\"additionalProperties\":true,\"type\":\"object\"}"
  // },
  // "2": {
  //     "HelloReply": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"properties\":{\"message\":{\"type\":\"string\"}},\"additionalProperties\":true,\"type\":\"object\"}"
  // },
  // "3": {
  //     "UserLoginRequest": "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"properties\":{\"user_name\":{\"type\":\"string\",\"description\":\"\u7528\u6237\u540d\"},\"user_pwd\":{\"type\":\"string\",\"description\":\"\u7528\u6237\u5bc6\u7801\"}},\"additionalProperties\":true,\"type\":\"object\",\"description\":\"\u7528\u6237\u767b\u5f55\u8bf7\u6c42\"}"
  // },
  "4": {
    UserLoginResponse:
      '{"$schema":"http://json-schema.org/draft-04/schema#","properties":{"user_id":{"oneOf":[{"type":"integer"},{"type":"string"}],"description":"\u7528\u6237\u7f16\u53f7 int64"},"user_name":{"type":"string","description":"\u7528\u6237\u540d"},"user_nickname":{"type":"string","description":"\u7528\u6237\u6635\u79f0"},"user_country":{"type":"string","description":"\u7528\u6237\u56fd\u7c4d"},"user_gender":{"type":"integer","description":"\u7528\u6237\u6027\u522b int32"},"user_credits":{"type":"number","description":"\u7528\u6237\u79ef\u5206 double"},"is_admin":{"type":"boolean","description":"\u662f\u5426\u662f\u7ba1\u7406\u5458 bool"},"auth_code":{"type":"string","description":"\u6388\u6743\u7801 bytes"},"user_balance":{"type":"number","description":"\u7528\u6237\u4f59\u989d float"},"user_hobby":{"enum":["music",0,"basketball",1,"tour",2],"oneOf":[{"type":"string"},{"type":"integer"}],"description":"\u7528\u6237\u7231\u597d  enum"},"lucky_numbers":{"items":{"type":"integer"},"type":"array","description":"\u5e78\u8fd0\u6570\u5b57  repeated"},"user_email":{"additionalProperties":{"type":"string"},"type":"object","description":"\u7528\u6237email   map"},"user_weight":{"additionalProperties":{"type":"integer"},"type":"object","description":"\u7528\u6237\u4f53\u91cd     map"},"user_num":{"additionalProperties":{"$ref":"services.UserLoginResponse.PhoneNumber","additionalProperties":true,"type":"object"},"type":"object","description":"\u6d4b\u8bd5map"},"login_status":{"oneOf":[{"type":"string"},{"type":"integer"}],"description":"\u767b\u5f55\u72b6\u6001"},"phones":{"items":{"$schema":"http://json-schema.org/draft-04/schema#","$ref":"services.UserLoginResponse.PhoneNumber"},"type":"array","description":"\u624b\u673a\u53f7\u7801"},"last_update_date":{"properties":{"seconds":{"oneOf":[{"type":"integer"},{"type":"string"}],"description":"Represents seconds of UTC time since Unix epoch\\n 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to\\n 9999-12-31T23:59:59Z inclusive."},"nanos":{"type":"integer","description":"Non-negative fractions of a second at nanosecond resolution. Negative\\n second values with fractions must still have non-negative nanos values\\n that count forward in time. Must be from 0 to 999,999,999\\n inclusive."}},"additionalProperties":true,"type":"object","description":"\u6700\u540e\u66f4\u65b0\u65e5\u671f"}},"additionalProperties":true,"type":"object","description":"\u7528\u6237\u767b\u5f55\u54cd\u5e94","definitions":{"services.UserLoginResponse.PhoneNumber":{"$schema":"http://json-schema.org/draft-04/schema#","properties":{"number":{"type":"string","description":"\u624b\u673a\u53f7\u7801"},"type":{"oneOf":[{"type":"string"},{"type":"integer"}],"description":"\u624b\u673a\u53f7\u7801\u7c7b\u578b"}},"additionalProperties":true,"type":"object","description":"\u624b\u673a\u53f7\u7801\u7c7b\u578b","id":"services.UserLoginResponse.PhoneNumber"}}}'
  }
};

export const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  title: "Json-Editor-Demo",
  description: "Demo for vue-json-ui-editor using element-ui ",
  properties: {
    name: {
      type: "string",
      minLength: 8,
      maxLength: 80,
      title: "String",
      attrs: {
        placeholder: "Your Full Name",
        title: "Please enter your full name"
      }
    },
    sub: {
      title: "SubTitle",
      description: "SubDescription",
      type: "object",
      properties: {
        sName: {
          minLength: 8,
          maxLength: 80,
          title: "SubName",
          attrs: {
            placeholder: "Sub Full Name",
            title: "Please enter your full name"
          }
        },
        sUrl: {
          title: "SubUrl",
          format: "uri"
        },
        sub2: {
          type: "object",
          title: "Sub2Title",
          description: "Sub2Description",
          properties: {
            sName2: {
              format: "regex",
              title: "Sub2Name",
              pattern: "*"
            },
            sAge: {
              type: "integer",
              title: "Sub2Age"
            }
          },
          required: ["sName2"]
        }
      },
      required: ["sUrl"]
    },
    lists: {
      type: "string",
      title: "List",
      // enum: ["Daily New", "Promotion"],
      enum: [
        { value: "1", label: "男" },
        { value: "2", label: "女" }
      ],
      attrs: {
        placeholder: "Select your list subscription",
        title: "Please select your list subscription"
      }
    },
    lists2: {
      type: "array",
      title: "List2",
      anyOf: [
        { value: "daily", label: "Daily New" },
        { value: "promotion", label: "Promotion" }
      ],
      attrs: {
        placeholder: "Select your list subscription",
        title: "Please select your list subscription"
      }
    },
    lists3: {
      type: "array",
      title: "List3",
      oneOf: [
        { value: "daily", label: "Daily New" },
        { value: "promotion", label: "Promotion" }
      ]
    },
    source: {
      type: "string",
      maxLength: 120,
      title: "Source",
      description: "Ex. Using the NPM Search Engine",
      attrs: {
        type: "textarea",
        placeholder: "How did you hear about us?"
      }
    },
    rate: {
      type: "number",
      title: "Rate",
      default: 2,
      attrs: {
        type: "rate",
        "allow-half": true
      }
    },
    color: {
      type: "string",
      title: "Color",
      default: "#409EFF",
      attrs: {
        type: "color"
      }
    },
    agree: {
      type: "boolean",
      title: "Agree",
      description:
        "You agree to receive occasional updates and special offers for vue-json-schema updates.",
      default: false,
      attrs: {
        type: "switch"
      }
    }
  },
  additionalProperties: false,
  required: ["name", "email", "lists"]
};
export const data2 = {
  $schema: "http://json-schema.org/draft-04/schema#",
  additionalProperties: true,
  definitions: {
    "services.UserLoginResponse.PhoneNumber": {
      $schema: "http://json-schema.org/draft-04/schema#",
      additionalProperties: true,
      description: "手机号码类型",
      title: '手机号码类型',
      id: "services.UserLoginResponse.PhoneNumber",
      properties: {
        number: {
          description: "手机号码",
          title: '手机号码',
          type: "string"
        },
        type: {
          title: '手机号码类型',
          description: "手机号码类型",
          oneOf: [
            {
              type: "string"
            },
            {
              type: "integer"
            }
          ]
        }
      },
      type: "object"
    }
  },
  description: "用户登录响应",
  properties: {
    auth_code: {
      title: '授权码 bytes',
      // description: "授权码 bytes",
      type: "string"
    },
    is_admin: {
      title: '是否是管理员 bool',
      type: "boolean",
      default: false,
      description: ""
    },
    // agree: {
    //   type: "boolean",
    //   title: "Agree",
    //   description: "You agree to receive occasional updates and special offers for vue-json-schema updates.",
    //   default: false,
    //   attrs: {
    //     type: "switch"
    //   }
    // },
    last_update_date: {
      additionalProperties: true,
      // description: "最后更新日期",
      title: '最后更新日期',
      attrs: {
        type: "date"
      },
      type: 'date',
      // properties: {
      //   nanos: {
      //     description:
      //       "Non-negative fractions of a second at nanosecond resolution. Negative↵ second values with fractions must still have non-negative nanos values↵ that count forward in time. Must be from 0 to 999,999,999↵ inclusive.",
      //     type: "integer"
      //   },
      //   seconds: {
      //     description:
      //       "Represents seconds of UTC time since Unix epoch↵ 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to↵ 9999-12-31T23:59:59Z inclusive.",
      //     oneOf: [
      //       {
      //         type: "string"
      //       },
      //       {
      //         type: "integer"
      //       }
      //     ]
      //   }
      // },
      // type: "object"
    },
    login_status: {
      title: "登录状态",
      // description: "登录状态",
      oneOf: [
        {
          type: "string"
        },
        {
          type: "integer"
        }
      ]
    },
    lucky_numbers: {
      title: "幸运数字  repeated",
      // description: "幸运数字  repeated",
      items: {
        type: "integer"
      },
      type: "array"
    },
    phones: {
      title: "手机号码",
      // description: "手机号码",
      items: {
        $schema: "http://json-schema.org/draft-04/schema#",
        $ref: "#/definitions/services.UserLoginResponse.PhoneNumber"
      },
      type: "array"
    },
    user_balance: {
      type: "number",
      title: "用户余额 float",
      description: "用户余额 float"
    },
    user_country: {
      type: "string",
      title: "用户国籍",
      description: "用户国籍"
    },
    user_credits: {
      type: "number",
      title: "用户积分 double",
      description: "用户积分 double"
    },
    user_email: {
      additionalProperties: {
        type: "string"
      },
      description: "用户email   map",
      name: "用户email   map",
      type: "object"
    },
    user_gender: {
      type: "integer",
      description: "用户性别 int32",
      title: "用户性别 int32",
    },
    lists: {
      type: "string",
      title: "List",
      enum: [
          { value: "1", label: "男" },
          { value: "2", label: "女" }
        ],
      attrs: {
        placeholder: "Select your list subscription",
        title: "Please select your list subscription"
      }
    },
    // lists3: {
    //   type: "string",
    //   title: "List",
    //   oneOf: [
    //     { value: "1", label: "男" },
    //     { value: "2", label: "女" }
    //   ],
    //   attrs: {
    //     placeholder: "Select",
    //     title: "Please select"
    //   }
    // },
    user_hobby: {
      description: "用户爱好  enum",
      title: "用户爱好",
      enum: [
        { value: 0, label: "music" },
        { value: 1, label: "basketball" },
        { value: 2, label: "tour" },
        ],
      attrs: {
        placeholder: "Select your list subscription",
        title: "Please select your list subscription"
      },
      type: 'string',
      // oneOf: [
      //   {
      //     type: "string"
      //   },
      //   {
      //     type: "integer"
      //   }
      // ]
    },
    user_id: {
      title: "用户编号 int64",
      description: "用户编号 int64",
      oneOf: [
        {
          type: "string"
        },
        {
          type: "integer"
        }
      ]
    },
    user_name: {
      type: "string",
      description: "用户名",
      title: "用户名",
    },
    user_nickname: {
      type: "string",
      description: "用户昵称",
      title: "用户昵称"
    },
    user_num: {
      additionalProperties: {
        $ref: "services.UserLoginResponse.PhoneNumber",
        additionalProperties: true,
        type: "object"
      },
      description: "测试map",
      title: "测试map",
      type: "object"
    },
    user_weight: {
      additionalProperties: {
        type: "integer"
      },
      description: "用户体重 map",
      title: "用户体重map",
      type: "object"
    }
  },
  type: "object"
};
