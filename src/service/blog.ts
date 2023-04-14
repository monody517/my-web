import request from "../utils/request";


export function getBlogList() {
    return request({
        url: '/article/list',
        method: 'get',
    })
}

export function saveBlog(data:any){
    return request({
        url: '/article/save',
        method: 'post',
        data
    })
}