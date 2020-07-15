import axios from 'axios';
/**
 * 主要params参数
 * @params method {string} 方法名
 * @params url {string} 请求地址  例如：/login 配合baseURL组成完整请求地址
 * @params baseURL {string} 请求地址统一前缀 ***需要提前指定***  例如：http://baidu.com
 * @params timeout {number} 请求超时时间 默认 30000
 * @params params {object}  get方式传参key值
 * @params headers {string} 指定请求头信息
 * @params withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @params validateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 * 其他更多拓展参看axios文档后 自行拓展
 * 注意：params中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在params中带入
 */

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const fetch = axios.create({
    // baseURL: 'http://front.wetest.qq.com/',
    timeout: 150000,
    cancelToken: source.token,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: false,
});

// 添加请求拦截器
fetch.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    if (config.method === 'post' || config.method === 'put') {
        // x-www-form-urlencoded
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});

// 添加一个响应拦截器
fetch.interceptors.response.use(response => {
    return response.data     // 其他的不要了，只拿data就好
}, error => {
    console.log(error.response)
    if (error.response.status === 401) {
        window.location.pathname = '/login'
    }
    // ......在做别的统一处理
    return Promise.reject(error);
});

export {
    fetch,
};























// export default class Fetch {
//     axios(method, url, params){
//         return new Promise((resolve, reject) => {
//             if(typeof params !== 'object') params = {};
//             let _option = params;
//             _option = {
//                 method,
//                 url,
//                 baseURL: envconfig.baseURL,
//                 timeout: 30000,
//                 params: null,
//                 data: null,
//                 headers: null,
//                 withCredentials: true, //是否携带cookies发起请求
//                 validateStatus:(status)=>{
//                     return status >= 200 && status < 300;
//                 },
//                 ...params,
//             }
//             axios.request(_option).then(res => {
//                 resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
//             },error => {
//                 if(error.response){
//                     reject(error.response.data)
//                 }else{
//                     reject(error)
//                 }
//             })
//         })
//     }
// }
