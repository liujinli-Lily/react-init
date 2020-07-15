
/**
 * 全局配置文件
 */
let baseURL;
let imgUrl = '//baidu.com/img/';
if(process.env.NODE_ENV === 'development'){
    baseURL = '//test.com';
}else{
    baseURL = '//test.com';
}


export default {imgUrl, baseURL}
