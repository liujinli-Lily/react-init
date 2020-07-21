import { fetch } from '../services/fetch';


// 测试1
// export function uploadProto({ file, config }) {
//     return fetch.post(`/api/request`,{ params: { creator, pagenum, pagesize, keyword }})
// }


export const uploadfile = (formData, config) =>
    fetch.post(`/proxy/upload`,formData, config);


/**
 * addr	是	127.0.0.1	grpc服务地址
 port	是	8888	grpc端口号
 method	是	Streaming	grpc服务函数名称
 * @param body
 */
export const submitjson = ({ addr, method, body}) =>
    fetch.post(`/proxy/call?addr=${addr}&method=${method}`, JSON.stringify(body));
