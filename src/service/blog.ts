import request from "../utils/request";


export function getBlogList() {
    return request({
        url: '/article/list',
        method: 'get',
    })
}