import request from "../utils/request";

interface reponseType {
    data: any,
    status: number
}

export function getBlogList():Promise<reponseType> {
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