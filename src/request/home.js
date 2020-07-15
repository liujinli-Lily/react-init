import { fetch } from '../services/fetch';


// 测试1
export function login1({ creator, pagenum, pagesize, keyword }) {
    return fetch.get(`/api/request`,{ params: { creator, pagenum, pagesize, keyword }})
}
export function login2({ creator, pagenum, pagesize, keyword }) {
    return fetch.post(`/api/request`,{creator, pagenum, pagesize, keyword })
}

